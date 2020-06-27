<template>
  <header class="grid">
    <div class="grid-navb__logo">
      <router-link :to="{ name: 'home' }" class="logo__navb">
        <img class="logo__img" src="../assets/img/logo-header.svg" />
      </router-link>
    </div>
    <nav class="grid-navb__navb navb">
      <ul class="navb__list">
        <li class="navb__item">
          <a href="/?show=about-service" class="navb__link">О сервисе</a>
        </li>
        <li class="navb__item">
          <a href="/?show=trainings" class="navb__link">Тренировки</a>
        </li>
        <li class="navb__item">
          <router-link class="navb__link" :to="{ name: 'schedule' }">Расписание</router-link>
        </li>
        <li class="navb__item">
          <a href="#footer" class="navb__link">Контакты</a>
        </li>
      </ul>
    </nav>
    <!-- <router-link class="grid-navb__exit exit-block" :to="{ name: 'signin' }">
      <div class="exit-block__text navb-none">Вход</div>
      <img class="exit-block__btn" src="../assets/img/exit-white.svg" />
    </router-link>-->
  </header>
</template>

<script>
export default {
  methods: {
    goto(refName) {
      var element = this.$refs[refName]
      console.log(element)
      var top = element.offsetTop

      window.scrollTo(0, top)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/navbar.scss';
</style>
