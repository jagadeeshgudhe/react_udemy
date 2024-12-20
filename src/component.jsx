import React from 'react';
import ReactDOM from 'react-dom/client';

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />); //----here the car component is render to root


component in component

import React from 'react';
import ReactDOM from 'react-dom/client';
function Car(){
  return <h2>itz me car</h2>
}

function Garage(){
  return(
    <>
    <h2>who r in garage</h2>
    <car/>
    </>
  )
}