<template>
    <div class="bg-[#1E293B] items-center justify-start flex flex-col gap-4 min-h-screen p-3 text-white">
        <h1>Notes</h1>

        <p v-if="error" style="color:red">{{ error }}</p>
        <p v-if="notes.length == 0" class="text-yellow-300">No Notes Found</p>
        <NoteCard v-for="note in notes" :key="note.id" :note="note" @delete="handleDelete" @update="handleUpdate" />
        <router-link to="/create" >
            <button class="cursor-pointer px-2 bg-green-300 py-3 rounded-xl">Create New Note</button>
        </router-link>
    </div>
</template>

<script>
import { getAllNotes, deleteNote } from "../services/noteApi";
import NoteCard from "../components/NoteCard.vue";

export default {
    components: { NoteCard },
    data() {
        return {
            notes: [],
            error: null
        };
    },
    async mounted() {
        try {
            this.notes = await getAllNotes();
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async handleDelete(id) {
            await deleteNote(id);
            this.notes = this.notes.filter(n => n.id !== id);
        },
        handleUpdate(id) {
            this.$router.push(`/update/${id}`);
        }
    }
};
</script>
