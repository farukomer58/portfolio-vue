import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", () => {
  const profileDetail = ref({
    // TODO: should all other detail in here too for easier/dynamic change
    profileImage: "assets/profile.png",
    name: "Ömer Faruk Citik",
    birthday: "15/11/2001",
    location: "Amsterdam, The Netherlands",
    email: "of.c.58@hotmail.com",
    socials: {
      github: "https://github.com/farukomer58",
      linkedin: "https://www.linkedin.com/in/omercitik/",
    },
    description: `I'm Omer Citik, a graduate in Software Development from the University of Applied Sciences (Hogeschool van Amsterdam). 
        I'm passionate about software engineering and programming, and I've actively taken part in various software projects during my studies. 
        I'm skilled in Java, JavaScript, Flutter, and Spring, and I'm open to learn new languages and technologies quickly. 
        I'm eager to bring my knowledge and enthusiasm to real-world projects and contribute to innovative solutions in the software development field.
    `,
  });

  return { profileDetail };
});
