<template>
  <header>
    <h1>{{ applicationName }}</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/products">products</router-link>
        </li>
        <li>
          <router-link :to="`/products/${getRandomId()}`"
            >a product</router-link
          >
        </li>
        <li>
          <router-link :to="`/account/${getRandomId()}`">Profile</router-link>
        </li>
        <li>
          <router-link :to="`/account/${getRandomId()}/orders`"
            >Orders</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data: () => ({
    applicationName: "Trying Vue 3 and Router 4",
  }),
  methods: {
    getRandomId() {
      return Math.round(Math.random() * 11);
    },
  },
});
</script>
