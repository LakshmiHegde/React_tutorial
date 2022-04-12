import React, {useEffect, useState} from "react";

function UseEffectWithDocTitleChange(){
    const[cnt, updatecnt] = useState(0)
    //THIS METHOD, NOW SETS DOC TITLE, FOR FIRST RENDER , i,e as a replacement to didMount, and after each render, as rep to didUpdate.

    useEffect(() => {
        document.title = `Clicked ${cnt}  times`
    })
    return(
        <button onClick={()=>
                updatecnt(cnt+1)
            }>
            Click {cnt}
        </button>
    )
}
export default UseEffectWithDocTitleChange