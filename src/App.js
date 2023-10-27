import React from 'react'
import {Routes,Route} from 'react-router-dom'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

import Programming from './components/skills/Programming'
import Design from './components/skills/Design'
import Development from './components/skills/Development'

import './css/index.css'

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='programming' element={<Programming />} />
                    <Route path='design' element={<Design />} />
                    <Route path='development' element={<Development />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}


export default App;