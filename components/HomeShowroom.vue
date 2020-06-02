<template>
  <section class="pt-6 pb-12 sm:pb-8 md:pt-12 md:pb-20 bg-white">
    <div class="max-w-screen-lg mt-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:justify-center mt-0 md:mt-16">
        <!-- Left block -->
        <div class="flex flex-col mt-0 ml-0 sm:mt-10 md:mt-0 xl:mr-4 w-full md:w-6/12">
          <h2 class="text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9 md:hidden">
            Le showroom
          </h2>

          <div class="mt-12 mx-auto md:mt-0 w-11/12 sm:w-9/12 md:w-11/12">
            <div class="flex justify-between">
              <div class="text-xl italic leading-8 tracking-tight text-gray-200 md:text-2xl md:leading-9">
                illustration
              </div>
              <div class="text-xl italic leading-8 tracking-tight text-gray-200 md:text-2xl md:leading-9">
                illustration
              </div>
            </div>
          </div>

          <div class="mx-auto w-11/12 sm:w-9/12 md:w-11/12">
            <img class="w-full max-h-custom-showroom object-cover rounded-md lazyload" data-src="~/assets/img/home/showroom-1-700x933.jpg" alt="Photo showroom" />
          </div>
        </div>

        <!-- Right block -->
        <div class="ml-0 xl:ml-4 w-full md:w-6/12">
          <div class="mx-auto pt-0 md:pt-16 lg:pt-16 xl:pt-20">
            <h2 class="hidden md:block text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Le showroom
            </h2>

            <div class="flex flex-col mt-8 md:mt-12">
              <div>
                <h3 class="text-center text-xl sm:text-2xl font-extrabold leading-8 sm:leading-9 tracking-tight text-gray-900">
                  Adresse
                </h3>
                <p class="mt-2 text-center text-base leading-6 text-gray-900">
                  18 bis Avenue Henri Barbusse<br />
                  69250 Albigny-sur -Saône
                </p>
              </div>
              <div class="mt-6">
                <h3 class="text-center text-xl sm:text-2xl font-extrabold leading-8 sm:leading-9 tracking-tight text-gray-900">
                  Horaires
                </h3>
                <p class="mt-2 text-center text-base leading-6 text-gray-900">
                  Ouvert du Mardi au Samedi<br class="sm:hidden" />
                  sur rendez-vous !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.max-h-custom-showroom {
  max-height: 350px;
}

@screen sm {
  .max-h-custom-showroom {
    max-height: 400px;
  }
}

@screen md {
  .max-h-custom-showroom {
    max-height: 350px;
  }
}

@screen lg {
  .max-h-custom-showroom {
    max-height: 450px;
  }
}

@screen xl {
  .max-h-custom-showroom {
    max-height: 500px;
  }
}
</style>
