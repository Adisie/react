import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';

import './css/index.css';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='skills' element={<Skills />} />
                    <Route path='experience' element={<Experience />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}


export default App;