import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './StateProvide';
import reducer, { initialState } from './reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer = {reducer}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StateProvider>
);

