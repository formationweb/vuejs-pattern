import { storeToRefs } from "pinia"
import { useUsersStore } from "../stores/users"
import { inject } from "vue"
import type { UserService } from "../services/UserService"
import { USER_SERVICE_TOKEN } from "../di/tokens"


// pattern facade, intéressant si plusieurs composants souhaitent faire action qui piochent dans le store et service
// surtout utile pour les autres domaines (exemple: order)
// façade pas toujours utile, pas utilise si un seul composant
export function useUserFacade() {
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