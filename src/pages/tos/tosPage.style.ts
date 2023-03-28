import background from "/bgs/tosbg.png";

export const tosStyle = () => {
    return {
        centralBox: {
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
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
            backgroundColor: "#611913",
        },

        question: {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "auto",
            padding: "8px",
            backgroundColor: "#EBA731",
        },

        questionText: {
            fontSize: {
                xs: "0.9rem",
                md: "1rem",
                xl: "1.1rem",
                giga: "1.2rem",
                gamer: "1.3rem",
                wider: "1.4rem"
            },
        },

        reasons: {
            height: "auto",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            margin: "12px",
            alignItems: "flex-start",
        },

        reasonText: {
            fontSize: {
                xs: "0.8rem",
                md: "0.9rem",
                xl: "1rem",
                giga: "1.1rem",
                gamer: "1.2rem",
                wider: "1.3rem"
            },
        },

        reasonTextPadded: {
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
  