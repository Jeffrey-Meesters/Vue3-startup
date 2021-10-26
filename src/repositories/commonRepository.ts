import { ref } from "vue";

export function getRandomId(upTo: number) {
    const randNumber = ref(0);
    randNumber.value = Math.round(Math.random() * (upTo + 1));

    return {
        randNumber
    }
}
