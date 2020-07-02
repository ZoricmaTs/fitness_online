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
            <img src="../assets/img/playbtn.svg" class="btn-image" width="56" height="55" />
            <img class="box-image" :src="item" width="500" height="250" />
          </li>
        </transition-group>
      </ul>
    </div>

    <!-- arrow -->

    <div id="box-arrow-left" class="box-arrow box-arrow-left" @click="change(active - 1)">
      <img src="../assets/img/left-arrow.svg" class="btn-image" width="25" height="59" />
    </div>
    <div id="box-arrow-right" class="box-arrow box-arrow-right" @click="change(active + 1)">
      <img src="../assets/img/right-arrow.svg" class="btn-image" width="25" height="59" />
    </div>

    <VideoModal
      :showCloseCross="true"
      @close="openVideoModal = false"
      v-show="openVideoModal"
      :videoId="this.videos[this.active]"
      :trainer="this.trainers[this.active]"
      :nametrain="this.trainings[this.active]"
      :avatar="this.avatar[this.active]"
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
      avatar: [
        require('@/assets/img/avatarv1.jpg'),
        require('@/assets/img/avatarv2.jpg'),
        require('@/assets/img/avatarv3.jpg'),
        require('@/assets/img/avatarv4.jpg')
      ],

      videos: ['2Rg7zXKXIjk', 'u5pQX-zbpJE', '4Js_JwUJQyY', 'n7NdXMqlgKE'],
      trainers: [
        'Лиза Майновская',
        'Александра Степанова',
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
  // cursor: pointer;
}
.btn-image {
  position: absolute;
  top: percentage(190 / 500);
  cursor: pointer;
  &:hover,
  &:focus {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
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
  top: calc(50% - 36px);
  cursor: pointer;
  &.disabled {
    display: none;
  }
  &:hover,
  &:focus {
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
