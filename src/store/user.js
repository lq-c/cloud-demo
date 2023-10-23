import { defineStore } from 'pinia'
import http from '@/api/http.js';
import { getPayload } from '@/utils/user.js'
let _token = localStorage.getItem('token');


export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    token: _token || null,
  }),
  getters: {
    userInfo (state) {
      return getPayload(state.token);
    },
    getHttpToken (state) {
      return 'Bearer ' + state.token; 
    },
    // isLogin () {
    //   return true;
    // }
  },
  actions: {
    setToken (token) {
      window.localStorage.setItem('token', token);
      this.token = token;
    },
    // logout () {
    //   window.localStorage.clear();
    // },
    clearUserInfo () {
      this.token = null;
      window.localStorage.clear();
      // window.localStorage.removeItem('token');
    }
  },
})