import React from 'react';
import {HashRouter} from 'react-router-dom'
import UsingHooksRouter from './Pages/UsingHooksRouter.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <UsingHooksRouter/>
      </HashRouter>
    </div>
  );
}

export default App;
