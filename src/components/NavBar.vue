<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="leftBar">
    <nav>
      <router-link to="/profile">
        <div>
          <img src="../assets/icons/profile.svg" alt="my profile" />
          <h5 class="label">My profile</h5>
        </div>
      </router-link>
      <router-link to="/home">
        <div>
          <img src="../assets/icons/news.svg" alt="news page" />
          <h5 class="label">News page</h5>
        </div>
      </router-link>
      <router-link to="/chats">
        <div>
          <img src="../assets/icons/chat.svg" alt="chats" />
          <h5 class="label">Chats</h5>
        </div>
      </router-link>

      <router-link to="/friends">
        <div>
          <img src="../assets/icons/friends.svg" />
          <h5 class="label">Friends</h5>
        </div>
      </router-link>

      <router-link>
        <div>
          <img src="../assets/icons/servers.svg" />
          <h5 class="label">Servers</h5>
        </div>
      </router-link>
      <router-link>
        <div>
          <img src="../assets/icons/settings.svg" />
          <h5 class="label">Settings</h5>
        </div>
      </router-link>
    </nav>
  </section>
</template>
<style scoped>
.leftBar div {
  gap: 5%;
}

a {
  color: inherit;
  text-decoration: none;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 10%;
}

nav div img {
  max-width: 30px;
  max-height: 30px;
}
nav div {
  max-height: 5vh;
  display: flex;
  align-items: center;
  margin-bottom: 5vh;
}
@media (max-width: 850px) {
  .label {
    display: none;
  }
  nav {
    padding-left: 10%;
  }
}
</style>
