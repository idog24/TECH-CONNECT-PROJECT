<template>
  <q-page class="flex flex-center">
    <div class="flex flex-center" style="width: 100%">
      <user-profile 
      :edit-mode="isEdit"
      @cancel-edit="isEdit = false"/>
    </div>
    <div v-if="!isEdit">
      <q-btn class="q-ma-md" color="primary" label="Edit" @click="handleEditClick()"/>
      <q-btn class="q-ma-md" color="negative" label="Delete"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import UserProfile from '../components/UserProfile.vue'

export default defineComponent({
  name: 'IndexPage',
  data: function () {
      return {
        isEdit: false,
      };
  },
  methods: {
    handleEditClick: function () {
      this.isEdit = true;
    }
  },
  components: {
    UserProfile
  }
})
</script>

<style>
.edit-btn {
  margin: 10px;
  color: #093969;
}
</style>
