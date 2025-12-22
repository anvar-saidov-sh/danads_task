# DanAds Notes API

## 1. Project Overview

**Project Name:** DanAds Notes API
**Description:** A simple REST API for managing notes (CRUD operations) built with **Node.js, Express, and TypeScript**.
**Purpose:** Internship technical assessment — demonstrates understanding of REST API design, backend development, TypeScript, and error handling.

---

## 2. Technology Stack

| Layer              | Technology                       |
| ------------------ | -------------------------------- |
| Backend            | Node.js, Express                 |
| Language           | TypeScript                       |
| Data storage       | In-memory (no database required) |
| Tooling            | concurrently, nodemon, npm       |
| Version control    | Git                              |
| Package management | npm                              |

**Key TypeScript features used:**

* Strong typing for request and response objects
* Interfaces for models (`Note`)
* Type-safe route handlers

**Key Express features used:**

* Middleware (`express.json()`)
* Route modularization (`notesRoutes`)
* Error handling with appropriate HTTP status codes

---

## 3. Project Structure

```
src/
 ├── main.ts               
 ├── routes/
 │    └── notesRoutes.ts   
 ├── controllers/
 │    └── notesController.ts  
 ├── models/
 │    └── Note.ts          
 ├── data/
 │    └── notesStore.ts    
 └── middleware/
      └── errorHandler.ts
      └── validateNote.ts
dist/                       
```

---

## 4. Note Model

**Note.ts**

```ts
export interface Note {
    id: string;       // Unique identifier (UUID)
    title: string;    // Note title
    content: string;  // Note content
    createdAt: string; // ISO string for creation time
}
```

---

## 5. Routes and Endpoints

**Base URL:** `/notes`

| Method | Endpoint     | Description             | Request Body                           | Response              |
| ------ | ------------ | ----------------------- | -------------------------------------- | --------------------- |
| GET    | `/notes`     | Get all notes           | None                                   | Array of notes        |
| GET    | `/notes/:id` | Get a single note by ID | None                                   | Note object or 404    |
| POST   | `/notes`     | Create a new note       | `{ title: string, content: string }`   | Created note with 201 |
| PUT    | `/notes/:id` | Update an existing note | `{ title?: string, content?: string }` | Updated note or 404   |
| DELETE | `/notes/:id` | Delete a note           | None                                   | 204 No Content or 404 |

---

### Example Request & Response

**POST /notes**

**Request Body:**

```json
{
    "title": "My First Note",
    "content": "This is a sample note."
}
```

**Response (201 Created):**

```json
{
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "My First Note",
    "content": "This is a sample note.",
    "createdAt": "2025-12-22T12:00:00.000Z"
}
```

**GET /notes**

**Response (200 OK):**

```json
[
    {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "title": "My First Note",
        "content": "This is a sample note.",
        "createdAt": "2025-12-22T12:00:00.000Z"
    }
]
```

---

## 6. Error Handling

| Status Code | When                  | Response                                          |
| ----------- | --------------------- | ------------------------------------------------- |
| 400         | Invalid request body  | `{ "error": "Validation failed: missing title" }` |
| 404         | Note not found        | `{ "error": "Note not found" }`                   |
| 500         | Internal server error | `{ "error": "Something went wrong" }`             |

---

## 7. Running the Project

### Install dependencies

```bash
npm install
```

### Build project

```bash
npm run build
```

* Compiles TypeScript → JavaScript in `dist/`

### Start server

```bash
npm start
```

* Runs compiled `dist/main.js`

### Development mode (optional)

```bash
npm run dev
```

* This setup automatically restarts the server on code changes

---

## 8. Additional Notes

* **Data persistence**: Notes are stored in memory (`notesStore.ts`); restarting the server clears all notes.
* **UUIDs**: Used to uniquely identify notes (`uuid` package).
* **Code modularization**:

  * `main.ts` → app initialization
  * `routes/` → route definitions
  * `controllers/` → logic
  * `models/` → type definitions
  * `data/` → in-memory storage
---

## 9. License

ISC License — see [LICENSE](./LICENSE)

---

**End of Documentation**
