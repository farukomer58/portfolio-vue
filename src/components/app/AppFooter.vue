<template>
    <footer class="bg-gray-800 text-white py-4 text-center">
      ©Omer Faruk Citik - {{ currentYear }}
    </footer>
  </template>
  
  <script>
  export default {
    name: "AppFooter",
    setup() {
      const currentYear = new Date().getFullYear();
  
      return {
        currentYear,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  