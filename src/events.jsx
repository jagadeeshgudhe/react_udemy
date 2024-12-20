react  events are also same as html events like change, mouse over, clicks
react events are written in camel case
HTML-> onclick() ,,, react-> onClick{}
instead of writing in html we write in curly braces 




import React from "react";
import ReactDOM from "react-dom/client";
function Football() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Football />);