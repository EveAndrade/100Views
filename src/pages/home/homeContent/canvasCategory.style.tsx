import background from "../../assets/bgs/base.jpg"
import banner from "../../assets/bgs/banner.png"

export const categoryStyle = () => {
    return {
        categoryDisplay: {
            display:"flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "green"
        },

        centralDisplay: {
            display:"flex",
            flexDirection: "column",
            width: "70%",
            height: "100%",
            backgroundColor: "blue",
        },

        textDisplay: {
            height: "20%",
            backgroundColor: "#611913",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },

        infoPair: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        },

        paintingsDisplay: {
            display:"flex",
            flexDirection: "row",
            backgroundColor: "red",
            height: "80%",
        },
    }
  };
  