<template>
  <div class="about">
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-4 text-secondary dark:text-primary"
          >
            Contact Us
          </h1>
          <p
            class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 dark:text-gray-400"
          >
            Got a question? Get in touch below and we will reply within 48
            hours.
          </p>
        </div>
        <form
          class="lg:w-1/2 md:w-2/3 mx-auto"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          netlify
        >
          <input type="hidden" name="form-name" value="contact" />
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label
                  for="name"
                  class="leading-7 text-sm text-gray-500 dark:text-gray-400"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-gray-100 dark:bg-fourth bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label
                  for="email"
                  class="leading-7 text-sm text-gray-500 dark:text-gray-400"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 dark:bg-fourth bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label
                  for="message"
                  class="leading-7 text-sm text-gray-500 dark:text-gray-400"
                  >Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 dark:bg-fourth bg-opacity-50 rounded border border-gray-300 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                class="flex mx-auto text-white bg-purple border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
            <div
              class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
            ></div>
          </div>
        </form>
      </div>
    </section>
    <Footer class="bg-primary dark:bg-secondary" />
  </div>
</template>
<script>
import Footer from '../components/Footer.vue';
export default {
  components: { Footer },
  data() {
    return {
      darkMode: false,
    };
  },
};
</script>
