<template>
  <section class="w-full bg-transparent">
    <div class="absolute top-0 left-0 right-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center md:items-start py-6 md:space-x-10">
          <a href="#">
            <img class="w-24 md:w-32 lg:w-48" src="/img/logos/pampam-logo.svg" alt="Logo" />
          </a>
          <div class="-mr-2 -my-2 md:hidden">
            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out">
              <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex md:space-x-5 lg:space-x-10">
            <a href="#" class="md:text-sm lg:text-base leading-6 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
              Who is Pam Pam?
            </a>
            <a href="#" class="md:text-sm lg:text-base leading-6 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
              La Boutique
            </a>
            <a href="#" class="md:text-sm lg:text-base leading-6 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
              L'Atelier
            </a>
            <a href="#" class="md:text-sm lg:text-base leading-6 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
              Côté Pro
            </a>
            <a href="#" class="md:text-sm lg:text-base leading-6 font-medium text-gray-100 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition ease-in-out duration-150">
              Journal
            </a>
          </nav>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
    -->
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-gray-200">
          <div class="pt-5 pb-6 px-5 space-y-8">
            <div class="flex items-center justify-between">
              <img class="w-24" src="/img/logos/pampam-logo.svg" alt="Logo" />
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out">
                  <svg class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <nav class="grid row-gap-8">
              <a href="#" class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <div class="text-base leading-6 font-medium text-yellow-600">
                  Who is Pam Pam?
                </div>
              </a>
              <a href="#" class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <div class="text-base leading-6 font-medium text-yellow-600">
                  La Boutique
                </div>
              </a>
              <a href="#" class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <div class="text-base leading-6 font-medium text-yellow-600">
                  L'Atelier
                </div>
              </a>
              <a href="#" class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <div class="text-base leading-6 font-medium text-yellow-600">
                  Côté Pro
                </div>
              </a>
              <a href="#" class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                <div class="text-base leading-6 font-medium text-yellow-600">
                  Journal
                </div>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
