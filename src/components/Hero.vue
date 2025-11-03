<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { Sunrise, Trophy, BookOpen } from 'lucide-vue-next'
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

const animDuration = 5000 // total duration for each animation
const overlap = 2500 // start next text before previous finishes (overlap timing)

const slotA = ref({ text: '', active: false })
const slotB = ref({ text: '', active: false })
let currentIndex = 0
let timer = null

function getText(index) {
  return language.value === 'bn' ? activities[index].bn : activities[index].en
}

function playSlot(slotRef, text) {
  slotRef.value.text = text
  slotRef.value.active = false
  void document.body.offsetWidth // force reflow
  slotRef.value.active = true
}

function startLoop() {
  // initialize first
  slotA.value.text = getText(0)
  slotA.value.active = true
  currentIndex = 0

  timer = setInterval(() => {
    // next index looping
    currentIndex = (currentIndex + 1) % activities.length
    const nextText = getText(currentIndex)

    // alternate slot between A and B
    const nextSlot = slotA.value.active ? slotB : slotA
    playSlot(nextSlot, nextText)

    // deactivate after full animation
    setTimeout(() => {
      nextSlot.value.active = false
    }, animDuration)
  }, overlap)
}

onMounted(() => startLoop())
onUnmounted(() => clearInterval(timer))

// react when language changes
watch(language, () => {
  slotA.value.text = getText(currentIndex)
  slotB.value.text = getText((currentIndex + 1) % activities.length)
})
</script>

<template>
  <section
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#16213e] to-[#0f3460] px-4 sm:px-6 lg:px-8"
  >
    <div class="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950"></div>

    <div class="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 sm:gap-12 min-h-[auto] lg:min-h-screen">
      
      <!-- Left section (same as yours) -->
      <div class="flex-1 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-full shadow-lg border border-cyan-300/30">
          <Sunrise class="w-4 h-4 text-yellow-300 animate-pulse" />
          <span class="text-white text-sm font-medium">{{ t.heroMotivation }}</span>
        </div>

        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">{{ t.heroTitle }}</h1>
        <p class="text-lg sm:text-xl text-blue-200">{{ t.heroSubtitle }}</p>
        <p class="text-base sm:text-lg text-purple-200 italic">{{ t.heroTagline }}</p>

        <div class="flex gap-4 justify-center lg:justify-start">
          <RouterLink to="/success-stories"
            class="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
            <Trophy class="w-5 h-5" /> {{ t.successStories }}
          </RouterLink>

          <RouterLink to="/tutorials"
            class="flex items-center gap-2 border-2 border-purple-300/60 text-purple-100 hover:bg-purple-500/30 hover:text-white px-4 py-2 rounded-full transition-all">
            <BookOpen class="w-5 h-5" /> {{ t.tutorialsButton }}
          </RouterLink>
        </div>
      </div>

      <!-- Right: Animation -->
      <div class="flex-1 flex items-center justify-center mt-10 lg:mt-0">
        <div class="w-64 h-64 sm:w-72 sm:h-72 relative rounded-full overflow-hidden shadow-2xl">
          <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover rounded-full" style="transform: scale(1.8)">
            <source src="https://cdn.pixabay.com/video/2016/08/24/4788-180289892_large.mp4" type="video/mp4" />
          </video>

          <!-- Animated text overlay -->
          <div class="absolute inset-0 z-20 flex items-center justify-center overflow-hidden pointer-events-none">
            <!-- slot A -->
            <span
              class="absolute text-white text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap animate-earthMove"
              :class="{ active: slotA.active }"
              >{{ slotA.text }}</span>

            <!-- slot B -->
            <span
              class="absolute text-white text-2xl md:text-3xl font-extrabold tracking-tight whitespace-nowrap animate-earthMove"
              :class="{ active: slotB.active }"
              >{{ slotB.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes earthMove {
  0% {
    transform: translateX(100%) scale(0.2);
    opacity: 0;
  }
  20% {
    transform: translateX(50%) scale(0.6);
    opacity: 1;
  }
  40% {
    transform: translateX(0%) scale(1);
    opacity: 1;
  }
  70% {
    transform: translateX(-50%) scale(0.6);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%) scale(0.2);
    opacity: 0;
  }
}

.animate-earthMove {
  opacity: 0;
  transform: translateX(100%) scale(0.2);
}

.animate-earthMove.active {
  animation: earthMove 5s ease-in-out forwards;
  opacity: 1;
}
</style>
