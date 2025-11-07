<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, Moon, Sun } from 'lucide-vue-next' // Added dark mode icons

const { language, setLanguage, t } = useLanguage()
const isOpen = ref(false)
const route = useRoute()

const isActiveLink = (path) => route.path === path

// Language toggle
const toggleLanguage = () => {
  setLanguage(language.value === 'bn' ? 'en' : 'bn')
}

// Dark mode setup
const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

watchEffect(() => {
  applyTheme()
})

function applyTheme() {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <nav
    class="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink class="flex items-center gap-3 cursor-pointer" to="/">
          <img
            src="https://i.postimg.cc/yNjNMBdv/quantum-logo.png"
            alt="Logo"
            class="h-12 w-12"
          />
          <span
            class="text-blue-800 dark:text-blue-300 text-2xl sm:text-3xl font-bold"
          >
            {{ language === 'bn' ? 'আমরা পারি' : 'Amra Pari' }}
          </span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center md:space-x-1 lg:space-x-8">
          <!-- Home -->
          <RouterLink
            to="/"
            :class="[
              'px-3 py-2 rounded-md transition-colors duration-200',
              isActiveLink('/')
                ? 'bg-blue-800 text-white dark:bg-blue-600'
                : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-800 dark:hover:text-blue-400'
            ]"
          >
            {{ t.home }}
          </RouterLink>

          <!-- Success Stories -->
          <!-- <RouterLink
            to="/success-stories"
            :class="[
              'px-3 py-2 rounded-md transition-colors duration-200',
              isActiveLink('/success-stories')
                ? 'bg-blue-800 text-white dark:bg-blue-600'
                : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-800 dark:hover:text-blue-400'
            ]"
          >
            {{ t.success }}
          </RouterLink> -->

          <!-- Tutorials -->
          <RouterLink
            to="/tutorials"
            :class="[
              'px-3 py-2 rounded-md transition-colors duration-200',
              isActiveLink('/tutorials')
                ? 'bg-blue-800 text-white dark:bg-blue-600'
                : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-800 dark:hover:text-blue-400'
            ]"
          >
            {{ t.tutorials }}
          </RouterLink>

          <!-- Campus -->
          <RouterLink
            to="/campus"
            :class="[
              'px-3 py-2 rounded-md transition-colors duration-200',
              isActiveLink('/campus')
                ? 'bg-blue-800 text-white dark:bg-blue-600'
                : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-800 dark:hover:text-blue-400'
            ]"
          >
            {{ t.campus }}
          </RouterLink>

          <!-- Activities -->
          <RouterLink
            to="/activities"
            :class="[
              'px-3 py-2 rounded-md transition-colors duration-200',
              isActiveLink('/activities')
                ? 'bg-blue-800 text-white dark:bg-blue-600'
                : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-800 dark:hover:text-blue-400'
            ]"
          >
            {{ t.activities }}
          </RouterLink>

          <!-- Contact -->
          <RouterLink
            to="/contact"
            :class="[
              'px-3 py-2 rounded-md transition-colors duration-200',
              isActiveLink('/contact')
                ? 'bg-blue-800 text-white dark:bg-blue-600'
                : 'text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-800 dark:hover:text-blue-400'
            ]"
          >
            {{ t.contact }}
          </RouterLink>

          <!-- Language & Theme Switch -->
          <div
            class="flex items-center gap-2 border-l border-gray-300 dark:border-gray-700 pl-4"
          >
            <!-- Language -->
            <button
              @click="toggleLanguage"
              class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 
                     dark:bg-gray-700 dark:text-blue-200 dark:hover:bg-gray-600 transition-colors"
            >
              {{ language === 'bn' ? 'En' : 'Bn' }}
            </button>

            <!-- Dark mode toggle -->
            <button
              @click="toggleDarkMode"
              class="p-2 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 
                     dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-gray-600 transition-colors"
            >
              <component :is="isDark ? Sun : Moon" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <!-- Mobile Controls -->
        <div class="md:hidden flex items-center gap-3">
          <!-- Dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 
                   dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-gray-600 transition-colors"
          >
            <component :is="isDark ? Sun : Moon" class="h-5 w-5" />
          </button>

          <!-- Language toggle -->
          <button
            @click="toggleLanguage"
            class="px-2 py-1 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200 
                   dark:bg-gray-700 dark:text-blue-200 dark:hover:bg-gray-600 transition-colors"
          >
            {{ language === 'bn' ? 'En' : 'Bn' }}
          </button>

          <!-- Mobile Menu Toggle -->
          <button @click="isOpen = !isOpen" class="text-gray-700 dark:text-gray-200">
            <component :is="isOpen ? X : Menu" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      >
        <RouterLink
          to="/"
          :class="[
            'block nav-btn mobile-nav-btn',
            isActiveLink('/') ? 'bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-300' : ''
          ]"
          @click="isOpen = false"
        >
          {{ t.home }}
        </RouterLink>

        <RouterLink
          to="/success-stories"
          :class="[
            'block nav-btn mobile-nav-btn',
            isActiveLink('/success-stories') ? 'bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-300' : ''
          ]"
          @click="isOpen = false"
        >
          {{ t.success }}
        </RouterLink>

        <RouterLink
          to="/tutorials"
          :class="[
            'block nav-btn mobile-nav-btn',
            isActiveLink('/tutorials') ? 'bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-300' : ''
          ]"
          @click="isOpen = false"
        >
          {{ t.tutorials }}
        </RouterLink>

        <RouterLink
          to="/campus"
          :class="[
            'block nav-btn mobile-nav-btn',
            isActiveLink('/campus') ? 'bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-300' : ''
          ]"
          @click="isOpen = false"
        >
          {{ t.campus }}
        </RouterLink>

        <RouterLink
          to="/activities"
          :class="[
            'block nav-btn mobile-nav-btn',
            isActiveLink('/activities') ? 'bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-300' : ''
          ]"
          @click="isOpen = false"
        >
          {{ t.activities }}
        </RouterLink>

        <RouterLink
          to="/contact"
          :class="[
            'block nav-btn mobile-nav-btn',
            isActiveLink('/contact') ? 'bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-blue-300' : ''
          ]"
          @click="isOpen = false"
        >
          {{ t.contact }}
        </RouterLink>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.mobile-nav-btn {
  @apply block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 
         hover:bg-blue-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200;
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
