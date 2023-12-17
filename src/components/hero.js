import "../css/hero.css"
function Hero(propos) {

    const styles = {
        content: {
            with: "100%",
            backgroundColor : "blue",
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
            <div style={styles.accroche}>
                <div style={{ fontSize: 50, color: "rgb(198, 198, 198)", maxWidth : 500}}>Salut,</div>
                <div style={{ fontSize: 50, color: "white", maxWidth : 700}}>Je m'appelle BAMOGO Clément</div>
                <div style={{ fontSize: 30, color: "rgb(198, 198, 198)", maxWidth : 600}}>Je suis un élève ingénieur en Supply Chain Management basé au Maroc, à Rabat</div>
            </div>
            <div style={styles.profile} className="profile">
                <img src={require("../assets/profile/profile-1.png")} alt="Mon profile" width={400} />
            </div>
        </div>
    )

}

export default Hero