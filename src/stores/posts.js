import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", {
  state: () => ({ posts: [] }),
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    setPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((responce) => responce.json())
        .then((data) => {
          this.posts = data.filter((data) => data.userId == 1);
          console.log(this.posts);
        });
    },
  },
});
