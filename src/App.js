import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';

import Programming from './components/skills/Programming';
import Development from './components/skills/Development';
import DataScience from './components/skills/DataScience';

import './css/index.css';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='skills' element={<Skills />}>
                        <Route index element={<Programming />}/>
                        <Route path='programming' element={<Programming />} />
                        <Route path='development' element={<Development />} />
                        <Route path='data-science' element={<DataScience />} />
                    </Route>
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