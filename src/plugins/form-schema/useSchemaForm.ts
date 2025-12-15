import { reactive } from "vue";
import type { FieldSchema, Schema } from "./types";

export function useSchemaForm<F extends readonly FieldSchema[]>(schema: Schema<F>) {
    const form = reactive<Record<string, string>>({})
    const errors = reactive<Record<string, string>>({})

    function validate() {
        let valid = true
        for (let field of schema.fields) {
            const name = field.name
            const value = form[name]
            if (field.rules?.includes('required') && !value) {
                errors[name] = 'Champ requis'
                valid = false
            }
            else {
                errors[name] = ''
            }
        }
        return valid
    }

    function submit(onValid: (form: Record<string, string>) => void) {
        if (validate()) {
            onValid({...form})
        }
    }

    return {
        form,
        errors,
        submit
    }
}