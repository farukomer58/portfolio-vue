<template>
    <nav class="bg-gray-800 opacity-90 sticky top-0 z-50">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <!-- Mobile menu button -->
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button @click="toggleMobileMenu" type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <!-- Hamburger icon when menu is closed -->
                        <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 6h18M3 18h18"></path>
                        </svg>
                        <!-- Close icon when menu is open -->
                        <svg v-else class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>

                <!-- Brand/logo -->
                <div class="flex flex-shrink-0 items-center">
                    <router-link :to="{ name: 'home' }" @click.prevent="scrollToTop">
                        <img class="h-8 w-auto hidden sm:block" src="@/assets/wolf-icon.png" alt="Your Company">
                    </router-link>
                    <!-- Navigation links (hidden on mobile) -->
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a href="" @click.prevent="scrollToTop"
                                class="text-gray-300 rounded-md px-3 py-2 text-sm font-medium"
                                active-class="bg-gray-900 text-white" aria-current="page">
                                {{ $t("nav.home") }}
                            </a>
                            <a href="#experience"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                active-class="bg-gray-900 text-white">
                                {{ $t("nav.experience") }}
                            </a>
                            <a href="#portfolio"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                active-class="bg-gray-900 text-white">
                                {{ $t("nav.portfolio") }}
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Notification button and profile dropdown -->
                <div v-if="authStore.isAuthenticated"
                    class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                        class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="absolute -inset-1.5"></span>
                        <span class="sr-only">View notifications</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                            </path>
                        </svg>
                    </button>

                    <!-- Profile dropdown -->
                    <div class="relative ml-3" @click="toggleDropdown">
                        <button type="button"
                            class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">Open user menu</span>
                            <i class="fa fa-solid fa-user white"></i>
                        </button>

                        <!-- Dropdown menu, show/hide based on menu state -->
                        <div v-if="isDropdownOpen"
                            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <router-link to="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">
                                {{ $t("nav.profile") }}
                            </router-link>
                            <router-link to="/" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1">
                                {{ $t("nav.settings") }}
                            </router-link>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                @click="signOut">
                                {{ $t("nav.signout") }}
                            </a>
                        </div>
                    </div>
                </div>

                <div class="hero-icons flex items-center space-x-2 text-xl text-gray-300 font-medium">
                    <a target="_blank" href="https://github.com/farukomer58" class="hover:text-white">
                        <i class="fab fa-github"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/omercitik/" class="hover:text-white">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/omercitik/" class="hover:text-white">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/omercitik/" class="hover:text-white">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/omercitik/" class="hover:text-white">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <!-- Add other social icons as needed -->
                </div>

            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state -->
        <div v-if="isMobileMenuOpen" class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <router-link :to="{ name: 'home' }" class="text-gray-300 block rounded-md px-3 py-2 text-base font-medium"
                    active-class="bg-gray-900 text-white" aria-current="page">
                    {{ $t("nav.home") }}
                </router-link>
                <router-link :to="{ name: 'portfolio' }"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    active-class="bg-gray-900 text-white">
                    {{ $t("nav.portfolio") }}
                </router-link>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth-store";

export default {
    name: "AppNavbar",
    setup() {
        const authStore = useAuthStore()
        const isDropdownOpen = ref(false);
        const isMobileMenuOpen = ref(false);

        const toggleDropdown = () => {
            isDropdownOpen.value = !isDropdownOpen.value;
        };

        const toggleMobileMenu = () => {
            isMobileMenuOpen.value = !isMobileMenuOpen.value;
        };

        const signOut = () => {
            // Add sign-out logic here
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        return {
            authStore,
            isDropdownOpen,
            isMobileMenuOpen,
            toggleDropdown,
            toggleMobileMenu,
            signOut,
            scrollToTop,
        };
    },
};
</script>
  
<style>
* {
    scroll-behavior: smooth;
}
</style>
  