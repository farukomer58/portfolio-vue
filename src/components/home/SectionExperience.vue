<template>
    <section class="flex mt-8">
        <!-- Experience Section -->
        <div class="flex-1 pr-8">
            <div class="text-3xl font-bold mb-4">Experience</div>
            <div v-for="(experience, index) in experiences" :key="index" class="mb-8">
                <div class="flex items-center mb-2">
                    <img :src="experience.image" class="w-8 h-8 mr-4" alt="Experience Icon">
                    <div class="text-xl font-bold">{{ experience.title }}</div>
                </div>
                <div class="text-sm text-gray-600 mb-2">{{ experience.date }}</div>
                <div class="text-sm text-gray-600 mb-2">{{ experience.location }}</div>
                <p class="text-gray-700">{{ experience.description }}</p>
            </div>
        </div>

        <!-- Education Section -->
        <div class="flex-1">
            <div class="text-3xl font-bold mb-4">Education</div>
            <div v-for="(education, index) in educations" :key="index" class="mb-8">
                <div class="flex items-center mb-2">
                    <img :src="education.image" class="w-8 h-8 mr-4" alt="Education Icon">
                    <div class="text-xl font-bold">{{ education.school }}</div>
                </div>
                <div class="text-sm text-gray-600 mb-2">{{ education.date }}</div>
                <div class="text-sm text-gray-600 mb-2">{{ education.degree }}</div>
            </div>
        </div>
    </section>
</template>
  
<script>
import { ref } from 'vue';

export default {
    name: "SectionExperience",
    setup() {
        const experiences = ref([
            {
                title: 'Frontend Web Developer',
                date: 'Sep. 2021 – Jan. 2022 ~ 5 months',
                location: 'Vatansoft, Istanbul/Turkiye · Fulltime',
                description: 'Worked On Webpanels With: HTML/CSS, Javascript, React, React Material UI, Sass',
                image: './static/media/vatansoft.7919b6a3d12a691e4637.jfif',
            },
            {
                title: 'Objectbeveiliger',
                date: 'Apr. 2022 – present ~ 22 months',
                location: 'Workrate, Amsterdam Zuid-Oost · Parttime',
                description: 'Object Security',
                image: './static/media/default.d29ffcee6caca27a2017.jpg',
            },
        ]);

        const educations = ref([
            {
                school: 'Hogeschool van Amsterdam',
                date: '2019 – 2023',
                degree: "Bachelor's degree - Informatica (Software engineering) / Hogere opleiding Software engineer",
                image: './static/media/hva.a3a81636eaae3d0c7df8.jfif',
            },
            {
                school: 'Comenius Lyceum Amsterdam',
                date: '2015 – 2019',
                degree: 'Highschool - Higher general secondary education (Havo)',
                image: './static/media/default.d29ffcee6caca27a2017.jpg',
            },
        ]);

        return { experiences, educations };
    },
};
</script>
  
<style scoped>
/* Add Tailwind CSS classes here */
</style>
  