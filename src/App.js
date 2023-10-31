import React from 'react';

import ThemeContextProvider from './contexts/ThemeContext';
import NoteContextProvider from './contexts/NoteContext';

import './index.css';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <ThemeContextProvider>
                    <Header />
                    <NoteContextProvider>
                        <Home />
                        <Footer />
                    </NoteContextProvider>
                </ThemeContextProvider>
            </div>
        )
    }
}


export default App;