import React from 'react';

import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

import Header from './components/Header';
import BookList from './components/BookList';
import ThemeToggler from './components/ThemeToggler';

import './index.css';

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <Header />
                        <BookList />
                        <ThemeToggler />
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        )
    }
}


export default App;