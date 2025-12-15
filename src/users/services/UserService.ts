import { UserRepository } from "../repositories/UserRepository";
import type { User } from "../types/User"


// Service Pattern: logique métier pure
export class UserService {
    private repository: UserRepository

    constructor(repository?: UserRepository) {
        this.repository = repository ?? new UserRepository()
    }

    async getAllUsers() {
        const users = await this.repository.findAll()
        return users.sort((a, b) => a.id - b.id)
    }
}