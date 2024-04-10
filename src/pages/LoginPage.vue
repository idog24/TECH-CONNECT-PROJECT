<template>
  <q-page class="flex flex-center">
    <q-input filled label="Username" />
    <q-input filled label="Password" />
    <q-btn color="primary" label="Login" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
