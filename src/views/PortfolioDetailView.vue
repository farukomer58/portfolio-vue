<template>
    <main class="container mx-auto my-8">
        <div class="bg-white p-8 rounded shadow flex">
            <!-- Image Slider Column -->
            <div class="w-1/2">
                <div class="customCarousel carousel slide">
                    <div class="carousel-inner">
                        <div v-for="(imageUrl, index) in portfolioItem.imageUrls" :key="index"
                            :class="{ 'active carousel-item': index === 0, 'carousel-item': index !== 0 }">
                            <img class="d-block w-full rounded" :src="imageUrl" :alt="'Slide ' + (index + 1)" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Details Column -->
            <div class="w-1/2 pl-8">
                <h2 class="text-3xl font-bold mb-4">{{ portfolioItem.title }}</h2>

                <!-- Other Details -->
                <ul>
                    <li><strong>Client:</strong> {{ portfolioItem.client }}</li>
                    <li><strong>Status:</strong> {{ portfolioItem.status }}</li>
                    <li><strong>Started:</strong> {{ portfolioItem.started }}</li>
                    <li><strong>Ended:</strong> {{ portfolioItem.ended }}</li>
                    <li>
                        <strong>Github:</strong>
                        <a :href="portfolioItem.github" class="text-blue-500 hover:underline" target="_blank"
                            rel="noopener noreferrer">
                            {{ portfolioItem.github }}
                        </a>
                    </li>
                    <!-- <li><strong>Technologies:</strong> {{ portfolioItem.technologies.join(', ') }}</li> -->
                    <li>
                        <strong>Demo:</strong>
                        <a :href="portfolioItem.demo" target="_blank" rel="noopener noreferrer">
                            <button class="bg-blue-500 text-white px-4 py-2 rounded">Demo</button>
                        </a>
                    </li>
                </ul>

                <!-- Description -->
                <div class="mt-8">
                    <h3 class="text-xl font-bold mb-2">Description:</h3>
                    <p v-html="portfolioItem.desc"></p>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { usePortfolioStore } from '@/stores/portfolio-store';

export default {
    props: {
        id: {
            required: true,
        },
    },
    setup(props) {
        const portfolioStore = usePortfolioStore();
        const portfolioItem = ref({});

        onMounted(() => {
            // Fetch portfolio details based on the id from the store
            portfolioItem.value = portfolioStore.getPortfolioItemById(props.id);
        });

        return {
            portfolioItem,
        };
    },
};
</script>
  
<style scoped>
/* Additional styling if needed */
</style>
  