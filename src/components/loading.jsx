import { useEffect, useState } from "react"

const Loading = () => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((response) => {
                const { body } = response
                console.log(body)
                setPost(body)
            })
    }, []);
    return (
        <>
            <div style={{color : "white"}}>
                {post ? post : <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>}
            </div>
        </>
    )
}

export default Loading