<template>
  <div class="reviews">
    <VueSlickCarousel v-bind="settings" v-if="videoId.length">
      <youtube
        class="main__review"
        :video-id="videoId"
        ref="youtube"
        @playing="playing"
        v-for="video in videoId"
        :key="video.videoId"
      ></youtube>
      <!-- <iframe
          class="home-page-stream__current-video card-training__trainerblock"
          frameborder="1"
          height="360"
          width="640"
          src="https://www.youtube-nocookie.com/embed/cmsH6by2GAo?autoplay=0&amp;rel=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> -->
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 1,
        centerMode: true
      },
      videoId: [
        { videoId: 'Fl_AzkZ5Mtw' },
        { videoId: 'FJZeFdPwTQI' },
        { videoId: 'ryKlYPHk_Zs' },
        { videoId: 'SEPraMdV8_w' },
        { videoId: 'a_lOxeZEppM' }
      ]
    }
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

<style lang="scss" scoped></style>
