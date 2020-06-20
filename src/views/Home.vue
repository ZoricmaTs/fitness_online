<template>
  <section class="page">
    <section class="navb-block-title">
      <Navbar />
      <section class="title-img" id="title-home">
        <div class="title-img-block grid">
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
    <section class="home-page-serv" id="about-service">
      <h1 class="home-page-serv__heading text__heading_size_h1">Что предлагает наш сервис</h1>
      <div class="home-page-serv__cards grid">
        <div class="home-page-serv__card">
          <img class="home-page-serv__card-img" src="../assets/img/1serv.svg" />
          <div class="home-page-serv__card-text">
            <h2 class="home-page-serv__card-heading text__heading_size_h2">Отслеживай прогресс</h2>
            <p class="home-page-serv__card-body text__heading_size_m">
              После каждой тренировки получайте очки прогресса и узнавайте
              сколько калорий вы сожгли
            </p>
          </div>
        </div>
        <div class="home-page-serv__card">
          <img class="home-page-serv__card-img" src="../assets/img/2serv.svg" />
          <div class="home-page-serv__card-text">
            <h2
              class="home-page-serv__card-heading text__heading_size_h2"
            >Тренируйся в группе или индивидуально</h2>
            <p class="home-page-serv__card-body text__heading_size_m">
              Наш сервис предлагает возможность заниматься в группе, либо
              индивидуально с тренером
            </p>
          </div>
        </div>
        <div class="home-page-serv__card">
          <img class="home-page-serv__card-img" src="../assets/img/3serv.svg" />
          <div class="home-page-serv__card-text">
            <h2
              class="home-page-serv__card-heading text__heading_size_h2"
            >Занимайся там, где тебе удобно</h2>
            <p
              class="home-page-serv__card-body text__heading_size_m"
            >Выбирайте время и тренируйтесь там, где есть интернет</p>
          </div>
        </div>
        <div class="home-page-serv__card">
          <img class="home-page-serv__card-img" src="../assets/img/4serv.svg" />
          <div class="home-page-serv__card-text">
            <h2 class="home-page-serv__card-heading text__heading_size_h2">Экономте ваше время</h2>
            <p
              class="home-page-serv__card-body text__heading_size_m"
            >Занимаясь онлайн, вы можете не тратить время на поездку в зал</p>
          </div>
        </div>
      </div>
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
