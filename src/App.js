import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';

import Programming from './components/skills/Programming';
import Design from './components/skills/Design';
import Networking from './components/skills/Networking';

import "./app.css";

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='skills' element={<Skills />}>
                        <Route index element={<Programming />} />
                        <Route path='programming' element={<Programming />} />
                        <Route path='design' element={<Design />} />
                        <Route path='networking' element={<Networking />} />
                    </Route>
                    <Route path='experience' element={<Experience />} />
                </Routes>
            </div>
        )
    }
}


export default App;