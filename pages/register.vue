<script setup lang="ts">
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const errorMessage = ref('');

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  errorMessage.value = '';

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Wachtwoorden komen niet overeen. Probeer het opnieuw.';
    return;
  }

  // const success = await authStore.register(email.value, password.value);
  const success = false;

  if (!success) {
    errorMessage.value = 'Registratie mislukt. Probeer het opnieuw.';
    return;
  }

  await useRouter().push('/login');
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
          Registreer een nieuw account
        </p>
      </div>

      <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

      <form @submit="handleSubmit" class="flex flex-col mt-4">
        <input
            v-model="email"
            type="text"
            placeholder="e-mail"
            class="mt-4 p-2 border border-gray-400 rounded"
        />
        <input
            v-model="password"
            type="password"
            placeholder="wachtwoord"
            class="mt-2 p-2 border border-gray-400 rounded"
        />
        <input
            v-model="confirmPassword"
            type="password"
            placeholder="bevestig wachtwoord"
            class="mt-2 p-2 border border-gray-400 rounded"
        />

        <button
            type="submit"
            class="mt-2 px-4 py-2 bg-[#7aa2ff] text-white rounded hover:bg-[#5a82e6] transition-colors"
        >
          Registreer
        </button>
      </form>

      <div>
        <p class="mt-4 text-gray-600">
          Al een account?
          <NuxtLink to="/login" class="text-[#7aa2ff]">Log hier in</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>