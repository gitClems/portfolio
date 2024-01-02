import { Link } from "react-router-dom"
import "../css/homeProject.css"
import { useEffect, useState } from "react";
function HomeProject(props) {
    const styles = {
        content: {
            marginLeft : 5,
            marginRight : 5,
        },
        img: {
            borderRadius : 10
        },
    }

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
            <div style={styles.content}>
                <Link  className="home-project-content" to={'/work'}>
                    <span style={styles.title}>{props.title}</span>
                    {post ? post : <img style={styles.img} src={props.image} alt="Project 1" />}
                </Link>
            </div>
        </>
    )
}

export default HomeProject