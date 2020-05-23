<template>
  <section class="background-hero-custom h-screen flex items-end overflow-hidden min-h-550">
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0.3) 90%), url('/img/home/hero-home2000x1500.jpg');
  background-position: center, center;
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
}

/* For mobile landscape orientation */
@media only screen and (min-device-width: 320px) and (max-device-width: 767px) and (orientation: landscape) {
  .landscape-hero-title-custom {
    margin-bottom: 2rem;
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
