export const homeStyle = () => {
    return {
      centralDisplay: {
        width: "70%",
        height: "100%",
        backgroundColor: "611913",
    },

    textDisplay: {
        backgroundColor: "#611913",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
        padding: "12px"
    },

    categoryText: {
        color: "white",
        textAlign: "center",
        fontSize: {
            xs: "0.8rem",
            md: "0.9rem",
            xl: "1rem",
            giga: "1.1rem",
            gamer: "1.2rem",
            wider: "1.3rem"
        },
    },

    infoPair: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    infoType: {
        color: "white",
        fontSize: {
            xs: "0.8rem",
            md: "0.9rem",
            xl: "1rem",
            giga: "1.1rem",
            gamer: "1.2rem",
            wider: "1.3rem"
        },
    },

    infoValue: {
        color:"#EBA731",
        paddingTop:"2px",
        paddingLeft:"8px",
        fontSize: {
            xs: "0.7rem",
            md: "0.8rem",
            xl: "0.9rem",
            giga: "1rem",
            gamer: "1.1rem",
            wider: "1.2rem"
        },
    },

    paintingsDisplay: {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#380606",
        height: "auto"
    },

    carouselDisplay: {        
        width: window.innerWidth > window.innerHeight ?
            "100vh" : "calc(100vw*0.7)",
        height: window.innerWidth > window.innerHeight ?
            "calc(100vh + 48px)" : "calc(100vw*0.7 + 48px)",
        overflow: "hidden",
    },
    
  }
};
  