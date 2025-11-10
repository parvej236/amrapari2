<template>
  <section class="relative py-16 sm:py-20 md:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl mb-4">
          Our Academic Programs
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover world-class education across diverse fields of study
        </p>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="(program, index) in programs"
          :key="index"
          class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
        >
          <!-- Image Container -->
          <div class="relative h-56 sm:h-64 overflow-hidden">
            <img
              :src="program.image"
              :alt="program.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            ></div>

            <!-- Icon Overlay -->
            <div
              class="absolute top-6 left-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
              :class="`bg-gradient-to-br ${program.color}`"
            >
              <component
                :is="program.icon"
                class="w-6 h-6 sm:w-7 sm:h-7 text-white"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 sm:p-8">
            <h3 class="text-xl sm:text-2xl mb-3">{{ program.title }}</h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4">
              {{ program.description }}
            </p>

            <!-- Learn More Link -->
            <button
              class="inline-flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all duration-300"
            >
              <span class="text-sm sm:text-base">Learn More</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <!-- Decorative corner accent -->
          <div
            class="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
            :class="`bg-gradient-to-tl ${program.color}`"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap, Microscope, Palette, Code } from "lucide-vue-next";

const programs = [
  {
    icon: GraduationCap,
    title: "Liberal Arts & Humanities",
    description:
      "Explore culture, philosophy, and human expression through our diverse programs",
    image:
      "https://images.unsplash.com/photo-1752920299210-0b727800ea50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Microscope,
    title: "Science & Research",
    description:
      "Cutting-edge laboratories and research facilities for groundbreaking discoveries",
    image:
      "https://images.unsplash.com/photo-1707944745899-104a4b12d945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Palette,
    title: "Arts & Design",
    description:
      "Nurture creativity and innovation in state-of-the-art studios and workshops",
    image:
      "https://images.unsplash.com/photo-1721143913155-672caf43df3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Code,
    title: "Technology & Engineering",
    description:
      "Build tomorrow's solutions with advanced computing and engineering programs",
    image:
      "https://images.unsplash.com/photo-1757876506562-0b0087ab3dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-blue-600 to-indigo-600",
  },
];
</script>
