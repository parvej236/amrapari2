<script setup>
import { useLanguage } from '@/composables/useLanguage'
import { PlayCircle, Code2, Beaker, Paintbrush, Wrench } from 'lucide-vue-next'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const { t } = useLanguage()

// Tutorial categories with dual color settings
const tutorialCategories = computed(() => [
  {
    icon: Code2,
    title: 'Programming',
    videos: '45+',
    colorLight: 'text-blue-600',
    colorDark: 'text-blue-400',
    bgLight: 'bg-blue-50',
    bgDark: 'bg-blue-900/30'
  },
  {
    icon: Beaker,
    title: 'Science Experiments',
    videos: '30+',
    colorLight: 'text-purple-600',
    colorDark: 'text-purple-400',
    bgLight: 'bg-purple-50',
    bgDark: 'bg-purple-900/30'
  },
  {
    icon: Paintbrush,
    title: 'Creative Arts',
    videos: '25+',
    colorLight: 'text-pink-600',
    colorDark: 'text-pink-400',
    bgLight: 'bg-pink-50',
    bgDark: 'bg-pink-900/30'
  },
  {
    icon: Wrench,
    title: 'Skills & Projects',
    videos: '35+',
    colorLight: 'text-green-600',
    colorDark: 'text-green-400',
    bgLight: 'bg-green-50',
    bgDark: 'bg-green-900/30'
  }
])
</script>

<template>
  <section
    id="tutorials"
    class="py-12 bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2
          class="text-2xl sm:text-3xl font-semibold mb-2 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-purple-400"
        >
          {{ t.tutorialsTitle }}
        </h2>
        <div
          class="w-20 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 mx-auto mb-3 rounded-full"
        ></div>
        <p class="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {{ t.tutorialsDesc }}
        </p>
      </div>

      <!-- Tutorials Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div
          v-for="(category, index) in tutorialCategories"
          :key="index"
          class="rounded-xl p-4 text-center border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 bg-white dark:bg-gray-900/50"
        >
          <!-- Icon -->
          <div
            :class="[
              'w-12 h-12 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform',
              category.bgLight,
              'dark:' + category.bgDark
            ]"
          >
            <component
              :is="category.icon"
              :class="[
                'w-6 h-6',
                category.colorLight,
                'dark:' + category.colorDark
              ]"
            />
          </div>

          <!-- Title -->
          <h3 class="text-sm text-gray-900 dark:text-gray-100 mb-2">
            {{ category.title }}
          </h3>

          <!-- Videos Count -->
          <div
            class="flex items-center justify-center gap-1.5 text-gray-600 dark:text-gray-400"
          >
            <PlayCircle class="w-4 h-4" />
            <span class="text-xs">{{ category.videos }} Videos</span>
          </div>
        </div>
      </div>

      <!-- Explore Button -->
      <div class="text-center">
        <RouterLink
          to="/tutorials"
          class="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white px-6 py-2 rounded-full shadow-md text-sm transition-all duration-300"
        >
          {{ t.exploreTutorials }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
