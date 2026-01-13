<script setup lang="ts">
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  try {
    const success = await authStore.login(email.value, password.value);
    // Redirect or show success
    if (!success) {
      errorMessage.value = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
      return;
    }
    await useRouter().push('/');
  } catch (error) {
    console.error('Login failed:', error);
    // Show error message to user
  }
};
</script>

<template>
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-300">
  <p class="text-lg font-semibold">
    Hello, World!
  </p>
  <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
  <form @submit="handleSubmit" class="flex flex-col mt-4">
    <input
      v-model="email"
      type="text"
      placeholder="email"
      class="mt-4 p-2 border border-gray-400 rounded"
    />
    <input
      v-model="password"
      type="password"
      placeholder="password"
      class="mt-2 p-2 border border-gray-400 rounded"
    />
    <button
      type="submit"
      class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
</div>
</template>
