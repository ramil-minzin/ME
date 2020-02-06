import React from 'react';
import './App.css';
import Header from './components/header.jsx'
import Menu from './components/navSide.jsx'
import Content from './components/content.jsx'

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Menu />
            <Content />
        </div>
    );
}

export default App;
