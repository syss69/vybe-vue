<script setup>
import PageTitle from "@/components/PageTitle.vue";
defineProps({
  user: Object,
});
</script>

<template>
  <div class="background-image"></div>
  <div class="profile-pic">
    <img src="../assets/icons/account-online.svg" />
  </div>
  <div class="profile-buttons">
    <div class="actions">
      <img src="../assets/icons/edit.svg" />
    </div>
  </div>
  <div class="profile-info">
    <h1>User Name</h1>
    <h3>@username</h3>
    <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="profile-menu">
    <a href="friends.html"
      ><div>
        <img src="../assets/icons/friends.svg" />
        <h3 class="label">Friends</h3>
      </div></a
    >
    <a href="servers.html"
      ><div>
        <img src="../assets/icons/servers.svg" />
        <h3 class="label">Servers</h3>
      </div></a
    >
  </div>
</template>
