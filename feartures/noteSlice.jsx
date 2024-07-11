import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};
const saveNote = JSON.parse(localStorage.getItem("note"));

if (saveNote) {
  initialState.notes = saveNote;
}

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id != action.payload);
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    updateNote: (state, action) => {
      const{id,name,projecttitle,projectdescription,createAt}=action.payload
      const note=state.notes.find((note)=>note.id ==id)
      if(note){
        note.name=name,
        note.projecttitle=projecttitle,
        note.projectdescription=projectdescription,
        note.createAt=createAt,
        localStorage.setItem("note", JSON.stringify(state.notes));
      }
    },
  },
});
export const { addNote, deleteNote,updateNote } = noteSlice.actions;
export default noteSlice.reducer;


