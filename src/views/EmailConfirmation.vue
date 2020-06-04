<template>
  <div class="message bg-color">
    Добро пожаловать в “Fitness-онлайн”! Ваша учетная запись успешно
    активирована
    <br />
    <br />
    <router-link class :to="{ name: 'signin' }">
      <button class="btn__min btn__title_color_orangeb text__heading_size_s">Войти</button>
    </router-link>
  </div>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
export default {
  props: {
    email: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    }
  },
  created() {
    AuthorizationService.confirmAccount(this.email, '123456')
      .then(resp => {
        console.log(resp.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="scss" scoped>
.message {
  padding: 40px;
}
</style>
