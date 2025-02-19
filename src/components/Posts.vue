<script setup>
import { ref, onMounted } from "vue";
const posts = ref([]);
const fetchPosts = async () => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((responce) => responce.json())
      .then((data) => {
        posts = data.filter((data) => data.userId == 1);
        console.log(posts);
        posts.forEach((post) => {
          loadPosts(post);
        });
      });
  } catch (err) {
    console.error("Error in post load", err.message);
  }
};

const addPhotos = () => Math.floor(Math.random() * 3);

const toogleLike = (post) => {
  post.liked = !post.liked;
};

onMounted(fetchPosts);
</script>

<template>
  <div class="posts-container">
    <div v-for="post in posts" :key="post.id" class="post">
      <!-- Заголовок поста -->
      <div class="post-header">
        <div class="user-info">
          <img src="../assets/icons/account-online.svg" alt="User Icon" />
          <h2>User / Group Name</h2>
        </div>
        <h4>1 hour ago</h4>
      </div>

      <!-- Контент поста -->
      <div class="post-content">
        <div class="post-content-text">
          <p>{{ post.body }}</p>
        </div>

        <!-- Фотографии -->
        <div class="image-box" v-if="addPhotos() > 0">
          <img
            v-for="n in addPhotos()"
            :key="n"
            src="https://picsum.photos/400"
            alt="Random"
          />
        </div>
      </div>

      <!-- Футер поста (кнопки) -->
      <div class="post-footer">
        <button @click="toggleLike(post)" class="btn btn-link btn-sm border">
          <img
            :src="
              post.liked
                ? '../assets/icons/heart-red.svg'
                : '../assets/icons/heart-gray.svg'
            "
          />
        </button>

        <button class="btn btn-link btn-sm border">
          <img src="../assets/icons/comment.svg" />
        </button>

        <button
          class="btn btn-link btn-sm border"
          @click="() => (window.location.href = 'chats.html')"
        >
          <img src="../assets/icons/send-gray.svg" />
        </button>
      </div>
    </div>
  </div>
</template>
