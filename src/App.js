import React from 'react';
import {Routes,Route} from 'react-router-dom';

import ThemeContextProvider from './contexts/ThemeContext';

import './index.css';

import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Footer from './components/Footer';



class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <ThemeContextProvider>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='products' element={<Product />} />
                        <Route path='about' element={<About />} />
                    </Routes>
                    <Footer />
                </ThemeContextProvider>
            </div>
        )
    }
}


export default App;