<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="page-header">
    <h2>{{ title }}</h2>
  </section>
</template>

<style>
.page-header {
  position: fixed;
  top: 8vh;
  left: 0;
  background-color: #696969;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 7%;
}
</style>
