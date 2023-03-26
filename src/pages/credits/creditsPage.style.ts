import background from "../../assets/bgs/credbg.png";

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

        reasons: {
            height: "auto",
            width: "70%",
            display: "flex",
            flexDirection: "column",
            margin: "12px",
        },

        infoPair: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },
    }
  };
  