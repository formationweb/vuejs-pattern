import { inject, ref } from "vue"
import type { User } from "../types/User"
import type { UserService } from "../services/UserService"
import { USER_SERVICE_TOKEN } from "../di/tokens"
import { useUsersStore } from "../stores/users"
import { storeToRefs } from "pinia"

export function useFetchUsers() {
    const usersStore = useUsersStore()
    const { users } = storeToRefs(usersStore)
    const usersService = inject<UserService>(USER_SERVICE_TOKEN)

    async function getAll() {
        const data = await usersService?.getAllUsers()
        if (data) usersStore.setUsers(data)
    }

    return {
        users,
        getAll
    }
}