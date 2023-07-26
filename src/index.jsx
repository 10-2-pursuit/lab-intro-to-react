import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';


import App from './App.jsx';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
/*
ReactDOM.render(<App />, document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
*/