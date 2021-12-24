<template>
  <div
    class="bg-primary dark:bg-secondary text-secondary dark:text-primary h-10vh w-full border-b md:border-0 border-gray-400 flex font-boldHeadline text-base lg:text-xl justify-between px-4 md:px-10 items-center"
  >
    <div>
      <h1>LiveSc<i class="text-purple far fa-futbol"></i>res</h1>
    </div>
    <div class="w-1/2 lg:w-1/3 flex justify-between items-center">
      <router-link class="" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="" :to="{ name: 'Contact' }">Contact</router-link>
      <div
        class="h-9 w-9 rounded-full bg-secondary dark:bg-primary flex items-center justify-center transform cursor-pointer transition-all"
      >
        <i
          v-if="isDarkModeActive"
          @click="
            $emit('darkMode'), (this.isDarkModeActive = !this.isDarkModeActive)
          "
          class="fas fa-sun text-lg font-bold text-primary dark:text-secondary"
        ></i>
        <i
          v-if="!isDarkModeActive"
          @click="
            $emit('darkMode'), (this.isDarkModeActive = !this.isDarkModeActive)
          "
          class="fas fa-moon text-lg font-bold text-primary dark:text-secondary"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkModeActive: false,
    };
  },
};
</script>

<style>
.router-link-active {
  color: #793ef9;
  font-weight: bold;

  transition: all 0.3s linear;
}

.router-link-active span {
  opacity: 100;
  color: #793ef9;
}
</style>
