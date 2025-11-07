<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import tutorials from '@/assets/data/tutorials.js'
import {
  ArrowLeft,
  Code,
  Beaker,
  Palette,
  Dumbbell,
  Music,
  GraduationCap,
  Play,
  Clock,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next'
import { useRouter } from 'vue-router'

// Router
const router = useRouter()

// Language
const { t, language } = useLanguage()
const lang = computed(() => language.value)

// Categories
const categories = [
  { id: 'all', labelBn: 'সব', labelEn: 'All', icon: Code, color: 'bg-gray-500' },
  { id: 'ict', labelBn: 'আইসিটি', labelEn: 'ICT', icon: Code, color: 'bg-blue-500' },
  { id: 'science', labelBn: 'বিজ্ঞান', labelEn: 'Science', icon: Beaker, color: 'bg-purple-500' },
  { id: 'creativity', labelBn: 'মেধা সৃজন', labelEn: 'Creativity', icon: Palette, color: 'bg-orange-500' },
  { id: 'sports', labelBn: 'স্পোর্টস', labelEn: 'Sports', icon: Dumbbell, color: 'bg-green-500' },
  { id: 'band', labelBn: 'ব্যান্ড', labelEn: 'Band', icon: Music, color: 'bg-indigo-500' },
  { id: 'education', labelBn: 'শিক্ষা', labelEn: 'Education', icon: GraduationCap, color: 'bg-teal-500' },
]

// State
const selectedCategory = ref('all')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 9
const scrollContainerRef = ref(null)
const showLeftArrow = ref(false)
const showRightArrow = ref(true)

// Scroll handling
const handleScroll = (direction) => {
  if (!scrollContainerRef.value) return
  const scrollAmount = 200
  const newScrollLeft = direction === 'left'
    ? scrollContainerRef.value.scrollLeft - scrollAmount
    : scrollContainerRef.value.scrollLeft + scrollAmount
  scrollContainerRef.value.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
}

const updateArrowVisibility = () => {
  if (!scrollContainerRef.value) return
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.value
  showLeftArrow.value = scrollLeft > 0
  showRightArrow.value = scrollLeft < scrollWidth - clientWidth - 10
}

// Filter tutorials by category and search
const filteredTutorials = computed(() => {
  return tutorials
    .filter(t => selectedCategory.value === 'all' || t.category === selectedCategory.value)
    .filter(t => {
      if (!searchQuery.value) return true
      const q = searchQuery.value.toLowerCase()
      return (
        t.titleEn.toLowerCase().includes(q) ||
        t.titleBn.toLowerCase().includes(q) ||
        t.descriptionEn.toLowerCase().includes(q) ||
        t.descriptionBn.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q))
      )
    })
    .sort((a, b) => b.id - a.id)
})

// Pagination
const totalPages = computed(() => Math.ceil(filteredTutorials.value.length / itemsPerPage))
const currentTutorials = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredTutorials.value.slice(start, start + itemsPerPage)
})

// Map current tutorials to selected language
const displayedTutorials = computed(() =>
  currentTutorials.value.map(t => ({
    ...t,
    title: language.value === 'bn' ? t.titleBn : t.titleEn,
    description: language.value === 'bn' ? t.descriptionBn : t.descriptionEn,
    instructorName: language.value === 'bn' ? t.instructor.bn : t.instructor.en,
    categoryLabel: language.value === 'bn'
      ? categories.find(c => c.id === t.category)?.labelBn
      : categories.find(c => c.id === t.category)?.labelEn
  }))
)

// Watch category or search change
watch([selectedCategory, searchQuery], () => {
  currentPage.value = 1
})

// Page navigation
const goToPage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Navigate to Tutorial Details
const goToTutorial = (id) => {
  router.push({ name: 'TutorialDetails', params: { id } })
}

// Init scroll arrows
onMounted(() => {
  nextTick(() => {
    updateArrowVisibility()
    const container = scrollContainerRef.value
    if (container) {
      container.addEventListener('scroll', updateArrowVisibility)
      window.addEventListener('resize', updateArrowVisibility)
    }
  })
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 transition-colors duration-300">
    <!-- Hero Header -->
    <div class="relative bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 text-white py-2 overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <button @click="$router.push('/')"
          class="flex items-center text-white bg-white/20 hover:bg-white/40 my-2 mb-4 px-3 py-2 rounded-md transition">
          <ArrowLeft class="w-4 h-4 mr-2" />
          {{ t.backToHome }}
        </button>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-fadeInUp">
          {{ lang === 'bn' ? 'কোর্সসমুহ' : 'Courses' }}
        </h1>
        <p class="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 dark:text-blue-200 animate-fadeInUp delay-200">
          {{ lang === 'bn'
            ? 'প্রযুক্তি, বিজ্ঞান, সৃজনশীলতা, খেলাধুলা এবং সংগীতে দক্ষতা অর্জনের জন্য আমাদের তৈরি কোর্সসমুহ'
            : 'Tutorials created to develop skills in technology, science, creativity, sports, and music.' }}
        </p>
      </div>
    </div>

    <!-- Filters & Search -->
    <div class="bg-white dark:bg-gray-800 shadow-md sticky top-16 z-40 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2">
        <span class="text-xs text-gray-600 dark:text-gray-300 shrink-0 hidden sm:inline">
          {{ lang === 'bn' ? 'বিভাগ:' : 'Filter:' }}
        </span>

        <button v-if="showLeftArrow" @click="handleScroll('left')"
          class="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-700 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-600 transition-colors">
          <ChevronLeft class="w-4 h-4 text-blue-700 dark:text-blue-200" />
        </button>

        <div ref="scrollContainerRef" class="flex gap-2 overflow-x-auto scrollbar-hide flex-1 pb-1">
          <button v-for="cat in categories" :key="cat.id" @click="selectedCategory = cat.id"
            :class="['flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-shrink shrink-0',
              selectedCategory === cat.id
                ? `${cat.color} text-white shadow-md`
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-600']">
            <component :is="cat.icon" class="w-3.5 h-3.5" />
            <span class="text-xs">{{ lang === 'bn' ? cat.labelBn : cat.labelEn }}</span>
          </button>
        </div>

        <button v-if="showRightArrow" @click="handleScroll('right')"
          class="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-700 flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-600 transition-colors">
          <ChevronRight class="w-4 h-4 text-blue-700 dark:text-blue-200" />
        </button>

        <input type="text" v-model="searchQuery"
          :placeholder="lang === 'bn' ? 'ট্যাগ বা শিরোনাম অনুসন্ধান করুন...' : 'Search by tag or title...'"
          class="ml-3 px-3 py-1.5 border rounded text-sm flex-1 max-w-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-colors" />

        <div class="text-xs text-gray-600 dark:text-gray-300 ml-3">
          {{ lang === 'bn' ? filteredTutorials.length + ' টি' : filteredTutorials.length + ' results' }}
        </div>
      </div>
    </div>

    <!-- Tutorials Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div v-if="displayedTutorials.length === 0" class="text-center py-20 text-gray-500 dark:text-gray-400">
        <h3 class="text-xl mb-2">{{ language.value === 'bn' ? 'কোন টিউটোরিয়াল পাওয়া যায়নি' : 'No tutorials found' }}</h3>
        <p>{{ language.value === 'bn' ? 'অন্য ফিল্টার চেষ্টা করুন' : 'Try different filters' }}</p>
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="tutorial in displayedTutorials" :key="tutorial.id" 
             @click="goToTutorial(tutorial.id)"
             class="group cursor-pointer border dark:border-gray-700 rounded shadow hover:shadow-lg overflow-hidden transition-all relative bg-white dark:bg-gray-800">

          <div class="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img :src="tutorial.thumbnail" :alt="tutorial.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div class="absolute inset-0 bg-black/40 dark:bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all">
              <div class="w-16 h-16 bg-white/90 dark:bg-gray-200 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Play class="w-8 h-8 text-blue-600 dark:text-blue-500 ml-1" />
              </div>
            </div>
            <div class="absolute top-3 left-3">
              <span :class="['px-2 py-1 rounded-full text-white text-xs', categories.find(c => c.id === tutorial.category)?.color || 'bg-gray-500']">
                {{ tutorial.categoryLabel }}
              </span>
            </div>
          </div>

          <div class="p-4">
            <h3 class="text-lg mb-2 line-clamp-2 text-gray-900 dark:text-gray-100">{{ tutorial.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{{ tutorial.description }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span class="text-gray-700 dark:text-gray-200">{{ language.value === 'bn' ? 'প্রশিক্ষক: ' : 'Instructor:'}}</span>
              {{ tutorial.instructorName }}
            </p>
            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
              <div class="flex items-center gap-1">
                <Clock class="w-4 h-4" /><span>{{ tutorial.duration }} {{ language.value === 'bn' ? 'মিনিট' : 'min' }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Eye class="w-4 h-4" /><span>{{ tutorial.views.toLocaleString() }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex flex-col items-center gap-4 mt-6">
        <div class="flex items-center gap-2">
          <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
            class="w-10 h-10 border dark:border-gray-600 rounded flex items-center justify-center dark:text-gray-200 text-gray-800">
            <ChevronLeft class="w-4 h-4" />
          </button>
          <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
            :class="['w-10 h-10 border dark:border-gray-600 rounded flex items-center justify-center', currentPage === page ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500' : 'text-gray-800 dark:text-gray-200']">
            {{ page }}
          </button>
          <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
            class="w-10 h-10 border dark:border-gray-600 rounded flex items-center justify-center text-gray-800 dark:text-gray-200">
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px);}
  100% { opacity: 1; transform: translateY(0);}
}
</style>
