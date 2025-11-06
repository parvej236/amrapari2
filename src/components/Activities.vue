<script setup>
import { useLanguage } from '@/composables/useLanguage'
import { Code, Beaker, Palette, Trophy, Music } from 'lucide-vue-next'
import { computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const { t } = useLanguage()

const activities = computed(() => [
  {
    icon: Code,
    title: t.value.ictTitle,
    description: t.value.ictDesc,
    color: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50',
    darkBg: 'bg-blue-900/30',
    iconColorLight: 'text-blue-600',
    iconColorDark: 'text-blue-400'
  },
  {
    icon: Beaker,
    title: t.value.scienceTitle,
    description: t.value.scienceDesc,
    color: 'from-purple-500 to-pink-500',
    lightBg: 'bg-purple-50',
    darkBg: 'bg-purple-900/30',
    iconColorLight: 'text-purple-600',
    iconColorDark: 'text-purple-400'
  },
  {
    icon: Palette,
    title: t.value.creativityTitle,
    description: t.value.creativityDesc,
    color: 'from-orange-500 to-red-500',
    lightBg: 'bg-orange-50',
    darkBg: 'bg-orange-900/30',
    iconColorLight: 'text-orange-600',
    iconColorDark: 'text-orange-400'
  },
  {
    icon: Trophy,
    title: t.value.sportsTitle,
    description: t.value.sportsDesc,
    color: 'from-green-500 to-emerald-500',
    lightBg: 'bg-green-50',
    darkBg: 'bg-green-900/30',
    iconColorLight: 'text-green-600',
    iconColorDark: 'text-green-400'
  },
  {
    icon: Music,
    title: t.value.bandTitle,
    description: t.value.bandDesc,
    color: 'from-indigo-500 to-blue-500',
    lightBg: 'bg-indigo-50',
    darkBg: 'bg-indigo-900/30',
    iconColorLight: 'text-indigo-600',
    iconColorDark: 'text-indigo-400'
  }
])
</script>

<template>
  <section id="activities"
    class="py-12 bg-white text-gray-900 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-100 transition-colors duration-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-8">
        <h2
          class="text-2xl sm:text-3xl mb-2 font-semibold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-green-400 dark:via-blue-400 dark:to-purple-400">
          {{ t.activitiesTitle }}
        </h2>
        <div
          class="w-20 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 mx-auto rounded-full">
        </div>
      </div>

      <!-- Activities Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div v-for="(activity, index) in activities" :key="index"
          class="group rounded-xl border border-gray-100 bg-white/80 dark:border-gray-700 dark:bg-gray-800/40 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
          <!-- Icon -->
          <div :class="[
            'w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110',
            activity.lightBg,
            'dark:' + activity.darkBg
          ]">
            <component :is="activity.icon" :class="[
              'w-6 h-6 transition-colors',
              activity.iconColorLight,
              'dark:' + activity.iconColorDark
            ]" />
          </div>

          <!-- Title -->
          <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1 line-clamp-2">
            {{ activity.title }}
          </h3>

          <!-- Description -->
          <p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
            {{ activity.description }}
          </p>
          <!-- Explore Button -->
          <div class="text-center">
            <BaseButton to="/tutorials" :label="t.exploreActivity" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
