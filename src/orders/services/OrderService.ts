import { OrderRepository } from "../repositories/OrderRepository"

export class OrderService {
    private repository: OrderRepository

    constructor(repository?: OrderRepository) {
        this.repository = repository ?? new OrderRepository()
    }

    getOrder(id: string) {
        return this.repository.getOrder(id)
    }
}