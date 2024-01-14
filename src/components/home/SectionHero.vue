<template>
    <section class="hero-section flex bg-gray-900 text-white p-8">
      <!-- Profile Picture Column -->
      <div class="flex-auto w-1/3">
        <div class="h-48 w-48 bg-cover bg-center bg-gray-500 mx-auto rounded-full overflow-hidden">
          <!-- You can replace the background image with your profile picture -->
          <img :src="profileDetail.profileImage" :alt="profileDetail.name + ' Profile Picture'" class="w-full h-full object-cover" />
        </div>
      </div>
  
      <!-- About Me Column -->
      <div class="flex-auto w-2/3 ml-8">
        <h1 class="text-4xl font-bold mb-4">{{ profileDetail.name }}</h1>
        <i class="block italic text-lg mb-4">And I am a Software Engineer</i>
  
        <!-- Details Section -->
        <div class="mb-4">
          <p>
            <strong>Name:</strong> {{ profileDetail.name }}<br />
            <strong>Date of Birth:</strong> {{ profileDetail.birthday }}<br />
            <strong>Location:</strong> {{ profileDetail.location }}<br />
            <strong>Email:</strong> <span class="link">{{ profileDetail.email }}</span><br />
            <strong>Linkedin:</strong> <a target="_blank" rel="noopener noreferrer" class="link" :href="profileDetail.socials.linkedin">{{ profileDetail.socials.linkedin }}</a><br />
            <strong>Github:</strong> <a target="_blank" rel="noopener noreferrer" class="link" :href="profileDetail.socials.github">{{ profileDetail.socials.github }}</a>
          </p>
        </div>
  
        <!-- Description Section -->
        <div class="mb-4 description">
          <p>{{ profileDetail.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useProfileStore } from '@/stores/profile-store';
  
  export default {
    name: "SectionHero",
    setup() {
      const profileStore = useProfileStore()
      const profileDetail = computed(() => profileStore.profileDetail)
  
      return {
        profileDetail
      }
    }
  }
  </script>
  
  <style>
  .link {
    color: #4299e1;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .link:hover {
    color: #3182ce;
  }
  
  /* Style for the code block */
  .mb-4 p {
    margin-bottom: 0.5rem;
    white-space: pre-line;
  }
  
  .description {
    font-family: 'Courier New', monospace;
    color: #a1a1a1;
  }
  </style>
  