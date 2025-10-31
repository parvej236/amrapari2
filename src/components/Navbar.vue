<script setup>
import { ref } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
import { RouterLink } from 'vue-router';

// Import Lucide icons (optional if you already have them set up)
import { Menu, X, Globe } from 'lucide-vue-next';

const { language, setLanguage, t } = useLanguage();

const isOpen = ref(false);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    isOpen.value = false;
  }
};

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
        <div class="flex items-center gap-3 cursor-pointer" @click="scrollToSection('home')">
          <img 
            src="https://i.postimg.cc/yNjNMBdv/quantum-logo.png" 
            alt="Logo"
            class="h-12 w-12"
          />
          <h1 class="text-gray-800">
            {{ language === 'bn' ? 'আমরা পারি' : 'We Can, We Will' }}
          </h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <button @click="scrollToSection('home')" class="nav-btn">{{ t.home }}</button>
          <RouterLink to="/success-stories" class="nav-btn">{{ t.success }}</RouterLink>
          <button @click="scrollToSection('tutorials')" class="nav-btn">{{ t.tutorials }}</button>
          <button @click="scrollToSection('campus')" class="nav-btn">{{ t.campus }}</button>
          <button @click="scrollToSection('activities')" class="nav-btn">{{ t.activities }}</button>
          <button @click="scrollToSection('contact')" class="nav-btn">{{ t.contact }}</button>

          <!-- Language Switch -->
          <div class="flex items-center gap-2 border-l pl-4">
            <Globe class="w-4 h-4 text-gray-600" />
            <button
              @click="toggleLanguage"
              class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
            >
              {{ language === 'bn' ? 'Bn' : 'En' }}
            </button>
          </div>
        </div>

        <!-- Mobile Controls -->
        <div class="md:hidden flex items-center gap-3">
          <button
            @click="toggleLanguage"
            class="px-2 py-1 rounded-md bg-green-50 text-green-700"
          >
            {{ language === 'bn' ? 'Bn' : 'En' }}
          </button>
          <button @click="isOpen = !isOpen" class="text-gray-700">
            <component :is="isOpen ? X : Menu" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-white border-t">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button @click="scrollToSection('home')" class="mobile-nav-btn">{{ t.home }}</button>
          <button @click="scrollToSection('success')" class="mobile-nav-btn">{{ t.success }}</button>
          <button @click="scrollToSection('tutorials')" class="mobile-nav-btn">{{ t.tutorials }}</button>
          <button @click="scrollToSection('campus')" class="mobile-nav-btn">{{ t.campus }}</button>
          <button @click="scrollToSection('activities')" class="mobile-nav-btn">{{ t.activities }}</button>
          <button @click="scrollToSection('contact')" class="mobile-nav-btn">{{ t.contact }}</button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.nav-btn {
  @apply text-gray-700 hover:text-green-600 transition-colors duration-200;
}
.mobile-nav-btn {
  @apply block w-full text-left px-3 py-2 text-gray-700 hover:bg-green-50 rounded-md transition-colors duration-200;
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
