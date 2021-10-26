<template>
  <section>
    <p>Hi dev!</p>
    <p v-if="productUID">product productId: {{ productUID }}</p>
    <p v-if="userUID">user userId: {{ userUID }}</p>
    <router-view name="orders" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  props: {
    productId: { default: 0, type: Number },
    userId: { default: 0, type: Number },
  },
  setup(props) {
    const userUID = ref(props.userId);
    const productUID = ref(props.productId);

    return {
      userUID,
      productUID,
    };
  },
});
</script>
