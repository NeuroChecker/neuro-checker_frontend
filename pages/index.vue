<script setup lang="ts">
// no logic needed
</script>

<template>
  <div class="page">
    <header class="header">
      <span class="home">Home</span>
    </header>

    <main class="content">
      <img
          src="/public/media/smiley.png"
          alt="Smiley face"
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
