<script setup>
import { ref } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import { RouterLink, useRoute } from 'vue-router';

// Import Lucide icons (optional if you already have them set up)
import { Menu, X, Globe } from 'lucide-vue-next';

const { language, setLanguage, t } = useLanguage();

const isOpen = ref(false);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path == routePath;
}

// language toggle
const toggleLanguage = () => {
  setLanguage(language.value === 'bn' ? 'en' : 'bn');
};
</script>

<template>
  <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink class="flex items-center gap-3 cursor-pointer" to="/">
          <img src="https://i.postimg.cc/yNjNMBdv/quantum-logo.png" alt="Logo" class="h-12 w-12" />
          <span class="text-blue-800 text-2xl sm:text-3xl font-bold">
            {{ language === 'bn' ? 'আমরা পারি' : 'We Can' }}
          </span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink to="/"
            :class="['px-3 py-2 rounded-md transition-colors duration-200', isActiveLink('/') ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800']">
            {{ t.home }} </RouterLink>
          <RouterLink to="/success-stories"
            :class="['px-3 py-2 rounded-md transition-colors duration-200', isActiveLink('/success-stories') ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800']">
            {{ t.success }}</RouterLink>
          <RouterLink to="/tutorials"
            :class="['px-3 py-2 rounded-md transition-colors duration-200', isActiveLink('/tutorials') ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800']">
            {{ t.tutorials }}</RouterLink>
          <RouterLink to="/campus"
            :class="['px-3 py-2 rounded-md transition-colors duration-200', isActiveLink('/campus') ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800']">
            {{ t.campus }}</RouterLink>
          <RouterLink to="/activities"
            :class="['px-3 py-2 rounded-md transition-colors duration-200', isActiveLink('/activities') ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800']">
            {{ t.activities }}</RouterLink>
          <RouterLink to="/contact"
            :class="['px-3 py-2 rounded-md transition-colors duration-200', isActiveLink('/contact') ? 'bg-blue-800 text-white' : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800']">
            {{ t.contact }}</RouterLink>

          <!-- Language Switch -->
          <div class="flex items-center gap-2 border-l pl-4">
            <Globe class="w-4 h-4 text-gray-600" />
            <button @click="toggleLanguage"
              class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
              {{ language === 'bn' ? 'En' : 'Bn' }}
            </button>
          </div>
        </div>

        <!-- Mobile Controls -->
        <div class="md:hidden flex items-center gap-3">
          <button @click="toggleLanguage" class="px-2 py-1 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
            {{ language === 'bn' ? 'En' : 'Bn' }}
          </button>
          <button @click="isOpen = !isOpen" class="text-gray-700">
            <component :is="isOpen ? X : Menu" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200">
        <RouterLink to="/"
          :class="['block nav-btn mobile-nav-btn', isActiveLink('/') ? 'bg-blue-50 text-blue-800' : '']"
          @click="isOpen = false">
          {{ t.home }}</RouterLink>
        <RouterLink to="/success-stories"
          :class="['block nav-btn mobile-nav-btn', isActiveLink('/success-stories') ? 'bg-blue-50 text-blue-800' : '']"
          @click="isOpen = false">
          {{ t.success }}</RouterLink>
        <RouterLink to="/tutorials"
          :class="['block nav-btn mobile-nav-btn', isActiveLink('/tutorials') ? 'bg-blue-50 text-blue-800' : '']"
          @click="isOpen = false">
          {{ t.tutorials }}</RouterLink>
        <RouterLink to="/campus"
          :class="['block nav-btn mobile-nav-btn', isActiveLink('/campus') ? 'bg-blue-50 text-blue-800' : '']"
          @click="isOpen = false">
          {{ t.campus }}</RouterLink>
        <RouterLink to="/activities"
          :class="['block nav-btn mobile-nav-btn', isActiveLink('/activities') ? 'bg-blue-50 text-blue-800' : '']"
          @click="isOpen = false">
          {{ t.activities }}</RouterLink>
        <RouterLink to="/contact"
          :class="['block nav-btn mobile-nav-btn', isActiveLink('/contact') ? 'bg-blue-50 text-blue-800' : '']"
          @click="isOpen = false">
          {{ t.contact }}</RouterLink>
      </div>

    </transition>
  </nav>
</template>

<style scoped>

.mobile-nav-btn {
  @apply block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
