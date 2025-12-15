export type OrderStatus = 'pending' | 'confirmed' | 'cancelled' | 'delivered'
 
export interface Order {
    id: string
    status: OrderStatus
}