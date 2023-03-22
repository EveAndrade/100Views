export const baseStyle = () => {
  return {
    root: {
      display:"flex",
      flexDirection: "column",
    },

    header: {
      marginTop: "-100px",
    },

    headerTitle: {
      color: "#EBA731",
      //color: "white",
      alignSelf: "center",
      position: "fixed",
      top: "72px"
    },

    menu: {
      height: "50px",
      width: "100%",
      position: "fixed",
      top: "200px",
      backgroundColor: "yellow",
    },

    body: {
      height: "calc(100% - 50px)",
      //width: "80%",
      width: "100%",
      position: "fixed",
      top: "250px",
      backgroundColor: "#611913",
      alignSelf: "center",
    },

    footer: {
      height: "50px",
      width: "100%",
      position: "fixed",
      bottom: "0px",
      backgroundColor: "yellow",
    },
  }
};
