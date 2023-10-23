<template class="project">
  <el-dialog v-model="dialogVisible" :title="title()" @close="close" align-center width="620px" :destroy-on-close="destroyOnClose">
    <el-form :model="form" ref="ruleFormRef" :rules="rules">
      <el-form-item label="项目名称:" :prop="operate != 'view' ? 'name' : ''">
        <el-input v-if="operate != 'view'" v-model="form.name" autocomplete="off" placeholder="请输入项目名称" maxlength="30" :show-word-limit="showWordLimit" />
        <span v-else>{{ form.name }}</span>
      </el-form-item>
      <el-form-item label="项目图标:" :prop="operate != 'view' ? 'projectIcon' : ''">
        <div class="select-icon" style="cursor: pointer;" v-if="!form.projectIcon" @click="selectIcon">
          <svg v-if="!uploadIconError" class="default" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80" viewBox="0 0 80 80" fill="none"><g opacity="1"  transform="translate(0 0)  rotate(0)"><path id="input-完整/default/default/无/off/off/off/off/off (style)" fill-rule="evenodd" style="fill:#FAFAFA" opacity="1" d="M4 80L76 80C78.21 80 80 78.21 80 76L80 4C80 1.79 78.21 0 76 0L4 0C1.79 0 0 1.79 0 4L0 76C0 78.21 1.79 80 4 80Z"></path><path  id="input-完整/default/default/无/off/off/off/off/off (style)" style="fill:#DCDFE6; opacity:1;" d="M10,79h3v2h-3zM16,79h3v2h-3zM22,79h3v2h-3zM28,79h3v2h-3zM34,79h3v2h-3zM40,79h3v2h-3zM46,79h3v2h-3zM52,79h3v2h-3zM58,79h3v2h-3zM64,79h3v2h-3zM70,79h3v2h-3zM76,79M76,79c0.81093,0 1.5071,-0.28193 2.0885,-0.8458l1.3923,1.4358c-0.96933,0.94 -2.1296,1.41 -3.4808,1.41zM78.9984,76.1003M78.9984,76.1003c0.00107,-0.03333 0.0016,-0.06677 0.0016,-0.1003v-2.8767h2v2.8767c0,0.05527 -0.0009,0.11047 -0.0027,0.1656zM79,70.1233v-3h2v3zM79,64.1233v-3h2v3zM79,58.1233v-3h2v3zM79,52.1233v-3h2v3zM79,46.1233v-3h2v3zM79,40.1233v-3h2v3zM79,34.1233v-3h2v3zM79,28.1233v-3h2v3zM79,22.1233v-3h2v3zM79,16.1233v-3h2v3zM79,10.1233v-3.00001h2v3.00001zM79,4.12329v-0.12329c0,-0.77537 -0.2607,-1.44899 -0.7821,-2.02086l1.4779,-1.34751c0.86947,0.95362 1.3042,2.07641 1.3042,3.36837v0.12329zM76.1997,1.00649M76.1997,1.00649c-0.06627,-0.00433 -0.13283,-0.00649 -0.1997,-0.00649h-2.7534v-2h2.7534c0.11033,0 0.22033,0.00358 0.33,0.01074zM70.2466,1h-3v-2h3zM64.2466,1h-3v-2h3zM58.2466,1h-3v-2h3zM52.2466,1h-3v-2h3zM46.2466,1h-3v-2h3zM40.2466,1h-3v-2h3zM34.2466,1h-3v-2h3zM28.2466,1h-3v-2h3zM22.2466,1h-3v-2h3zM16.2466,1h-3v-2h3zM10.2466,1h-3.00002v-2h3.00002zM4.24658,1h-0.24658c-0.74025,0 -1.39066,0.24019 -1.95123,0.72057l-1.30141,-1.51866c0.93503,-0.80127 2.01924,-1.20191 3.25264,-1.20191h0.24658zM1.01452,3.70201M1.01452,3.70201c-0.00968,0.0987 -0.01452,0.19803 -0.01452,0.29799v2.63013h-2v-2.63013c0,-0.16517 0.00802,-0.32956 0.02407,-0.49317zM1,9.63013v2.99997h-2v-2.99997zM1,15.6301v3h-2v-3zM1,21.6301v3h-2v-3zM1,27.6301v3h-2v-3zM1,33.6301v3h-2v-3zM1,39.6301v3h-2v-3zM1,45.6301v3h-2v-3zM1,51.6301v3h-2v-3zM1,57.6301v3h-2v-3zM1,63.6301v3h-2v-3zM1,69.6301v3h-2v-3zM1,75.6301v0.3699c0,0.70553 0.22039,1.3321 0.66118,1.8797l-1.55802,1.2541c-0.73544,-0.91373 -1.10316,-1.95833 -1.10316,-3.1338v-0.3699zM3.60479,78.9743M3.60479,78.9743c0.13055,0.01713 0.26228,0.0257 0.39521,0.0257h3v2h-3c-0.21989,0 -0.43821,-0.0142 -0.65496,-0.0426z"></path><path id="Union" fill-rule="evenodd" style="fill:#919399" opacity="1" d="M39.38 32.62L39.38 39.38L32.62 39.38C32.28 39.38 32 39.66 32 40C32 40.34 32.28 40.62 32.62 40.62L39.38 40.62L39.38 47.38C39.38 47.72 39.66 48 40 48C40.34 48 40.62 47.72 40.62 47.38L40.62 40.62L47.38 40.62C47.72 40.62 48 40.34 48 40C48 39.66 47.72 39.38 47.38 39.38L40.62 39.38L40.62 32.62C40.62 32.28 40.34 32 40 32C39.66 32 39.38 32.28 39.38 32.62Z"></path></g></svg>
          <div v-if="uploadIconError" style="width: 80px;height: 80px;display: flex;align-items: center;justify-content: center;border: 1px solid rgba(245, 108, 108, 1);border-radius: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="56" height="44" viewBox="0 0 56 44" fill="none"><g opacity="1"  transform="translate(0 0)  rotate(0)"><g opacity="1"  transform="translate(16 0)  rotate(0)"><path id="Vector" fill-rule="evenodd" style="fill:#F56C6C" opacity="1" d="M2.25,21c-0.22,0 -0.4,-0.07 -0.54,-0.21c-0.14,-0.14 -0.21,-0.32 -0.21,-0.54v-16.5c0,-0.22 0.07,-0.4 0.21,-0.54c0.14,-0.14 0.32,-0.21 0.54,-0.21h19.5c0.22,0 0.4,0.07 0.54,0.21c0.14,0.14 0.21,0.32 0.21,0.54v16.5c0,0.22 -0.07,0.4 -0.21,0.54c-0.14,0.14 -0.32,0.21 -0.54,0.21zM6.3093,10.1233c0.2,0.35 0.48,0.62 0.83,0.82c0.35,0.21 0.72,0.31 1.11,0.31c0.39,0 0.77,-0.11 1.12,-0.31c0.36,-0.2 0.64,-0.47 0.84,-0.82c0.19,-0.34 0.29,-0.72 0.29,-1.12c-0.02,-0.64 -0.23,-1.17 -0.66,-1.6c-0.42,-0.42 -0.95,-0.63 -1.59,-0.63c-0.64,0 -1.17,0.21 -1.59,0.63c-0.43,0.43 -0.64,0.96 -0.66,1.6c0,0.4 0.1,0.78 0.31,1.12zM6.96,14.0415l-3.96,3.96h18.26l-5.67,-6.8c-0.16,-0.19 -0.36,-0.28 -0.59,-0.28c-0.23,0 -0.43,0.09 -0.59,0.28l-3.65,4.38c-0.14,0.18 -0.32,0.27 -0.54,0.27c-0.22,0.01 -0.41,-0.06 -0.56,-0.2l-1.62,-1.61c-0.16,-0.16 -0.34,-0.24 -0.54,-0.24c-0.2,0 -0.38,0.08 -0.54,0.24z"></path></g><g opacity="1" transform="translate(0 24)  rotate(0)"><a xlink:href="https://" xlink:title="跳转" target="_blank"><text><tspan x="0" y="15.232" font-size="12" line-height="20" fill="#F56C6C" opacity="1" font-family="SourceHanSansCN-Regular" font-weight="Regular" letter-spacing="-0.009999999776482582"  >image.jp</tspan><tspan x="48.580000001788136" y="15.232" font-size="12" line-height="20" fill="#F56C6C" opacity="1" font-family="SourceHanSansCN-Regular" font-weight="Regular" letter-spacing="0" >g</tspan></text></a></g></g></svg>
          </div>
        </div>
        <div v-if="form.projectIcon" class="selected-icon" :style="{border : operate == 'view' ? 'none' : '', padding : operate == 'view' ? '0px' : '' }">
          <img style="width: 100%; height: 100%;border-radius: 4px;" :src="form.projectIcon" />
          <div class="mask" v-if="operate != 'view'">
            <svg @click="deleteIcon" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g opacity="1" transform="translate(0 0)  rotate(0)">
                <mask id="bg-mask-0" fill="white">
                  <use transform="translate(0 0)  rotate(NaN)" xlink:href="#path_0"></use>
                </mask>
                <g mask="url(#bg-mask-0)">
                  <path id="并集" fill-rule="evenodd" style="fill:#FFFFFF" opacity="1"
                    d="M22.0632,4.67314c0.26,0 0.48,0.09 0.67,0.28c0.19,0.18 0.28,0.41 0.28,0.67c0,0.26 -0.09,0.48 -0.28,0.67c-0.19,0.18 -0.41,0.27 -0.67,0.27h-19.39003c-0.26,0 -0.49,-0.09 -0.67,-0.27c-0.19,-0.19 -0.28,-0.41 -0.28,-0.67c0,-0.27 0.09,-0.49 0.28,-0.67c0.18,-0.19 0.4,-0.28 0.67,-0.28h3.53v-1.29c0,-0.33 0.06,-0.65 0.19,-0.95c0.12,-0.29 0.3,-0.55 0.52,-0.78c0.23,-0.22 0.48,-0.4 0.77,-0.52c0.31,-0.13 0.62,-0.19 0.95,-0.19h7.48003c0.33,0 0.64,0.06 0.94,0.19c0.29,0.13 0.55,0.3 0.77,0.52c0.22,0.23 0.4,0.49 0.52,0.78c0.13,0.3 0.19,0.62 0.19,0.95v1.29zM16.4832,2.99314c-0.1,-0.11 -0.22,-0.16 -0.37,-0.16h-7.47003c-0.16,0 -0.29,0.05 -0.39,0.16c-0.11,0.11 -0.16,0.24 -0.16,0.39v1.29h8.55003v-1.29c0,-0.15 -0.05,-0.29 -0.16,-0.39zM4.90317,20.7431c-0.13,-0.3 -0.19,-0.62 -0.19,-0.95v-11.19996c0,-0.26 0.09,-0.49 0.27,-0.67c0.19,-0.19 0.41,-0.28 0.68,-0.28c0.26,0 0.48,0.09 0.66,0.28c0.18,0.18 0.28,0.41 0.28,0.67v11.19996c0,0.15 0.05,0.28 0.16,0.38c0.1,0.11 0.23,0.16 0.39,0.16h10.44003c0.15,0 0.28,-0.05 0.38,-0.16c0.11,-0.1 0.17,-0.23 0.17,-0.38v-11.16996c0,-0.26 0.09,-0.49 0.27,-0.67c0.18,-0.19 0.4,-0.28 0.67,-0.28c0.26,0 0.48,0.09 0.67,0.28c0.18,0.18 0.28,0.41 0.28,0.67v11.16996c0,0.33 -0.07,0.65 -0.2,0.95c-0.12,0.29 -0.29,0.55 -0.52,0.77c-0.22,0.22 -0.48,0.4 -0.77,0.52c-0.31,0.13 -0.62,0.19 -0.95,0.19h-10.44003c-0.34,0 -0.65,-0.06 -0.96,-0.19c-0.29,-0.12 -0.55,-0.3 -0.77,-0.52c-0.23,-0.22 -0.4,-0.48 -0.52,-0.77zM10.1332,7.65314c0.26,0 0.48,0.1 0.66,0.28c0.19,0.18 0.28,0.41 0.28,0.67v8.19996c0,0.26 -0.09,0.49 -0.27,0.67c-0.19,0.19 -0.41,0.28 -0.67,0.28c-0.27003,0 -0.49003,-0.09 -0.68003,-0.28c-0.18,-0.18 -0.27,-0.41 -0.27,-0.67v-8.19996c0,-0.26 0.09,-0.49 0.27,-0.67c0.19,-0.19 0.41,-0.28 0.68003,-0.28zM15.5432,8.60314v8.19996c0,0.26 -0.09,0.49 -0.27,0.67c-0.18,0.19 -0.41,0.28 -0.67,0.28c-0.26,0 -0.48,-0.09 -0.67,-0.28c-0.18,-0.18 -0.28,-0.41 -0.28,-0.67v-8.19996c0,-0.26 0.1,-0.49 0.28,-0.67c0.18,-0.19 0.41,-0.28 0.67,-0.28c0.27,0 0.49,0.1 0.67,0.28c0.18,0.18 0.27,0.41 0.27,0.67z">
                  </path>
                </g>
              </g>
              <defs>
                <rect id="path_0" x="0" y="0" width="24" height="24" />
              </defs>
            </svg>
          </div>
        </div>
        <span class="upload-tips" style="font-size: 12px;" v-if="operate != 'view'">支持jpg、ipeg、png格式，文件大小不超过5M，推荐尺寸240x240</span>
      </el-form-item>
      <el-form-item label="项目描述:">
        <el-input v-if="operate != 'view'" v-model="form.description" autocomplete="off" type="textarea" placeholder="请输入项目描述" maxlength="240" :show-word-limit="showWordLimit" />
        <span style="word-wrap: break-word;word-break: break-all;white-space: pre-wrap;" v-else>{{ form.description }}</span>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="submit(ruleFormRef)">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { ElMessage } from 'element-plus'
import http from '@/../src/api/http.js';
import { useProjectStore } from '@/store/project'
const ruleFormRef = ref()
const $emit = defineEmits(['close'])
const dialogVisible = ref(false)
const showWordLimit = ref(true)
const uploadIconError = ref(false)
const destroyOnClose = ref(true)


const props = defineProps({
  dialogFormVisible: {
    type: Boolean,
    default: false
  },
  operate: {
    type: String,
    default: 'create'
  },
  projectId: {
    type: String,
    default: '08dbd11e-147f-4538-85be-27a0e10ea16f'
  }
});

const title = () => {
  let title = '';
  switch (props.operate) {
    case 'view':
      title = '查看项目'
      break;
      case 'create':
      title = '创建项目'
      break;
      case 'edit':
      title = '编辑项目'
      break;
  
    default:
      break;
  }
  return title
}

watch(() => props.dialogFormVisible, (value) => {
  dialogVisible.value = value || false;
})

watch(() => props.operate, async (value) => {
  if (value !== 'create') {
    console.log('edit 888');
    let result = await http.get(`/api/project/project/${props.projectId}`);
    form.name = result.data.name;
    form.description = result.data.description;
    form.projectIcon = import.meta.env.VITE_BASEURL + `/api/project/project/${result.data.id}/icon`;
  }
}, { immediate: true })

const rules = reactive({
  name: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
  projectIcon: [{ required: true, message: '', trigger: 'blur' }],
})

const form = reactive({
  name: '',
  description: '',
  projectIcon: '',
  iconBase64: ''
})

const close = () => {
  $emit('close', false);
  for (let key of Object.keys(form)) {
    form[key] = '';
  }
}

const selectIcon = () => {
  let input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/jpg,image/jpeg,image/png');
  input.click();
  input.addEventListener('change', (event) => {
    if (event.target.files[0].size > 5242880) {
      ElMessage.error('文件大于5M!');
      uploadIconError.value = true;
      return;
    }
    if (event.target.files[0].type != 'image/jpeg' && event.target.files[0].type != 'image/jpg' && event.target.files[0].type != 'image/png') {
      ElMessage.error('文件格式不正确!');
      uploadIconError.value = true;
      return;
    }
    var file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      form.projectIcon = e.target.result;
    }
  })
}

const deleteIcon = () => {
  form.projectIcon = '';
}

const submit = (formEl) => {
  if (props.operate == 'view') {
    close();
    return;
  }
  if (!formEl) return
  formEl.validate(async(valid) => {
    if (valid) {
      try {
        let arr = form.projectIcon.split(',');
        var obj = {
          iconBytes: arr[1]
        }
        form.iconBase64 = arr[1];
        if (props.operate == 'create') {
          var result = await http.post('/api/project/project', form);
        }
        if (props.operate == 'edit') {
          var result = await http.patch(`/api/project/project/${props.projectId}`, form);
        }
        
        let iconResult = await http.post(`/api/project/project/${ result.data.id || props.projectId }/icon`, obj);
        ElMessage.success('创建成功');
        close();
      } catch (ex) {
        console.log('error', ex);
        ElMessage.error(ex);
      }
    } else {
      if (!form.projectIcon) {
        uploadIconError.value = true;
        ElMessage.error('请选择项目图标!');
      }
      return false;
    }
  })
}


</script>



<style scoped>
.el-button--text {
  margin-right: 15px;
}

.el-input {
  width: 100%;
}
.select-icon {
  width: 80px;
    height: 80px;
    border-radius: 6px;
    overflow: hidden;
}

.selected-icon {
    width: 80px;
    height: 80px;
    border-radius: 4px;
    overflow: hidden;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    position: relative;
    transition: all .2s linear;
}

.mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    transition: all .2s linear;
    display: flex;
    align-items: center;
    justify-content: center;
}

    .mask svg {
        display: none;
        cursor: pointer;
    }

    .selected-icon:hover .mask {
        background: rgba(0, 0, 0, 0.4);
    }

    .selected-icon:hover .mask svg {
        display: block;
    }

.mask svg:nth-child(2) {
    margin-left: 12px;
}

</style>