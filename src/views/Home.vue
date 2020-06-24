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
      <div class="home-page-serv__cards">
        <div class="home-page-serv__cardblock">
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
        </div>
        <div class="home-page-serv__cardblock">
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
              <h2 class="home-page-serv__card-heading text__heading_size_h2">Экономьте ваше время</h2>
              <p
                class="home-page-serv__card-body text__heading_size_m"
              >Занимаясь онлайн, вы можете не тратить время на поездку в зал</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-page-stream" id="trainings">
      <section class="home-page-stream__container">
        <h1 class="home-page-stream__heading text__heading_size_h1">
          Сейчас в эфире
          <div class="home-page-stream__status-stream"></div>
        </h1>
        <div class="home-page-stream__block">
          <div class="home-page-stream__card card-training">
            <div class="card-training__nameblock">
              <h1 class="card-training__name">Шейпинг</h1>
              <div class="card-training__trainer">
                <div class="home-page-stream__card-trainerblock card-training__trainerblock">
                  <img
                    class="home-page-stream__card-trainer-img card-training__trainerimg"
                    src="../assets/img/avatar.png"
                    alt="avatar"
                    height="60"
                    width="60"
                  />
                  <p class="card-training__text">
                    Тренер
                    <span class="card-training__trainer-name">Алина Мронова</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="card-training__btnblock">
              <a
                href="https://discord.gg/vnz8DS"
                class="card-training__btn text__heading_size_h3 btn__title btn__title_color_green btn__link"
              >Приступить к тренировке</a>
              <a
                class="text__heading_size_h3 btn__title btn__title_color_transp-green btn__link"
              >Расписание тренера</a>
            </div>
          </div>
          <youtube class="home-page-stream__current-video" video-id="Fl_AzkZ5Mtw" ref="youtube"></youtube>
        </div>
        <!-- <iframe
          class="home-page-stream__current-video card-training__trainerblock"
          frameborder="0"
          height="360"
          width="640"
          src="https://www.youtube-nocookie.com/embed/cmsH6by2GAo?autoplay=0&amp;rel=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>-->
        <!-- <iframe
          allowfullscreen
          frameborder="0"
          height="360"
          src="//www.youtube.com/embed/live_stream?channel=UCjXYQ1YhutGpzXvQJctzvAQ&autoplay=1"
          width="640"
        ></iframe>-->
      </section>

      <!-- <div class="reviews">
        <VueSlickCarousel v-bind="settings" v-if="videoIds.length">
          <youtube
            class="carucel__video"
            :video-id="item.videoId"
            ref="youtube"
            @playing="playing"
            v-for="item in videoIds"
            :key="item.videoId"
          ></youtube>
        </VueSlickCarousel>
      </div>-->
      <!-- <div class="reviews">
        <VueSlickCarousel v-bind="settings" v-if="videoIds.length">
          <video class="carucel__video" src="../assets/video.mp4" controls muted></video>
          <video class="carucel__video" src="../assets/video.mp4" controls muted></video>
          <video class="carucel__video" src="../assets/video.mp4" controls muted></video>
          <video class="carucel__video" src="../assets/video.mp4" controls muted></video>
          <video class="carucel__video" src="../assets/video.mp4" controls muted></video>
        </VueSlickCarousel>
      </div>-->
    </section>
    <Slider />
    <section class="home-page-seeschedules">
      <h1 class="text__color_green text__heading_size_h1">
        Нет времени
        <span class="text__color_black">тренироваться сейчас?</span>
      </h1>
      <p class="home-page-seeschedules__body text__color_black text__heading_size_h2">
        Открывай расписание и выбирай удобное для себя время или смотри
        тренировки в записи позже
      </p>
      <router-link
        :to="{ name: 'schedule' }"
        class="text__heading_size_h3 btn__title btn__title_color_green btn__link"
      >Просмотреть расписание</router-link>
    </section>
    <Footer id="footer" />
  </section>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'
// import ModalInfo from '@/components/ModalInfo.vue'

export default {
  name: 'main-layout',
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5
      },
      videoIds: [
        { videoId: '2Rg7zXKXIjk' }, //стретчинг
        { videoId: 'FJZeFdPwTQI' },
        { videoId: 'ryKlYPHk_Zs' },
        { videoId: 'SEPraMdV8_w' }
      ],
      trainers: [
        { trainer: 'Татьяна Самсонова' }, //стретчинг
        { trainer: 'Алина Мронова' },
        { trainer: 'Геннадий Силович' },
        { trainer: 'Артур Пирожков' }
      ],
      trainings: [
        { nametrain: 'стретчинг' }, //стретчинг
        { nametrain: 'калланетика' },
        { nametrain: 'йога' },
        { nametrain: 'тренировочка' }
      ],
      openVideoModal: false
    }
  },
  components: {
    Navbar,
    Footer,
    // VueSlickCarousel,
    Slider
    // ModalInfo
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('o/ we are watching!!!')
    }
  },

  created() {},
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>
<style lang="scss"></style>
