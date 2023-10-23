<template>
  <div class="main-container">
    <div class="project">
      <div class="project-title">
        <div class="project-title-left">
          <img src="@/assets/imgs/project/project-title-left.svg" alt="">
          <span>项目库</span>
        </div>
        <div class="project-title-right">
          <!-- <el-input v-model="input1" class="w-50 m-2" placeholder="输入关键词搜索" :prefix-icon="Search" />
          <div class="block">
            <span class="demonstration">创建时间：</span>
            <el-date-picker v-model="value2" range-separator="至" type="daterange" start-placeholder="开始日期"
              end-placeholder="结束日期" :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]" />
          </div>
          <el-button type="primary">
            <el-icon :size="14" style="margin-right: 6px;">
              <Search />
            </el-icon>
            搜索
          </el-button> -->
          <el-button type="primary" @click="dialogFormVisible = true">
            <el-icon :size="16" style="margin-right: 6px;">
              <Plus />
            </el-icon>
            创建项目
          </el-button>
          <CreateOrEditProjects @close="closeCreateOrEditProjectsDialog" :dialogFormVisible="dialogFormVisible">
          </CreateOrEditProjects>
          <!-- <el-button type="primary" plain class="aaa" style="margin-left: 12px;">
            <img style="width: 17px;height: 17px;margin:0 6px 0 4px;" src="@/assets/imgs/project/CS_icon_guazai.svg"
              alt="">
            挂载硬盘
          </el-button> -->
        </div>
      </div>
      <div class="project-list">
        <template v-if="projectStore.list.length != 0">
          <div class="project-item" v-for="(item, index) in projectStore.list"
            @click="projectStore.setCurrentProject(item)">
            <div class="project-item-top">
              <div class="project-item-avatar"><img :src="item.icon" alt=""></div>
              <div class="project-item-name">
                <div class="project-name">{{ item.name }}</div>
                <div class="project-item-describe">{{ item.description }}</div>
              </div>
            </div>
            <div class="project-item-info">
              <div class="project-info-item" style="margin-top: 16px;">
                <div class="info-item-title">项目创建者：</div>
                <div class="info-item" style="color: rgba(23, 24, 26, 1);"><img src="@/assets/imgs/project/avatar.jpg"
                    alt="">王迪</div>
              </div>
              <div class="project-info-item">
                <div class="info-item-title">项目创建时间：</div>
                <div class="info-item" style="color: rgba(23, 24, 26, 1);">{{ moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</div>
              </div>
              <div class="project-info-item">
                <div class="info-item-title">项目热度：</div>
                <div class="info-item heat-info" style="color: rgba(23, 24, 26, 1);">
                  <div class="heat-bar">
                    <div :style="{ width: heat + '%' }"></div>
                  </div>
                  <img src="@/assets/imgs/project/heat.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Search, Plus } from '@element-plus/icons-vue'
import { ref, onMounted, reactive } from 'vue'
import moment from 'moment';
import { useProjectStore } from '@/store/project'
import CreateOrEditProjects from '@/components/createOrEditProjects.vue'
const projectStore = useProjectStore()


// const moment = moment;
const input1 = ref('')
const value2 = ref('')
const heat = ref(40)

const dialogFormVisible = ref(false)

const closeCreateOrEditProjectsDialog = (state) => {
  dialogFormVisible.value = state
}

</script>


<style lang="less" scoped>
.project {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 16px;

  .project-title {
    width: 100%;
    height: 32px;
    // background-color: green;
    display: flex;
    padding: 0 8px;
    justify-content: space-between;

    .project-title-left {
      display: flex;
      align-items: center;
      border-bottom: 2px solid rgba(51, 51, 51, 1);
      padding-bottom: 4px;
      align-self: center;

      img {
        width: 24px;
        height: 24px;
      }

      span {
        margin-left: 4px;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0px;
        color: rgba(48, 49, 51, 1);
        width: max-content;
      }
    }

    .project-title-right {
      align-self: center;
      display: flex;
      align-items: center;

      // height: 32px;
      .block {
        display: flex;
        align-items: center;
        margin-left: 12px;
        margin-right: 12px;

        span {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.01px;
          color: rgba(48, 49, 51, 1);
          min-width: max-content;
        }
      }

      .el-button:last-child:focus,
      .el-button:last-child:hover {
        background-color: var(--el-color-primary-light-9) !important;
        color: var(--el-color-primary) !important;
      }

      .el-button {
        font-size: 14px !important;
      }

    }

    .project-title-right::v-deep .el-dialog__header {
      margin-right: 0px;
      border-bottom: 1px solid rgba(216, 220, 235, 1);
      padding: 11px 16px;
    }

    .project-title-right::v-deep .el-textarea__inner {
      height: 88px;
    }

    .project-title-right::v-deep .el-dialog__footer {
    text-align: right;
    box-sizing: border-box;
    border-top: 1px solid rgba(216, 220, 235, 1);
    height: 48px;
    padding: 8px 16px;
    }

    .project-title-right::v-deep .el-dialog__headerbtn {
      top: 0;
    }

    .project-title-right::v-deep .el-dialog__footer .el-button {
      padding: 5px 26px;
    }

    .project-title-right::v-deep .el-icon.avatar-uploader-icon {
      width: 80px;
      height: 80px;
    }

    .project-title-right::v-deep .avatar-uploader .avatar {
      width: 80px;
      height: 80px;
    }

    .project-title-right::v-deep .el-form-item__label {
      width: 90px;
    }

    .project-title-right::v-deep .el-form-item__content {
      display: block;
    }

  }

  .project-list {
    padding: 8px 8px;
    flex: 1;
    overflow: auto;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-gap: 14px;
    margin-top: 12px;

    .project-item {
      // width: 24%;
      width: 400px;
      height: 200px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
      padding: 20px 20px 16px 20px;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0px;
      color: rgba(153, 153, 153, 1);
      transition: border .1s linear;
      cursor: pointer;

      .project-item-top {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid rgba(236, 238, 245, 1);
        display: flex;
        // align-items: center;

        .project-item-avatar {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .project-item-name {
          margin-left: 8px;
          // transition: all .2s linear;

          .project-name {
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0px;
            color: rgba(51, 51, 51, 1);
          }

          .project-item-describe {
            margin-top: 4px;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.1px;
            color: rgba(153, 153, 153, 1);
          }
        }

      }

      .project-item-info {
        .project-info-item {
          display: flex;
          align-items: center;
          margin-top: 9px;

          .info-item-title {
            min-width: 98px;
          }

          .info-item {
            display: flex;
            align-items: center;

            img {
              width: 24px;
              height: 24px;
              border-radius: 50%;
              margin-right: 8px;
            }
          }

          .heat-info {
            .heat-bar {
              width: 236px;
              height: 6px;
              opacity: 1;
              background: rgba(245, 245, 245, 1);
              margin-right: 7px;

              div {
                height: 100%;
                background: rgba(250, 200, 88, 1);
              }
            }

            img {
              width: 14px !important;
              height: 16px !important;
            }
          }
        }
      }
    }

    .project-item:hover {
      border: 2px solid rgba(64, 158, 255, 1);
      box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
    }

    .project-item:hover>.project-item-top>.project-item-name>.project-name {
      color: rgba(64, 158, 255, 1);
    }



  }

}</style>