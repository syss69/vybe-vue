<script setup>
import PageTitle from "@/components/PageTitle.vue";
import NewPost from "@/components/NewPost.vue";
import { storeToRefs } from "pinia";
import { usePostsStore } from "@/stores/posts";
import { onMounted } from "vue";
import Post from "@/components/Post.vue";
const postsStore = usePostsStore();
const { getPosts } = storeToRefs(postsStore);
onMounted(() => {
  postsStore.setPosts();
});
</script>
<template>
  <div>
    <PageTitle title="Main Page" />
    <section class="page-content" id="page-content">
      <NewPost />
      <div class="page-posts">
        <div
          v-for="post in getPosts"
          :key="post.id"
          class="post rounded-1 py-2 my-2"
        >
          <Post :post="post" />
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.page-posts {
  width: 100%;
}
</style>
