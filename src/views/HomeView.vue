<script setup>
import PageTitle from "@/components/PageTitle.vue";
import NewPost from "@/components/NewPost.vue";
import Posts from "@/components/Posts.vue";
</script>
<template>
  <main>
    <PageTitle title="Main Page" />
    <section class="page-content" id="page-content">
      <NewPost />
      <div class="page-posts" id="page-posts"></div>
    </section>
  </main>
</template>
<style scoped></style>
