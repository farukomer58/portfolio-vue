<template>
    <div>
      <h2 class="text-2xl font-bold mb-4">Recent Portfolio Items</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <portfolio-item
          v-for="portfolioItem in recentPortfolioItems"
          :key="portfolioItem.id"
          :portfolio-details="portfolioItem"
        ></portfolio-item>
      </div>
    </div>
  </template>
  
  <script>
  import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
  import { usePortfolioStore } from "@/stores/portfolio-store";
  
  export default {
    name: "SectionRecentPortfolioItems",
    components: {
      PortfolioItem,
    },
    setup() {
      const portfolioStore = usePortfolioStore();
      const recentPortfolioItems = portfolioStore.getRecentPortfolioItems(3);
  
      return {
        recentPortfolioItems,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles as needed */
  </style>
  