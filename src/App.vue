
<template>
  <div class="flex-grow">
  <!-- Navbar -->
  <app-navbar></app-navbar>

  <!-- Placeholder for routes with ANIMATION -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from './components/app/AppNavbar.vue'
import AppFooter from './components/app/AppFooter.vue';

export default {
  components: {
    AppNavbar,
    AppFooter
  },
}
</script>


<style >
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s lienar;
  opacity: 0;
}
</style>
