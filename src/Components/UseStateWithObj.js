import React, {useState} from "react";

export function UseStateWithObj(){
    const [name, setName] = useState({firstname : '' , lastname: ''})
    return (
        //this form renders, but when you type firstname , lastname is overwritten
        //when you type lastname , firstname is overwritten
        //save the object, to not overwrite, by "...objectname"
        <form>
            <input type="text" value={name.firstname} onChange={(e)=>setName(

                {...name, firstname : e.target.value}
            )
            }/>
            <input type="text" value={name.lastname} onChange={(e)=>setName(

                {...name, lastname : e.target.value}
            )}/>
            First name is : {name.firstname}
            Last name is : {name.lastname}
        </form>
    )
}