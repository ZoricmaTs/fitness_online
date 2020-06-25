<template>
  <div class="box-wrap">
    <div class="box">
      <ul id="box-carousel" class="box-carousel" :class="{ invert }">
        <transition-group name="slide" tag="div">
          <li
            @click="openVideoModal = !openVideoModal"
            v-for="(item, index) in list"
            :key="item"
            v-show="index === active"
          >
            <img :src="item" />
          </li>
        </transition-group>
      </ul>
    </div>

    <!-- arrow -->

    <span
      id="box-arrow-left"
      class="material-icons box-arrow box-arrow-left"
      @click="change(active - 1)"
    >arrow_back_ios</span>
    <span
      id="box-arrow-right"
      class="material-icons box-arrow box-arrow-right"
      @click="change(active + 1)"
    >arrow_forward_ios</span>

    <!-- nav -->
    <!-- <ul class="box-navs">
      <li v-for="(item, index) in list" :key="item" class @click="change(index)">
        <div class="circle" :class="{ active: active === index }"></div>
      </li>
    </ul>-->

    <VideoModal
      :showCloseCross="true"
      @close="openVideoModal = false"
      v-show="openVideoModal"
      :videoId="this.videos[this.active]"
    />
  </div>
</template>

<script>
import VideoModal from '@/components/VideoModal.vue'
export default {
  data() {
    return {
      list: [
        'https://picsum.photos/id/100/500/250',
        'https://picsum.photos/id/200/500/250',
        'https://picsum.photos/id/300/500/250',
        'https://picsum.photos/id/400/500/250'
      ],
      videos: ['2Rg7zXKXIjk', 'FJZeFdPwTQI', 'ryKlYPHk_Zs', 'SEPraMdV8_w'],
      trainerss: [
        'Татьяна Самсонова',
        'Алина Мронова',
        'Геннадий Силович',
        'Артур Пирожков'
      ],
      active: 0,
      invert: false,
      openVideoModal: false
    }
  },
  components: {
    VideoModal
  },
  methods: {
    change(index) {
      this.invert = index < this.active
      this.active = (index + this.total) % this.total
    }
  },
  // created() {
  //   var vm = this
  //   document.addEventListener('click', this.toggleDropdown.bind(this))
  // },
  mounted() {},
  computed: {
    total() {
      return this.list.length
    }
  }
}
</script>

<style lang="scss" scoped>
.material-icons {
  color: #05ad5c;
}
.box-wrap {
  background-color: #454545;
  position: relative;
  margin: 0 auto 0;
  width: 500px;
}
.box-carousel {
  width: 100%;
  > div {
    position: relative;
    overflow-x: hidden;
    padding-top: percentage(250 / 500);
    width: 100%;
  }
  li {
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    display: block;
  }
}
.box-arrow {
  position: absolute;
  top: calc(50% - 10px);
  cursor: pointer;
  &.disabled {
    display: none;
  }
  &:hover,
  &:focus {
    // background-color: #05ad5c;
    // color: #ffffff;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
}
.box-arrow-left {
  left: -60px;
}
.box-arrow-right {
  right: -60px;
}
.box-navs {
  position: absolute;
  bottom: -27px;
  left: 50%;
  display: flex;
  transform: translateX(-50%);
  li {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  i.active {
    font-weight: 900;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter {
  transform: translateX(100%);
  @at-root {
    .invert .slide-enter {
      transform: translateX(-100%);
    }
  }
}
.slide-leave-to {
  transform: translateX(-100%);
  @at-root {
    .invert .slide-leave-to {
      transform: translateX(100%);
    }
  }
}
.circle {
  width: 10px;
  border-radius: 50%;
}
</style>
