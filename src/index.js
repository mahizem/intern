import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  /* this code is the same as :-
  ReactDOM.render(<App/> , document.getElementById('root'));
  ReactDOM.render(JSX, document.getElementById('root'))
 . do projects
  . apply to shecodes 
  . start ur project
  
  */
);


 
