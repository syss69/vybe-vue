<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
import NavBar from "./components/NavBar.vue";
import { useUserStore } from "./stores/user";
const userStore = useUserStore();
userStore.setCurrentUser();
const currentUser = userStore.getCurrentUser;
console.log(currentUser);
</script>

<template>
  <div class="header">
    <PageHeader />
  </div>
  <div class="leftbar">
    <NavBar />
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.leftBar {
  position: fixed;
  top: 8vh;
  left: 0;
  background-color: #636363;
  height: 92%;
  width: 15%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  z-index: 3;
}
.header {
  padding: 0.25rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 8%;
  width: 100%;
  align-items: center;
  background-color: #4f4f4f;
  z-index: 2;
}
main {
  position: relative;
  background-color: #4a4a4a;
  top: 8vh;
  left: 15%;
  width: 85%;
}
</style>
