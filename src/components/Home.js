import { useContext } from "react";

import { ThemeContext } from "../contexts/ThemeContext";
import { NoteContext } from "../contexts/NoteContext";

import Note from "./Note";

const Home = () => {
    const {isLightTheme,light,dark,themeToggler} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const {notes,addNote,removeNote} = useContext(NoteContext);

    return ( 
        <div className="content" style={{background: theme.cbg}}>

            {notes.map(note=>{
                return (
                    <Note note={note} key={note.id}/>
                )
            })}
        </div>
     );
}
 
export default Home;