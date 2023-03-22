import background from "../../assets/bgs/base.jpg"
import banner from "../../assets/bgs/banner.png"

export const homeStyle = () => {
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
        background: "blue",
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
      },

      tabTitle: {
        color: "#EBA731",
      },
  
      body: {
        height: "calc(100% - 50px)",
        //width: "80%",
        width: "100%",
        position: "fixed",
        top: "250px",
        backgroundColor: "#52646E",
        alignSelf: "center",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
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
        justifyContent: "center"
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
  