<template>
    <base-card>
        <div class="p-4">
            <h2 class="text-lg font-semibold">{{ portfolioDetails.title }}</h2>
            <p>{{ portfolioDetails }}</p>
            <!-- Add more details or customize as needed -->
        </div>
    </base-card>
</template>
  
<script>
import BaseCard from "@/components/base/BaseCard.vue";

export default {
    name: "PortfolioItem",
    props: ["portfolioDetails"],
    components: {
        BaseCard,
    },
};
</script>
  
<style scoped>
/* Add any additional styles as needed */
</style>
  