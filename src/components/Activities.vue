<script setup>
import { useLanguage } from '@/composables/useLanguage';
import { Code, Beaker, Palette, Trophy, Music } from 'lucide-vue-next';
import { computed } from 'vue';

const { t } = useLanguage();

const activities = computed(() => [
    { icon: Code, title: t.value.ictTitle, description: t.value.ictDesc, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
    { icon: Beaker, title: t.value.scienceTitle, description: t.value.scienceDesc, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
    { icon: Palette, title: t.value.creativityTitle, description: t.value.creativityDesc, color: 'from-orange-500 to-red-500', bgColor: 'bg-orange-50', iconColor: 'text-orange-600' },
    { icon: Trophy, title: t.value.sportsTitle, description: t.value.sportsDesc, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50', iconColor: 'text-green-600' },
    { icon: Music, title: t.value.bandTitle, description: t.value.bandDesc, color: 'from-indigo-500 to-blue-500', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600' },
]);

</script>

<template>
    <section id="activities" class="py-8 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Title -->
            <div class="text-center mb-6">
                <h2 class="text-2xl sm:text-3xl mb-2 text-gray-900">{{ t.activitiesTitle }}</h2>
                <div class="w-16 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 mx-auto"></div>
            </div>

            <!-- Activities Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div v-for="(activity, index) in activities" :key="index"
                    class="group bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div
                        :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform', activity.bgColor]">
                        <component :is="activity.icon" :class="['w-6 h-6', activity.iconColor]" />
                    </div>
                    <h3 class="text-sm text-gray-900 mb-1 line-clamp-2">{{ activity.title }}</h3>
                    <p class="text-xs text-gray-500 line-clamp-2">{{ activity.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>