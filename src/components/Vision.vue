<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';
import { QuoteIcon, TargetIcon, LightbulbIcon, TrendingUpIcon } from 'lucide-vue-next';

const { t } = useLanguage();
</script>

<template>
  <section
    id="vision"
    class="py-8 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 relative overflow-hidden"
  >
    <!-- Background decorations -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <!-- Quote Icon -->
        <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
          <QuoteIcon class="w-6 h-6 text-blue-600" />
        </div>

        <!-- Title -->
        <h2
          class="text-2xl sm:text-3xl mb-3 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {{ t.visionTitle }}
        </h2>

        <!-- Quote -->
        <blockquote
          class="text-lg sm:text-xl lg:text-2xl leading-relaxed italic mb-4 text-gray-700 max-w-4xl mx-auto"
        >
          {{ t.visionQuote }}
        </blockquote>

        <!-- Badges -->
        <div class="flex justify-center gap-2 flex-wrap">
          <div
            class="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-yellow-200 shadow-sm flex items-center gap-1.5"
          >
            <LightbulbIcon class="w-3.5 h-3.5 text-yellow-600" />
            <span class="text-sm text-yellow-700">Innovation</span>
          </div>
          <div
            class="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-green-200 shadow-sm flex items-center gap-1.5"
          >
            <TrendingUpIcon class="w-3.5 h-3.5 text-green-600" />
            <span class="text-sm text-green-700">Excellence</span>
          </div>
          <div
            class="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-200 shadow-sm flex items-center gap-1.5"
          >
            <TargetIcon class="w-3.5 h-3.5 text-blue-600" />
            <span class="text-sm text-blue-700">Impact</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

