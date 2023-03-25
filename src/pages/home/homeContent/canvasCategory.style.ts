export const categoryStyle = () => {
    return {
        centralDisplay: {
            display:"flex",
            flexDirection: "column",
            width: "70%",
            height: "100%",
            backgroundColor: "611913",
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
            justifyContent: "center",
            flexWrap: "wrap",
            alignContent: "center",
            backgroundColor: "#380606",
            height: "calc(80% - 4px)",
        },

        carouselDisplay: {
            width: "500px",
            height: "500px",
            overflow: "hidden",
        },
    }
  };
  