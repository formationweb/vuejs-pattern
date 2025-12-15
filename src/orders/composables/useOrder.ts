import { inject } from "vue";
import { ORDER_SERVICE_TOKEN } from "../di/tokens";
import type { OrderService } from "../services/OrderService";
import { useOrdersStore } from "../stores/order";
import { storeToRefs } from "pinia";

export function useOrder() {
    const orderService = inject<OrderService>(ORDER_SERVICE_TOKEN)
    const orderStore = useOrdersStore()
    const { currentOrder } = storeToRefs(orderStore)

    async function load(id: string) {
        const order = await orderService?.getOrder(id)
        if (order) orderStore.setOrder(order)
    }

    return {
        currentOrder,
        load
    }
}