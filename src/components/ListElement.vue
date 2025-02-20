<script setup>
defineProps({
  target: Object,
});
</script>
<template>
  <div class="element-picture">
    <img src="../assets/icons/account-offline.svg" />
  </div>
  <div class="element-name">
    <h1>{{ target.name }}</h1>
  </div>
  <div class="element-notif"></div>
  <div class="element-options">
    <img src="../assets/icons/options.svg" />
  </div>
</template>

<style>
.list-element {
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  border: #000059 solid 2px;
  margin-bottom: 1%;
}

.element-picture {
  height: 100%;
}

.element-picture img {
  height: 100%;
}

.element-name {
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.8rem;
  flex-grow: 1;
}

@media (max-width: 600px) {
  .element-name {
    font-size: 1rem;
  }

  .element-picture {
    height: 60%;
  }

  .element-options {
    height: 60%;
  }

  .element-options img {
    height: 50%;
  }

  .element-notification {
    height: 60%;
  }

  .element-notification img {
    height: 50%;
  }
}
</style>
