<template>
  <div class="bg-color">
    <BasePageUser>
      <div class="page__block-height">
        <SettingProfile />
      </div>
    </BasePageUser>
  </div>
</template>
<script>
import BasePageUser from '@/views/User/BasePageUser.vue'
import SettingProfile from '@/components/SettingProfile.vue'
export default {
  components: {
    BasePageUser,
    SettingProfile
  }
}
</script>

<style lang="scss"></style>
