<!-- <FormRenderer :schema="" @submitSuccess="" -->
<!--  v-model="form[]" -->
<template>
    <form @submit.prevent="handleSubmit">
        <div v-for="field in schema.fields" :key="field.name">
            <component 
                :is="getFieldComponent(field.type)" 
                :label="field.label"
                v-model="form[field.name]"
            />
            <div v-show="errors[field.name]">
                {{ errors[field.name] }}
            </div>
        </div>
        <slot>
            <button>Valider</button>
        </slot>
    </form>
</template>

<script setup lang="ts" generic="F extends readonly FieldSchema[]">
import { fieldRegistry } from './fields/registry';
import type { FieldSchema, FieldType, Schema } from './types';
import { useSchemaForm } from './useSchemaForm';

/**
 * form: {
 *   email: ref('...'),
 *   password: ref('...')
 * }
 * 
 * errors: {
 *   email: ref('...'),
 *   password: ref('...')
 * }
 */

type SchemaFormData = {
    [K in F[number]["name"]]: string
}

const props = defineProps<{
    schema: Schema<F>
}>()

const { form, errors, submit } = useSchemaForm(props.schema)

const emits = defineEmits<{
    submitSuccess: [SchemaFormData]
}>()

const handleSubmit = () => {
    submit((data) => {
        emits('submitSuccess', data as SchemaFormData)
    })
}

const getFieldComponent = (fieldType: FieldType) => {
    return fieldRegistry[fieldType]
}

</script>