<template>
    <main class="container mx-auto my-8">
        <div class="bg-white p-8 rounded shadow flex">
            <!-- Image Slider Column -->
            <div class="w-1/2 relative">
                <div class="custom-carousel">
                    <div v-for="(imageUrl, index) in portfolioItem.imageUrls" :key="index"
                        :class="{ 'active': index === activeIndex, 'hidden': index !== activeIndex }">
                        <img class="d-block w-full rounded" :src="imageUrl" :alt="'Slide ' + (index + 1)" />
                    </div>
                    <button @click="prevSlide" class="carousel-control prev">&lt;</button>
                    <button @click="nextSlide" class="carousel-control next">&gt;</button>
                </div>
            </div>

            <!-- Details Column -->
            <div class="w-1/2 pl-8">
                <h2 class="text-3xl font-bold mb-4">{{ portfolioItem.title }}</h2>

                <!-- Other Details -->
                <ul>
                    <li><strong>Client: </strong> {{ portfolioItem.client }}</li>
                    <li><strong>Status: </strong> {{ portfolioItem.status }}</li>
                    <li><strong>Started: </strong> {{ portfolioItem.started }}</li>
                    <li><strong>Ended: </strong> {{ portfolioItem.ended }}</li>
                    <li>
                        <strong>Github: </strong>
                        <a :href="portfolioItem.github" class="text-blue-500 hover:underline" target="_blank"
                            rel="noopener noreferrer">
                            {{ portfolioItem.github }}
                        </a>
                    </li>
                    <li><strong>Technologies: </strong> {{ portfolioItem.technologies }}</li>
                    <li>
                        <strong>Demo: </strong>
                        <a :href="portfolioItem.demo" target="_blank" rel="noopener noreferrer">
                            <button class="bg-red-500 text-white px-4 py-2 rounded demo"
                                :disabled="!portfolioItem.demo">Demo</button>
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
        const activeIndex = ref(0);

        const nextSlide = () => {
            activeIndex.value = (activeIndex.value + 1) % portfolioItem.value.imageUrls.length;
        };

        const prevSlide = () => {
            activeIndex.value = (activeIndex.value - 1 + portfolioItem.value.imageUrls.length) % portfolioItem.value.imageUrls.length;
        };

        onMounted(() => {
            // Fetch portfolio details based on the id from the store
            portfolioItem.value = portfolioStore.getPortfolioItemById(props.id);
        });

        return {
            portfolioItem,
            activeIndex,
            nextSlide,
            prevSlide,
        };
    },
};
</script>

<style scoped>
/* Additional styling if needed */
.demo:disabled {
    background-color: gray;
}

.custom-carousel {
    position: relative;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 2rem;
    color: #000;
    /* Adjust color as needed */
    cursor: pointer;
    outline: none;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
</style>