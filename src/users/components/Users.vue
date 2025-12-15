<template>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useFetchUsers } from '../composables/useFetchUsers';

const { users, getAll } = useFetchUsers()

getAll()
</script>