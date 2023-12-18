import { Link } from "react-router-dom"
import "../css/homeProject.css"
function HomeProject(props) {
    const styles = {
        content: {
            // with: 400,
            // margin : 10,
            padding : 10,
        },
        img: {
            // width: 400,
            borderRadius : 10
        },
        title: {
            position: "absolute",
            // width: 400,
            marginLeft : 10,
            marginTop : 10,
            backgroundColor : "var(--primary-color-1)",
            color : "var(--white-color-1)",
            paddingRight: 20,
            paddingLeft: 20,
            borderRadius :10,
            fontSize : 20,
            // backgroundColor: "red",
        }
    }
    return (
        <>
            <div className="home-project-content" style={styles.content}>
                <Link to={'/work'}>
                    <span style={styles.title}>{props.title}</span>
                    <img style={styles.img} src={props.image} alt="Project 1" />
                </Link>
            </div>
        </>
    )
}

export default HomeProject