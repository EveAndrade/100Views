import background from "../../assets/bgs/tosbg.png";

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
            overflowY: "auto"
        },

        centralDisplay: {
            display:"flex",
            flexDirection: "column",
            width: "70%",
            height: "100%",
            backgroundColor: "#611913",
        },
    }
  };
  