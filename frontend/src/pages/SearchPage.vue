<template>
    <q-page class="flex flex-center">
      <div class="flex flex-center search-container">
          <img
          alt="Tech Connect logo"
          src="~assets/magnifying-glass.png"
          style="width: 150px; height: 150px; margin: 30px;"
          />
          <div class="search-title">Search User</div>
          <q-input filled class="search-input" label="Search" />
      </div>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "SearchPage",
    data: function () {
      return {};
    },
    methods: {
    },
  });
  </script>
  
  <style>
  .search-container {
    width: 500px;
  }
  .search-title {
    font-size: 35px;
    font-weight: 400;
    width: 300px;
    color: #093969;
    text-align: center;
  }
  .search-input {
    width: 500px;
    margin-top: 40px;
  }
  </style>
  