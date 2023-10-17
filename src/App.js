import React from 'react';
import {Routes,Route} from "react-router-dom";

import "./css/index.css";

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Help from './components/Help';
import PageNotFound from './components/PageNotFound';


class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='skills' element={<Skills />} />
                    <Route path='experience' element={<Experience />} />
                    <Route path='help' element={<Help />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
        )
    }
}


export default App;