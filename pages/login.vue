<script setup lang="ts">
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  errorMessage.value = '';

  const response = await authStore.login({
    email: email.value,
    password: password.value
  });

  if (!response.success) {
    errorMessage.value = 'Verrkeerde inloggegevens. Probeer het opnieuw.';
    return;
  }

  await useRouter().push('/');
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">

    <div class="w-full max-w-sm">
      <div class="flex flex-col items-center">

        <p class="text-lg font-semibold">
          Welkom bij <span class="text-[#7aa2ff]">NeuroChecker</span>
        </p>

        <p class="text-gray-600">
          Log in om verder te gaan
        </p>
      </div>

      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

      <form @submit="handleSubmit" class="flex flex-col mt-4">

        <div class="w-full flex flex-col space-y-2">
          <input
              v-model="email"
              required
              type="text"
              placeholder="e-mail"
              class="p-2 border bg-[#1f1f1f] border-gray-400 rounded"
          />
          <input
              v-model="password"
              required
              type="password"
              placeholder="wachtwoord"
              class="p-2 border bg-[#1f1f1f] border-gray-400 rounded"
          />
        </div>

        <button
            type="submit"
            class="mt-6 px-4 py-2 bg-[#7aa2ff] text-white rounded hover:bg-[#5a82e6] transition-colors"
        >
          Inloggen
        </button>
      </form>

      <div>
        <p class="mt-2 text-gray-600">
          Geen account?
          <NuxtLink to="/register" class="text-[#7aa2ff]">Registreer hier</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>