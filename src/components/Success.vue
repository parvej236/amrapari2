<script setup>
import { useLanguage } from '@/composables/useLanguage'
import { Trophy, Award, Medal, Star } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

// Props
defineProps({
  onNavigateToSuccess: Function
})

const { t } = useLanguage()

// Achievements array
const achievements = computed(() => [
  {
    icon: Trophy,
    label: 'National Sports',
    count: '15+',
    colorLight: 'text-green-600',
    colorDark: 'text-green-400',
    bgLight: 'bg-green-50',
    bgDark: 'bg-green-900/30'
  },
  {
    icon: Award,
    label: 'Science Fairs',
    count: '20+',
    colorLight: 'text-blue-600',
    colorDark: 'text-blue-400',
    bgLight: 'bg-blue-50',
    bgDark: 'bg-blue-900/30'
  },
  {
    icon: Medal,
    label: 'Cultural Events',
    count: '25+',
    colorLight: 'text-purple-600',
    colorDark: 'text-purple-400',
    bgLight: 'bg-purple-50',
    bgDark: 'bg-purple-900/30'
  },
  {
    icon: Star,
    label: 'Debate Competitions',
    count: '10+',
    colorLight: 'text-orange-600',
    colorDark: 'text-orange-400',
    bgLight: 'bg-orange-50',
    bgDark: 'bg-orange-900/30'
  }
])
</script>

<template>
  <section
    id="success"
    class="py-12 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2
          class="text-2xl sm:text-3xl font-semibold mb-2 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
        >
          {{ t.successTitle }}
        </h2>
        <div
          class="w-20 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 mx-auto mb-3 rounded-full"
        ></div>
        <p class="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t.successDesc }}
        </p>
      </div>

      <!-- Achievements Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          class="rounded-xl p-5 text-center border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
          :class="[achievement.bgLight, 'dark:' + achievement.bgDark]"
        >
          <component
            :is="achievement.icon"
            :class="[
              'w-8 h-8 mx-auto mb-2 transition-colors',
              achievement.colorLight,
              'dark:' + achievement.colorDark
            ]"
          />
          <div class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
            {{ achievement.count }}
          </div>
          <p class="text-xs text-gray-600 dark:text-gray-400">
            {{ achievement.label }}
          </p>
                    <!-- Explore Button -->
          <div class="text-center">
            <RouterLink to="/sucess-stories"
              class="inline-block mt-2 hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400 text-blue-700 hover:text-white px-6 py-2 rounded-full shadow-md text-sm transition-all duration-300">
              {{ t.exploreActivity }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
