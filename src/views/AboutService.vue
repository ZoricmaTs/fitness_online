<template>
  <div class="bg-color">
    <Navbar />
    <router-link
      :to="{ name: 'Home' }"
      class="about-serv__linkback singin__linkback text__heading_size_l"
    >
      <img src="../assets/img/Arrow.svg" alt="backlink" />
      Назад
    </router-link>
    <div class="block-grid-min">
      <AboutServcomp />
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import AboutServcomp from '@/components/AboutServcomp.vue'
export default {
  components: {
    Navbar,
    Footer,
    AboutServcomp
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/about-serv.scss';
@import '@/assets/scss/home-aboutserv.scss';
</style>
