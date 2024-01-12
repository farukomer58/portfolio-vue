import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", () => {
  const portfolioItems = ref([
    { id: 1, title: "Project A", categories: [1, 2] },
    { id: 2, title: "Project B", categories: [2] },
    { id: 3, title: "Project C", categories: [1, 2, 3, 4] },
    { id: 4, title: "Project D", categories: [3, 4] },
    { id: 5, title: "Project E", categories: [4] },
  ]);

  const portfolioCategorries = ref([
    { id: 1, name: "All Items" },
    { id: 2, name: "Web Development" },
    { id: 3, name: "Game Development" },
    { id: 4, name: "Vue.JS" },
    { id: 5, name: "Backend Development" },
  ]);

  const getAllPortfolioItems = () => {
    // Simulate an API call, replace with your actual logic
    return portfolioItems.value;
  };

  const getRecentPortfolioItems = (limit) => {
    // Simulate an API call, replace with your actual logic
    return portfolioItems.value.slice(0, limit);
  };

  const getPortfolioItemsByCategory = (categoryId) => {
    // Filter portfolio items by category
    return portfolioItems.value.filter((item) =>
      item.categories.includes(categoryId)
    );
  };

  const filteredPortfolioItems = computed(() => {
    // You can use this computed property for other components if needed
    return getPortfolioItemsByCategory(selectedCategory.value.id);
  });

  return {
    portfolioItems,
    portfolioCategorries,
    getAllPortfolioItems,
    getRecentPortfolioItems,
    getPortfolioItemsByCategory,
    filteredPortfolioItems,
  };
});
