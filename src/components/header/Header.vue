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
          <router-link :to="`/products/${randomRouteId}`"
            >a product</router-link
          >
        </li>
        <li>
          <router-link :to="`/account/${randomRouteId}`">Profile</router-link>
        </li>
        <li>
          <router-link :to="`/account/${randomRouteId}/orders`"
            >Orders</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { getRandomId } from "@/repositories/commonRepository";

export default defineComponent({
  setup() {
    const applicationName: Ref<string> = ref("");
    // I know I can specify it above, just trying it out
    applicationName.value = "Trying Vue 3 and Router 4";
    const randomRouteId = ref(0);
    randomRouteId.value = getRandomId(10);

    return {
      applicationName,
      randomRouteId,
    };
  },
});
</script>
