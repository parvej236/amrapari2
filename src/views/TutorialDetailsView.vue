<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import tutorials from '@/assets/data/tutorials.js'
import { useLanguage } from '@/composables/useLanguage'
import { ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const { language } = useLanguage()

const tutorialId = Number(route.params.id)
const tutorial = ref(null)
const showFullDescription = ref(false) // toggle for Read More

// Fetch tutorial
onMounted(() => {
    tutorial.value = tutorials.find(t => t.id === tutorialId)
    if (!tutorial.value) {
        router.replace({ name: 'not-found' })
    }
})

// Computed properties for text
const title = computed(() => tutorial.value
    ? (language.value === 'bn' ? tutorial.value.titleBn : tutorial.value.titleEn)
    : '')

const description = computed(() => tutorial.value
    ? (language.value === 'bn' ? tutorial.value.descriptionBn : tutorial.value.descriptionEn)
    : '')

const instructorName = computed(() => tutorial.value
    ? (language.value === 'bn' ? tutorial.value.instructor.bn : tutorial.value.instructor.en)
    : '')
</script>

<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 pb-12 transition-colors duration-300">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Back Button -->
            <button @click="router.back()"
                class="flex items-center text-blue-700 dark:text-blue-300 my-4 px-3 py-2 rounded-md hover:bg-blue-100 dark:hover:bg-blue-700 transition">
                <ArrowLeft class="w-4 h-4 mr-2" /> {{ language.value === 'bn' ? 'ফিরে যান' : 'Back' }}
            </button>

            <div v-if="tutorial">
                <!-- Title -->
                <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{{ title }}</h1>

                <!-- YouTube Video -->
                <div v-if="tutorial.videoUrl" class="relative pb-[56.25%] h-0 mb-6">
                    <iframe :src="tutorial.videoUrl" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen class="absolute top-0 left-0 w-full h-full rounded-lg shadow-md">
                    </iframe>
                </div>

                <!-- Basic Info -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <!-- Instructor -->
                    <div class="flex items-center gap-3 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5.121 17.804A9 9 0 1118.877 6.196 9 9 0 015.121 17.804z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v.01" />
                        </svg>
                        <div>
                            <p class="text-sm text-gray-500 dark:text-gray-300">{{ language.value === 'bn' ? 'প্রশিক্ষক' : 'Instructor' }}</p>
                            <p class="font-semibold text-blue-700 dark:text-blue-300">{{ instructorName }}</p>
                        </div>
                    </div>

                    <!-- Duration -->
                    <div class="flex items-center gap-3 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 12a9 9 0 100-18 9 9 0 000 18z" />
                        </svg>
                        <div>
                            <p class="text-sm text-gray-500 dark:text-gray-300">{{ language.value === 'bn' ? 'সময়কাল' : 'Duration' }}</p>
                            <p class="font-semibold text-blue-700 dark:text-blue-300">{{ tutorial.duration }} {{ language.value === 'bn' ? 'মিনিট' : 'min' }}</p>
                        </div>
                    </div>

                    <!-- Views -->
                    <div class="flex items-center gap-3 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                        </svg>
                        <div>
                            <p class="text-sm text-gray-500 dark:text-gray-300">{{ language.value === 'bn' ? 'ভিউ' : 'Views' }}</p>
                            <p class="font-semibold text-blue-700 dark:text-blue-300">{{ tutorial.views.toLocaleString() }}</p>
                        </div>
                    </div>

                    <!-- Tags -->
                    <div class="flex flex-col gap-2 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
                        <p class="text-sm text-gray-500 dark:text-gray-300">{{ language.value === 'bn' ? 'ট্যাগ' : 'Tags' }}</p>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in tutorial.tags" :key="tag"
                                class="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Description -->
                <div class="text-gray-700 dark:text-gray-300">
                    <p class="whitespace-pre-line" :class="{ 'line-clamp-5': !showFullDescription }">
                        {{ description }}
                    </p>

                    <button v-if="description.split(' ').length > 50"
                        @click="showFullDescription = !showFullDescription"
                        class="mt-2 text-blue-600 dark:text-blue-400 hover:underline transition">
                        {{ showFullDescription
                            ? (language.value === 'bn' ? 'কম দেখুন' : 'Read Less')
                            : (language.value === 'bn' ? 'আরও পড়ুন' : 'Read More') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Truncate description after 5 lines */
.line-clamp-5 {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
