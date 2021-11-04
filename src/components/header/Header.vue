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
          <router-link :to="`/products/${randNumber}`">a product</router-link>
        </li>
        <li>
          <router-link :to="`/account/${randNumber}`">Profile</router-link>
        </li>
        <li>
          <router-link :to="`/account/${randNumber}/orders`"
            >Orders</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getRandomId } from "@/repositories/commonRepository";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/index";

export default defineComponent({
  setup() {
    const applicationName = ref("Trying Vue 3 and Router 4");
    const { randNumber } = getRandomId(10);

    return {
      applicationName,
      randNumber,
    };
  },

  mounted() {
    this.fetchSomeData();
  },
  methods: {
    async fetchSomeData() {
      // get collection of users
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        // currently logs: 6dg634VagAYwpmvtsIWT  =>  {name: 'kees'}
      });
    },
  },
});
</script>
