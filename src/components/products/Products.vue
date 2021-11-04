<template>
  <h2>Products</h2>
  <div>
    <p>list of products:</p>
    <ul>
      <li><router-link to="/products/1">product 1</router-link></li>
      <li><router-link to="/products/2">product 2</router-link></li>
      <li><router-link to="/products/3">product 3</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Products",
});
</script>
