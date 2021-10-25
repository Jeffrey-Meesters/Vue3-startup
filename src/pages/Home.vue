<template>
  <p>Hi dev!</p>
  <p v-if="id && id >= 0">product ID: {{ id }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  computed: {
    id() {
      return this.$route.params.id || false;
    },
  },
});
</script>
