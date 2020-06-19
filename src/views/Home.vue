<template>
  <section class="page">
    <section class="navb-block-title">
      <Navbar />
      <section class="title-img block-grid__left" id="title-home">
        <div class="title-img-block">
          <h1 class="text-title">
            Тренируйся не выходя из
            <span class="text-title__color_green">дома</span>
          </h1>
          <a
            href="#training-online"
            class="text__heading_size_h2 title-link btn__title btn__title_color_green btn__link"
          >Приступить к тренировке</a>
        </div>
      </section>
    </section>

    <Footer />
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'main-layout',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss"></style>
