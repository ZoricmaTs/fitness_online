<template>
  <footer class="footer-block__color_gray footer">
    <section class="footer-block grid">
      <!-- <div class="footer-block__logo"> -->
        <div class="footer-block__logo">
      <router-link :to="{ name: 'home' }" class="logo__footer">
        <img class="logo__img" src="../assets/img/logo-footer.svg" />
      </router-link>
      <br />
        <br />
        <br />
        <br />
      <p class="footer-block__text">
        Сервис по подбору тренера и тренировок. Занятия и общение в онлайн
        режиме из любой точки планеты.
        <br />
        <br />
        <span
          class="footer-blockcopy__text footer-blockcopy__text_team_gray"
        >Copyright © 2020</span>
      </p>
        </div>

      <!-- </div> -->
      <!-- <div class="footer-block__menu"> -->
      <p class="footer-block__menu-heading-nav footer-block__menu-heading">
        Меню
        <span class="footer-block__menu-heading_blue">навигации:</span>
        <br />
        <br />
        <ul class="footer-block__menu-list">
        <li class="footer-block__menu-item">
          <a
            class="footer-block__menu-link_team_gray text__heading_size_m"
            href="/?show=about-service"
          >О сервисе</a>
        </li>
        <li class="footer-block__menu-item">
          <a
            href="/?show=trainings"
            class="footer-block__menu-link_team_gray text__heading_size_m"
          >Тренировки</a>
        </li>
        <li class="footer-block__menu-item">
          <router-link
            class="footer-block__menu-link_team_gray text__heading_size_m"
            :to="{ name: 'schedule' }"
          >Расписание</router-link>
        </li>
        <li class="footer-block__menu-item">
          <router-link
            class="footer-block__menu-link_team_gray text__heading_size_m"
            :to="{ name: 'questions' }"
          >Вопросы и ответы</router-link>
        </li>
      </ul>
      </p>
      
      <!-- </div> -->
      <!-- <div class="footer-block__inst"> -->
      <div class="footer-block__contact">
        <p class="footer-block__heading-soc footer-block__menu-heading">Контакты:</p>
        <ul class="footer-blockcopy__social social__list social__heading">
          <li class="social__item">
            <a class="social__link" href="https://www.facebook.com">
              <img src="../assets/img/facebookw.svg" alt="social media facebook" />
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="https://twitter.com/explore">
              <img
                src="../assets/img/twitterw.svg"
                alt="social media twitter"
              />
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="https://www.instagram.com/?hl=ru">
              <img
                src="../assets/img/instw.svg"
                alt="social media instagram"
              />
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="https://vk.com">
              <img src="../assets/img/vkw.svg" alt="social media vkontakte" />
            </a>
          </li>
        </ul>
        <span
          href="#"
          class="footer-block__link-email footer-block__link-email_color-team_gray text__heading_size_m"
        >fitness-online@fitness.com</span>
      </div>
    </section>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/footer.scss';
</style>
