<template>
  <div>
    <div class="page-bg">
      <Navbar />
    </div>
    <div class="schedule-container">
      <h1 class="schedule__heading text__heading_size_h1">Расписание тренировок</h1>

      <section class="schedule-day">
        <div
          class="schedule-day__block"
          v-for="trainingDate in TrainingDates"
          :key="trainingDate.id"
          @click="setDate(trainingDate.id)"
          v-bind:class="{ active: trainingDate.id == activeIndex }"
        >
          <p class="text__heading_size_activeIndexm">{{ trainingDate.date.format('dddd') }}</p>
          <p class="schedule-day__numb">{{ trainingDate.date.format('DD') }}</p>
          <p class="text__heading_size_m">{{ trainingDate.date.format('MMM') }}</p>
        </div>
      </section>
      <div class="schedule-wrapper">
        <section
          class="schedule"
          v-for="trainingDate in TrainingDates"
          :key="trainingDate.id"
          v-show="trainingDate.id === activeIndex"
        >
          <div
            class="schedule-day__block-min"
            v-for="training in trainingDate.Trainings"
            :key="training.id"
          >
            <p class="schedule-day__training text__heading_size_m">{{ training.name }}</p>
            <p class="schedule-day__trainer text__heading_size_xs">Тренер: {{ training.trainer }}</p>
            <p
              class="schedule-day__time text__heading_size_xs"
            >{{ trainingDate.date.format('DD MMM') }}, {{ training.time }}</p>
          </div>
        </section>
      </div>
    </div>
    <Footer id="footer" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import moment from 'moment'
moment.locale('ru')
export default {
  data() {
    return {
      activeIndex: 0,
      TrainingDates: [
        {
          id: 0,
          date: moment(),
          Trainings: [
            {
              id: 1,
              name: 'Калланетика',
              trainer: 'Лучанская Александра Викторовна',
              time: '15:00'
            },
            {
              id: 2,
              name: 'Йога',
              trainer: 'Алина Мронова',
              time: '17:30'
            },
            {
              id: 3,
              name: 'Шейпинг',
              trainer: 'Алина Мронова',
              time: '19:30'
            },
            {
              id: 4,
              name: 'Йога',
              trainer: 'Алиса ',
              time: '19:30'
            },
            {
              id: 5,
              name: 'Калланетика',
              trainer: 'Аркадий Красовский',
              time: '19:30'
            }
          ]
        },
        {
          id: 1,
          date: moment().add(1, 'days'),
          Trainings: [
            {
              id: 3,
              name: 'Стретчинг',
              trainer: 'Геннадий Силович',
              time: '11:30'
            },
            {
              id: 4,
              name: 'Йога',
              trainer: 'Лучанская Александра Викторовна',
              time: '14:30'
            },
            {
              id: 5,
              name: 'Шейпинг',
              trainer: 'Алина Мронова',
              time: '19:30'
            },
            {
              id: 6,
              name: 'Йога',
              trainer: 'Алиса Масловская',
              time: '19:30'
            },
            {
              id: 7,
              name: 'Калланетика',
              trainer: 'Аркадий Красовский',
              time: '19:30'
            },
            {
              id: 8,
              name: 'Йога',
              trainer: 'Алиса Масловская',
              time: '20:00'
            },
            {
              id: 9,
              name: 'Калланетика',
              trainer: 'Аркадий Красовский',
              time: '20:30'
            }
          ]
        },
        {
          id: 2,
          date: moment().add(2, 'days'),
          Trainings: [
            {
              id: 1,
              name: 'Функциональная тренировка',
              trainer: 'Орлов Борис Иванович',
              time: '09:30'
            },
            {
              id: 2,
              name: 'Стретчинг',
              trainer: 'Геннадий Силович',
              time: '11:00'
            },
            {
              id: 3,
              name: 'Йога',
              trainer: 'Алиса Масловская',
              time: '15:20'
            },
            {
              id: 4,
              name: 'Функциональная тренировка',
              trainer: 'Орлов Борис Иванович',
              time: '17:00'
            },
            {
              id: 5,
              name: 'Калланетика',
              trainer: 'Виктория Стрельникова',
              time: '17:30'
            },
            {
              id: 6,
              name: 'Аэробика',
              trainer: 'Виктория Стрельникова',
              time: '18:00'
            }
          ]
        }
      ]
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    setDate(dateid) {
      this.activeIndex = dateid
    }
  }
}
</script>

<style lang="scss" scoped></style>
