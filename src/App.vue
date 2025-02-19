<script setup>
import { RouterLink, RouterView } from "vue-router";
import PageHeader from "./components/PageHeader.vue";
import NavBar from "./components/NavBar.vue";
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

<style>
.page-content {
  position: fixed;
  top: 15%;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 85%;
}
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
  z-index: 1;
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
  background-color: #4a4a4a;
  position: fixed;
  top: 8%;
  left: 15%;
  width: 85%;
  height: 92%;
}
</style>
