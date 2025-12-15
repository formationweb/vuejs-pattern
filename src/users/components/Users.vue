<template>
    <Opacity v-model="opacity" color="black" @change="console.log" />
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFetchUsers } from '../composables/useFetchUsers';
import Opacity from './Opacity.vue'

const opacity = ref(0.5)

const { users, getAll } = useFetchUsers()

getAll()
</script>