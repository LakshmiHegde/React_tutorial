import React, {useEffect, useState} from "react";

function UseEffectWithSecondParameter(){
    const[cnt, updatecnt] = useState(0)
    const [name, updatename] = useState('')
    //THIS METHOD, NOW SETS DOC TITLE, FOR FIRST RENDER , i,e as a replacement to didMount, and after each render, as rep to didUpdate.

    useEffect(() => {
        document.title = `Clicked ${cnt}  times`
    }, [cnt]) //only exec when cnt is changed by clicking button. and doesn't change title, if name is entered in field.
    return(
        <div>
            <input type="text" value={name} onChange={(e) => {
                updatename(e.target.value)
            }}/>

            <button onClick={()=>
                updatecnt(cnt+1)
            }>
                Click {cnt}
            </button>
        </div>

    )
}
export default UseEffectWithSecondParameter