<template>
    <Opacity v-model="opacity" color="black" @change="console.log" />
    <UserCard v-for="user in users" :key="user.id" :user @on-delete="deleteUser">
        <template #error="{ error }">
            <p>{{ error }}</p>
        </template>
        <template #empty>

        </template>
    </UserCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFetchUsers } from '../composables/useFetchUsers';
import Opacity from './Opacity.vue'
import UserCard from './UserCard.vue';
import { useDeleteUser } from '../composables/useManageUsers';

const opacity = ref(0.5)

const { users, getAll } = useFetchUsers()
const { deleteUser } = useDeleteUser()

getAll()
</script>