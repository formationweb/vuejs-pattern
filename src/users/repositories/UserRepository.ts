import type { User } from "../types/User"

export interface HttpUserRepository {
    findAll(): Promise<User[]>
}

// Repository Pattern : accès aux données (API, cache)
export class UserRepository implements HttpUserRepository {
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    findAll(): Promise<User[]> {
        return fetch(this.url).then(res => res.json())
    }
}