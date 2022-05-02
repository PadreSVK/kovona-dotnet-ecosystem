<template>
    <AddTodo @add="addTodo" ></AddTodo>

    <ul>
        <ListItem v-for="item in todos" :key="item.id" :done="item.done" :title="item.title" @toogle="toggleTodo(item.id)"/>
    </ul>

</template>

<script setup lang="ts">
import { uuidv4 } from "@/helpers";
import { reactive } from "vue";
import AddTodo from "./AddTodo.vue";
import ListItem from "./ListItem.vue";


const todos = reactive([
    { id: "a682e644b1984f338d8fe1116df9e3a3", done: true, title: "Labore amet in incididunt ipsum nostrud irure anim ea ex adipisicing ipsum non laborum esse." },
    { id: "27deaaa97c27453fa51b3d7ef16ac093", done: true, title: "Esse ullamco pariatur adipisicing mollit est qui id ut." },
    { id: "00c5acdddbe744a79be51c12966c87f9", done: false, title: "Qui " },
    { id: "c8ace44089234aa8934c5f88d153d36c", done: true, title: "Ex Lorem excepteur est anim exercitation." },
    { id: "ea59a7b734164b98ade35c6396a209bf", done: false, title: "Laborum ut labore est anim sint commodo pariatur labore nisi non non exercitation Lorem commodo eiusmod." },
    { id: "44bad25145914e67a1c486bb21a768f4", done: true, title: "Laborum cillum nisi nostrud anim aliquip veniam cillum." },
    { id: "5327051bf56c413d92588996e897b02d", done: false, title: "Tempor minim esse cupidatat officia tempor voluptate cupidatat reprehenderit consectetur reprehenderit voluptate occaecat." },
])

function addTodo(text: string){
    todos.push({id: uuidv4(), done: false, title: text})
}

function toggleTodo(id: string){
    const item = todos.find(i=> i.id === id)
    item!.done = !item?.done
}
</script>

