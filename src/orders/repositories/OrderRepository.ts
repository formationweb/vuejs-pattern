import type { Order } from "../types"

export interface HttpOrderRepository {
    getOrder(id: string): Promise<Order>
}

export class OrderRepository implements HttpOrderRepository {
    async getOrder(id: string): Promise<Order> {
        return {
            id,
            status: 'confirmed'
        }
    }
}