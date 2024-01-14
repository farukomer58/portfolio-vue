
<template>
  <main>
    <!-- Hero Section -->
    <section-hero></section-hero>

    <!-- Section with experience and education -->
    <section-experience></section-experience>

    <!-- Section for portofolio items with link to view full portofolio detail -->
    <section-recent-portfolio-items></section-recent-portfolio-items>
  </main>
</template>

<script >
import SectionHero from '@/components/home/SectionHero.vue'
import SectionExperience from '@/components/home/SectionExperience.vue'
import SectionRecentPortfolioItems from '@/components/home/SectionRecentPortfolioItems.vue'

export default {
  name: "HomeView",
  components: {
    SectionHero,
    SectionExperience,
    SectionRecentPortfolioItems
  },
  setup() {
  }
}
</script>