<template>
    <slot name="error" :error>
        
    </slot>

   <div v-if="user">
        <article>
            <header>{{ user.name }}</header>
            <footer><button @click="emits('onDelete', user.id)">Supprimer</button></footer>
        </article>
   </div>
   <slot name="empty" v-else>
     <p>pas utilisateur</p>
   </slot>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { User } from '../types/User';

const error = ref('erreur')

defineProps<{
    user: User
}>()

const emits = defineEmits<{
    onDelete: [number]
}>()
</script>