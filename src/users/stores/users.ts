import { defineStore } from "pinia";
import type { User } from "../types/User";
import { computed, ref } from "vue";

export const useUsersStore = defineStore('users', () => {
    const users = ref<User[]>([])

    const userCount = computed(() => users.value.length)

    function setUsers(data: User[]) {
        users.value = data
    }

    return {
        // states
        users,
        // getters
        userCount,
        // actions (mutations)
        setUsers
    }
})