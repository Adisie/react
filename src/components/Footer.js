import { useContext,useState } from "react";
import {v4 as uuid4 } from 'uuid';

import {AiOutlineSend} from 'react-icons/ai';

import { ThemeContext } from "../contexts/ThemeContext";
import { NoteContext } from "../contexts/NoteContext";


const Footer = () => {


    const [content,setContent] = useState('')

    const {isLightTheme,light,dark,themeToggler} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const {addNote} = useContext(NoteContext);

    const adjustHeight = e => {
        e.target.style.height = '27px';
        let scHeight = e.target.scrollHeight;
        e.target.style.height = `${scHeight}px`;

    }

    const submitHandler = e => {
        e.preventDefault();
        addNote(uuid4(),content)
        e.target.firstChild.style.height = '27px';
        setContent('');
    }

    return ( 
        <footer style={{background: theme.hbg}}>
            <form onSubmit={submitHandler}>
                <textarea onKeyUp={adjustHeight} style={{borderColor: theme.ht,background: theme.hbg,color:theme.ht}} value={content} onChange={e=>setContent(e.target.value)} required></textarea>
                <button type="submit" style={{color: theme.ht}}><AiOutlineSend /></button>
            </form>
        </footer>
     );
}
 
export default Footer;