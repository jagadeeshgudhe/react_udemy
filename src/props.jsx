//props-functioal arguments in js and attriburtes in html.
const myElement=<Car brand="Ford"/>


props as objects
import React from "react"
import ReactDOM from "react-dom/client"
function Car(props){
    return <h2> i am a {props.brand}</h2>
}
const myElement=<Car brand ="Ford"/>
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(myElement)