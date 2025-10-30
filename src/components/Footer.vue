<script setup>
import { useLanguage } from '@/composables/useLanguage';
const { t, language } = useLanguage();
</script>

<template>
  <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- About -->
        <div>
          <h3 class="text-2xl mb-4">
            {{ language.value === 'bn' ? 'আমরা পারি' : 'We Can, We Will' }}
          </h3>
          <p class="text-gray-400 mb-4">{{ t.subtitle }}</p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg mb-4">Quick Links</h4>
          <div class="space-y-2">
            <a href="#home" class="block text-gray-400 hover:text-white transition-colors">{{ t.home }}</a>
            <a href="#about" class="block text-gray-400 hover:text-white transition-colors">{{ t.about }}</a>
            <a href="#activities" class="block text-gray-400 hover:text-white transition-colors">{{ t.activities }}</a>
            <a href="#contact" class="block text-gray-400 hover:text-white transition-colors">{{ t.contact }}</a>
          </div>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-lg mb-4">Connect With Us</h4>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
              <i class="pi pi-facebook text-white text-lg"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors" aria-label="YouTube">
              <i class="pi pi-youtube text-white text-lg"></i>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
              <i class="pi pi-instagram text-white text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-8 mt-8">
        <div class="text-center space-y-2">
          <p class="text-gray-400">{{ t.footerText }}</p>
          <p class="text-gray-500 flex items-center justify-center gap-2">
            {{ t.footerCopyright }}
            <span class="inline-flex items-center gap-1">
              <span>Made with</span>
              <i class="pi pi-heart text-red-500"></i>
              <span>by Quantas</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

