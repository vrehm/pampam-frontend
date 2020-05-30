<template>
  <section class="background-hero-custom h-screen flex items-end overflow-hidden min-h-300 md:min-h-550 lazyload">
    <div class="h-auto w-full mb-40 px-4 landscape-hero-title-custom sm:mb-28 sm:px-6 xl:mb-40">
      <div class="flex justify-start max-w-7xl mx-auto xl:px-6">
        <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-tight md:text-5xl lg:text-6xl">
          Brocante poétique
          <br />
          <span class="text-yellow-500">pour intérieurs singuliers</span>
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.background-hero-custom {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=768');
  background-position: center, center;
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
}

/* Background cover for mobile */
@media (min-width: 640px) {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=640');
  }
}

/* Margin for mobile landscape orientation */
@media only screen and (max-device-width: 767px) and (orientation: landscape) {
  .landscape-hero-title-custom {
    margin-bottom: 2rem;
  }
}

/* Background cover for medium */
@media (min-width: 768px) {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=768');
  }
}

/* Background cover for large */
@media (min-width: 1024px) {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=1024');
  }
}

/* Background cover for xl */
@media (min-width: 1280px) {
  .background-hero-custom {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('~@/assets/img/home/hero-home2000x1500.jpg?resize&size=1280');
  }
}

/* For tablet landscape orientation (create conflicts) */
/*
@media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (orientation: landscape) {
  .landscape-hero-title-custom {
    margin-bottom: 2rem;
  }
}
*/
</style>
