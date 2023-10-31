import React from 'react';

import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import SongContextProvider from './contexts/SongContext';

import './index.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <AuthContextProvider>
                    <ThemeContextProvider>
                        <Header />
                        <SongContextProvider>
                            <Home />
                        </SongContextProvider>
                        <Footer />
                    </ThemeContextProvider>
                </AuthContextProvider>
            </div>
        )
    }
}


export default App;