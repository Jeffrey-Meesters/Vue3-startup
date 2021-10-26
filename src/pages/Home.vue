<template>
  <p>Hi dev!</p>
  <p>product productId: {{ productId }}</p>
  <p>user userId: {{ userId }}</p>
  <router-view name="orders" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  props: ["productId", "userId"],
});
</script>
