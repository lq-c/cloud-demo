<template>
  
  <div class="main-container">
      <h1>user </h1>
    <input type="text">
    </div>
</template>


<script setup>
// import { useProjectStore } from '@/store/counter'
// const store = useProjectStore()

import { useUserInfoStore } from '@/store/user'
const userStore = useUserInfoStore()
// store.getProjectList();

</script>


<style>

</style>