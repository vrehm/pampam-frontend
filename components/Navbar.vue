<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10"
      >
        <div class="lg:w-0 lg:flex-1">
          <a href="#" class="flex">
            <img
              class="h-8 w-auto sm:h-10"
              src="/img/logos/workflow-mark-on-white.svg"
              alt="Workflow"
            />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <a
            href="#"
            class="text-base leading-6 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >Who is Pam Pam?</a
          >
          <a
            href="#"
            class="text-base leading-6 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >La Boutique</a
          >
          <a
            href="#"
            class="text-base leading-6 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >L'Atelier</a
          >
          <a
            href="#"
            class="text-base leading-6 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >Côté Pro</a
          >
          <a
            href="#"
            class="text-base leading-6 font-medium text-gray-900 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >Journal</a
          >
        </nav>
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
    <div
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div class="rounded-lg shadow-lg">
        <div class="rounded-lg shadow-xs bg-white">
          <div class="pt-5 pb-6 px-5 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <img
                  class="h-8 w-auto"
                  src="/img/logos/workflow-mark-on-white.svg"
                  alt="Workflow"
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    class="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <nav class="grid row-gap-8">
                <a
                  href="#"
                  class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Analytics
                  </div>
                </a>
                <a
                  href="#"
                  class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Engagement
                  </div>
                </a>
                <a
                  href="#"
                  class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Security
                  </div>
                </a>
                <a
                  href="#"
                  class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Integrations
                  </div>
                </a>
                <a
                  href="#"
                  class="-m-3 p-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                >
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Automations
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
