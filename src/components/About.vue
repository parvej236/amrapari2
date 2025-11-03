<script setup lang="ts">
import { useLanguage } from '@/composables/useLanguage';
import { BookOpenIcon, UsersIcon, TargetIcon } from 'lucide-vue-next';

const { t } = useLanguage();
</script>

<template>
  <section
    id="about"
    class="py-20 bg-white text-gray-900 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-100"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl mb-6 font-semibold">
          {{ t.aboutTitle }}
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"
        ></div>
      </div>

      <!-- Content Grid -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Column -->
        <div class="space-y-6">
          <!-- Step 1 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center"
              >
                <BookOpenIcon class="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ t.aboutDesc1 }}
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center"
              >
                <UsersIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div>
              <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ t.aboutDesc2 }}
              </p>
            </div>
          </div>

          <!-- Info Cards -->
          <div class="mt-8 grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div class="text-center">
              <TargetIcon class="text-green-600 dark:text-green-400 w-8 h-8 mb-2 mx-auto" />
              <p class="text-sm text-gray-600 dark:text-gray-400">Excellence</p>
            </div>
            <div class="text-center">
              <BookOpenIcon class="text-blue-600 dark:text-blue-400 w-8 h-8 mb-2 mx-auto" />
              <p class="text-sm text-gray-600 dark:text-gray-400">Innovation</p>
            </div>
            <div class="text-center">
              <UsersIcon class="text-purple-600 dark:text-purple-400 w-8 h-8 mb-2 mx-auto" />
              <p class="text-sm text-gray-600 dark:text-gray-400">Unity</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Video -->
        <div class="relative">
          <div
            class="aspect-video rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 shadow-xl overflow-hidden"
          >
            <div
              class="w-full h-full bg-black/90 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center"
            >
              <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/lirOtwgGcgs"
                title="আমরা পারি Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div
            class="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 dark:bg-green-400 rounded-full opacity-20 blur-2xl"
          ></div>
          <div
            class="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 dark:bg-blue-400 rounded-full opacity-20 blur-2xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
