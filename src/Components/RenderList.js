import React from "react";
import PersonToRenderList from "./PersonToRenderList";
function RenderList(){
    var person=[{
        id:1,
        name:'lakshmi',
        age:23
    },
        {
            id:2,
            name:'bhumika',
            age:24
    }
    ]
    var personlist = person.map(p => (<h1> Hello {p.name} with ID {p.id} of {p.age} years old</h1>))
    var personL =person.map(p => (<PersonToRenderList per={p}/>)) //you get error for this saying that key is not unique so follow below approach
    var person3 = person.map(p => <PersonToRenderList key={p.id} per={p}/>) //assign key with any field, inside list, that you feel is  unique across list.
    //this key cannot be retrieved in PersonToRenderList function. If you want to use this key in fun, thnen use it as sep prop and send it.
    return (
         <div>
                <h2>{personlist}</h2>
             {person.map(p => PersonToRenderList(p))}//you get error for this saying that key is not unique so follow person3 approach
             <h3>{personL}</h3>
             <h4>{person3}</h4>
         </div>

    )
}

export default RenderList