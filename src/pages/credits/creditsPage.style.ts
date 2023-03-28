import background from "/bgs/credbg.png";

export const creditsStyle = () => {
    return {
        centralBox: {
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            overflowY: "auto"
        },

        centralDisplay: {
            display:"flex",
            flexDirection: "column",
            width: "70%",
            height: "100%",
        },

        display: {
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            backgroundColor: "#611913",
        },

        question: {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "auto",
            width: "30%",
            marginTop: "12px"
        },

        questionText: {
            fontSize: {
                xs: "0.9rem",
                md: "1rem",
                xl: "1.1rem",
                giga: "1.2rem",
                gamer: "1.3rem",
                wider: "1.4rem"
            }
        },

        reasons: {
            height: "auto",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            margin: "12px",
        },

        reasonsText: {
            fontSize: {
                xs: "0.8rem",
                md: "0.9rem",
                xl: "1rem",
                giga: "1.1rem",
                gamer: "1.2rem",
                wider: "1.3rem"
            },
            paddingLeft:"8px",
            marginBottom:"8px"
        },

        infoPair: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },
    }
  };
  