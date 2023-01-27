import React from 'react';
import ReactDom from 'react-dom/client';
import logo from './assets/logo.svg';
import './styles/main.scss'

function App() {
    return (
        <div id="app">
            <div className="flex-column-center">
                <h1>React v18 Webpack v5 Boilerplate</h1>
                <h4>v1.0.0</h4>
                <img className="logo" src={logo} alt="react webpack boilerplate"/>
            </div>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);
