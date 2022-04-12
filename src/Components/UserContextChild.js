import React, {useContext} from "react";
import {UserContext} from "../App";
export function UserContextChild(){
    const user = useContext(UserContext)
    return(<div>
        <h1>Accessed context in child, which was stored in parent {user}</h1>

    </div>)
}