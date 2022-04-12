import React from "react";
import {UserContextChild} from "./UserContextChild";

export function UserContextParent(){
    return(<div>
        <UserContextChild/>
    </div>)
}