<template>
  <section id="portfolio">
    <h2 class="text-2xl font-bold mb-4">Explore My Portfolio</h2>

    <!-- Category Tabs and Category Filter -->
    <div class="flex space-x-4 mb-8">
      <button v-for="category in allPortfolioCategories" :key="category.id" @click="onSelectCategory(category)"
        :class="{ 'bg-green-500 text-white': selectedCategory && category.id === selectedCategory.id, 'bg-gray-200': !(selectedCategory && category.id === selectedCategory.id) }"
        class="px-4 py-2 rounded-md border border-gray-300 focus:outline-none hover:bg-gray-300">
        {{ category.name }}
      </button>
    </div>

    <transition-group name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <portfolio-item v-for="portfolioItem in paginatedPortfolioItems" :key="portfolioItem.id"
        :portfolio-details="portfolioItem"></portfolio-item>
    </transition-group>

    <!-- Pagination -->
    <div class="p-5">
      <button @click="loadMore" class="bg-red-500 text-white px-4 py-2 rounded" style="float:right"
        :disabled="isLastPage">
        See More
      </button>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
import { usePortfolioStore } from "@/stores/portfolio-store";

export default {
  name: "SectionRecentPortfolioItems",
  components: {
    PortfolioItem,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const allPortfolioCategories = computed(() => portfolioStore.portfolioCategories)
    const selectedCategory = ref(portfolioStore.portfolioCategories[0]);

    const itemsPerPage = 3;
    const currentPage = ref(1);

    // When selectedCategory or currentPage changes, update paginatedPortfolioItems
    const paginatedPortfolioItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const filteredItems = selectedCategory.value
        ? portfolioStore.getPortfolioItemsByCategory(selectedCategory.value.id)
        : portfolioStore.getAllPortfolioItems();

      return filteredItems.slice(0, endIndex);
    });

    // Check if there are more pages
    const isLastPage = computed(() => {
      const totalItems = selectedCategory.value
        ? portfolioStore.getPortfolioItemsByCategory(selectedCategory.value.id).length
        : portfolioStore.getAllPortfolioItems().length;
      return currentPage.value * itemsPerPage >= totalItems;
    });

    // Handle selecting a category 
    const onSelectCategory = (category) => {
      selectedCategory.value = category;
      currentPage.value = 1; // Reset to first page when changing category
    };

    // Handle loading more items
    const loadMore = () => {
      currentPage.value += 1;
    };

    return {
      allPortfolioCategories,
      selectedCategory,
      paginatedPortfolioItems,
      onSelectCategory,
      loadMore,
      isLastPage,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles as needed */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
