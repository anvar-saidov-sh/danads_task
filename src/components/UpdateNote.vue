<template>
    <div class="bg-[#1E293B] items-center justify-start flex flex-col gap-4 min-h-screen p-3 text-white ">
        <h1>Edit Note</h1>

        <form v-if="loaded" @submit.prevent="submit" class="flex flex-col w-1/3 border-2 p-3 rounded-lg gap-2 bg-blue-950">
            <div>
                <input v-model="title" placeholder="Title" required class="border-0 focus:ring-0 focus:outline-0 px-2 py-3 text-gray-100 placeholder:text-gray-50" />
            </div>

            <div>
                <textarea v-model="content" placeholder="Content" required class="border-0 focus:ring-0 focus:outline-0 px-2 py-3 text-gray-100 placeholder:text-gray-50"></textarea>
            </div>

            <button type="submit">Update</button>
        </form>

        <p v-if="error" style="color:red">{{ error }}</p>
        <p v-if="!loaded">Loading...</p>
    </div>
</template>

<script>
import { getNoteById, updateNote } from "../services/noteApi";

export default {
    data() {
        return {
            title: "",
            content: "",
            error: null,
            loaded: false
        };
    },
    async mounted() {
        try {
            const note = await getNoteById(this.$route.params.id);
            this.title = note.title;
            this.content = note.content;
            this.loaded = true;
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async submit() {
            try {
                await updateNote(this.$route.params.id, {
                    title: this.title,
                    content: this.content
                });
                this.$router.push("/");
            } catch (err) {
                this.error = err.message;
            }
        }
    }
};
</script>
