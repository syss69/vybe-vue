<script setup></script>

<template>
  <div class="header">
    <div class="logo">
      <img
        class="logoIcon"
        src="../assets/icons/site logo.svg"
        alt="site logo"
      />
    </div>
    <div class="searchbar1">
      <div class="input-group" id="searchField">
        <input
          type="text"
          class="form-control"
          placeholder="Looking for something?"
          aria-label="serach"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary btn-sm d-flex align-items-center"
            type="button"
          >
            <img src="../assets/icons/search.svg" style="height: 5%" />
          </button>
        </div>
      </div>
    </div>
    <div class="rightIcons">
      <img
        src="../assets/icons/notification.svg"
        alt="notifications"
        class="notifIcon"
      />
      <img
        src="../assets/icons/account-online.svg"
        alt="account"
        class="accountIcon"
      />
    </div>
  </div>
</template>

<style>
.logo {
  height: auto;
  width: auto;
  max-height: 7vh;
  max-width: 7vh;
  margin: 1%;
}

.logoIcon {
  height: auto;
  width: auto;
  max-width: 7vh;
  max-height: 7vh;
}

.searchBar {
  background-color: #d9d9d9;
  color: #000059;
  border-radius: 1rem;
  width: 25vw;
  height: 4vh;
  font-size: 1.5rem;
}

.searchIcon {
  height: 4vh;
}

.search {
  display: flex;
  align-items: center;
  gap: 2%;
}

.searchbar1 {
  display: flex;
  align-items: center;
  background-color: #9d9d9d;
  border-radius: 15px;
  color: #000059;
}

.rightIcons {
  margin: 3%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8%;
  gap: 25%;
}

.notifIcon {
  height: 5.5vh;
  width: 5.5vh;
}

.accountIcon {
  height: 7vh;
  width: 7vh;
}

#searchField {
  display: flex;
  align-items: center;
}
</style>
