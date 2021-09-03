import React from "react";
import anime from 'animejs/lib/anime.js';
import r from "../src/1.jpg";
import vid from "../src/vid.mp4"
const App=() =>{
return(
    <>
    <p  style={{color: 'red'}}
    className="text-left"
    style={{fontFamily:'cursive'}}>HI</p>
 <h1 >Hello</h1>   
 <video loop muted autoPlay>
     <source src={vid} type="vid/mp4"/>
 </video>
 



</>)
}
// Wrap every letter in a span
export default App;
