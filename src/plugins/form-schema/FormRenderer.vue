<!-- <FormRenderer :schema="" @submitSuccess="" -->
<!--  v-model="form[]" -->
<template>
    <form @submit.prevent="handleSubmit">
        <div v-for="field in schema.fields" :key="field.name">
            <component 
                :is="getFieldComponent(field.type)" 
                :label="field.label"
            />
        </div>
    </form>
</template>

<script setup lang="ts" generic="F extends readonly FieldSchema[]">
import { fieldRegistry } from './fields/registry';
import type { FieldSchema, FieldType, Schema } from './types';

type SchemaFormData = {
    [K in F[number]["name"]]: string
}

defineProps<{
    schema: Schema<F>
}>()

defineEmits<{
    submitSuccess: [SchemaFormData]
}>()

const handleSubmit = () => {
    // submit() du composable
}

const getFieldComponent = (fieldType: FieldType) => {
    return fieldRegistry[fieldType]
}

</script>