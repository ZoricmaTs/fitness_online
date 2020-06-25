<template>
  <header class="grid">
    <div class="grid-navb__logo">
      <router-link :to="{ name: 'home' }" class="logo__navb">
        <img class="logo__img" src="../assets/img/logo-header.svg" />
      </router-link>
    </div>
    <nav class="grid-navb__navb navb text__heading_size_m">
      <ul class="navb__list">
        <li class="navb__item navb-none">
          <a href="/?show=about-service" class="navb__link">О сервисе</a>
          <!-- <router-link
            class="navb__link"
            :to="{ name: 'HomeMain', hash: '#about-service' }"
          >О сервисе</router-link>-->
        </li>
        <li class="navb__item navb-none">
          <a href="/?show=trainings" class="navb__link">Тренировки</a>
        </li>
        <li class="navb__item">
          <router-link class="navb__link navb-none" :to="{ name: 'schedule' }">Расписание</router-link>
          <!-- <router-link class="navb__link" :to="{ name: 'schedule' }">
            <img
              class="navb__calendar"
              style="display: none"
              width="23"
              src="../assets/img/calendaricon.svg"
            />
          </router-link>-->
        </li>
        <li class="navb__item navb-none">
          <a href="#footer" class="navb__link">Контакты</a>
        </li>
      </ul>
    </nav>
    <router-link class="grid-navb__exit exit-block" :to="{ name: 'signin' }">
      <div class="exit-block__text text__heading_size_m navb-none">Вход</div>
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
