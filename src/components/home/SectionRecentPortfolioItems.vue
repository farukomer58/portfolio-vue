<template>
  <section id="portfolio">
    <h2 class="text-2xl font-bold mb-4">Explore My Portfolio</h2>

    <!-- Category Tabs and Category Filter -->
    <div class="flex space-x-4 mb-8">
      <button
        v-for="category in allPortfolioCategories"
        :key="category.id"
        @click="onSelectCategory(category)"
        :class="{
          'bg-green-500 text-white': selectedCategory && category.id === selectedCategory.id,
          'bg-gray-200': !(selectedCategory && category.id === selectedCategory.id),
        }"
        class="px-4 py-2 rounded-md border border-gray-300 focus:outline-none hover:bg-gray-300"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="relative">
      <transition-group name="fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <portfolio-item
          v-for="portfolioItem in visiblePortfolioItems"
          :key="portfolioItem.id"
          :portfolio-details="portfolioItem"
        ></portfolio-item>
      </transition-group>

      <!-- Navigation Arrows -->
      <button @click="prevPage" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded">
        &lt;
      </button>
      <button @click="nextPage" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded">
        &gt;
      </button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch } from "vue";
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
import { usePortfolioStore } from "@/stores/portfolio-store";

export default {
  name: "SectionRecentPortfolioItems",
  components: {
    PortfolioItem,
  },
  setup() {
    const portfolioStore = usePortfolioStore();
    const allPortfolioCategories = computed(() => portfolioStore.portfolioCategories);
    const selectedCategory = ref(portfolioStore.portfolioCategories[0]);

    const itemsPerPage = 3;
    const currentPage = ref(0);

    // When selectedCategory changes, reset currentPage to 0
    watch(selectedCategory, () => {
      currentPage.value = 0;
    });

    // Computed property for the visible items
    const visiblePortfolioItems = computed(() => {
      const filteredItems = selectedCategory.value
        ? portfolioStore.getPortfolioItemsByCategory(selectedCategory.value.id)
        : portfolioStore.getAllPortfolioItems();

      const startIndex = currentPage.value * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return filteredItems.slice(startIndex, endIndex);
    });

    // Check if there are more pages
    const isLastPage = computed(() => {
      const totalItems = selectedCategory.value
        ? portfolioStore.getPortfolioItemsByCategory(selectedCategory.value.id).length
        : portfolioStore.getAllPortfolioItems().length;
      return (currentPage.value + 1) * itemsPerPage >= totalItems;
    });

    // Handle selecting a category
    const onSelectCategory = (category) => {
      selectedCategory.value = category;
      currentPage.value = 0; // Reset to the first page when changing category
    };

    // Handle navigating to the previous page
    const prevPage = () => {
      if (currentPage.value > 0) {
        currentPage.value -= 1;
      } else {
        // Wrap to the last page when on the first page
        currentPage.value = Math.floor((visiblePortfolioItems.length - 1) / itemsPerPage);
      }
    };

    // Handle navigating to the next page
    const nextPage = () => {
      if (!isLastPage.value) {
        currentPage.value += 1;
      } else {
        // Wrap to the first page when on the last page
        currentPage.value = 0;
      }
    };

    return {
      allPortfolioCategories,
      selectedCategory,
      visiblePortfolioItems,
      onSelectCategory,
      prevPage,
      nextPage,
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
