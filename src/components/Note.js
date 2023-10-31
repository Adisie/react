import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { NoteContext } from "../contexts/NoteContext";

import {BsTrash3Fill} from 'react-icons/bs';


const Note = ({note}) => {
    // console.log(note)
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {removeNote} = useContext(NoteContext);

    return ( 
            <div style={{background: theme.dbg}}>
                <p style={{color: theme.pt}}>{note.content}</p>
                <button style={{color: theme.pt}} onClick={()=> removeNote(note.id)}><BsTrash3Fill /></button>
            </div>
            );
}
 
export default Note;