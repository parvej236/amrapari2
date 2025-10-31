<script setup>
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  Medal,
  Star,
  Calendar,
  Code,
  Beaker,
  Palette,
  Dumbbell,
  Music,
  Search,
  Filter,
  RefreshCcw
} from 'lucide-vue-next'
import { ref, computed } from 'vue'
import successStories from '@/assets/data/successStories.js'
import { useLanguage } from '@/composables/useLanguage'

// Props
defineProps({
  onBackToHome: Function,
  onViewDetail: Function
})

// Language
const { t, language } = useLanguage()

// Search and Filter
const searchQuery = ref('')
const selectedCategory = ref('all')

// Categories array from unique categories in stories
const categories = computed(() => {
  const uniqueCategories = [...new Set(successStories.map(story => story.category))]
  return ['all', ...uniqueCategories]
})

// Filtered stories based on search and category
const filteredStories = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  // Filter by search and category
  const filtered = successStories.filter(story => {
    const titleEn = story.titleEn.toLowerCase()
    const descEn = story.descriptionEn.toLowerCase()
    const titleBn = story.titleBn.toLowerCase()
    const descBn = story.descriptionBn.toLowerCase()

    // Search in both languages
    const matchesSearch =
      titleEn.includes(query) ||
      descEn.includes(query) ||
      titleBn.includes(query) ||
      descBn.includes(query)

    const matchesCategory = selectedCategory.value === 'all' || story.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })

  // Sort descending by id
  return filtered.sort((a, b) => b.id - a.id)
})


// Reset filters
function resetFilters() {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  currentPage.value = 1
}

// Pagination
const currentPage = ref(1)
const itemsPerPage = 6
const totalPages = computed(() => Math.ceil(filteredStories.value.length / itemsPerPage))

const paginatedStories = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredStories.value.slice(start, start + itemsPerPage)
})

// Date formatter
function formatDate(dateString) {
  const date = new Date(dateString)
  return language.value === 'bn'
    ? date.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })
    : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Pagination functions
function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const categoryColors = {
  education: 'bg-blue-100 text-blue-700',
  sports: 'bg-purple-100 text-purple-700',
  band: 'bg-green-100 text-green-700',
  creativity: 'bg-orange-100 text-orange-700',
  science: 'bg-pink-100 text-pink-700',
}

</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
    <!-- Header -->
    <div class="bg-gradient-to-r from-blue-800 to-blue-600 text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-900/20 rounded-full blur-2xl"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <button @click="$router.push('/')"
          class="flex items-center text-white bg-white/20 hover:bg-white/40 my-2 mb-4 px-3 py-2 rounded-md transition">
          <ArrowLeft class="w-4 h-4 mr-2" />
          {{ t.backToHome }}
        </button>

        <div class="grid md:grid-cols-2 gap-6 items-center">
          <!-- Left: icons -->
          <div class="hidden md:block">
            <div class="relative w-full max-w-xs mx-auto h-[240px]">
              <div class="absolute inset-0 flex items-center justify-center">
                <div
                  class="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                  <Trophy class="w-16 h-16 text-yellow-300" />
                </div>
              </div>

              <!-- Floating icons -->
              <div
                class="absolute top-0 left-0 w-14 h-14 bg-blue-500/80 rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-[0s]">
                <Code class="w-7 h-7 text-white" />
              </div>
              <div
                class="absolute top-0 right-0 w-14 h-14 bg-purple-500/80 rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-[0.5s]">
                <Beaker class="w-7 h-7 text-white" />
              </div>
              <div
                class="absolute bottom-0 left-0 w-14 h-14 bg-orange-500/80 rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-[1s]">
                <Palette class="w-7 h-7 text-white" />
              </div>
              <div
                class="absolute bottom-0 right-0 w-14 h-14 bg-green-500/80 rounded-xl flex items-center justify-center shadow-lg animate-bounce delay-[1.5s]">
                <Dumbbell class="w-7 h-7 text-white" />
              </div>
              <div
                class="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-indigo-500/80 rounded-full flex items-center justify-center shadow-lg">
                <Music class="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <!-- Right: Title + Stats -->
          <div>
            <div class="flex items-center gap-3 mb-3">
              <Trophy class="w-10 h-10 md:hidden" />
              <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">{{ t.successPageTitle }}</h1>
            </div>
            <p class="text-lg text-white/90 mb-4">{{ t.successPageSubtitle }}</p>

            <div class="grid grid-cols-3 gap-3">
              <div class="bg-white/10 rounded-lg p-3 border border-white/20 text-center">
                <Trophy class="mx-auto w-6 h-6 mb-1 text-green-400" />
                <div class="text-lg font-semibold">15+</div>
                <p class="text-xs text-white/80">{{ language === 'bn' ? 'সাফল্য' : 'Success' }}</p>
              </div>
              <div class="bg-white/10 rounded-lg p-3 border border-white/20 text-center">
                <Medal class="mx-auto w-6 h-6 mb-1 text-orange-400" />
                <div class="text-lg font-semibold">8</div>
                <p class="text-xs text-white/80">{{ language === 'bn' ? 'পুরস্কার' : 'Awards' }}</p>
              </div>
              <div class="bg-white/10 rounded-lg p-3 border border-white/20 text-center">
                <Star class="mx-auto w-6 h-6 mb-1 text-purple-400" />
                <div class="text-lg font-semibold">5</div>
                <p class="text-xs text-white/80">{{ language === 'bn' ? 'সম্মাননা' : 'Honors' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search and Filter Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="bg-white rounded-xl shadow-md p-4">
        <div class="grid md:grid-cols-3 gap-4">
          <!-- Search -->
          <div class="relative w-full">
            <!-- Search Icon -->
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <Search class="w-5 h-5" />
            </span>

            <!-- Input Field -->
            <input v-model="searchQuery" type="text" :placeholder="language === 'bn' ? 'খুঁজুন...' : 'Search...'"
              class="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition" />

            <!-- Clear Button -->
            <button v-if="searchQuery" @click="searchQuery = ''"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full transition bg-white/80 hover:bg-white shadow-sm">
              ✕
            </button>
          </div>


          <!-- Category Filter -->
          <div>
            <select v-model="selectedCategory"
              class="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none capitalize">
              <option value="all">{{ language === 'bn' ? 'সকল বিভাগ' : 'All Categories' }}</option>
              <option v-for="category in categories.filter(c => c !== 'all')" :key="category" :value="category"
                class="capitalize">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Reset Filters -->
          <div class="flex items-center">
            <button @click="resetFilters"
              class="px-4 py-2.5 border border-gray-300 hover:border-blue-400 rounded-lg text-gray-600 hover:bg-blue-50 transition-all flex items-center gap-2">
              <span>{{ language === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset Filters' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Results Count -->
        <div class="mt-4 text-sm text-gray-600">
          {{ language === 'bn'
            ? `মোট ${filteredStories.length}টি ফলাফল পাওয়া গেছে`
            : `Found ${filteredStories.length} results`
          }}
        </div>
      </div>
    </div>

    <!-- Stories Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="story in paginatedStories" :key="story.id"
          class="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white rounded-xl">
          <div class="relative h-48 overflow-hidden bg-gray-100">
            <img :src="story.primaryImage" :alt="language === 'bn' ? story.titleBn : story.titleEn"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div class="p-4">
            <span :class="[
              'inline-block text-xs px-2 py-1 rounded-full mb-2 capitalize',
              categoryColors[story.category] || categoryColors.default
            ]">
              {{ story.category }}
            </span>

            <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
              <Calendar class="w-4 h-4" />
              <span>{{ formatDate(story.date) }}</span>
            </div>

            <h3 class="text-lg font-semibold mb-2">
              {{ language === 'bn' ? story.titleBn : story.titleEn }}
            </h3>

            <p class="text-gray-600 text-sm line-clamp-3">
              {{ language === 'bn' ? story.descriptionBn : story.descriptionEn }}
            </p>

            <button @click="$router.push({ name: 'SuccessDetails', params: { id: story.id } })"
              class="mt-4 w-full border border-blue-500 text-blue-600 hover:bg-blue-100 py-2 rounded-md transition flex items-center justify-center gap-2">
              <span>{{ t.readMore }}</span>
              <ArrowRight class="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>

      <!-- No result found -->
      <div v-if="filteredStories.length === 0" class="text-center text-gray-500 mt-20">
        <!-- Animated Graphic -->
        <div class="mx-auto w-40 h-40 relative">
          <svg class="w-full h-full animate-pulse drop-shadow-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="27" cy="27" r="16" stroke="#3B82F6" fill="none" />
            <line x1="41" y1="41" x2="60" y2="60" stroke="#2563EB" />
            <circle cx="27" cy="27" r="8" stroke="#93C5FD" />
          </svg>

          <!-- Animated Search Ring -->
          <div class="absolute inset-0 border-4 border-blue-300 rounded-full animate-spin-slow border-t-transparent">
          </div>
        </div>

        <!-- Text -->
        <p class="text-lg mt-6 text-gray-600 font-medium">
          {{ language === 'bn' ? 'কোনো ফলাফল পাওয়া যায়নি।' : 'No results found.' }}
        </p>

        <button @click="resetFilters"
          class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center justify-center mx-auto gap-2">
          <RefreshCcw class="w-4 h-4" />
          {{ language === 'bn' ? 'ফিল্টার রিসেট করুন' : 'Reset Filters' }}
        </button>
      </div>


      <!-- Pagination -->
      <div class="flex justify-center items-center gap-4 mt-10">
        <button @click="prevPage" :disabled="currentPage === 1"
          class="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition">
          <ArrowLeft class="w-4 h-4" />
          Prev
        </button>

        <span class="text-gray-700 font-semibold">
          Page {{ currentPage }} / {{ totalPages }}
        </span>

        <button @click="nextPage" :disabled="currentPage === totalPages"
          class="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition">
          Next
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 3s infinite;
}
</style>
