import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Order } from "../types";

export const useOrdersStore = defineStore('orders', () => {
    const currentOrder = ref<Order | null>(null)

    const isConfirmed = computed(() => currentOrder.value?.status == 'confirmed')

    function setOrder(data: Order) {
        currentOrder.value = data
    }

    return {
        // states
        currentOrder,
        // getters
        isConfirmed,
        // actions (mutations)
        setOrder
    }
})