<template>
  <div>
    <cote-pro-hero-section />
    <cote-pro-location-section />
    <cote-pro-decoration-section />
    <cote-pro-espace-section />
    <cote-pro-recherche-section />
  </div>
</template>

<script>
import CoteProHeroSection from '~/components/CoteProHeroSection.vue'
import CoteProLocationSection from '~/components/CoteProLocationSection.vue'
import CoteProDecorationSection from '~/components/CoteProDecorationSection.vue'
import CoteProRechercheSection from '~/components/CoteProRechercheSection.vue'
import CoteProEspaceSection from '~/components/CoteProEspaceSection.vue'

export default {
  components: {
    CoteProHeroSection,
    CoteProLocationSection,
    CoteProDecorationSection,
    CoteProEspaceSection,
    CoteProRechercheSection
  }
}
</script>

<style></style>
