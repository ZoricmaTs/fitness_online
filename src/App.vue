<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Nothing+You+Could+Do&display=swap');

@import '@/assets/scss/variables.scss';
@import '@/assets/scss/page-style.scss';
@import '@/assets/scss/btn.scss';
@import '@/assets/scss/footer.scss';
@import '@/assets/scss/service.scss';
@import '@/assets/scss/streamvideo.scss';
@import '@/assets/scss/schedules.scss';

body {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

* {
  margin: 0;
  padding: 0;
}

iframe {
  width: 100%;
}

.grid::before {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: '';
  pointer-events: none;

  --grid-color: none; //rgb(255 0 0 / 0.1); //none
  --grid-sides: 20px;
  --grid-gutter: 20px;
  --grid-columns: 4;
  --grid-column-width: calc(
    (100% - var(--grid-gutter) * var(--grid-columns)) / var(--grid-columns)
  );

  border: solid transparent;
  border-width: 0 calc(var(--grid-sides) - var(--grid-gutter) / 2);

  background-image: repeating-linear-gradient(
    to right,
    transparent 0,
    transparent calc(var(--grid-gutter) / 2),
    var(--grid-color) calc(var(--grid-gutter) / 2),
    var(--grid-color) calc(var(--grid-column-width) + var(--grid-gutter) / 2),
    transparent calc(var(--grid-column-width) + var(--grid-gutter) / 2),
    transparent calc(var(--grid-column-width) + var(--grid-gutter))
  );

  background-repeat: no-repeat;
}
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  margin-left: 20px;
  margin-right: 20px;
}

@media (min-width: 1008px) {
  .grid::before {
    --grid-sides: 20px;
    --grid-columns: 12;
  }
}
@media (min-width: 736px) and (max-width: 1007px) {
  .grid::before {
    --grid-sides: 20px;
    --grid-columns: 8;
  }
  .grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
@media (min-width: 320px) and (max-width: 735px) {
  .grid::before {
    --grid-sides: 20px;
    --grid-columns: 4;
  }
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
