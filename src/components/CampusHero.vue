<script setup>
import { ref, onMounted } from "vue";

const videoRef = ref(null);
const videoError = ref(false);

const campuses = [
  {
    name: "Hikman Campus",
    image:
      "https://i.postimg.cc/P534g364/hikman-campus.png",
  },
  {
    name: "Fikran Campus",
    image:
      "https://i.postimg.cc/x1T5FDPm/fikran-campus.jpg",
  },
  {
    name: "Ikran Campus",
    image:
      "https://i.postimg.cc/vZHhSFv1/ikran-campus.jpg",
  },
  {
    name: "Golden Bush",
    image:
      "https://i.postimg.cc/TY00kq1c/sky.jpg",
  },
];

const allCampuses = [...campuses, ...campuses, ...campuses];

onMounted(() => {
  const handleVideoLoad = () => {
    if (videoRef.value) {
      videoRef.value.currentTime = 0;
      videoRef.value
        .play()
        .catch((err) => {
          console.log("Autoplay failed:", err);
          videoError.value = true;
        });
    }
  };

  const video = videoRef.value;
  if (video) {
    if (video.readyState >= 2) {
      handleVideoLoad();
    } else {
      video.addEventListener("loadeddata", handleVideoLoad);
      return () => video.removeEventListener("loadeddata", handleVideoLoad);
    }
  }
});
</script>

<template>
  <section class="relative w-full">
    <div class="relative mt-1 bg-black text-white px-4 sm:px-8 py-16 sm:py-20 md:py-32 lg:px-16 overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style=" background-image: url('https://i.postimg.cc/vZHhSFv1/ikran-campus.jpg'); z-index: 0;"></div>

       <video ref="videoRef" autoplay muted loop playsinline preload="auto"
           class="absolute top-0 left-0 w-full h-full object-cover opacity-30"
           style="z-index: 1"
           @error="videoError = true">
           <source src="https://www.pexels.com/download/video/4060151/" type="video/mp4" />
       </video>

        <div v-if="videoError" class="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-80"
           :style="{backgroundImage: `url('https://i.postimg.cc/vZHhSFv1/ikran-campus.jpg')`, zIndex: 0}"></div>

        <div class="max-w-7xl mx-auto relative" style="z-index: 1">
           <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-4 text-blue-700 font-bold">
             Our Dream Campus
           </h1>
           <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 max-w-3xl leading-relaxed">
             Centers of learning, innovation, and excellence building tomorrow's
             leaders
           </p>
      </div>
    </div>

    <!-- Campus Carousel -->
    <div class="relative bg-white py-6 sm:py-8 md:py-12 overflow-hidden">
      <div class="carousel-container">
        <div class="carousel-track">
          <div v-for="(campus, index) in allCampuses" :key="index" class="carousel-slide">
            <div class="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden group">
              <img :src="campus.image" :alt="campus.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                  <h3 class="text-white text-xl sm:text-2xl">
                    {{ campus.name }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 1rem;
  animation: scroll 40s linear infinite;
  width: fit-content;
}

.carousel-slide {
  flex: 0 0 auto;
  width: 280px;
}

@media (min-width: 480px) {
  .carousel-slide {
    width: 320px;
  }
  .carousel-track {
    gap: 1.25rem;
  }
}

@media (min-width: 768px) {
  .carousel-slide {
    width: 400px;
  }
  .carousel-track {
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .carousel-slide {
    width: 450px;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.carousel-track:hover {
  animation-play-state: paused;
}
</style>
