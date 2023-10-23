<script setup>
import { ref } from 'vue';
// import HelloWorld from './components/HelloWorld.vue'
import { ElConfigProvider } from "element-plus";
// import { defineComponent } from 'vue'
// import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import zhCn from "element-plus/lib/locale/lang/zh-cn";

const locale = ref(zhCn)

</script>

<template>
  <div id="nav"></div>
  <el-config-provider :locale="locale">
      <router-view />
  </el-config-provider>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>

<!-- <style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
}

.el-alert--error.is-light {
  border: 1px solid #ffe0e0;
}

.el-alert--error.is-light {
  color: #f74444 !important;
}

.el-alert--warning.is-light {
  border: 1px solid #ffe6c1;
}

.el-alert--info.is-light {
  border: 1px solid #e6e5e5;
}

.el-alert--info .el-alert__description {
  color: #6b6b6b !important;
}

.el-alert--warning.is-light {
  background-color: #fdf6ec;
  color: #d68409 !important;
}

.el-alert--success.is-light {
  border: 1px solid #cdf7b8;
}

.el-alert--success.is-light .el-alert__description {
  color: #3baf02 !important;
}

.main-container {
  width: 100%;
  height: 100%;
  padding: 8px;
  background: rgba(238, 238, 238, 1);
}
</style>