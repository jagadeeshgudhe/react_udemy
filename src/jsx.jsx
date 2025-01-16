import React from "react";
import ReactDOM from "react-dom/client";

const myelement=<h1>Jagadeesh</h1>

const root=ReactDom.createRoot(document.getElementById('jagadeesh'));
root.render(myelement);

//if any expresion is to be write should be in {} braces

//example:- const myElement=<h1>jagadeesh achieved {5+5} cgpa</h1>

// without jsx 
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


//FRAGMENT - to avoid errors in html is not correct/missed parent element like division

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myElement = (
//     <>
//       <p>I am Jagadeesh.</p>
//       <p>I am Jagadeesh Gudhe.</p>
//     </>
//   );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);;