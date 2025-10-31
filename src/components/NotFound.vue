<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden px-4">
    <!-- Animated abstract shapes -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-full opacity-30 animate-blob"></div>
    <div class="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-300 rounded-full opacity-30 animate-blob animation-delay-2000"></div>

    <!-- Main Content -->
    <div class="relative z-10 text-center max-w-lg">
      <!-- SVG professional illustration -->
      <svg class="w-48 h-48 mx-auto mb-6" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="256" cy="256" r="256" fill="#f3f4f6"/>
        <path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128z" fill="#e5e7eb"/>
        <path d="M200 256l112 0" stroke="#6366f1" stroke-width="16" stroke-linecap="round"/>
        <path d="M256 200l0 112" stroke="#6366f1" stroke-width="16" stroke-linecap="round"/>
      </svg>

      <!-- Text -->
      <h1 class="text-6xl font-bold text-gray-900 mb-4 animate-fadeIn">404</h1>
      <p class="text-lg text-gray-600 mb-6 animate-fadeIn delay-200">
        The page you are looking for cannot be found. It may have been moved or deleted.
      </p>

      <!-- Button -->
      <button 
        @click="$router.push('/')"
        class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all animate-fadeIn delay-400">
        Return Home
      </button>
    </div>
  </section>
</template>

<script setup>
// No extra logic required for static 404 page
</script>

<style scoped>
/* Professional abstract blob animation */
@keyframes blob {
  0%, 100% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(20px, -30px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-blob {
  animation: blob 8s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}

/* Fade-in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeIn 1s ease forwards; }
.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
</style>
