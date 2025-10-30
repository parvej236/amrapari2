import { inject, computed, watch } from 'vue';
import { translations } from '@/assets/translations.js';

export function useLanguage() {
  const language = inject('language');
  const setLanguage = inject('setLanguage');
  
  if (!language || !setLanguage) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  const t = computed(() => translations[language.value]);
  
  // Update translations when language changes
  watch(language, (newLang) => {
    t.value = translations[newLang];
  });

  return { language, setLanguage, t };
}
