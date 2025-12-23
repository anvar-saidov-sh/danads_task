<template>
    <div class="bg-[#1E293B] items-center justify-start flex flex-col gap-4 min-h-screen p-3 text-white ">
        <h1>Create Note</h1>

        <form @submit.prevent="submit" class="flex flex-col w-1/3 border-2 p-3 rounded-lg gap-2 bg-blue-950">
            <div class="mb-2">
                <input v-model="title" placeholder="Title" required class="border-0 focus:ring-0 focus:outline-0 px-2 py-3 text-gray-100 placeholder:text-gray-50" />
            </div>

            <div class="mb-2">
                <textarea v-model="content" placeholder="Content" required class="border-0 focus:ring-0 focus:outline-0 px-2 py-3 text-gray-100 placeholder:text-gray-50"></textarea>
            </div>

            <button>Create</button>
        </form>

        <p v-if="error" style="color:red">{{ error }}</p>
    </div>
</template>

<script>
import { createNote } from "../services/noteApi.js";

export default {
    data() {
        return {
            title: "",
            content: "",
            error: null
        };
    },
    methods: {
        async submit() {
            try {
                await createNote({
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
