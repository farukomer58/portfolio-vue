<template>
    <section class="flex mt-8" id="experience">
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
          <div class="text-gray-600 mt-2">
            <!-- Display skills horizontally -->
            <span v-if="experience.skills && experience.skills.length">
                <b>Skills:</b> {{ experience.skills.join(' · ') }}
            </span>
          </div>
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
          <p class="text-gray-700">{{ education.description }}</p>
          <div class="text-gray-600 mt-2">
            <!-- Display skills horizontally -->
            <span v-if="education.skills && education.skills.length">
              <b>Skills:</b> {{ education.skills.join(' · ') }}
            </span>
          </div>
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
          title: 'IT Engineer / Software Engineer',
          date: 'Nov. 2023 – present ~ 3 months',
          location: 'ABN AMRO Bank N.V. , Amsterdam Zuid-Oost · Fulltime',
          description: '',
          skills: ["Vue.js", "Microsoft Azure", "Azure DevOps", "Java", "Spring Boot"],
          image: ('./assets/logos/abn_amro_logo.jpeg'),
        },
        {
          title: 'Flutter Developer Intern - Internship',
          date: 'Feb. 2023 – Jun. 2023 ~ 5 months',
          location: 'ABN AMRO Bank N.V. , Amsterdam Zuid-Oost · Fulltime',
          description: '',
          skills: ["Flutter", "Cross-platformontwikkeling", "Mobile Application Development", "Node.js", "Git"],
          image: ('./assets/logos/abn_amro_logo.jpeg'),
        },
        {
          title: 'Frontend Web Developer - Internship',
          date: 'Sep. 2021 – Jan. 2022 ~ 5 months',
          location: 'Vatansoft, Istanbul/Turkiye · Fulltime',
          description: 'Collaborated on admin dashboard projects using HTML, CSS, JavaScript, React, React Material UI, and Sass, contributing to improved user interfaces and web performance',
          skills: ["Webframework", "React.js", "SASS", "HTML5", "CSS"],
          image: ('./assets/logos/vatansoft.jfif'),
        },
      ]);
  
      const educations = ref([
        {
          school: 'Hogeschool van Amsterdam',
          date: '2019 – 2023',
          degree: "Bachelor's degree - Informatica (Software engineering) / Hogere opleiding Software engineer",
          skills: ["Spring MVC", "Back-End", "Webontwikkeling", "Java", "JavaScript", "Mobile Application Development", "Front-end ontwikkeling", "Algortihms & Datastructures"],
          image: ('./assets/logos/hva.jfif'),
          description: 'Graduated',
        },
        {
          school: 'Comenius Lyceum Amsterdam',
          date: '2015 – 2019',
          degree: 'Highschool - Higher general secondary education (Havo)',
          image: ('./assets/logos/default.jpg'),
          // Add a description for education
          description: 'Completed high school with a focus on general secondary education.',
        },
      ]);
  
      return { experiences, educations };
    },
  };
  </script>
  
  <style scoped>
  /* Add Tailwind CSS classes here */
  </style>
  