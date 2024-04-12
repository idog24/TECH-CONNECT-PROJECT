<template>
  <q-page class="flex flex-center">
    <div class="login-container">
      <div class="title">Tech Connect</div>
      <img
        alt="Tech Connect logo"
        src="~assets/tech-logo.jpg"
        style="width: 300px; height: 300px"
      />
      <q-input v-model="username" filled class="login-input" label="Username" />
      <q-input v-model="password" filled class="login-input" label="Password" />
      <q-btn
        class="login-buttons"
        color="primary"
        label="Login"
        @click="login()"
      />
      <q-btn
        class="login-buttons" 
        color="negative"
        label="Reset Password" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data: function () {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login: function () {
      // must send username and password to back-end login logic
      this.$router.push({ name: "home" });
    },
  },
});
</script>

<style>
.title {
  font-size: 70px;
  font-weight: 600;
  color: darkslategray;
  text-align: center;
}
.login-container {
  width: 300px;
}
.login-input {
  width: 100%;
  margin: 10px;
}
.login-buttons {
  width: 100%;
  margin: 10px 10px 0 10px;
}
</style>
