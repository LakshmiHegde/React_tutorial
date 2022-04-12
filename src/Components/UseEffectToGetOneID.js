import React, {useEffect, useState} from "react";
import axios from "axios";
function UseEffectToGetOneID(){
    const [post , setPost] = useState({})
    const [id, setid] = useState(1)
    useEffect(()=>{
        document.title = 'initially set'
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {console.log(response)
                setPost(response.data)
                console.log(typeof posts)
            })
            .catch((err) => console.log(err))
    }, [id]) //pass sec parameter as empty arr
    return(<div>
        <input type="text" value={id} onChange={(e)=>setid(e.target.value)}/>
        {post.id}
        {post.title}
    </div>)
}
export default UseEffectToGetOneID