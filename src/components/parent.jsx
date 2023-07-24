import {useState} from "react";
import Child from "./child"; 


function Parent(){
    const [client, setClient]=useState("Reliance")
    return(
        <div className="parent">
            <Child title='Client 1' clientName={client}/>
            <Child title='Client 2' clientName={client}/>
            <Child title='Client 3' clientName={client}/>

            <Child title="Client 3" clientName={client}>
                <p><strong></strong></p>


            </Child>

        </div>
    );
}
export default Parent;