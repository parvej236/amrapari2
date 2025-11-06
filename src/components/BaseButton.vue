<script setup>
import { RouterLink } from 'vue-router'

// Props
defineProps({
    to: {
        type: [String, Object],
        required: true
    },
    label: {
        type: String,
        default: 'Explore'
    },
    classes: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <RouterLink :to="to"
        :class="`inline-block mt-2 hover:bg-blue-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400 text-blue-700 hover:text-white px-6 py-2 rounded-full shadow-md text-sm transition-all duration-300 ${classes}`">
        {{ label }}
    </RouterLink>
</template>