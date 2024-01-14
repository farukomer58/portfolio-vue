
<template>
  <main>
    <!-- Section with 2 columns profile picture on left and about me on right take fille size -->
    <!-- Hero Section -->
    <section class="hero-section flex bg-gray-900 text-white p-8">
      <!-- Profile Picture Column -->
      <div class="flex-auto w-1/3">
        <div class="h-48 w-48 bg-cover bg-center bg-gray-500 mx-auto rounded-full overflow-hidden">
          <!-- You can replace the background image with your profile picture -->
          <img src="https://unrealfaruk.com/static/media/profile.d794ffa649875cf91295.png" alt="Profile Picture"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- About Me Column -->
      <div class="flex-auto w-2/3 ml-8">
        <h1 class="text-4xl font-bold mb-4">I am Ömer Faruk</h1>
        <i class="block italic text-lg mb-4">And I am a Software Engineer</i>

        <p class="mb-4">
          Name: Ömer Faruk Citik - Date of Birth: 15/11/2001 - Location: Amsterdam<br />
          Email: of.c.58@hotmail.com - Phone: +31 685298846<br />
          Linkedin: <a target="_blank"
            href="https://www.linkedin.com/in/omercitik/">https://www.linkedin.com/in/omercitik/</a><br />
          Github: <a target="_blank" href="https://github.com/farukomer58">https://github.com/farukomer58</a>
        </p>

        <p>
          I am Omer Citik, 20 years old and currently in my second year of the HBO-ICT: Software Engineering course at the
          Hogeschool van Amsterdam (HVA).
          I am passionate about developing software and programming since a young age. During my education, I participated
          in various software projects,
          gaining theoretical knowledge. I am eager to apply my knowledge in the real world and improve my competencies
          and skills in software development.
          My expertise lies in Java, JavaScript, Angular, Spring, but I have experience with various programming
          languages.
        </p>
      </div>
    </section>

    <!-- Section with experience and education -->
    <section-experience></section-experience>

    <!-- Section for highlighted portofilio items with link to view full portofolio website-->
    <!-- Get 3 most recent portfolioitems -->
    <section-recent-portfolio-items></section-recent-portfolio-items>
  </main>
</template>

<script >
import { onMounted } from 'vue';
import SectionExperience from '@/components/home/SectionExperience.vue'
import SectionRecentPortfolioItems from '@/components/home/SectionRecentPortfolioItems.vue'

export default {
  name: "HomeView",
  components: {
    SectionExperience,
    SectionRecentPortfolioItems
  },
  setup() {

    onMounted(() => {
      // Add JavaScript for smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    })
  }
}
</script>