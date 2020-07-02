<template>
  <header class="navbblock">
    <input class="navbblock__checkbox" type="checkbox" id="nav-check" />
    <router-link :to="{ name: 'home' }" class="logo__navb">
      <img class="logo__img" src="../assets/img/logo-header.svg" />
    </router-link>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <nav class="nav-links">
      <a href="/?show=about-service" class="navb__link">О сервисе</a>
      <a href="/?show=trainings" class="navb__link">Тренировки</a>
      <router-link class="navb__link" :to="{ name: 'schedule' }">Расписание</router-link>
      <a href="#footer" class="navb__link">Контакты</a>
      <a class="navb__link" :to="{ name: 'signin' }">Вход</a>

      <!-- <ul class="navb__list">
        <li class="navb__item">
          <a href="/?show=about-service" class="navb__link">О сервисе</a>
        </li>
        <li class="navb__item">
          <a href="/?show=trainings" class="navb__link">Тренировки</a>
        </li>
        <li class="navb__item">
          <router-link class="navb__link" :to="{ name: 'schedule' }"
            >Расписание</router-link
          >
        </li>
        <li class="navb__item">
          <a href="#footer" class="navb__link">Контакты</a>
        </li>
        <li class="navb__item">
          <a class="exit-block navb__link" :to="{ name: 'signin' }">
            <div class="exit-block__text">Вход</div>
            <img class="exit-block__btn" src="../assets/img/exit-white.svg" />
          </a>
        </li>
      </ul>-->
    </nav>
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
