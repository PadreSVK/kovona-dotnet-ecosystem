<template>
    <li>
        <input type="checkbox" :checked="props.done" @change="togggle" />
        {{ normalizeLength(props.title) }}
    </li>
</template>


<script setup lang="ts">
import { normalizeLength } from "@/helpers";

const props = defineProps(["done", "title"])
const emit = defineEmits(["toogle"])

function togggle() {
    emit("toogle")
}

</script>
