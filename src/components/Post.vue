<script setup>
defineProps({
  post: Object,
});
</script>
<template>
  <div class="post-header">
    <div class="user-info">
      <img src="../assets/icons/account-online.svg" />
      <h3>Account Name</h3>
    </div>
    <h4>{{ post.id }}h ago</h4>
  </div>
  <div class="post-content">
    <p>
      {{ post.body }}
    </p>
    <div class="image-box"></div>
  </div>
  <div class="post-footer">
    <img src="../assets/icons/heart-gray.svg" />
    <img src="../assets/icons/comment.svg" />
    <img src="../assets/icons/send-gray.svg" />
  </div>
</template>
<style>
.post-header {
  display: flex;
  justify-content: space-between;
}

.user-info {
  display: flex;
  gap: 10%;
}

.post-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: azure;
}

.post-content-text {
  width: 100%;
  display: flex;
  justify-content: start;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  border: black 2px;
}

.image-box img {
  max-width: 100%;
  max-height: 100%;
}
</style>
