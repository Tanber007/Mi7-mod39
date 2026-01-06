import './App.css'
import { useState } from "react"

export default function Appale(){
    const [frute, state] = useState(4);

    const newAppale = () =>{
        const newFrute = frute + 1;
        state(newFrute);
    }

    const removeAppale = () =>{
        const newFrute = frute - 1;
        state(newFrute);
    }

    return(
        <div className="appaleCSS">
            <h3>The Appale is : {frute}</h3>
            <button style={{marginRight: '10px'}} onClick={newAppale}>ADD Appale</button>
            <button onClick={removeAppale}>Remove Appale</button>
        </div>
    )
}