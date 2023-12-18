import "../css/skills.css"

function Skills(props) {

    return (
        <>
            <div className="container">
                <span className="skill-title"> {props.title}</span>
                <p className="skill-descript" >{props.description}</p>
            </div>
        </>
    )

}

export default Skills
