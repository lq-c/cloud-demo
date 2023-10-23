import { defineStore } from 'pinia'
import http from '@/api/http.js';

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useProjectStore = defineStore('project', {
  state: () => ({
    currentProject: null,
    list: []
  }),
  persist: {
    paths: ['currentProject']
  },
  getters: {
    // double: (state) => state.count * 2,
    projectList: (state) => state.list
  },
  actions: {
    async getProjectList () {
      var projects = [];
      var page = 1;
      while (true) {
        var result = await http.get(`/api/project/project?page=${page}`);
        projects = projects.concat(result.data);
        if (result.totalPages <= page) {
          break;
        }
        ++page;
      };
      projects.map(item => {
        item.icon = item.hasIcon ? import.meta.env.VITE_BASEURL + `/api/project/project/${item.id}/icon` : '/src/assets/imgs/project/default-project-avatar.png'
      })
      this.list = projects;
    },
    setCurrentProject (project) {
      this.currentProject = project;
    },
    clearProject () {
      this.currentProject = null;
    }
  },
})