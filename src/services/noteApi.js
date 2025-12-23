const BASE_URL = "http://localhost:3000/notes";

export async function getAllNotes() {
    try {
        const res = await fetch("http://localhost:3000/notes");
        if (!res.ok) {
            throw new Error(`HTTP error ${res.status}`);
        }
        return await res.json();
    } catch (err) {
        console.error("FETCH ERROR:", err);
        throw err;
    }
}


export async function createNote(note) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    });

    if (!res.ok) throw new Error("Failed to create note");
    return res.json();
}

export async function deleteNote(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    if (!res.ok) throw new Error("Failed to delete note");
}
export async function updateNote(id, updatedNote) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNote)
    });
    if (!res.ok) throw new Error("Failed to update note");
    return res.json();
}
export async function getNoteById(id) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch note");
    return res.json();
}
