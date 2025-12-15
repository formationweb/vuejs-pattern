<template>
    <FormRenderer :schema @submit-success="login"></FormRenderer>
</template>

<script setup lang="ts">
import FormRenderer from '../plugins/form-schema/FormRenderer.vue';

const schema = {
    fields: [
        { name: "email", type: "text", label: "Email", rules: "required|email" },
        { name: "password", type: "text", label: "Password", rules: "required" }
    ] as const
} 

function login(data: { email: string, password: string }) {
    console.log(data)
}
</script>