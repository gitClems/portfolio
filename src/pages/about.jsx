function About(propos) {

    const styles = {
        content: {
            with: "100%",
            display: "flex",
            // backgroundImage: `url("../assets/background/bg-footer-dark-800w.jpg")`
        },
        accroche: {
            display: "flex",
            flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 50,
            fontFamily: "Roboto Condensed"
        },
        profile: {
            flex: 1,
            marginTop : 150,
        }
    };

    return (
        <div className="content" style={styles.content}>
            <h1>About me</h1>
        </div>
    )

}

export default About