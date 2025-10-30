<script setup>
import { Sunrise, Brain, BookOpen, Code, Trophy, Moon, ArrowDown } from 'lucide-vue-next';
import { useLanguage } from '@/composables/useLanguage';

const { t, language } = useLanguage();

// Steps array with titles, descriptions, and images
const steps = [
  {
    id: 1,
    icon: Sunrise,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    accentColor: 'from-orange-400 to-orange-600',
    image: 'https://i.postimg.cc/hvrcN1pB/step1-weakup.png'
  },
  {
    id: 2,
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    accentColor: 'from-purple-400 to-purple-600',
    image: 'https://i.postimg.cc/zv5qdcwj/step2-meditatioin-vec.png'
  },
  {
    id: 3,
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    accentColor: 'from-blue-400 to-blue-600',
    image: 'https://i.postimg.cc/hvrcN1MT/step3-study.png'
  },
  {
    id: 4,
    icon: Code,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    accentColor: 'from-green-400 to-green-600',
    image: 'https://i.postimg.cc/C5YwvQC4/step4-skill.png'
  },
  {
    id: 5,
    icon: Trophy,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    accentColor: 'from-red-400 to-red-600',
    image: 'https://i.postimg.cc/T2qdyTG1/step5-sports.png'
  },
  {
    id: 6,
    icon: Moon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    accentColor: 'from-indigo-400 to-indigo-600',
    image: 'https://i.postimg.cc/44bfKXZt/step6-sleep.png'
  }
];
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl mb-4 text-gray-900">{{ t.whyQuantarsTitle }}</h2>
        <p class="text-base text-gray-600 max-w-3xl mx-auto">{{ t.whyQuantarsSubtitle }}</p>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 mx-auto mt-6"></div>
      </div>

      <!-- Journey Path Description -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
          <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <p class="text-sm text-gray-700">
            {{ language === 'bn'
              ? 'প্রতিটি দিনের ৬টি ধাপে একজন কোয়ান্টারের সফলতার যাত্রা'
              : "A Quantar's Journey to Success in 6 Daily Steps"
            }}
          </p>
        </div>
      </div>

      <!-- Steps -->
      <div class="space-y-12 lg:space-y-20">
        <div v-for="(step, index) in steps" :key="step.id" class="relative">
          <div
            :class="['flex flex-col lg:flex-row items-center gap-8 lg:gap-12', index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse']">
            <!-- Text -->
            <div class="flex-1 w-full">
              <div class="max-w-xl mx-auto lg:mx-0">
                <div class="flex items-center gap-4 mb-6">
                  <div
                    :class="`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.accentColor} flex items-center justify-center shadow-xl`">
                    <span class="text-white text-xl">0{{ step.id }}</span>
                  </div>
                  <div :class="`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center ${step.color}`">
                    <component :is="step.icon" class="w-7 h-7" />
                  </div>
                </div>
                <h3 class="text-3xl sm:text-4xl mb-4 text-gray-900">{{ t[`step${step.id}Title`] }}</h3>
                <p class="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">{{ t[`step${step.id}Desc`] }}</p>
                <div :class="`h-1.5 w-24 bg-gradient-to-r ${step.accentColor} rounded-full`"></div>
              </div>
            </div>

            <!-- Image -->
            <div class="flex-1 w-full flex justify-center items-center">
              <div class="w-full max-w-xs">
                <img :src="step.image" :alt="step.title" class="w-full h-auto object-contain" />
              </div>
            </div>
          </div>

          <!-- Connector Arrow -->
          <div v-if="index !== steps.length - 1" class="flex justify-center mt-12 lg:mt-16">
            <div
              :class="`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center ${step.color} shadow-lg`">
              <ArrowDown class="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Message -->
      <div class="mt-20 text-center">
        <div
          class="inline-block bg-gradient-to-r from-orange-50 via-purple-50 to-blue-50 rounded-3xl px-10 py-8 border-2 border-gray-200 shadow-xl">
          <div class="flex items-center justify-center gap-3 mb-3">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 flex items-center justify-center shadow-lg">
              <Trophy class="w-6 h-6 text-white" />
            </div>
            <p class="text-xl sm:text-2xl text-gray-900">
              {{ language === 'bn' ? 'এই পথ ধরেই তারা হয়ে উঠছে' : 'Following this path, they become' }}
            </p>
          </div>
          <p class="text-lg sm:text-xl text-gray-800">
            {{ language === 'bn' ? 'আত্মবিশ্বাসী, দক্ষ এবং মানবিক নেতা' : 'Confident, Skilled, and Compassionate Leaders' }}
          </p>
        </div>
      </div>

      <!-- Info Cards -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <BookOpen class="w-10 h-10 mb-4 mx-auto text-indigo-500" />
          <h4 class="text-center mb-2 text-gray-900">{{ language === 'bn' ? 'সকাল থেকে সন্ধ্যা' : 'Morning to Evening'
            }}</h4>
          <p class="text-sm text-gray-600 text-center">{{ language === 'bn' ? 'সম্পূর্ণ দিনের পরিকল্পিত রুটিন' :
            'Complete daily structured routine' }}</p>
        </div>

        <div
          class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <Brain class="w-10 h-10 mb-4 mx-auto text-green-500" />
          <h4 class="text-center mb-2 text-gray-900">{{ language === 'bn' ? 'পরিকল্পিত শিক্ষা' : 'Structured Learning'
            }}</h4>
          <p class="text-sm text-gray-600 text-center">{{ language === 'bn' ? 'প্রতিটি ধাপে নির্দিষ্ট লক্ষ্য' : 'Clear objectives at every step' }}</p>
        </div>

        <div
          class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <Code class="w-10 h-10 mb-4 mx-auto text-yellow-500" />
          <h4 class="text-center mb-2 text-gray-900">{{ language === 'bn' ? 'সার্বিক উন্নয়ন' : 'Holistic Development' }}</h4>
          <p class="text-sm text-gray-600 text-center">{{ language === 'bn' ? 'শারীরিক ও মানসিক বিকাশ' : 'Physical and mental growth' }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
