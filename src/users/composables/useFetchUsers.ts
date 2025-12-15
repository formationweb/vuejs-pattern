import { useUserFacade } from "../facades/useUserFacade"


export function useFetchUsers() {
    return useUserFacade()
}