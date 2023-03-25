import background from "../../assets/bgs/base.jpg";

export const aboutStyle = () => {
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

        profileDisplay: {
            height: "100%",
            width: "40%",
            backgroundColor: "#EBA731",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center"
        },

        picture: {
            height: "60%",
            width: "100%",
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
        }

    }
  };
  