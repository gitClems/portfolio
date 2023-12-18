import "../css/skills.css"

function Skills(props) {

    const styles = {
        content: {
            // flex: 1,
            // backgroundColor: "blue",
            // paddingRight: 20,
        },
    };

    return (
        <>
            <div className="container" style={styles.content}>
                <span className="skill-title" style={styles.title}> {props.title}</span>
                <p className="skill-descript" style={styles.description}>{props.description}</p>
            </div>
        </>
    )

}

export default Skills
