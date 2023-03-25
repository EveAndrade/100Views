import banner from "../assets/bgs/banner.png";

export const appStyle = () => {
    return {
      root: {
        display:"flex",
        flexDirection: "column",
      },
  
      header: {
        height: "200px",
        width: "100%",
        textAlign: "center",
        color: "white",
        position: "fixed",
        backgroundColor: "#611913",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
      },
  
      menu: {
        height: "50px",
        width: "100%",
        position: "fixed",
        top: "200px",
        backgroundColor: "#611913",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        boxShadow: "0px 0px 5px 0px black"
      },

      tabTitle: {
        color: "#EBA731",
      },
  
      body: {
        height: "calc(100% - 300px)",
        width: "100%",
        position: "fixed",
        top: "250px",
        backgroundColor: "#611913",
        backgroundSize: "cover",
        overflowY: "auto"
      },
  
      footer: {
        height: "50px",
        width: "100%",
        position: "fixed",
        bottom: "0px",
        backgroundColor: "#611913",
        display: "flex",
        flexDirection: "row",
        color: "#EBA731",
        justifyContent: "center",
        boxShadow: "0px 0px 5px 0px black"
      },

      contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: "12px",
        marginLeft: "12px",
      },     
    }
  };
  