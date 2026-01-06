import { useState } from "react"

export default function Team(){
   
/************************* */
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
/*************************** */

 const [player, setCount] = useState(11);

    const AddPlayer = () =>{
        const newaPlayer = player + 1;
        setCount(newaPlayer);
    }

    const RemovePlayer = () =>{
        const newaPlayer = player - 1;
        setCount(newaPlayer);
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {player}</h3>
            <button onClick={AddPlayer}>AddPlayer</button>
            <button onClick={RemovePlayer}>RemovePlayer</button>
        </div>
    )
}