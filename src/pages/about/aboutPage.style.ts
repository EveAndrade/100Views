import background from "/bgs/abobg.png";

export const aboutStyle = () => {
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
            height: "100vh",
            backgroundColor: "#611913",
        },

        profileDisplay: {
            height: "auto",
            width: "100%",
            backgroundColor: "#EBA731",
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

        picture: {
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center",
            padding: "8px"
        },

        greetings: {
            textAlign: "center",
            color: "#611913",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
        },

        greetingsText: {
            fontSize: {
                xs: "0.9rem",
                md: "1rem",
                xl: "1.1rem",
                giga: "1.2rem",
                gamer: "1.3rem",
                wider: "1.4rem"
            },
            margin: "8px"
        },

        descriptionDisplay: {
            height: "auto",
            backgroundColor: "#611913",
            display: "flex",
            flexDirection: "column",
            padding: "16px 24px 16px 24px"
        },

        sillyText: {
            fontSize: {
                xs: "0.8rem",
                md: "0.9rem",
                xl: "1rem",
                giga: "1.1rem",
                gamer: "1.2rem",
                wider: "1.3rem"
            },
            marginBottom:"8px"
        },

        sillyPS: {
            fontSize: {
                xs: "0.7rem",
                md: "0.8rem",
                xl: "0.9rem",
                giga: "1rem",
                gamer: "1.1rem",
                wider: "1.2rem"
            },
            marginBottom:"8px"
        },

        mainText: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "80%",
            width: "80%",
        }

    }
};
  