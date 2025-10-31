<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import successStories from '@/assets/data/successStories.js'
import { Calendar, ArrowLeft } from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'

// Router
const route = useRoute()
const router = useRouter()
const { language, t } = useLanguage()

// Reactive story
const storyId = ref(Number(route.params.id))
const story = ref(null)

// Watch route param and update story
watch(
    () => route.params.id,
    (newId) => {
        storyId.value = Number(newId)
        story.value = successStories.find(s => s.id === storyId.value)
    },
    { immediate: true }
)

// Category badge colors
const categoryColors = {
    sports: 'bg-green-100 text-green-700',
    award: 'bg-yellow-100 text-yellow-700',
    honor: 'bg-purple-100 text-purple-700',
    code: 'bg-blue-100 text-blue-700',
    art: 'bg-pink-100 text-pink-700',
    music: 'bg-indigo-100 text-indigo-700',
    default: 'bg-gray-100 text-gray-700'
}

// Computed fields for current language
const storyTitle = computed(() => story.value ? (language.value === 'bn' ? story.value.titleBn : story.value.titleEn) : '')
const storyDescription = computed(() => story.value ? (language.value === 'bn' ? story.value.descriptionBn : story.value.descriptionEn) : '')
const storyBadge = computed(() => story.value ? (language.value === 'bn' ? story.value.badgeBn : story.value.badgeEn) : '')


// Format date
function formatDate(dateString) {
    const date = new Date(dateString)
    return language.value === 'bn'
        ? date.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })
        : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

// Go back
function goBack() {
    router.back()
}
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <div class="bg-gradient-to-r from-blue-300 to-blue-500 text-gray-800 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 py-2 mb-2">
                <button @click="goBack"
                    class="flex items-center text-gray bg-white/20 hover:bg-white/40 px-3 py-2 rounded-md transition mb-3">
                    <ArrowLeft class="w-4 h-4 mr-2" />
                    {{ t.backToSuccess }}
                </button>

                <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">{{ storyTitle }}</h1>

                <div class="flex items-center gap-2 mt-2 text-gray">
                    <Calendar class="w-4 h-4" />
                    <span>{{ story?.value ? formatDate(story.value.date) : story?.date ? formatDate(story.date) : ''
                    }}</span>
                </div>

                <span v-if="story?.value || story" :class="[
                    'inline-block mt-3 px-3 py-1 rounded-full text-xs capitalize',
                    categoryColors[story?.value?.category || story?.category] || categoryColors.default
                ]">
                    {{ story?.value?.category || story?.category }}
                </span>
            </div>
        </div>

        <!-- Content -->
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div v-if="story?.value || story">
                <img :src="story?.value?.primaryImage || story?.primaryImage"
                    :alt="story?.value?.titleEn || story?.titleEn" class="w-full rounded-lg shadow-md mb-6" />
                <div class="flex flex-wrap gap-3 mb-6">
                    <span class="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">{{ storyBadge
                        }}</span>
                </div>
                <p class="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{{ storyDescription }}</p>

                <!-- Additional Images -->
                <div v-if="(story?.value?.images?.length || story?.images?.length) > 1"
                    class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <img v-for="(img, i) in story?.value?.images || story?.images" :key="i" :src="img"
                        class="w-full rounded-lg shadow" />
                </div>
            </div>

            <!-- Not Found -->
            <div v-else class="text-center text-gray-500 mt-20">
                <p class="text-xl">{{ language.value === 'bn' ? 'সাফল্য পাওয়া যায়নি।' : 'Success story not found.' }}
                </p>
                <button @click="goBack"
                    class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    {{ t.backToSuccess }}
                </button>
            </div>

            <!-- Back to success page -->
            <div class="mt-10 text-center">
                <button @click="goBack"
                    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    {{ t.backToSuccess }}
                </button>
                </div>
        </div>
    </div>
</template>
