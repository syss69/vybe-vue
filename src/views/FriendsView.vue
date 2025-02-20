<script setup>
import PageTitle from "@/components/PageTitle.vue";
import Filter from "@/components/Filter.vue";
import ListElement from "@/components/ListElement.vue";
import { useFriendsStore } from "@/stores/friends";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
const friendsStore = useFriendsStore();
const { getFriends } = storeToRefs(friendsStore);
onMounted(() => {
  friendsStore.setFriends();
});
</script>
<template>
  <PageTitle title="Friends" />
  <section class="page-content">
    <Filter />
    <div class="list" id="chats-list">
      <div v-for="friend in getFriends" :key="friend.id" class="list-element">
        <ListElement :target="friend" />
      </div>
    </div>
  </section>
</template>
<style></style>
