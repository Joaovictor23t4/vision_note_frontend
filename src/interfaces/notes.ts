export interface Note {
    id: string,
    title: string,
    content: string,
    created_at: string,
    updated_at: string
}

export interface NotesState {
    note_selected: string | null
}

export interface NotesList {
    notes: Note[]
}