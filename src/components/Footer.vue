<template>
  <footer class="footer-block__color_gray block-grid">
    <section class="footer-block">
      <div class="footer-block__logo">
        <h1 class="logo__min">Fitness</h1>
        <p class="footer-block__text">
          Сервис по подбору тренера и тренировок. Занятия и общение в онлайн
          режиме из любой точки планеты.
        </p>
        <a
          href="#"
          class="footer-block__link-email footer-block__link-email_color-team_gray text__heading_size_m"
        >fitness-online@fitness.com</a>
      </div>
      <div class="footer-block__menu">
        <p class="footer-block__menu-heading">
          Меню
          <span class="footer-block__menu-heading_blue">навигации:</span>
        </p>
        <ul class="footer-block__menu-list">
          <li class="footer-block__menu-item">
            <router-link
              class="footer-block__menu-link_team_gray text__heading_size_m"
              :to="{ name: 'signup' }"
            >Регистрация</router-link>
          </li>
          <li class="footer-block__menu-item">
            <router-link
              class="footer-block__menu-link_team_gray text__heading_size_m"
              :to="{ name: 'signin' }"
            >Вход</router-link>
          </li>
          <li class="footer-block__menu-item">
            <router-link
              class="footer-block__menu-link_team_gray text__heading_size_m"
              :to="{ name: 'aboutservice' }"
            >О сервисе</router-link>
          </li>
          <li class="footer-block__menu-item">
            <router-link
              class="footer-block__menu-link_team_gray text__heading_size_m"
              :to="{ name: 'ourTrainers' }"
            >Наши тренеры</router-link>
          </li>
          <li class="footer-block__menu-item">
            <a
              class="footer-block__menu-link_team_gray text__heading_size_m"
              href="#"
            >Виды тренировок</a>
          </li>
          <li class="footer-block__menu-item">
            <a
              class="footer-block__menu-link_team_gray text__heading_size_m"
              href="#"
            >Вопросы и ответы</a>
          </li>
          <li class="footer-block__menu-item">
            <router-link
              class="footer-block__menu-link_team_gray text__heading_size_m"
              :to="{ name: 'contactdetail' }"
            >Контакты</router-link>
          </li>
        </ul>
      </div>
      <div class="footer-block__inst">
        <p class="footer-block__menu-heading">Instagram</p>
        <div class="footer-block__inst-img">
          <img
            class="footer-block__img"
            src="../assets/img/inst1.png"
            alt="instagram photo"
            width="84"
            height="84"
          />
          <img
            class="footer-block__img"
            src="../assets/img/inst2.png"
            alt="instagram photo"
            width="84"
            height="84"
          />
          <img
            class="footer-block__img"
            src="../assets/img/inst3.png"
            alt="instagram photo"
            width="84"
            height="84"
          />
          <img
            class="footer-block__img"
            src="../assets/img/inst4.png"
            alt="instagram photo"
            width="84"
            height="84"
          />
          <img
            class="footer-block__img"
            src="../assets/img/inst5.png"
            alt="instagram photo"
            width="84"
            height="84"
          />
          <img
            class="footer-block__img"
            src="../assets/img/inst6.png"
            alt="instagram photo"
            width="84"
            height="84"
          />
        </div>
      </div>
    </section>
    <section class="footer-blockcopy">
      <p
        class="footer-blockcopy__text footer-blockcopy__text_team_gray text__heading_size_m"
      >Copyright © 2020</p>
      <ul class="social__list social__heading">
        <li class="social__item">
          <a class="social__link" href="https://www.facebook.com">
            <img
              src="../assets/img/facebookw.svg"
              width="15"
              height="15"
              alt="social media facebook"
            />
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="https://vk.com">
            <img src="../assets/img/vkw.svg" width="15" height="15" alt="social media vkontakte" />
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="https://www.instagram.com/?hl=ru">
            <img src="../assets/img/instw.svg" width="15" height="15" alt="social media instagram" />
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="https://twitter.com/explore">
            <img src="../assets/img/twitterw.svg" width="15" height="13" alt="social media twitter" />
          </a>
        </li>
      </ul>
    </section>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/footer.scss';
</style>
