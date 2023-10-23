<template>
  <div class="vol-el-menu">
    <div class="menu-search" v-if="showSearch">
      <el-select placement="bottom" v-model="searchValue" clearable filterable remote reserve-keyword
        :placeholder="'请输入关键字搜索...'" :remote-method="remoteMethod" @change="selectChange" :loading="loading">
        <template #prefix><i class="el-icon-search"></i></template>
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <el-menu @select="select" :default-active="defaultActive" :collapse="isCollapse">
      <!-- <template v-for="item in convertTree(list)">
        <el-sub-menu :key="item.id" :index="'' + item.id" v-if="item.children.length && (!enable || item.enable == 1)">
          <template #title>
            <i class="menu-icon" :class="item.icon"></i>
            <span> {{ item.name}}</span>
          </template>
          <vol-element-menu-child :enable="enable" :list="item.children"></vol-element-menu-child>
        </el-sub-menu>
        <template v-else>
          <el-menu-item class="menu-item-lv1" v-if="!enable || item.enable == 1" :key="item.id" :index="'' + item.id">
            <i :class="item.icon"></i>
            <span> {{ item.name }}</span>
          </el-menu-item>
        </template>
      </template> -->




      <template v-for="item in router_List">

        <template v-if="!item?.children?.length">
          <el-menu-item :index="item.path">
            <el-icon>
              <document />
            </el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </template>


        <template v-else>
          <el-sub-menu :index="item.path">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <div><el-menu-item v-for="subItem in item.children" :index="subItem.path">{{ subItem.name }}</el-menu-item></div>
          </el-sub-menu>
        </template>

      </template>






    </el-menu>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
// import { ref }
import { useRouter } from "vue-router";
import { useProjectStore } from '@/store/project.js'
const router = useRouter();
const projectStore = useProjectStore();
const defaultActive = ref('1');
const router_List = ref([])
projectStore.$subscribe((mutation,state) => {
  console.log(state.currentProject);
  if (!state.currentProject) {
    router_List.value = _router.concat(_List);
  } else {
    router_List.value = default_router.concat(_List);
  }
})

onMounted(() => {
  if (!projectStore.currentProject) {
    router_List.value = _router.concat(_List);
  }
})


// const { currentProject } = 
const showSearch = ref(false);
const $emit = defineEmits(['openPage'])
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
});

const default_router = [
  {
    id: '1',
    path: '/document',
    name: '文档',
    icon: ''
  },
  {
    id: '2',
    path: '/personnel',
    name: '人员',
    icon: ''
  },
]

const _router = [
  {
    id: '1',
    path: '/home',
    name: '首页',
    icon: ''
  },
  {
    id: '2',
    path: '/project',
    name: '项目库',
    icon: ''
  },
]


const _List = [
  // {
  //   id: '1',
  //   path: '/home',
  //   name: '首页',
  //   icon: ''
  // },
  // {
  //   id: '2',
  //   path: '/project',
  //   name: '项目库',
  //   icon: ''
  // },
  {
    id: '3',
    path: '/setting',
    name: '设置',
    icon: '',
    children: [
      {
        id: '4',
        path: '/user',
        name: '用户管理',
        icon: ''
      },
      {
        id: '5',
        path: '/project-manage',
        name: '项目管理',
        icon: ''
      },
      {
        id: '6',
        path: '/cloud-application',
        name: '云应用',
        icon: ''
      },
      {
        id: '7',
        path: '/extend',
        name: '扩展性',
        icon: ''
      },
      {
        id: '7',
        path: '/system',
        name: '系统',
        icon: ''
      },
    ]
  }
]

const handleOpen = (index) => {
  console.log('index', index)
}

const select = (index, indexPath) => {
  if (indexPath.length > 1) {
    let tempA = router_List.value.filter(x => x.path == indexPath[0])[0].children;
    var tempB = tempA.filter(x => x.path == indexPath[1]);
  } else {
    var tempB = router_List.value.filter(x => x.path == indexPath[0]);
  }
  // console.log(tempB[0]);
  $emit('openPage', tempB[0]);
  // router.push(id);
}



</script>



<style lang="less" scoped>
.vol-el-menu {
  // box-sizing: content-box;
  width: 100%;

  .menu-icon {
    font-size: 18px;
    margin-right: 6px;
  }
}

.menu-search {
  padding: 6px 10px;

  ::v-deep(.el-input__wrapper) {
    border-radius: 15px !important;
  }
}</style>
