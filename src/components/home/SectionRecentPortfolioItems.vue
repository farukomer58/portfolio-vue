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

    <transition-group name="fade" tag="div" mode="out-in" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <portfolio-item v-for="portfolioItem in paginatedPortfolioItems" :key="portfolioItem.id" :portfolio-details="portfolioItem"></portfolio-item>
    </transition-group>

    <!-- Pagination -->
    <div class="flex flex-col items-center space-y-4 mt-8">
      <div class="flex items-center space-x-1">
        <button @click="gotoPage(1)" :disabled="currentPage === 1" class="pagination-button">&lt;&lt;</button>
        <button @click="gotoPage(currentPage - 1)" :disabled="currentPage === 1" class="pagination-button">&lt;</button>
        <button v-for="page in totalPages" :key="page" @click="gotoPage(page)" :class="{ 'pagination-button-active': page === currentPage }" class="pagination-button">{{ page }}</button>
        <button @click="gotoPage(currentPage + 1)" :disabled="currentPage === totalPages" class="pagination-button">&gt;</button>
        <button @click="gotoPage(totalPages)" :disabled="currentPage === totalPages" class="pagination-button">&gt;&gt;</button>
      </div>
      <div class="text-sm text-gray-600">Showing {{ startRecord }} to {{ endRecord }} of {{ totalRecords }} records</div>
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

    const itemsPerPage = 3; // Adjust the items per page as needed
    const currentPage = ref(1);

    // When selectedCategory changes, reset currentPage to 1
    watch(selectedCategory, () => {
      currentPage.value = 1;
    });

    // Computed property for the paginated items
    const paginatedPortfolioItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const filteredItems = selectedCategory.value
        ? portfolioStore.getPortfolioItemsByCategory(selectedCategory.value.id)
        : portfolioStore.getAllPortfolioItems();

      return filteredItems.slice(startIndex, endIndex);
    });

    // Computed properties for pagination information
    const totalRecords = computed(() => {
      const filteredItems = selectedCategory.value
        ? portfolioStore.getPortfolioItemsByCategory(selectedCategory.value.id)
        : portfolioStore.getAllPortfolioItems();
      return filteredItems.length;
    });

    const totalPages = computed(() => Math.ceil(totalRecords.value / itemsPerPage));
    const startRecord = computed(() => (currentPage.value - 1) * itemsPerPage + 1);
    const endRecord = computed(() => Math.min(currentPage.value * itemsPerPage, totalRecords.value));

    // Handle selecting a category
    const onSelectCategory = (category) => {
      selectedCategory.value = category;
      currentPage.value = 1; // Reset to the first page when changing category
    };

    // Handle navigating to a specific page
    const gotoPage = (page) => {
      currentPage.value = Math.max(1, Math.min(page, totalPages.value));
    };

    return {
      allPortfolioCategories,
      selectedCategory,
      paginatedPortfolioItems,
      totalRecords,
      totalPages,
      startRecord,
      endRecord,
      currentPage,
      onSelectCategory,
      gotoPage,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles as needed */

.pagination-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem; /* 6px rounded */
  font-size: 0.875rem; /* 14px font size */
  font-weight: 500;
  background-color: #ffffff;
  color: #4a5568; /* Adjust text color as needed */
  border: 1px solid #cbd5e0; /* Adjust border color as needed */
  padding: 0.5rem 1rem; /* Adjust padding as needed */
  height: 2.5rem; /* 40px height */
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.pagination-button:hover {
  background-color: #edf2f7; /* Adjust hover background color as needed */
}

.pagination-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.pagination-button-active {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem; /* 6px rounded */
  font-size: 0.875rem; /* 14px font size */
  font-weight: 500;
  background-color: #e14242; /* Adjust active background color as needed */
  color: #ffffff;
  border: 1px solid #e14242; /* Adjust active border color as needed */
  padding: 0.5rem 1rem; /* Adjust padding as needed */
  height: 2.5rem; /* 40px height */
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.pagination-button-active:hover {
  background-color: #2b6cb0; /* Adjust active hover background color as needed */
  border-color: #2b6cb0; /* Adjust active hover border color as needed */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
