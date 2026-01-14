<script setup lang="ts">
// no logic needed
</script>

<template>
  <div>
    <Header/>

    <main class="content">
      <img
          src="/public/media/smiley.png"
          alt="Profile picture"
          class="profile-img"
      />

      <form class="name-pill">
        <input class="name-input" type="text" placeholder="Name" />
      </form>

      <form class="profile-form">
        <label class="field">
          <span>E-mail</span>
          <input type="email" value="testing@example.com" readonly />
        </label>

        <label class="field">
          <span>Password</span>
          <input type="password" value="**************" readonly />
        </label>

        <label class="field">
          <span>Pronouns</span>
          <input type="text" value="Sir Madam" readonly />
        </label>
      </form>
    </main>
  </div>
</template>

<style scoped>
/* ---------------------------
   MOBILE
---------------------------- */
/* Content */
.content {
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Profile image */
.profile-img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}

/* Name pill */
.name-pill {
  background-color: #000000;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 16px;
  margin-bottom: 24px;
}

/* Form */
.profile-form {
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field span {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  text-align: left;
}

.field input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
}

/* ---------------------------
   TABLET & UP
---------------------------- */
@media (min-width: 481px) {
  .profile-img {
    width: 180px;
    height: 180px;
  }

  .profile-form {
    max-width: 360px;
  }
}

/* ---------------------------
   DESKTOP & UP
---------------------------- */
@media (min-width: 769px) {
  .profile-img {
    width: 200px;
    height: 200px;
  }

  .profile-form {
    max-width: 420px;
  }
}
</style>
