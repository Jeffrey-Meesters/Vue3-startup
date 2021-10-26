<template>
  <h2>Your orders</h2>
  <div>
    <p>list of orders:</p>
    <ul>
      <li>order 1</li>
      <li>order 2</li>
      <li>order 3</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Orders",
});
</script>
