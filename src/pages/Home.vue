<template>
  <p>Hi dev!</p>
  <p v-if="productId">product productId: {{ productId }}</p>
  <p v-if="userId">user userId: {{ userId }}</p>
  <router-view name="orders" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  props: ["productId", "userId"],
});
</script>
