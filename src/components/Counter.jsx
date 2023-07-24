import { useState } from "react";

function Counter() {
    const [title, setTitle] = useState('react state example');
    const [isvisible, setisvisible] = useState(false);
    const [count, setcount] = useState(0);



    const increment = () => {
        if (count < 10)
            setcount(count + 1);

    }

    const decrement = () => {
        setcount(count - 1);

    }

    const showCounter = () => { };


    return (

        <div className="counter">
            <h1>{title}</h1>
            <button onClick={showCounter}>show counter</button>
            {isvisible ?
                <div>
                    <h2>{count}</h2>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button></div> : 'no data'
            }
        </div>
    )
}
export default Counter;