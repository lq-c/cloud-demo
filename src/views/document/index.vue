<template>
  <div class="main-container document-box">
    <div class="document-tree">
      <documentTree></documentTree>
    </div>
    <div class="document-body">
      <div class="document-body-top">
        <div class="select">
          <span class="select-title">锁定状态:</span>
          <el-select v-model="filterOptionList.lockingState" clearable placeholder="请选择">
            <el-option v-for="item in lockingStateList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="select">
          <span class="select-title">更新者:</span>
          <el-select v-model="filterOptionList.updater" clearable placeholder="请选择">
            <el-option v-for="item in lockingStateList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="select">
          <span class="select-title">更新时间:</span>
          <el-date-picker v-model="filterOptionList.updateTime" range-separator="至" type="daterange"
            start-placeholder="开始日期" end-placeholder="结束日期"
            :default-value="[new Date(2023, 1, 1), new Date(2023, 10, 1)]" />
        </div>
        <div class="select">
          <span class="select-title">版本:</span>
          <el-select v-model="filterOptionList.version" clearable placeholder="请选择">
            <el-option v-for="item in lockingStateList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="select" style="width: 282px;">
          <el-input v-model="filterOptionList.nameOrKeyWord" class="w-50 m-2" placeholder="输入名称或说明关键词"
            :prefix-icon="Search" />
        </div>
        <el-button type="primary" :icon="Search">查询</el-button>
      </div>


      <div class="document-list">
        <div class="list-title">
          <div class="list-title-left">项目文件夹</div>
          <div class="list-title-right">
            <el-button type="primary" :icon="Search">新建文件夹</el-button>
            <el-button type="primary" :icon="Search">上传文件</el-button>
            <el-button type="success" plain :icon="Search">文件夹权限</el-button>
            <el-button type="primary" plain :icon="Search">挂载硬盘</el-button>
            <el-button type="danger" :icon="Search">删除</el-button>
          </div>
        </div>
        <div class="document">
          <el-table :data="tableData" style="width: 100%;" height="100%" border @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="40" />
            <el-table-column fixed prop="name" label="名称" width="150" />
            <el-table-column prop="explain" label="说明" width="600" />
            <el-table-column prop="version" label="版本" width="120" />
            <el-table-column prop="state" label="锁定状态" width="120" />
            <el-table-column prop="size" label="大小" width="120" />
            <el-table-column prop="updater" label="更新者" width="120" />
            <el-table-column prop="updateTime" label="更新时间" width="120" />
            <el-table-column fixed="right" label="操作" width="168">
              <template #default>
                <el-button link type="primary" @click="handleClick">查看</el-button>
                <el-button link type="primary">权限设置</el-button>
                <el-button link type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <div class="pagination">
            <span style="font-size: 14px;font-weight: 400;letter-spacing: -0.01px;color: rgba(96, 98, 102, 1);margin-right: 20px;">共100条</span>
            <el-pagination background layout="prev, pager, next" :total="100" />
          </div>


        </div>
      </div>


    </div>
  </div>
</template>


<script setup>
import documentTree from '@/components/document-tree/index.vue'
import { Search } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

const filterOptionList = ref({
  lockingState: false,
  updateTime: '',
  updater: '',
  version: '',
  nameOrKeyWord: ''
})

const folderSelection = ref([])

const lockingStateList = [
  {
    value: 'lock',
    label: '已锁定',
  },
  {
    value: 'unlock',
    label: '未锁定',
  }
]

const tableData = [
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  {
    name: '默认文件',
    explain: '这里是文件夹说明文案',
    version: 'v1',
    state: '未锁定',
    size: '90.8kb',
    updater: '金刚',
    updateTime: '2023-09-15 18:00:00',
    // tag: 'Home',
  },
  // {
  //   name: '默认文件',
  //   explain: '这里是文件夹说明文案',
  //   version: 'v1',
  //   state: '未锁定',
  //   size: '90.8kb',
  //   updater: '金刚',
  //   updateTime: '2023-09-15 18:00:00',
  //   // tag: 'Home',
  // },
  // {
  //   name: '默认文件',
  //   explain: '这里是文件夹说明文案',
  //   version: 'v1',
  //   state: '未锁定',
  //   size: '90.8kb',
  //   updater: '金刚',
  //   updateTime: '2023-09-15 18:00:00',
  //   // tag: 'Home',
  // },
  // {
  //   name: '默认文件',
  //   explain: '这里是文件夹说明文案',
  //   version: 'v1',
  //   state: '未锁定',
  //   size: '90.8kb',
  //   updater: '金刚',
  //   updateTime: '2023-09-15 18:00:00',
  //   // tag: 'Home',
  // },
  // {
  //   name: '默认文件',
  //   explain: '这里是文件夹说明文案',
  //   version: 'v1',
  //   state: '未锁定',
  //   size: '90.8kb',
  //   updater: '金刚',
  //   updateTime: '2023-09-15 18:00:00',
  //   // tag: 'Home',
  // },
  // {
  //   name: '默认文件',
  //   explain: '这里是文件夹说明文案',
  //   version: 'v1',
  //   state: '未锁定',
  //   size: '90.8kb',
  //   updater: '金刚',
  //   updateTime: '2023-09-15 18:00:00',
  //   // tag: 'Home',
  // },
  // {
  //   name: '默认文件',
  //   explain: '这里是文件夹说明文案',
  //   version: 'v1',
  //   state: '未锁定',
  //   size: '90.8kb',
  //   updater: '金刚',
  //   updateTime: '2023-09-15 18:00:00',
  //   // tag: 'Home',
  // },
  // {
  //   name: '默认文件',
  //   explain: '这里是文件夹说明文案',
  //   version: 'v1',
  //   state: '未锁定',
  //   size: '90.8kb',
  //   updater: '金刚',
  //   updateTime: '2023-09-15 18:00:00',
  //   // tag: 'Home',
  // },
]

const handleClick = () => {
  console.log('click')
}

const handleSelectionChange = (val) => {
  console.log(val);
  folderSelection.value = val
}

</script>


<style lang="less" scoped>
.document-box {
  display: flex;
  // align-items: center;

  .document-tree {
    height: 100%;
    min-width: 244px;
    background: rgba(255, 255, 255, 1);
    padding: 12px 8px;
  }

  .document-body {
    flex: 1;
    min-width: 1280px;
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    .document-body-top {
      width: 100%;
      min-height: 48px;
      background: rgba(255, 255, 255, 1);
      border: 1px solid rgba(235, 238, 245, 1);
      display: flex;
      align-items: center;
      padding: 0 12px;
      justify-content: space-between;

      .select {
        display: flex;
        align-items: center;
        margin-right: 12px;

        .select-title {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.01px;
          color: rgba(48, 49, 51, 1);
          margin-right: 6px;
          min-width: max-content;
        }
      }
    }

    .document-list {
      margin-top: 8px;
      flex: 1;
      background: rgba(255, 255, 255, 1);
      padding: 16px 12px 12px 12px;
      display: flex;
      flex-direction: column;

      .list-title {
        width: 100%;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 13px;
      }

      .document {
        flex: 1;
        border: 1px solid rgba(235, 238, 245, 1);
        position: relative;
        padding-bottom: 65px;
        height: 600px;
        overflow-y: auto;

        .pagination {
          width: 100%;
          height: 64px;
          position: absolute;
          bottom: 0;
          left: 0;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(235, 238, 245, 1);
          padding: 0 12px;
          justify-content: end;
        }
      }
    }

    .el-select {
      width: 128px;
    }
  }

  ::v-deep {
    .el-tree-node__content {
      margin-top: 10px;
    }
  }

}
</style>