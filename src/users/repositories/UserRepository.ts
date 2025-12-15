import type { User } from "../types/User"

// Repository Pattern : accès aux données (API, cache)
export class UserRepository {
    readonly url = 'https://jsonplaceholder.typicode.com/users'

    findAll(): Promise<User[]> {
        return fetch(this.url).then(res => res.json())
    }
}