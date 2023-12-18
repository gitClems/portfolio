import "../css/hero.css"
function Hero() {

    const styles = {
        content: {
            with: "100%",
            display: "flex",
            // paddingLeft: 50,
            // paddingRight: 50,
            marginTop: 20,
        },
        accroche: {
            display: "flex",
            flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "Roboto Condensed"
        },

        profile: {
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
        }
    };

    return (
        <>
            <div className="content" style={styles.content}>
                <div style={styles.accroche} className="accroche">
                    <span className="cl-hi" style={{ color: "rgb(157, 179, 187)" }}>Salut,</span>
                    <span className="cl-name" style={{ color: "white" }}>Je m'appelle BAMOGO Clément</span>
                    <span className="cl-what" style={{ color: "rgb(157, 179, 187)" }}>Je suis élève ingénieur en Supply Chain Management basé au Maroc, à Rabat</span>
                </div>
                <div style={styles.profile} className="profile">
                    <img src={require("../assets/profile/profile-1.png")} alt="Mon profile" width={350} />
                </div>
            </div>
        </>
    )

}

export default Hero