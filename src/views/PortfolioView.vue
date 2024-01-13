<template>
  <main>
    <section class="mb-8">
      <h1 class="text-3xl font-bold">Explore My Portfolio</h1>
    </section>

    <div class="flex space-x-4 mb-8">
      <button v-for="category in portfolioStore.portfolioCategories" :key="category.id"
        @click="onSelectCategory(category)"
        :class="{ 'bg-green-500 text-white': selectedCategory && category.id === selectedCategory.id, 'bg-gray-200': !(selectedCategory && category.id === selectedCategory.id) }"
        class="px-4 py-2 rounded-md border border-gray-300 focus:outline-none hover:bg-gray-300">
        {{ category.name }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem.id"
        :to="{ name: 'portfolio-detail', params: { id: portfolioItem.id } }" class="cursor-pointer">
        <portfolio-item :portfolio-details="portfolioItem"></portfolio-item>
      </router-link>
    </div>
  </main>
</template>

<script>
import { ref, computed } from "vue";
import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
import { usePortfolioStore } from "@/stores/portfolio-store";

export default {
  name: "PortfolioView",
  components: { PortfolioItem },
  setup() {
    const portfolioStore = usePortfolioStore();
    const selectedCategory = ref(portfolioStore.portfolioCategories[0]);

    const onSelectCategory = (category) => {
      console.log(category)
      selectedCategory.value = category;
    };

    const filteredPortfolioItems = computed(() => {
      if (!selectedCategory.value || selectedCategory.value.id === 1) {
        return portfolioStore.getAllPortfolioItems();
      } else {
        return portfolioStore.getPortfolioItemsByCategory(selectedCategory.value.id);
      }
    });

    return { portfolioStore, selectedCategory, filteredPortfolioItems, onSelectCategory };
  },
};
</script>

<style scoped>
/* Add any additional styling here if needed */
</style>
