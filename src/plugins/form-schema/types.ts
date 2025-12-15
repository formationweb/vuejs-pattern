/*
    {
        fields: [
            { name: "email", type: "text", label: "Email", rules: "required|email" }
        ]
    }
*/
export type FieldType = 'text'

export type FieldSchema = {
    name: string
    type: FieldType
    label: string
    rules?: string
}

export type Schema<F extends readonly FieldSchema[]> = {
    fields: F
}

