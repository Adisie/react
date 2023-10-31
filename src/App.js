import React from 'react';

import ThemeContextProvider from './contexts/ThemeContext';

import './index.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <ThemeContextProvider>
                    <Header />
                    <Home />
                    <Footer />
                </ThemeContextProvider>
            </div>
        )
    }
}


export default App;