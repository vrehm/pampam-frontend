<template>
  <div>
    <cote-pro-hero-section
      v-observe-visibility="{
        callback: coteProHeroVisibilityChanged
      }"
      class="lg:pt-16"
    />
    <cote-pro-location-section />
    <cote-pro-decoration-section />
    <cote-pro-espace-section />
    <cote-pro-recherche-section />
    <cote-pro-transition-texture />
    <cote-pro-argumentaire />
    <cote-pro-c-t-a-section />
  </div>
</template>

<script>
import CoteProHeroSection from '~/components/CoteProHeroSection.vue'
import CoteProLocationSection from '~/components/CoteProLocationSection.vue'
import CoteProDecorationSection from '~/components/CoteProDecorationSection.vue'
import CoteProEspaceSection from '~/components/CoteProEspaceSection.vue'
import CoteProRechercheSection from '~/components/CoteProRechercheSection.vue'
import CoteProTransitionTexture from '~/components/CoteProTransitionTexture.vue'
import CoteProArgumentaire from '~/components/CoteProArgumentaire.vue'
import CoteProCTASection from '~/components/CoteProCTASection.vue'

export default {
  components: {
    CoteProHeroSection,
    CoteProLocationSection,
    CoteProDecorationSection,
    CoteProEspaceSection,
    CoteProRechercheSection,
    CoteProTransitionTexture,
    CoteProArgumentaire,
    CoteProCTASection
  },
  methods: {
    coteProHeroVisibilityChanged(isVisible) {
      this.$nuxt.$emit('cote-pro-hero-invisible', isVisible)
    }
  },
  head() {
    return {
      title: "L'Atelier Pam Pam pour les professionnels.",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "L'Atelier Pam Pam propose des prestations spéciales pour les pros!"
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://atelierpampam.fr/cote-pro',
            name: "Page Côté Pro de l'Atelier Pam Pam",
            url: 'https://atelierpampam.fr/cote-pro'
          }),
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style>
/* Grow */
.hvr-grow {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

/* Grow Rotate One & Two */
.hvr-grow-rotate,
.hvr-grow-rotate-two {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow-rotate:hover,
.hvr-grow-rotate:focus,
.hvr-grow-rotate:active {
  -webkit-transform: scale(1.1) rotate(4deg);
  transform: scale(1.1) rotate(4deg);
}

.hvr-grow-rotate-two:hover,
.hvr-grow-rotate-two:focus,
.hvr-grow-rotate-two:active {
  -webkit-transform: scale(1.1) rotate(-4deg);
  transform: scale(1.1) rotate(-4deg);
}
</style>
