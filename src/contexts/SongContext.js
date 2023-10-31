import React, {useState,createContext} from 'react';


export const SongContext = createContext();

const SongContextProvider = (props) => {
    const [songs,setSongs] = useState([
        {id: 1, title: "ላምባዲና"},
        {id: 2, title: "እናትዋ ጎንደር"},
        {id: 3, title: "ሻማ ቡሬ"},
    ])
    return (
        <SongContext.Provider value={{songs,setSongs}}>
            {props.children}
        </SongContext.Provider>
      );
}
 
export default SongContextProvider;
