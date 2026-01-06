import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(30);
        console.log(count);

    const add = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const Reduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return(

        <div style={{border: '2px solid yellow', borderRadius: '20px', padding: '20px' }}>
            <h3>Counter: {count}</h3>
            <button onClick={add}>Add</button>
            <button onClick={Reduce}>Reduce</button>
        </div>
    )
}