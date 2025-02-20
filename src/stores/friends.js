import { defineStore } from "pinia";

export const useFriendsStore = defineStore("friends", {
  state: () => ({ friends: [] }),
  getters: {
    getFriends(state) {
      return state.friends;
    },
  },
  actions: {
    async setFriends() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((responce) => responce.json())
        .then((data) => {
          this.friends = data;
          console.log(this.friends);
        });
    },
  },
});
