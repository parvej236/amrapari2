<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { GraduationCap, ChevronLeft, ChevronRight } from 'lucide-vue-next';

import { useLanguage } from '@/composables/useLanguage';

// Testimonials array (copy your array here or import from a file)
import testimonials from '@/assets/data/testimonials.js';

const { t, language } = useLanguage();

const currentPage = ref(0);
const itemsPerPage = ref(3);

const updateItemsPerPage = () => {
  if (window.innerWidth < 768) {
    itemsPerPage.value = 1;
  } else if (window.innerWidth < 1024) {
    itemsPerPage.value = 2;
  } else {
    itemsPerPage.value = 3;
  }
};

const totalPages = computed(() => Math.ceil(testimonials.length / itemsPerPage.value));
const currentTestimonials = computed(() => {
  const start = currentPage.value * itemsPerPage.value;
  return testimonials.slice(start, start + itemsPerPage.value);
});

const goToNextPage = () => {
  currentPage.value = (currentPage.value + 1) % totalPages.value;
};
const goToPreviousPage = () => {
  currentPage.value = (currentPage.value - 1 + totalPages.value) % totalPages.value;
};

const handleKeyDown = (e) => {
  if (e.key === 'ArrowLeft') goToPreviousPage();
  if (e.key === 'ArrowRight') goToNextPage();
};

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener('resize', updateItemsPerPage);
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage);
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl sm:text-5xl mb-3 text-gray-900">{{ t.testimonialsTitle }}</h2>
        <p class="text-base text-gray-600 max-w-2xl mx-auto">{{ t.testimonialsSubtitle }}</p>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
      </div>

      <!-- Navigation -->
      <div class="relative">
        <!-- Left Arrow -->
        <button
          @click="goToPreviousPage"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 z-10 border border-gray-200"
        >
          <ChevronLeft class="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="testimonial in currentTestimonials"
            :key="testimonial.id"
            class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col h-full"
          >
            <!-- Profile Image -->
            <div class="flex justify-center mb-3 relative">
              <div class="w-16 h-16 rounded-full overflow-hidden shadow-md ring-2 ring-blue-100">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name[language]"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md"
              >
                <GraduationCap class="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            <!-- Name -->
            <h3 class="text-center text-base text-gray-900 mb-1">{{ testimonial.name[language] }}</h3>

            <!-- Institution & Year -->
            <p class="text-center text-xs text-gray-500 mb-2">{{ testimonial.institution[language] }}</p>
            <p class="text-center text-xs text-blue-600 mb-3">{{ testimonial.year[language] }}</p>

            <!-- Quote -->
            <div class="relative mb-4 flex-grow bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border-l-4 border-blue-500">
              <div class="absolute -top-1 -left-1 text-5xl text-blue-400 leading-none font-serif">"</div>
              <p class="text-center text-base text-gray-900 font-bold italic leading-relaxed px-3 pt-2">
                {{ testimonial.quote[language] }}
              </p>
              <div class="absolute -bottom-2 -right-1 text-5xl text-purple-400 leading-none font-serif rotate-180">"</div>
            </div>

            <!-- Session & Quanta ID -->
            <div class="pt-3 border-t border-gray-100">
              <div class="flex flex-col items-center gap-1 text-xs text-gray-400">
                <span>{{ testimonial.session[language] }}</span>
                <span class="text-blue-500">{{ testimonial.quantaId }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          @click="goToNextPage"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 z-10 border border-gray-200"
        >
          <ChevronRight class="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </div>

      <!-- Pagination Dots -->
      <div class="flex justify-center gap-2 mt-8">
        <button
          v-for="index in totalPages"
          :key="index"
          @click="currentPage = index - 1"
          :class="[
            'transition-all duration-300 rounded-full',
            currentPage === index - 1
              ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-purple-600'
              : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
          ]"
        />
      </div>

      <!-- Additional Info -->
      <div class="mt-12 text-center">
        <p class="text-sm text-gray-500">
          {{ language === 'bn'
            ? '💙 আরও অনেক কোয়ান্টারা দেশ-বিদেশে সফলতার পথে এগিয়ে চলেছে'
            : '💙 Many more Quantars are moving forward on the path of success at home and abroad'
          }}
        </p>
      </div>
    </div>
  </section>
</template>


