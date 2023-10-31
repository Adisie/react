import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { SongContext } from '../contexts/SongContext';

const Home = () => {
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {songs,setSongs} = useContext(SongContext);
    return (
        <div className='content' style={{background: theme.cbg,color: theme.ctxt}}>
            <h3>Song List</h3>
            <ul>
                {songs.map(song=>{
                    return (
                        <li key={song.id} style={{background: theme.hbg,color: theme.htxt}}>{song.title}</li>
                    )
                })}
            </ul>
    </div>
    )
}
 
export default Home;