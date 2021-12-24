<template>
  <div
    class="h-screen w-screen bg-primary dark:bg-secondary"
    :class="darkMode ? 'dark' : 'light'"
  >
    <Navbar :class="darkMode ? 'dark' : 'light'" @darkMode="toggleDarkMode" />
    <router-view
      :class="darkMode ? 'dark' : 'light'"
      class="bg-primary dark:bg-secondary h-90vh w-full overflow-y-scroll transfor transition-all"
    />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar },
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      if (this.darkMode === true) {
        this.$store.dispatch('toggleDarkModeFalse');
        this.darkMode = false;
      } else if (this.darkMode === false) {
        this.$store.dispatch('toggleDarkModeTrue');
        this.darkMode = true;
      }
      // this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
