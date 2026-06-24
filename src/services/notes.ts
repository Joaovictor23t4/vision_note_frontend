import { api } from "@/plugins/axios";
import type { NoteCreateDTO, NoteUpdateDTO } from "@/types/notes";

class NotesService {
    async findAll() {
        const { data } = await api.get("/notes/");
        return data;
    }
    async findById(id: string) {
        const { data } = await api.get(`/notes/${id}`);
        return data;
    }
    async create(note: NoteCreateDTO) {
        const { data } = await api.post("/notes/", note);
        return data;
    }
    async update(id: string, note: NoteUpdateDTO) {
        const { data } = await api.patch(`/notes/${id}`, note);
        return data;
    }
    async delete(id: string) {
        await api.delete(`/notes/${id}`);
        return true;
    }
}

export default new NotesService();