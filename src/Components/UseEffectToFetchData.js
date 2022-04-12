import React, {useEffect, useState} from "react";
import axios from "axios";

function UseEffectToFetchData(){
    const [posts , setPosts] = useState([])

    useEffect(()=>{
        document.title = 'initially set'
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {console.log(response)
                setPosts(response.data)
                console.log(typeof posts)
            })
            .catch((err) => console.log(err))
    }, []) //pass sec parameter as empty arr
    return(<div>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>)

}
export default UseEffectToFetchData