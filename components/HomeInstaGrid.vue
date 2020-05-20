<template>
  <div class="bg-white">
    <div class="max-w-screen-xl mx-auto py-20 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2 class="text-center text-2xl leading-8 font-extrabold tracking-tight sm:text-left sm:text-3xl sm:leading-9text-lg text-gray-900">
        La boutique - mes derniers posts
      </h2>
      <p class="mt-6 text-base italic text-center leading-6 text-gray-900 sm:text-lg sm:text-left">
        Une pièce vous a tapé dans l’oeil ?<br />
        Vous pouvez l’acheter en ligne !
      </p>

      <div class="mt-10 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-center h-12 w-12 text-gray-900 border border-gray-500 rounded-full">
            1
          </div>
          <div class="mt-2">
            <p class="mt-3 text-base text-center leading-6 text-gray-500">
              Parcourez le feed de nouveauté et leurs descriptions détaillées sur ma page instagram (cliquez sur une photo !)
            </p>
          </div>
        </div>
        <div class="mt-10 flex flex-col items-center lg:mt-0">
          <div class="flex items-center justify-center h-12 w-12 text-gray-900 border border-gray-500 rounded-full">
            2
          </div>
          <div class="mt-2">
            <p class="mt-3 text-base text-center leading-6 text-gray-500">
              Prenez contact avec moi! Ici sur le chat, par mail ou dans la messagerie Instagram ! [Petite icône lien chat]
            </p>
          </div>
        </div>
        <div class="mt-10 flex flex-col items-center lg:mt-0">
          <div class="flex items-center justify-center h-12 w-12 text-gray-900 border border-gray-500 rounded-full">
            3
          </div>
          <div class="mt-2">
            <p class="mt-3 text-base text-center leading-6 text-gray-500">
              Faites vous livrer partout en France et certains pays d’Europe ! Coût sur demande.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-14 md:grid-cols-3 overflow-hidden">
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="max-h-custom w-full object-cover" src="/img/home/insta-example-1.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="w-full object-cover" src="/img/home/insta-example-2.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="w-full object-cover" src="/img/home/insta-example-3.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="max-h-custom w-full object-cover" src="/img/home/insta-example-4.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="w-full object-cover" src="/img/home/insta-example-5.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="w-full object-cover" src="/img/home/insta-example-6.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="max-h-custom w-full object-cover" src="/img/home/insta-example-7.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="w-full object-cover" src="/img/home/insta-example-8.jpg" alt="Insta example" />
        </a>
        <a href="#" class="col-span-1 bg-gray-50">
          <img class="w-full object-cover" src="/img/home/insta-example-9.jpg" alt="Insta example" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.max-h-custom {
  max-height: 400px;
}
</style>
