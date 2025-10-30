<script setup>
import { useLanguage } from '@/composables/useLanguage';
import { PlayCircle, Code2, Beaker, Paintbrush, Wrench } from 'lucide-vue-next';
import { computed } from 'vue';

// Props
defineProps({
  onNavigateToTutorials: Function
});

const { t } = useLanguage();

// Tutorial categories
const tutorialCategories = computed(() => [
  { icon: Code2, title: 'Programming', color: 'text-blue-600', bg: 'bg-blue-50', videos: '45+' },
  { icon: Beaker, title: 'Science Experiments', color: 'text-purple-600', bg: 'bg-purple-50', videos: '30+' },
  { icon: Paintbrush, title: 'Creative Arts', color: 'text-pink-600', bg: 'bg-pink-50', videos: '25+' },
  { icon: Wrench, title: 'Skills & Projects', color: 'text-green-600', bg: 'bg-green-50', videos: '35+' },
]);
</script>

<template>
  <section id="tutorials" class="py-8 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-6">
        <h2 class="text-2xl sm:text-3xl mb-2 text-gray-900">{{ t.tutorialsTitle }}</h2>
        <div class="w-16 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-3"></div>
        <p class="text-sm text-gray-600 max-w-2xl mx-auto">{{ t.tutorialsDesc }}</p>
      </div>

      <!-- Tutorials Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div
          v-for="(category, index) in tutorialCategories"
          :key="index"
          class="bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-all duration-300 group"
        >
          <div :class="`w-12 h-12 ${category.bg} rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`">
            <component :is="category.icon" :class="`w-6 h-6 ${category.color}`" />
          </div>
          <h3 class="text-sm text-gray-900 text-center mb-2">{{ category.title }}</h3>
          <div class="flex items-center justify-center gap-1.5 text-gray-600">
            <PlayCircle class="w-4 h-4" />
            <span class="text-xs">{{ category.videos }} Videos</span>
          </div>
        </div>
      </div>

      <!-- Explore Button -->
      <div class="text-center">
        <button
          @click="$props.onNavigateToTutorials?.()"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md text-sm"
        >
          {{ t.exploreTutorials }}
        </button>
      </div>
    </div>
  </section>
</template>
