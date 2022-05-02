<template>
    <input type="text" v-model="text" />
    <button @click="addTodo">Add todo</button>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emit = defineEmits(["add"])
const text = ref("")

function addTodo() {
    emit("add", text)
}

</script>
