import { createRouter, createWebHistory } from "vue-router";
import NotesList from "../components/NotesList.vue";
import CreateNote from "../components/CreateNote.vue";
import UpdateNote from "../components/UpdateNote.vue";

const routes = [
    {
        path: "/",
        name: "Notes",
        component: NotesList
    },
    {
        path: "/create",
        name: "CreateNote",
        component: CreateNote
    },
    {
        path: "/update/:id",
        name: "UpdateNote",
        component: UpdateNote,
        // props: true
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
