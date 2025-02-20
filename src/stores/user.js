import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ currentUser: {} }),
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  actions: {
    setCurrentUser() {
      fetch("https://jsonplaceholder.typicode.com/users/10")
        .then((response) => response.json())
        .then((data) => {
          this.currentUser = data;
        });
    },
  },
});
