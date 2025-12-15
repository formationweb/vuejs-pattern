<template>
    <article>
        <header>{{ user.name }}</header>
        <footer><button @click="emits('onDelete', user.id)">Supprimer</button></footer>
    </article>
</template>

<script setup lang="ts">
import type { User } from '../types/User';

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()
</script>