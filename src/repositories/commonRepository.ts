import { ref, Ref } from "vue";

export function getRandomId(upTo: number): Record<string, Ref> {
  const randNumber = ref(0);
  randNumber.value = Math.round(Math.random() * (upTo + 1));

  return {
    randNumber,
  };
}
