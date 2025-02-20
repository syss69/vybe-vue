<script setup>
import PageTitle from "@/components/PageTitle.vue";
import NewPost from "@/components/NewPost.vue";
import Post from "@/components/Post.vue";
import Profile from "@/components/Profile.vue";
import { storeToRefs } from "pinia";
import { usePostsStore } from "@/stores/posts";
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
const postsStore = usePostsStore();
const { getPosts } = storeToRefs(postsStore);
const userStore = useUserStore();
const { getCurrentUser } = storeToRefs(userStore);
onMounted(() => {
  postsStore.setPosts();
  userStore.setCurrentUser();
});
</script>
<template>
  <PageTitle title="Profile" />
  <section class="page-content" id="page-content">
    <div class="profile">
      <Profile :user="getCurrentUser" />
    </div>
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
</template>

<style>
.profile {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  align-items: center;
  border-bottom: solid 2px #000059;
}

.background-image {
  position: absolute;
  top: 0;
  background-color: aqua;
  width: 100%;
  height: 25vh;
}

.background-image img {
  width: 100%;
}

.profile-pic {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  height: 30%;
  width: 100%;
}

.profile-pic img {
  height: 100%;
}

.profile-buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.profile-info {
  width: auto;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-info h3 {
  color: #000059;
}

.profile-menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.profile-menu div {
  display: flex;
  align-items: center;
}
</style>
