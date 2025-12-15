export function useDeleteUser() {
    async function  deleteUser(id: number) {
        console.log('suppression user', id)
    }

    return {
        deleteUser
    }
}