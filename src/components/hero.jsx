import "../css/hero.css"
function Hero(props) {

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
            fontFamily: "var(--font-family)"
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
                    <span className="cl-hi" >Salut,</span>
                    <span className="cl-name" style={{ color: "white" }}>{props.title}</span>
                    <span className="cl-what" >{props.description}</span>
                </div>
                <div style={styles.profile} className="profile">
                    <img src={props.profile} alt="Mon profile" width={350} />
                </div>
            </div>
        </>
    )

}

export default Hero