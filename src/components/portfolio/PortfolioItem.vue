<template>
  <router-link :to="{ name: 'portfolio-detail', params: { id: portfolioDetails.id } }">
    <base-card class="portfolio-item" :borderColor="portfolioCard.borderColor"
      :backgroundColor="portfolioCard.backgroundColor" :borderRadius="portfolioCard.borderRadius"
      :hoverEffect="portfolioCard.hoverEffect">
      <div class="portfolio-content">
        <img :src="portfolioDetails.coverImage" :alt="portfolioDetails.title" class="portfolio-cover" />
        <div class="portfolio-details flex-1 ml-4">
          <h2 class="text-lg font-semibold truncate">{{ portfolioDetails.title }}</h2>
          <p class="text-sm text-gray-600 truncate">{{ portfolioDetails.shortDesc }}</p>
          <button class="bg-red-500 text-white px-4 py-2 rounded-full mt-2">View Details</button>
        </div>
      </div>
    </base-card>
  </router-link>
</template>

<script>
import BaseCard from "@/components/base/BaseCard.vue";

export default {
  name: "PortfolioItem",
  props: ["portfolioDetails"],
  components: {
    BaseCard,
  },
  setup() {
    const portfolioCard = {
      borderColor: "border-gray-300",
      backgroundColor: "bg-white",
      borderRadius: "rounded",
      hoverEffect: "hover:shadow-md",
    }
    return {
      portfolioCard
    };
  },
};
</script>

<style scoped>
.portfolio-item {
  max-width: 400px;
  margin: 0 auto;
}

.portfolio-content {
  overflow: hidden;
}

.portfolio-cover {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.portfolio-details {
  padding: 1.5rem;
}

/* Truncate long text */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Add any additional styles as needed */
</style>
