<template>
    <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        v-model="opacity"
    />
    <div :style="{ backgroundColor: color, opacity }"></div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

defineProps<{
    color: string
}>()

const opacity = defineModel<number>({ required: true })

const emits = defineEmits<{
    change: [number]
}>()

watchEffect(() => {
    emits('change', opacity.value)
})

setTimeout(() => {
    opacity.value = 0.2
}, 1000)
</script>

<style scoped>
div {
    width: 100px;
    height: 100px;
    background-color: black;
    opacity: 1;
}
</style>