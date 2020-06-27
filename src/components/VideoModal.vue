<template>
  <ModalInfo
    :showCloseCross="true"
    :showActionButton="false"
    :showCloseButton="false"
    @close="onClose"
    @click="onClose"
  >
    <span slot="header" class="form-modal-info__heading text__heading_size_h2"></span>
    <div class slot="body">
      <div class="form-modal-info__text-block">
        <youtube class="card-training__trainerblock" :video-id="this.videoId" ref="youtube"></youtube>
        <div class="card-training__nameblock video-modal__nameblock">
          <h1 class="card-training__name" :nametrain="this.nametrain">{{ this.nametrain }}</h1>
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
                <span
                  class="card-training__trainer-name"
                  :trainer="this.trainer"
                >{{ this.trainer }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalInfo>
</template>

<script>
import ModalInfo from '@/components/ModalInfo.vue'
export default {
  components: {
    ModalInfo
  },
  props: {
    videoId: { type: String, default: 'Fl_AzkZ5Mtw' },
    nametrain: { type: String, default: '' },
    trainer: { type: String }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    playVideo() {
      this.player.playVideo()
    },
    stopVideo() {
      this.player.stopVideo()
    },
    playing() {
      console.log('o/ we are watching!!!')
    }
  },

  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style lang="scss" scoped>
.video-modal__nameblock {
  margin-left: 50px;
  padding-bottom: 30px;
}
</style>
