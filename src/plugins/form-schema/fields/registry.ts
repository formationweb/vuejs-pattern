import type { Component } from "vue";
import type { FieldType } from "../types";
import Text from "./Text.vue";

export const fieldRegistry: Record<FieldType, Component> = {
    text: Text
}