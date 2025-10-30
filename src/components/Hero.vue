<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import { Sunrise, Trophy, BookOpen } from 'lucide-vue-next';

const { t, language } = useLanguage();

const activities = [
  { bn: 'আমরা পারি আইসিটি', en: 'We Can ICT' },
  { bn: 'আমরা পারি বিজ্ঞান', en: 'We Can Science' },
  { bn: 'মেধা সৃজন', en: 'Creativity Club' },
  { bn: 'স্পোর্টস', en: 'Sports' },
  { bn: 'ব্যান্ড ও কুচকাওয়াজ', en: 'Band & Parade' }
];

const currentActivityIndex = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentActivityIndex.value =
      (currentActivityIndex.value + 1) % activities.length;
  }, 2500);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section id="home"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#16213e] to-[#0f3460] px-4 sm:px-6 lg:px-8">
    <!-- Background layers -->
    <div class="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>
    <div
      class="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow z-0">
    </div>
    <div
      class="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-indigo-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow z-0">
    </div>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-12 min-h-screen">
      <!-- Left Column -->
      <div class="flex-1 space-y-6 text-left">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-full shadow-lg border border-cyan-300/30">
          <Sunrise class="w-4 h-4 text-yellow-300 animate-pulse" />
          <span class="text-white text-sm font-medium">{{ t.heroMotivation }}</span>
        </div>

        <!-- Titles -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
          {{ t.heroTitle }}
        </h1>
        <p class="text-lg sm:text-xl text-blue-200">{{ t.heroSubtitle }}</p>
        <p class="text-base sm:text-lg text-purple-200 italic">{{ t.heroTagline }}</p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            class="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Trophy class="w-5 h-5" /> {{ t.successStories }}
          </button>

          <button
            class="flex items-center gap-2 border-2 border-purple-300/60 text-purple-100 hover:bg-purple-500/30 hover:text-white px-8 py-4 rounded-lg transition-all">
            <BookOpen class="w-5 h-5" /> {{ t.tutorialsButton }}
          </button>
        </div>
      </div>

      <!-- Right Column -->
      <div class="flex-1 flex items-center justify-center">
        <div class="w-64 h-64 sm:w-72 sm:h-72 relative rounded-full overflow-hidden shadow-2xl">
          <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover rounded-full"
            style="transform: scale(1.8);">
            <source src="https://cdn.pixabay.com/video/2016/08/24/4788-180289892_large.mp4" type="video/mp4" />
          </video>
          <!-- Activity overlay: centered text that zooms in with a glowing effect -->
          <div class="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div class="text-center px-3">
              <div :key="currentActivityIndex" class="inline-block">
                <!-- Show the currently selected language only (like other UI text) -->
                <template v-if="language.value === 'bn'">
                  <div class="text-white text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight animate-zoomGlow">
                    {{ activities[currentActivityIndex].bn }}
                  </div>
                </template>
                <template v-else>
                  <div class="text-white text-lg sm:text-2xl md:text-3xl font-extrabold tracking-tight animate-zoomGlow">
                    {{ activities[currentActivityIndex].en }}
                  </div>
                </template>
                <!-- Screen reader friendly live region: announce the active string only -->
                <span class="sr-only" aria-live="polite">
                  {{ language.value === 'bn' ? activities[currentActivityIndex].bn : activities[currentActivityIndex].en }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>