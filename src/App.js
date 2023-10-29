import React from 'react';
import {Routes,Route} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import Phones from './components/product-types/Phones';
import Computers from './components/product-types/Computers';
import TV from './components/product-types/TV';

import './css/index.css';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='products' element={<Products />}>
                        <Route index element={<Phones />} />
                        <Route path='phones' element={<Phones />} />
                        <Route path='computers' element={<Computers />} />
                        <Route path='tv' element={<TV />} />
                    </Route>
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}


export default App;