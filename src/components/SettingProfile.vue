<template>
  <div class="page__block">
    <h2 class="page__heading text__heading_size_l">Настройки профиля</h2>
    <form @submit.prevent="sendFile" enctype="multipart/form-data" class="photo-edit">
      <div id="preview">
        <img v-if="imageUrl" :src="imageUrl" height="146" />
      </div>
      <div>
        <label for="file-upload" class="custom-file-upload page__link">Изменить</label>
        <input id="file-upload" type="file" ref="file" @change="selectFile" />
      </div>
    </form>
    <h3 class="page__heading-min text__heading_size_h3">Основное</h3>
    <section class="page__wrapper">
      <span class="page__body text__heading_size_m">Имя</span>
      <span class="page__body text__heading_size_m">
        {{
        infoUser.first_name
        }}
      </span>
      <span
        class="page__link"
        @click="showEditFirstName = !showEditFirstName"
      >{{ showEditFirstName ? 'Отмена' : 'Изменить' }}</span>

      <span v-show="showEditFirstName" class="page__body text__heading_size_m">Новое имя</span>
      <span v-show="showEditFirstName">
        <span v-if="$v.new_first_name.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.new_first_name.minLength">
            Длина имени не должна быть менее
            {{ $v.new_first_name.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.new_first_name.maxLength">Слишком длинное имя</template>
          <template
            v-else-if="!$v.new_first_name.alpha"
          >Имя должно содержать латинские или русские буквы.</template>
        </span>
        <input
          v-show="showEditFirstName"
          v-model="new_first_name"
          type="text"
          name="new_first_name"
          placeholder
          class="text__heading_size_m page__input"
          @blur="$v.new_first_name.$touch()"
        />
      </span>
      <button
        v-show="showEditFirstName"
        class="btn__min btn__title_color_orangeb text__heading_size_s"
        :disabled="new_first_name == ''"
        @click="saveFirstName"
      >Сохранить</button>

      <span class="page__body text__heading_size_m">E-mail</span>
      <span class="page__body text__heading_size_m">{{ infoUser.email }}</span>
      <div class="correct">
        <span
          class="page__link"
          @click="showEditEmail = !showEditEmail"
        >{{ showEditEmail ? 'Отмена' : 'Изменить' }}</span>
      </div>

      <span v-show="showEditEmail" class="page__body text__heading_size_m">Новый email</span>
      <span v-show="showEditEmail">
        <span v-if="$v.new_email.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.new_email.minLength">
            Длина email не должна быть менее
            {{ $v.new_email.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.new_email.maxLength">Слишком длинный E-mail</template>
          <template v-else-if="!$v.new_email.email">Некорректный email</template>
        </span>
        <input
          v-show="showEditEmail"
          v-model="new_email"
          type="email"
          name="new_email"
          placeholder
          class="text__heading_size_m page__input"
          @blur="$v.new_email.$touch()"
        />
      </span>
      <button
        v-show="showEditEmail"
        class="btn__min btn__title_color_orangeb text__heading_size_s"
        @click="saveEmail"
      >Сохранить</button>
      <!--                           ////////////////////////////////////////password-->
      <span class="page__body text__heading_size_m">Пароль</span>
      <span class="page__body text__heading_size_m">******</span>
      <div class="correct">
        <span
          class="page__link"
          @click="showEditPassword = !showEditPassword"
        >{{ showEditPassword ? 'Отмена' : 'Изменить' }}</span>
      </div>

      <span v-show="showEditPassword" class="page__body text__heading_size_m">Старый пароль</span>
      <span v-show="showEditPassword">
        <input
          v-show="showEditPassword"
          type="password"
          name="current_password"
          class="text__heading_size_m page__input"
        />
      </span>
      <span v-show="showEditPassword">&nbsp;</span>
      <!--                           ////////////////////////////////////////password-->
      <span v-show="showEditPassword" class="page__body text__heading_size_m">Новый пароль</span>
      <span v-show="showEditPassword">
        <span v-if="$v.new_password.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.password.minLength">
            Длина пароля не должна быть менее
            {{ $v.new_password.$params.minLength.min }} символов
          </template>
          <template v-if="!$v.new_password.maxLength">Слишком длинный пароль</template>
        </span>
        <input
          v-show="showEditPassword"
          type="password"
          name="new_password"
          class="text__heading_size_m page__input"
          @blur="$v.new_password.$touch()"
        />
      </span>
      <span v-show="showEditPassword">&nbsp;</span>

      <span v-show="showEditPassword" class="page__body text__heading_size_m">Повторите пароль</span>
      <span v-show="showEditPassword">
        <span v-if="$v.new_password_confirmation.$error" class="setting__err text__heading_size_s">
          <template v-if="!$v.new_password_confirmation.sameAsPassword">Пароли должны совпадать</template>
        </span>
        <input
          v-show="showEditPassword"
          type="password"
          name="new_password_confirmation"
          class="text__heading_size_m page__input"
          @blur="$v.new_password_confirmation.$touch()"
        />
      </span>
      <button
        v-show="showEditPassword"
        class="btn__min btn__title_color_orangeb text__heading_size_s"
        @click="savePassword"
      >Сохранить</button>

      <span class="page__body text__heading_size_m">О себе</span>
      <span class="page__body text__heading_size_m">{{ infoUser.about_me }}</span>
      <span class="page__link" @click="showEditAboutMe = !showEditAboutMe">
        {{
        showEditAboutMe ? 'Отмена' : 'Изменить'
        }}
      </span>

      <span v-show="showEditAboutMe">&nbsp;</span>
      <textarea
        v-show="showEditAboutMe"
        name="new_about_me"
        v-model="new_about_me"
        class="text__heading_size_m page__textarea"
        rows="7"
      ></textarea>
      <button
        v-show="showEditAboutMe"
        class="btn__min btn__title_color_orangeb text__heading_size_s"
        @click="saveAboutMe"
        :disabled="new_about_me == ''"
        title="Введите о себе"
      >Сохранить</button>
    </section>
    <div class="btn-block__right">
      <button
        class="btn__min btn__title_color_orangeb text__heading_size_s"
        @click="saveProfile"
      >Сохранить</button>
      <button
        class="btn__min btn__title_color_transp-orange text__heading_size_s marg20"
        @click="changeCancelProfile"
      >Отмена</button>
    </div>
  </div>
</template>

<script>
import AuthorizationService from '@/services/AuthorizationService.js'
import {
  required,
  maxLength,
  minLength,
  sameAs,
  email
} from 'vuelidate/lib/validators'
import moment from 'moment'
export default {
  props: ['id'],
  data() {
    return {
      file: '',
      imageUrl: '../assets/img/defaultUserIcon.jpg',
      comment: '',
      imageLink: '',
      infoUser: {},
      showEditFirstName: false,
      showEditEmail: false,
      showEditPassword: false,
      showEditAboutMe: false,
      new_first_name: '',
      new_email: '',
      current_password: '',
      new_password: '',
      new_password_confirmation: '',
      new_role: '',
      new_about_me: '',
      new_profile_photo_id: '',
      errArray: {}
    }
  },
  validations: {
    new_first_name: {
      minLength: minLength(2),
      maxLength: maxLength(60),
      alpha: val => /^[a-zа-яё'\s\-]*$/i.test(val)
    },
    new_email: {
      email,
      minLength: minLength(6),
      maxLength: maxLength(255)
    },
    new_password: {
      minLength: minLength(8),
      maxLength: maxLength(32)
    },
    new_password_confirmation: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    saveFirstName() {
      this.infoUser.first_name = this.new_first_name
      this.showEditFirstName = false
    },
    saveEmail() {
      this.infoUser.email = this.new_email
      this.showEditEmail = false
    },
    savePassword() {
      this.showEditPassword = false
    },
    saveAboutMe() {
      this.infoUser.about_me = this.new_about_me
      this.showEditAboutMe = false
    },
    showEditSetting(visible) {
      this.showEditFirstName = visible
    },
    //загрузка файла на сервер--------
    selectFile() {
      if (this.$refs.file.files.length > 0) {
        this.file = this.$refs.file.files[0]
        this.imageUrl = URL.createObjectURL(this.file)
      }
    },
    sendFile() {
      AuthorizationService.sendFileMedia(this.file, this.comment)
        .then(response => {
          if (response.data.success == true) {
            console.log(response.data)
            this.infoUser.profile_photo_file_id = response.data.id
            this.imageUrl = `http://80.89.238.253:5000/media/files/${infoUser.profile_photo_file_id}?token=${localStorage.token}`
          }
        })
        .catch(err => {})
    },
    changeCancelProfile() {
      AuthorizationService.userInfo(
        localStorage.user_id,
        localStorage.token
      ).then(response => {
        let serverInfoUser = response.data
        this.infoUser = {
          about_me: serverInfoUser.about_me,
          achievements_ids: serverInfoUser.achievements_ids, //[], достижения массив
          confirmation_time: serverInfoUser.confirmation_time,
          email: serverInfoUser.email,
          first_name: serverInfoUser.first_name,
          is_confirmed: serverInfoUser.is_confirmed, //true, подтвержден или нет
          is_deleted: serverInfoUser.is_deleted, //false, удален ли аккаунт
          profile_photo_file_id: serverInfoUser.profile_photo_file_id, //null, аватарка
          registration_time: serverInfoUser.registration_time, //' время регистрации
          role: serverInfoUser.role, //'user', прописать юзера??
          training_types_ids: serverInfoUser.training_types_ids, ///[], тренировки
          user_id: serverInfoUser.user_id
        }
        // alert(serverInfoUser.profile_photo_file_id)
        // this.infoUser.profile_photo_file_id =
        // "6c080add65e3f4b7a1376737235175975b34109b",

        if (this.infoUser.profile_photo_file_id == null) {
          this.infoUser.profile_photo_file_id =
            '6c080add65e3f4b7a1376737235175975b34109b'
        }
        if (this.infoUser.profile_photo_file_id != '') {
          this.imageUrl = `http://80.89.238.253:5000/media/files/${this.infoUser.profile_photo_file_id}?token=${localStorage.token}`
        } else {
          //this.imageUrl = require('../assets/img/defaultUserIcon.jpg')
        }
      })
    },
    saveProfileField() {
      if (this.new_password == '') {
        AuthorizationService.saveProfileShort(
          localStorage.user_id,
          this.infoUser.profile_photo_file_id, //заплатка
          this.new_first_name == ''
            ? this.infoUser.first_name
            : this.new_first_name,
          this.new_about_me == '' ? this.infoUser.about_me : this.new_about_me,
          this.infoUser.role
        ).then(resp => {
          // alert('данные изменены')
          location.reload()
        })
      } else {
        AuthorizationService.saveProfileFull(
          localStorage.user_id,
          this.infoUser.profile_photo_file_id, //заплатка
          this.new_first_name == ''
            ? this.infoUser.first_name
            : this.new_first_name,
          this.new_about_me == '' ? this.infoUser.about_me : this.new_about_me,
          this.infoUser.role,
          this.new_email == '' ? this.infoUser.email : this.new_email,
          this.current_password,
          this.new_password,
          this.new_password_confirmation
        ).then(resp => {
          // alert('данные изменены')
          location.reload()
        })
      }
    },

    saveProfile() {
      if (this.$refs.file.files.length > 0) {
        AuthorizationService.sendFileMedia(this.file, this.comment)
          .then(response => {
            if (response.data.success == true) {
              console.log(response.data)
              this.infoUser.profile_photo_file_id = response.data.id
              this.imageUrl = `http://80.89.238.253:5000/media/files/${this.infoUser.profile_photo_file_id}?token=${localStorage.token}`
              this.saveProfileField()
            }
          })
          .catch(err => {})
      } else {
        this.saveProfileField()
      }
    },
    //------------------------------------------
    userInfoСhange() {
      if (this.current_password == '') {
        this.showEditPassword = true
        this.errArray = { current_password: ['Введите текущий пароль'] }
        return
      }
      AuthorizationService.userInfoNew(
        this.new_first_name,
        this.new_email,
        this.current_password,
        this.new_password,
        this.new_password_confirmation,
        this.new_role,
        this.new_about_me,
        this.new_profile_photo_id
      ).then(response => {})
    }
  },
  created() {
    AuthorizationService.userInfo(
      localStorage.user_id,
      localStorage.token
    ).then(response => {
      let serverInfoUser = response.data
      this.infoUser = {
        about_me: serverInfoUser.about_me,
        achievements_ids: serverInfoUser.achievements_ids, //[], достижения массив
        confirmation_time: serverInfoUser.confirmation_time,
        email: serverInfoUser.email,
        first_name: serverInfoUser.first_name,
        is_confirmed: serverInfoUser.is_confirmed, //true, подтвержден или нет
        is_deleted: serverInfoUser.is_deleted, //false, удален ли аккаунт
        profile_photo_file_id: serverInfoUser.profile_photo_file_id, //null, аватарка
        registration_time: serverInfoUser.registration_time, //' время регистрации
        role: serverInfoUser.role, //'user', прописать юзера??
        training_types_ids: serverInfoUser.training_types_ids, ///[], тренировки
        user_id: serverInfoUser.user_id
      }
      // alert(serverInfoUser.profile_photo_file_id)
      // this.infoUser.profile_photo_file_id =
      // "6c080add65e3f4b7a1376737235175975b34109b",

      if (this.infoUser.profile_photo_file_id == null) {
        this.infoUser.profile_photo_file_id =
          '6c080add65e3f4b7a1376737235175975b34109b'
      }
      if (this.infoUser.profile_photo_file_id != '') {
        this.imageUrl = `http://80.89.238.253:5000/media/files/${this.infoUser.profile_photo_file_id}?token=${localStorage.token}`
      } else {
        //this.imageUrl = require('../assets/img/defaultUserIcon.jpg')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.photo-edit {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-left: 105px;
}
input[type='file'] {
  display: none;
}
.custom-file-upload {
  display: inline-block;
  padding: 6px 12px;
}
</style>
