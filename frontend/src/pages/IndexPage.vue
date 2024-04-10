<template>
  <q-page class="flex flex-center">
    <user-profile />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import UserProfile from '../components/UserProfile.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    UserProfile
  }
})
</script>
