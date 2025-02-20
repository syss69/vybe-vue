<template>
  <div class="new-post input-group">
    <input placeholder="Something new?" type="text" id="new-post-input" />
    <div class="input-group-append d-flex" style="z-index: 1">
      <button
        class="btn btn-outline-secondary btn-sm d-flex align-items-center"
        type="button"
      >
        <img src="../assets/icons/clip.svg" style="height: 3vh" />
      </button>
      <button
        class="btn btn-outline-secondary btn-sm d-flex align-items-center"
        type="button"
        id="create-post-button"
      >
        <img src="../assets/icons/send-blue.svg" style="height: 3vh" />
      </button>
    </div>
  </div>
</template>
<style scoped>
.new-post {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  width: 95%;
}

#new-post-input {
  height: 2rem;
  width: 50%;
  border-radius: 15px;
  background-color: #d9d9d9;
  color: #000059;
}

.new-post img {
  height: 1.8rem;
  color: #000059;
}
</style>
