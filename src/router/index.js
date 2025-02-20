import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ChatsView from "@/views/ChatsView.vue";
import FriendsView from "@/views/FriendsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "default",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/chats",
      name: "chats",
      component: ChatsView,
    },
    {
      path: "/friends",
      name: "friends",
      component: FriendsView,
    },
  ],
});

export default router;
