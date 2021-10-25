<template>
  <header>
    <h1>{{ applicationName }}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data: () => ({
    applicationName: "Template",
  }),
});
</script>
