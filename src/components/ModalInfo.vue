<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-heading">
            <slot name="header"></slot>
            <a
              href="#"
              class="modal-close"
              v-show="showCloseCross"
              @click.prevent="close"
            >
              <img
                src="../assets/img/exitmodal.svg"
                width="64"
                heigth="64"
                alt="closed"
              />
            </a>
          </div>

          <div class>
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  data() {
    return {
      // active: false
    }
  },
  name: '',
  props: {
    showCloseCross: { type: Boolean, default: true }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    action() {
      this.$emit('action')
    }
    // modalClose() {
    //   console.warn('close')
    //   this.active = false
    //   this.$emit('modal_close')
    // }
  },
  mounted() {
    this.active = true
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/modal-info.scss';
</style>
