<template>
    <div class="flex flex-center profile-container">
      <div class="profile-name">{{fullName}}</div>
      <div class="tc-logo">
        <img
          alt="Tech Connect logo"
          src="~assets/profile-default.jpg"
          style="width: 300px; height: 300px"
        />
      </div>
      <q-input disable filled class="login-input" label="Username" />
      <q-input disable filled class="login-input" label="Password" />
    </div>
</template>
  
<script>
import { defineComponent } from "vue";
  
export default defineComponent({
  name: "UserProfile",
  data: function () {
      return {
        fullName: "Isaac Lajoie"
      };
  },
  methods: {
    login: function () {
      this.$router.push({ name: "home" });
    },
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
.tc-logo {
  margin: 50px;
}
.profile-container {
  width: 500px;
}
.login-input {
  width: 100%;
  margin: 10px;
}
</style>
  