<template>
    <div class="card bg-[#334155] p-4 rounded-lg w-30% flex flex-col gap-2 w-[30%]">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <small>{{ formattedDate }}</small>
        <br />
        <button @click="$emit('delete', note.id)" class="bg-red-400 p-2 rounded-2xl cursor-pointer">Delete</button>
        <router-link :to="`/update/${note.id}`">
            <p class="bg-blue-400 p-2 rounded-2xl cursor-pointer flex items-center justify-center">
                Edit
            </p>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        note: Object
    },
    computed: {
        formattedDate() {
            return new Date(this.note.createdAt).toLocaleString();
        }
    }
};
</script>

<style>
.card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>
