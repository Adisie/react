import { createContext,useState } from "react";


export const NoteContext = createContext();

const NoteContextProvider = props => {
    const [notes,setNotes] = useState([
    ]) 

    const removeNote = id => {
        setNotes(notes.filter(note=>note.id !== id))
    }

    const addNote = (id,content) => {
        setNotes([...notes,{id: id,content: content}]);
    }

    return ( 
        <NoteContext.Provider value={{notes,addNote,removeNote}}>
            {props.children}
        </NoteContext.Provider>
     );
}
 
export default NoteContextProvider;