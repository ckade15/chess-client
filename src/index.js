import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Blitz';
import Standard from './pages/Standard';
import Rapid from './pages/Rapid';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
            <BrowserRouter >
                <Routes>
                    <Route path="/standard" element={<Standard/>}/>
                    <Route path="/rapid" element={<Rapid/>}/>
                    <Route path="/" element={<App/>}/>
                </Routes>
            </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
