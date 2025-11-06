<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { Sunrise, Trophy, Play } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const { t, language } = useLanguage()

const activities = [
  { bn: 'আইসিটি', en: 'ICT' },
  { bn: 'বিজ্ঞান', en: 'Science' },
  { bn: 'রোবটিক্স', en: 'Robotics' },
  { bn: 'মেধা সৃজন', en: 'Cultural' },
  { bn: 'স্পোর্টস', en: 'Sports' },
  { bn: 'ব্যান্ড ও কুচকাওয়াজ', en: 'Band & Parade' }
]
</script>

<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#16213e] to-[#0f3460] px-4 sm:px-6 lg:px-8">
    <div class="absolute mt-1 inset-0 z-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>

    <div
      class="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 sm:gap-12 min-h-[auto] lg:min-h-screen">
      <!-- Left section-->
      <div class="flex-1 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-full shadow-lg border border-cyan-300/30">
          <Sunrise class="w-4 h-4 text-yellow-300 animate-pulse" />
          <span class="text-white text-sm font-medium">{{ t.heroMotivation }}</span>
        </div>

        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">{{ t.heroTitle }}</h1>
        <p class="text-lg sm:text-xl text-blue-200">{{ t.heroSubtitle }}</p>
        <p class="text-base sm:text-lg text-purple-200 italic">{{ t.heroTagline }}</p>

        <div class="flex gap-4 justify-center lg:justify-start">
          <RouterLink to="/success-stories"
            class="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
            <Trophy class="w-5 h-5" /> {{ t.successStories }}
          </RouterLink>
          <RouterLink to="/tutorials"
            class="relative group px-[1.5px] py-[1.5px] rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-green-600 bg-[length:200%_200%] animate-border">
            <div
              class="flex items-center gap-2 px-5 py-2 rounded-full bg-[#0a0e27] text-purple-100 group-hover:bg-green-500/20 transition-all duration-300">
              <Play class="w-5 h-5" /> {{ t.tutorialsButton }}
            </div>
          </RouterLink>
        </div>
      </div>

      <!-- Right Section: Earth Video and Animated Activities -->
      <div class="flex-1 flex items-center justify-center mt-0 lg:mt-0">
        <div class="w-64 h-64 sm:w-72 sm:h-72 relative rounded-full overflow-hidden shadow-2xl">
          <!-- Earth Video -->
          <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover rounded-full"
            style="transform: scale(1.8)">
            <source src="https://cdn.pixabay.com/video/2016/08/24/4788-180289892_large.mp4" type="video/mp4" />
          </video>

          <!-- Animated Activities (Seamless continuous scroll) -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="relative w-full h-[2rem] overflow-hidden flex items-center justify-center">
              <div class="animate-slide whitespace-nowrap text-white text-xl font-semibold drop-shadow-lg flex">
                <!-- First copy -->
                <span v-for="(activity, index) in activities" :key="'a' + index" class="inline-block mx-10">
                  {{ activity[language] }}
                </span>
                <!-- Second copy (for seamless looping) -->
                <span v-for="(activity, index) in activities" :key="'b' + index"
                  class="inline-block mx-10 animate-pulse">
                  {{ activity[language] }}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide {
  0% {
    transform: translateX(0) scale(0.9);
    opacity: 0.6;
  }

  25% {
    transform: translateX(-12.5%) scale(1);
    opacity: 1;
  }

  75% {
    transform: translateX(-37.5%) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) scale(0.9);
    opacity: 0.6;
  }
}

.animate-slide {
  display: flex;
  width: max-content;
  animation: slide 20s linear infinite;
}

@keyframes borderMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animate-border {
  animation: borderMove 4s linear infinite;
}
</style>