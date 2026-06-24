import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import type { NotesState, NotesList, Note } from "@/interfaces/notes";
import { useRouter } from "vue-router";
import NotesService from "@/services/notes";
import type { NoteCreateDTO, NoteUpdateDTO } from "@/types/notes";

export const useNotesStore = defineStore('notes', () => {
    const notes = ref<Note[]>();
    const note = ref<Note>();
    const state = reactive<NotesState>({
        note_selected: note.value?.id ? note.value.id : "home"
    });
    const router = useRouter();

    function selectNote(noteSelected: Note): void {
        state.note_selected = noteSelected.id;
        note.value = noteSelected;

        if (noteSelected.id == "home") {
            router.push("/home");
        }
        else {
            router.push(`/note/${noteSelected.id}`);
        }
    }

    async function findAllNotes() {
        try {
            const data = await NotesService.findAll();
            notes.value = data.data;
        }
        catch(e) {
            console.error(`Error in GET notes: ${e}`);
        }
    }
    async function findNoteById(id: string) {
        try {
            const { data } = await NotesService.findById(id);
            note.value = data;
            state.note_selected = note.value?.id ? note.value.id : null;
        } catch(e) {
            console.error(`Error in GET note: ${e}`);
        }
    }
    async function createNote(note: NoteCreateDTO) {
        try {
            const data = NotesService.create(note);
        } catch(e) {
            console.error(`Error in POST note: ${e}`);
        }
    }
    async function updateNote(id: string, note: NoteUpdateDTO) {
        try {
            const updateNote = await NotesService.update(id, note);

            if (!notes.value) return;

            const index = notes.value.findIndex(n => n.id == id);

            if (index != -1) {
                console.log(updateNote.data);
                notes.value[index] = updateNote.data;
            }
        } catch(e) {
            console.error(`Error in PATCH note: ${e}`);
        }
    }
    async function deleteNote(id: string) {
        try {
            await NotesService.delete(id);
            notes.value = notes.value?.filter(note => note.id != id);
        }
        catch(e) {
            console.error(`Error in DELETE note: ${e}`);
        }
    }

    return {
        state,
        notes,
        note,
        selectNote,
        findAllNotes,
        findNoteById,
        createNote,
        updateNote,
        deleteNote
    }
})