<template>
  <header class="grid">
    <h1 class="logo__navb grid-navb">Fitness</h1>
    <nav class="navb text__heading_size_m">
      <ul class="navb__list">
        <li class="navb__item">
          <a href="#about-service" class="navb__link">О сервисе</a>
        </li>
        <li class="navb__item">
          <a href="#trainings" class="navb__link">Тренировки</a>
        </li>
        <li class="navb__item">
          <router-link class="navb__link" :to="{ name: 'schedule' }">Расписание</router-link>
        </li>
        <li class="navb__item">
          <router-link class="navb__link" :to="{ name: 'contacts' }">Контакты</router-link>
        </li>
      </ul>
    </nav>
    <router-link class="exit-block" :to="{ name: 'signin' }">
      <div class="exit-block__text">Вход</div>
      <img class="exit-block__btn" src="../assets/img/exit-white.svg" />
    </router-link>
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
