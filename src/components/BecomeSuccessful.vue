`<script setup>
import { Rocket, Building2, GraduationCap, Award, Trophy, Users } from 'lucide-vue-next'
import { useLanguage } from '@/composables/useLanguage'

const { t, language } = useLanguage()

const features = [
  {
    icon: GraduationCap,
    titleEn: 'Excellence in Education',
    titleBn: 'শিক্ষায় শ্রেষ্ঠত্ব',
    descEn: 'Join a legacy of academic excellence with our proven teaching methodology',
    descBn: 'আমাদের প্রমাণিত শিক্ষা পদ্ধতির সাথে শৈক্ষিক শ্রেষ্ঠত্বের ঐতিহ্যে যোগ দিন'
  },
  {
    icon: Trophy,
    titleEn: 'Sports Champions',
    titleBn: 'ক্রীড়া চ্যাম্পিয়ন',
    descEn: 'Multiple national championships in various sports disciplines',
    descBn: 'বিভিন্ন ক্রীড়া বিভাগে একাধিক জাতীয় চ্যাম্পিয়নশিপ'
  },
  {
    icon: Award,
    titleEn: 'Cultural Excellence',
    titleBn: 'সাংস্কৃতিক শ্রেষ্ঠত্ব',
    descEn: 'Rich tradition in arts, music, and cultural activities',
    descBn: 'চারুকলা, সংগীত এবং সাংস্কৃতিক কার্যক্রমে সমৃদ্ধ ঐতিহ্য'
  },
  {
    icon: Users,
    titleEn: 'Diverse Community',
    titleBn: 'বৈচিত্র্যময় সম্প্রদায়',
    descEn: 'A vibrant community of students from various backgrounds',
    descBn: 'বিভিন্ন পটভূমির শিক্ষার্থীদের একটি প্রাণবন্ত সম্প্রদায়'
  }
]
</script>

<template>
  <div class="relative overflow-hidden py-20">
    <!-- Background pattern -->
    <div class="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950"></div>
    
    <!-- Animated patterns -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDEyOSwgMTQwLCAyNDgsIDAuMikiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] animate-pattern"></div>
    </div>
    
    <!-- Glowing orbs -->
    <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
    <div class="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
    
    <!-- Gradient mesh -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 mix-blend-overlay"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/50 to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Main Content -->
      <div class="text-center mb-20 relative">
        <div class="inline-flex items-center justify-center space-x-2 mb-6">
          <div class="h-px w-8 bg-gradient-to-r from-transparent to-indigo-400"></div>
          <span class="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium border border-indigo-500/20 animate-fade-in">
            {{ language === 'bn' ? 'আপনার সাফল্যের যাত্রা শুরু হোক' : 'Start Your Journey to Success' }}
          </span>
          <div class="h-px w-8 bg-gradient-to-l from-transparent to-indigo-400"></div>
        </div>
        <h2 class="text-6xl md:text-7xl font-bold mb-8 animate-fade-in relative">
          <span class="relative z-10 bg-gradient-to-br from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
            {{ language === 'bn' ? 'সাফল্যের অংশ হোন' : 'Be Part of Our Success' }}
          </span>
          <div class="absolute inset-0 blur-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-30"></div>
        </h2>
        <p class="text-xl text-indigo-200/80 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
          {{ language === 'bn' 
            ? 'কোয়ান্টাম কসমো স্কুল এবং কলেজে ভর্তি হয়ে আপনার জীবনকে উজ্জ্বল করুন' 
            : 'Illuminate your future by joining Quantum Cosmo School and College' }}
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="group relative"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Card Background with Glassmorphism -->
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 rounded-3xl backdrop-blur-xl"></div>
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <!-- Border Gradient -->
          <div class="absolute inset-0 rounded-3xl p-0.5 bg-gradient-to-br from-indigo-500/30 to-purple-500/30">
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-950 to-purple-950"></div>
          </div>
          
          <!-- Content -->
          <div class="relative p-8 animate-fade-in-up">
            <div class="relative w-16 h-16 mb-6 transform group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-4 flex items-center justify-center">
                <component 
                  :is="feature.icon" 
                  class="w-8 h-8 text-white"
                />
              </div>
            </div>
            
            <h3 class="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">
              {{ language === 'bn' ? feature.titleBn : feature.titleEn }}
            </h3>
            <p class="text-indigo-200/70 group-hover:text-indigo-100/90 transition-colors duration-300">
              {{ language === 'bn' ? feature.descBn : feature.descEn }}
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center animate-fade-in-up" style="animation-delay: 0.4s">
        <div class="flex flex-wrap justify-center gap-6">
          <button class="group relative px-8 py-4 rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative flex items-center text-white font-semibold">
              <Rocket class="w-5 h-5 mr-2 group-hover:animate-rocket" />
              {{ language === 'bn' ? 'এখনই ভর্তি হোন' : 'Get Admitted Now' }}
            </div>
          </button>
          
          <button class="group relative px-8 py-4 rounded-2xl overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-950 to-purple-950"></div>
            <div class="absolute inset-0 border border-indigo-500/30 rounded-2xl group-hover:border-indigo-400/50 transition-colors duration-300"></div>
            <div class="relative flex items-center text-white font-semibold">
              <Building2 class="w-5 h-5 mr-2 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
              {{ language === 'bn' ? 'ক্যাম্পাস ঘুরে দেখুন' : 'Explore Campus' }}
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}

@keyframes pattern {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes rocket {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-2px) rotate(-10deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 1s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pattern {
  animation: pattern 20s linear infinite;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Glass effect */
.backdrop-blur-xl {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

/* Gradient text */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
`