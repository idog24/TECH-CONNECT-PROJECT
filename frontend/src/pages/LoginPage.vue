<template>
  <q-page class="flex flex-center">
    <div class="login-container">
      <img
        alt="Quasar logo"
        src="~assets/tech-logo.jpg"
        style="width: 300px; height: 300px"
      />
      <q-input filled class="login-input" label="Username" />
      <q-input filled class="login-input" label="Password" />
      <q-btn
        class="login-buttons"
        color="primary"
        label="Login"
        @click="login()"
      />
      <q-btn class="login-buttons" color="negative" label="Reset Password" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data: function () {
    return {};
  },
  methods: {
    login: function () {
      this.$router.push({ name: "home" });
    },
  },
});
</script>

<style>
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
