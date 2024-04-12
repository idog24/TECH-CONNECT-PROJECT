<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Tech Connect </q-toolbar-title>
        <q-btn flat dense round icon="menu" aria-label="Menu">
          <q-menu>
            <q-list style="min-width: 150px">
              <q-item clickable v-close-popup @click="this.$router.push({ name: 'login' })">
                <q-item-section>Login</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="this.$router.push({ name: 'home' })">
                <q-item-section>My Profile</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="this.$router.push({ name: 'search' })">
                <q-item-section>Search</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
});
</script>
