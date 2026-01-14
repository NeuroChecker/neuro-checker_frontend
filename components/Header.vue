<script setup lang="ts">
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
  await useRouter().push('/login');
};
</script>

<template>
  <header class="header">
    <div class="min-w-[20%]">
      <NuxtLink to="/" class="menu">
        ☰
      </NuxtLink>
    </div>

    <div>
      <NuxtLink to="/" class="app-title">
        Neuro Checker
      </NuxtLink>
    </div>

    <div v-if="authStore.isLoggedIn" class="flex items-center gap-4 min-w-[20%] justify-end">
      <NuxtLink to="/accountpage">
        <div class="flex items-center gap-1">
          <img
              :title="authStore.user!.email"
              src="/public/media/smiley.png"
              alt="Profile avatar"
              class="header-avatar"
          />
          Profile
        </div>
      </NuxtLink>

      <button @click="logout()" class="text-white border px-2 px-2 py-1 rounded border-white">
        Logout
      </button>
    </div>

    <div v-else class="flex items-center">
      <button @click="useRouter().push('/login')" class="ml-4 text-white">
        Login
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #7aa2ff;
  color: #ffffff;
}

.menu {
  font-size: 20px;
}

.app-title {
  font-size: 16px;
  font-weight: 500;
}

.header-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}
</style>