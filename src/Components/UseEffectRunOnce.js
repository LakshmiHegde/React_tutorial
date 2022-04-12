import React, {useEffect} from "react";

function UseEffectRunOnce(){

    useEffect(()=>{
        document.title = 'initially set'
    } , []) //pass sec parameter as empty arr
    return(<h1>
        done
    </h1>)
}
export default UseEffectRunOnce