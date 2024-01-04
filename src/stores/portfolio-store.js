import { ref } from "vue";
import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", () => {
  const portfolioItems = ref([
    { id: 1, title: "Project A" },
    { id: 2, title: "Project B" },
    { id: 3, title: "Project C" },
    { id: 4, title: "Project D" },
    { id: 5, title: "Project E" },
  ]);

  function getAllPortfolioItems() {
    // Should actually call a API request
    return portfolioItems;
  }

  function getRecentPortfolioItems(limit) {
    // Get most recent portfolio items, argument limit for how much to fetch
    // TODO: Should perform ORDERING By createdDate first
    return portfolioItems.value.slice(0, limit);
  }

  return { portfolioItems, getAllPortfolioItems, getRecentPortfolioItems };
});
