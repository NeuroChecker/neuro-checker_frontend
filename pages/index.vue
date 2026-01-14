<script setup lang="ts">
const limitReached = "1"; // testing value
let smiley = "";
let color = "";

function getLimitReached() {
  return limitReached; // replace with logic calculating if a limit is reached
}

function determineSmiley() {
  switch (getLimitReached()) {
    case "1":
      smiley = "/media/dark-green-smiley.png";
      color = "dark green";
      break;
    case "2":
      smiley = "/media/light-green-smiley.png";
      color = "light green";
      break;
    case "3":
      smiley = "/media/yellow-smiley.png";
      color = "yellow";
      break;
    case "4":
      smiley = "/media/orange-smiley.png";
      color = "orange";
      break;
    case "5":
      smiley = "/media/red-smiley.png";
      color = "red";
      break;
  }
}

determineSmiley();

const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  await useRouter().push('/login');
};
</script>

<template>
  <div class="page">

    <header class="header flex items-center justify-between">
      <div class="flex items-center">
        <span class="home">Home</span>
      </div>

      <div v-if="authStore.isLoggedIn" class="flex items-center">
        <span>{{ authStore.user!.email }}</span>

        <button @click="logout()" class="ml-4 text-red-500">
          Logout
        </button>
      </div>
    </header>

    <main class="content">
      <img
          :src="smiley"
          :alt="color + ' smiley'"
          class="smiley-img"
      />

      <p class="description">
        Lorem Ipsum is simply<br />
        dummy text of the<br />
        printing.
      </p>

      <a href="#" class="learn-more">Learn more</a>
    </main>
  </div>
</template>

<style scoped>
/* ---------------------------
   MOBILE
---------------------------- */
.page {
  min-height: 100vh;
  background-color: #1f1f1f;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.header {
  padding: 16px;
}

.home {
  color: #7aa2ff;
  font-size: 16px;
}

.content {
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.smiley-img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  margin-bottom: 24px;
}

.description {
  font-size: 15px;
  line-height: 1.4;
  margin-bottom: 18px;
  max-width: 320px;
}

.learn-more {
  color: #7aa2ff;
  text-decoration: none;
  font-size: 15px;
}

/* ---------------------------
   TABLET & UP
---------------------------- */
@media (min-width: 481px) {
  .smiley-img {
    width: 180px;
    height: 180px;
    margin-bottom: 24px;
  }

  .description {
    font-size: 16px;
    line-height: 1.4;
  }
}

/* ---------------------------
   DESKTOP & UP
---------------------------- */
@media (min-width: 769px) {
  .smiley-img {
    width: 240px;
    height: 240px;
    margin-bottom: 32px;
  }

  .description {
    font-size: 18px;
    line-height: 1.5;
  }
}
</style>
