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
            <div class="nametaining text__heading_size_h3">{{ trainings[index] }}</div>
            <img class="box-image" :src="item" width="500" height="250" />
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

    <VideoModal
      :showCloseCross="true"
      @close="openVideoModal = false"
      v-show="openVideoModal"
      :videoId="this.videos[this.active]"
      :trainer="this.trainers[this.active]"
      :nametrain="this.trainings[this.active]"
    />
  </div>
</template>

<script>
import VideoModal from '@/components/VideoModal.vue'
export default {
  data() {
    return {
      list: [
        require('@/assets/img/videoprew1.jpg'),
        require('@/assets/img/videoprew1.jpg'),
        require('@/assets/img/videoprew1.jpg'),
        require('@/assets/img/videoprew1.jpg')
      ],
      videos: ['2Rg7zXKXIjk', 'u5pQX-zbpJE', '4Js_JwUJQyY', 'n7NdXMqlgKE'],
      trainers: [
        'Лиза Майновская',
        'Алина Мронова',
        'Арина и Дмитрий',
        'Валерий Качалов'
      ],
      trainings: [
        'стретчинг',
        'калланетика',
        'кардиотренировки',
        'функциональная тренировка'
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
.box-image {
  cursor: pointer;
}
.nametaining {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: normal;
  text-align: center;
  line-height: 33px;
  background-color: #e9e9e9;
  padding: 0 10px;
  height: 33px;
  vertical-align: middle;
}
.material-icons {
  color: #05ad5c;
}
.box-wrap {
  background-color: #454545;
  position: relative;
  margin: 0 auto 0;
  width: 500px;
  // &:hover,
  // &:focus {
  //   -webkit-transform: scale(1.05);
  //   -ms-transform: scale(1.05);
  //   transform: scale(1.05);
  // }
}
.box-carousel {
  width: 100%;
  > div {
    position: relative;
    overflow-x: hidden;
    width: 100%;
    padding-top: percentage(250 / 500);
  }
  li {
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    display: block;
    width: 500px;
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
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
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
