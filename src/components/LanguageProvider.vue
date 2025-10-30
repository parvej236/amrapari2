<script setup>
import { provide, ref } from 'vue';
import { translations } from '@/assets/translations.js';

const language = ref('bn');

function setLanguage(lang) {
  language.value = lang;
}

// Provide globally
provide('language', language);
provide('setLanguage', setLanguage);
provide('t', translations[language.value]);
</script>

<template>
  <!-- This slot is crucial to render children -->
  <slot />
</template>
