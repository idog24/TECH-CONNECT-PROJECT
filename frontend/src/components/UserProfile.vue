<template>
    <div class="flex flex-center profile-container">
      <div class="profile-name">{{fullName}}</div>
      <div class="tc-logo">
        <img
          alt="Tech Connect logo"
          src="~assets/profile-default.jpg"
          style="width: 250px; height: 250px"
        />
      </div>
      <div style="width: 500px">
        <div class="section-label">Bio:</div>
        <q-input
          v-model="bioDescription"
          filled
          type="textarea"
          :readonly="!editMode"
        />
      </div>
      <div style="width: 350px; margin-right: 150px">
        <div class="section-label q-mt-xl">Physical Description:</div>
        <q-input filled class="physical-desc" label="Height (ft)" :readonly="!editMode"/>
        <q-input filled class="physical-desc" label="Weight (lbs)" :readonly="!editMode"/>
        <q-input filled class="physical-desc" label="Age (yrs)" :readonly="!editMode"/>
      </div>
      <div style="width: 500px">
        <div class="section-label q-mt-xl">Tech Experience:</div>
        <q-input
          v-model="techDescription"
          filled
          type="textarea"
          :readonly="!editMode"
        />
      </div>
      <q-btn v-if="editMode" class="edit-btns" color="primary" label="Save"/>
      <q-btn v-if="editMode" class="edit-btns" color="primary" label="Cancel" @click="cancelEdit"/>
      </div>
</template>
  
<script>
import { defineComponent } from "vue";
  
export default defineComponent({
  name: "UserProfile",
  props: {
    editMode: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function () {
      return {
        fullName: "Isaac Lajoie",
        // bioDescription will be a profile field that will be fetched from the user profile entry in the db
        bioDescription: "Hello my name is Isaac Lajoie. I am a tech professional currently working in "
        + "full stack web development. I work primarily in front-end with expertise in vue.js. ",
        techDescription: "Hello my name is Isaac Lajoie. I am a tech professional currently working in "
        + "full stack web development. I work primarily in front-end with expertise in vue.js. ",
      };
  },
  methods: {
    cancelEdit: function () {
      this.$emit('cancel-edit');
    }
   },
});
</script>
  
<style>
.profile-name {
  font-size: 70px;
  font-weight: 600;
  color: #093969;
  text-align: center;
}
.section-label {
  font-size: 30px;
  font-weight: 400;
  color: #093969;
}
.tc-logo {
  margin-top: 30px;
}
.profile-container {
  width: 500px;
}
.physical-desc {
  width: 100%;
  margin-top: 15px;
}
.edit-btns {
  margin: 16px;
  margin-top: 61px;
}
</style>
  