<template>
    <p>{{ currentOrder?.status }}</p>
</template>

<script setup lang="ts">
import { useOrder } from '../composables/useOrder';

const { currentOrder, load } = useOrder()

load('1')
</script>