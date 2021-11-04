<template>
  <p>Hi dev!</p>
  <p v-if="productUID">product productId: {{ productUID }}</p>
  <p v-if="userUID">user userId: {{ userUID }}</p>
  <router-view name="products" />
  <router-view name="orders" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  props: {
    productId: { default: 0, type: Number },
    userId: { default: 0, type: Number },
  },
  setup(props) {
    const userUID = computed(() => props.userId);
    const productUID = computed(() => props.productId);

    return {
      userUID,
      productUID,
    };
  },
});
</script>
