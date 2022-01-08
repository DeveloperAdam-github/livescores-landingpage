<template>
  <div>
    <div
      class="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 items-center p-2 md:p-10"
    >
      <div class="flex justify-center">
        <div
          class="w-72 2xl:w-full flex px-auto items-center justify-center flex-col text-center m-10 dark:text-primary"
        >
          <h1 class="font-boldHeadline text-2xl text-left">
            Live scores & stats for football.
          </h1>
          <p class="font-headline text-sm dark:text-gray-500 mt-5 text-left">
            Stay up to date with real time scores, stats
            <span>and upcoming league games</span>
          </p>

          <div class="flex flex-col">
            <a
              class="flex items-start"
              href="https://apps.apple.com/us/app/worldie/id1603982331"
              target="_blank"
            >
              <button
                class="m-10 flex w-52 text-white bg-purple border-0 py-2 px-4 focus:outline-none items-center text-left hover:bg-indigo-700 rounded text-xs font-headline"
              >
                <div class="h-full">
                  <i class="fab fa-apple text-3xl px-2.5"></i>
                </div>
                <div class="flex flex-col w-2/3">
                  <p class="">Download on the</p>
                  <p class="text-lg font-bold">App Store</p>
                </div>
              </button>
            </a>
          </div>

          <!-- <div>
            <a
              href="https://apps.apple.com/us/app/worldie/id1603982331"
              target="_blank"
              class="m-10 flex w-52 text-white bg-purple border-0 py-2 px-4 focus:outline-none items-center text-left hover:bg-indigo-500 rounded text-xs font-headline"
            >
              <div class="h-full w-1/5">
                <i class="fab fa-apple text-3xl"></i>
              </div>
              <div class="flex flex-col w-2/3">
                <p>Download on the</p>
                <p class="text-lg font-bold">App Store</p>
              </div>
            </a>
          </div> -->
        </div>
      </div>
      <div>
        <div class="mockup-phone border-primary">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard phone-1 artboard-demo bg-light dark:bg-dark">
              <img
                v-if="this.$store.state.darkMode"
                class="dark h-full w-full"
                src="../assets/screenshot.png"
                alt=""
              />

              <img
                v-if="!this.$store.state.darkMode"
                class=""
                src="../assets/screenshot2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="bg-primary dark:bg-secondary" />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import { mapGetters } from 'vuex';
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      toggleDarkModeFalse: false,
    };
  },
  components: { Footer },
  watch() {
    this.$store.state.darkMode;
  },
  computed: {
    ...mapGetters(['toggleDarkModeFalse', 'toggleDarkModeTrue']),
  },
};
</script>

<style scoped>
/* button:hover p {
  display: none;
}

button:hover:before {
  content: 'Coming Soon!';
  height: 45px;
  display: flex;
  justify-content: center;
  place-items: center;
  padding: 10px;
  font-size: 20px;
  text-decoration: underline;
  line-height: 20px;
} */
</style>
