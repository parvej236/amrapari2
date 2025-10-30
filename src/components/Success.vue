<script setup>
import { useLanguage } from '@/composables/useLanguage';
import { Trophy, Award, Medal, Star } from 'lucide-vue-next';
import { ref, computed } from 'vue';

// Props
defineProps({
  onNavigateToSuccess: Function
});

const { t } = useLanguage();

// Achievements array
const achievements = computed(() => [
  { icon: Trophy, label: 'National Sports', count: '15+', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: Award, label: 'Science Fairs', count: '20+', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Medal, label: 'Cultural Events', count: '25+', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: Star, label: 'Debate Competitions', count: '10+', color: 'text-orange-600', bg: 'bg-orange-50' },
]);
</script>

<template>
  <section id="success" class="py-8 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-6">
        <h2 class="text-2xl sm:text-3xl mb-2 text-gray-900">{{ t.successTitle }}</h2>
        <div class="w-16 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-3"></div>
        <p class="text-sm text-gray-600 max-w-2xl mx-auto">{{ t.successDesc }}</p>
      </div>

      <!-- Achievements Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div
          v-for="(achievement, index) in achievements"
          :key="index"
          :class="`${achievement.bg} rounded-lg p-4 text-center hover:shadow-md transition-shadow`"
        >
          <component :is="achievement.icon" :class="`w-8 h-8 ${achievement.color} mx-auto mb-2`" />
          <div class="text-2xl text-gray-900 mb-1">{{ achievement.count }}</div>
          <p class="text-xs text-gray-600">{{ achievement.label }}</p>
        </div>
      </div>

      <!-- Button -->
      <div class="text-center">
        <button
          @click="$props.onNavigateToSuccess?.()"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md text-sm"
        >
          {{ t.viewAll }}
        </button>
      </div>
    </div>
  </section>
</template>
