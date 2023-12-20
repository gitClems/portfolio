import "../css/works.css"
function Work(propos) {

    const styles = {
        content: {
            with: "100%",
            display: "flex",
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
        <div className="works" style={styles.content}>
            <h1>My work shop is here</h1>
        </div>
    )

}

export default Work