import {useState} from "react";

function CounterObject(){
    const [counterInof,setCounterInof]=useState({
        title:'counter with objects',
        count:0}

    );

    const increment = () => {
        setCounterInof((prev)=>({
            ...prev,
            count:prev.count+1
        }))
       
    }

    const decrement = () => {
        setCounterInof((prev)=>({
            ...prev,
            count:prev.count-1
        }))

    }

    return(
        <div className="counter">
        <h1>Counter With Object Explain</h1>
        <p>Updating object in State</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h3>{counterInof.title}</h3>
        <h3>{counterInof.count}</h3>
        </div>
    )
}
export default CounterObject;