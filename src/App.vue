<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
import LanguageProvider from '@/components/LanguageProvider.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <LanguageProvider>
    <Navbar />
    <RouterView />
    <Footer />
  </LanguageProvider>
</template>
