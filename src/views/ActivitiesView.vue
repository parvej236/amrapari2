<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '@/composables/useLanguage'
import {
  Code, Beaker, Palette, Trophy, Music,
  ArrowLeft, Laptop, Microscope, Paintbrush, Dumbbell, Drum
} from 'lucide-vue-next'

// Props
defineProps({
  onBackToHome: Function
})

const { t, language } = useLanguage()
const activeTab = ref('ict')

// ✅ Computed categories — automatically reactive to language/t changes
const categories = computed(() => [
  {
    id: 'ict',
    icon: Code,
    iconBg: 'bg-blue-500',
    title: t.ictTitle || 'ICT',
    description: t.ictDesc || 'Information and Communication Technology',
    items: t.ictItems || ['Programming', 'Graphics', 'Web Development', 'Mobile Development', 'AI & ML', 'Cybersecurity', 'Hardware','System Administration', 'Networking'],
    gradient: 'from-blue-500 to-cyan-500',
    illustration: Laptop,
  },
  {
    id: 'science',
    icon: Beaker,
    iconBg: 'bg-purple-500',
    title: t.scienceTitle || 'Science',
    description: t.scienceDesc || 'Science related activities',
    items: t.scienceItems || ['Experimental Science', 'Mathematics', 'Life Science', 'Robotics', 'Olympiads'],
    gradient: 'from-purple-500 to-pink-500',
    illustration: Microscope,
  },
  {
    id: 'cultural',
    icon: Palette,
    iconBg: 'bg-orange-500',
    title: t.creativityTitle || 'Creativity',
    description: t.creativityDesc || 'Art and creative activities',
    items: t.creativityItems || ['Art', 'Music', 'Dance', 'Debate Club', 'English Club', 'Chess Club'],
    gradient: 'from-orange-500 to-red-500',
    illustration: Paintbrush,
  },
  {
    id: 'sports',
    icon: Trophy,
    iconBg: 'bg-green-500',
    title: t.sportsTitle || 'Sports',
    description: t.sportsDesc || 'Physical activities and games',
    items: t.sportsItems || ['Gymnestics', 'Handball', 'volleyball', 'Kabaddi', 'Basketball', 'Kho-Kho', 'Archery', 'Fencing', 'Judo', 'Yoga', 'Table Tennis', 'Badminton', 'Spak Takraw', 'Athletics'],
    gradient: 'from-green-500 to-emerald-500',
    illustration: Dumbbell,
    subItems: {
      title: language.value === 'bn' ? 'অ্যাথলেটিক্স বিভাগ' : 'Athletics Events',
      items: t.athleticsItems || ['100m Sprint', 'Long Jump', 'High Jump', 'Pole Vault', 'Shot Put'],
    },
  },
  {
    id: 'band',
    icon: Music,
    iconBg: 'bg-indigo-500',
    title: t.bandTitle || 'Band',
    description: t.bandDesc || 'Music and band activities',
    items: t.bandItems || ['Drums', 'Trumpet', 'Euphonium', 'Saxophone', 'Clarinet', 'Flute', 'Bugle', 'Pipe Band'],
    gradient: 'from-indigo-500 to-blue-500',
    illustration: Drum,
  },
])
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 transition-colors duration-300">
    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 text-white py-16 text-center relative overflow-hidden shadow-lg">
      <button
        @click="onBackToHome"
        class="absolute left-4 top-4 flex items-center bg-white/20 dark:bg-white/10 hover:bg-white/40 dark:hover:bg-white/20 text-white px-4 py-2 rounded-md transition"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        {{ t.backToHome || 'Back to Home' }}
      </button>

      <h1 class="text-4xl sm:text-5xl font-bold mb-2 drop-shadow-md">
        {{ t.activitiesPageTitle || 'Student Activities' }}
      </h1>
      <p class="text-lg sm:text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto">
        {{ t.activitiesPageSubtitle || 'Explore and participate in diverse learning experiences' }}
      </p>
    </header>

    <!-- Tabs -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-20">
      <!-- Tab Buttons -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeTab = cat.id"
          :class="[
            'px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-sm transition-all duration-200',
            activeTab === cat.id
              ? 'bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md scale-105'
              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
          ]"
        >
          <component :is="cat.icon" class="w-5 h-5" />
          <span>{{ cat.title }}</span>
        </button>
      </div>

      <!-- Tab Contents -->
      <div
        v-for="cat in categories"
        :key="cat.id"
        v-show="activeTab === cat.id"
        class="space-y-8 animate-fadeIn"
      >
        <!-- Category Card Header -->
        <div :class="`bg-gradient-to-r ${cat.gradient} text-white p-8 rounded-2xl relative overflow-hidden shadow-md`">
          <div class="absolute top-0 right-0 w-40 h-40 opacity-10">
            <component :is="cat.illustration" class="w-full h-full" />
          </div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div :class="`w-14 h-14 ${cat.iconBg} rounded-2xl flex items-center justify-center shadow-md`">
                <component :is="cat.icon" class="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 class="text-3xl font-bold">{{ cat.title }}</h2>
                <span class="text-sm bg-white/25 dark:bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  {{ cat.items.length }} {{ language.value === 'bn' ? 'টি কার্যক্রম' : 'Activities' }}
                </span>
              </div>
            </div>
            <p class="text-white/90">{{ cat.description }}</p>
          </div>
        </div>

        <!-- Items Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in cat.items"
            :key="index"
            class="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
          >
            <div class="flex items-center gap-4">
              <div :class="`w-9 h-9 ${cat.iconBg} rounded-md flex items-center justify-center text-white font-semibold`">
                {{ index + 1 }}
              </div>
              <span class="text-gray-800 dark:text-gray-200 font-medium">{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Sub-items (like athletics) -->
        <div v-if="cat.subItems" class="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            {{ cat.subItems.title }}
          </h3>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(subItem, index) in cat.subItems.items"
              :key="index"
              class="p-5 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200"
            >
              <div class="flex items-center gap-4">
                <div class="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-400 rounded-md flex items-center justify-center text-white font-semibold">
                  ★
                </div>
                <span class="text-gray-800 dark:text-gray-200 font-medium">{{ subItem }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.4s ease-in-out;
}
</style>
