<template>
    <label>{{  label }}</label>
    <input type="text" v-model="value" />
</template>

<script setup lang="ts">
defineProps<{
    label: string
}>()

const value = defineModel<string>()
</script>