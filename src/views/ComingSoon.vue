<template>
  <div>
    <div class="h-full w-full flex items-center justify-center">
      <h1
        class="text-6xl font-boldHeadline uppercase text-secondary dark:text-primary"
      >
        coming so
        <i class="text-purple far fa-futbol"></i>
        n
      </h1>
    </div>
    <Footer class="bg-primary dark:bg-secondary" />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

// @ is an alias to /src

export default {
  name: 'ComingSoon',
  components: {
    Footer,
  },
  data() {
    return {};
  },

  watch() {},
};
</script>

<style></style>
