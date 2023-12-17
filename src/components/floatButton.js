function FloatButton(propos) {

    const styles = {
        div_floatbutton: {
            height: propos.size,
            width: propos.size,
            backgroundColor: propos.backgroundColor,
            borderRadius : propos.borderRadius
        }
    };
    return (
        <div className="div-floatbutton" style={styles.div_floatbutton}></div>
    )
}


export default FloatButton;