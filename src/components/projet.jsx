function DisplayProject(propos) {
    return (
        <div>
            <span>{propos.title}</span>
            <img className="project-image-home" src={propos.image} alt={propos.title}></img>
            <div>{propos.description}</div>
        </div>
    )
}

export default DisplayProject