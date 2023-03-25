import background from "../../assets/bgs/detbg.png";

export const detailsStyle = () => {
    return {
        centralBox: {
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover"
        },

        centralDisplay: {
            display:"flex",
            flexDirection: "row",
            width: "70%",
            height: "100%",
            backgroundColor: "#611913",
        },

        introDisplay: {
            height: "100%",
            width: "25%",
            backgroundColor: "#611913",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

        greetings: {
            textAlign: "center",
            color: "#611913",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "20%",
            width: "100%",
        },

        reasons: {
            height: "80%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

        infoPair: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },

        

        descriptionDisplay: {
            height: "100%",
            width: "60%",
            backgroundColor: "#611913",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

        mainText: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "80%",
            width: "80%",
        },

        yesDisplay: {
            height: "100%",
            width: "25%",
            backgroundColor: "#EBA731",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

        noDisplay: {
            height: "100%",
            width: "25%",
            backgroundColor: "#611913",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

        convoDisplay: {
            height: "100%",
            width: "25%",
            backgroundColor: "#EBA731",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

    }
  };
  