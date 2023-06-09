import banner from "/bgs/banner.png";

export const appStyle = () => {
    return {
      root: {
        display:"grid",
        width: "100%",
        height: "100%",
      },
  
      header: {
        textAlign: "center",
        color: "white",
        backgroundColor: "#611913",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
      },

      headerText: {
        fontSize: {
          xs: "1.2rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
          giga: "3.5rem",
          gamer: "4rem",
          wider: "5rem"
        },
      },

      tabsList: {
        height: "48px",
        backgroundColor: "#611913",
        zIndex: "1",
        boxShadow: "0px 0px 5px 0px black",
      },

      tabTitle: {
        color: "#EBA731",
        fontSize: {
          xs: "0.7rem",
          md: "0.8rem",
          xl: "0.9rem",
          giga: "1rem",
          gamer: "1.1rem",
          wider: "1.2rem"
        },
        padding: "12px",
      },
  
      body: {
        width: "100%",
        backgroundColor: "#611913",
        backgroundSize: "cover",
      },
  
      footer: {
        height: "48px",
        width: "100%",
        backgroundColor: "#611913",
        color: "#EBA731",
        boxShadow: "0px 0px 5px 0px black"
      },

      innerFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "auto"
      },

      footerDivider: {
        borderRightWidth:"2px",
        bgcolor: "#eba731",
        height: "48px"
      },

      contact: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "6px",
        marginBottom: "6px",
        marginRight: "6px",
        marginLeft: "6px",
      },     

      contactText: {
        marginLeft: "-6px",
        fontSize: {
          xs: "0.5rem",
          md: "0.8rem",
          xl: "0.9rem",
          giga: "1rem",
          gamer: "1.1rem",
          wider: "1.2rem"
        },
      },

      scrollTop: {
        position: "fixed",
        bottom: "calc(100vh/2)",
        right: {
          xs: "12px",
          sm: "18px",
          md: "24px"
        },
        zIndex: 1
      },

      scrollBottom: {
        position: "fixed",
        bottom: {
          xs: "calc(100vh/2 + 56px)",
          sm: "calc(100vh/2 + 66px)",
          md: "calc(100vh/2 + 76px)",
          lg: "calc(100vh/2 + 86px)",
        },
        right: {
          xs: "12px",
          sm: "18px",
          md: "24px"
        },
        zIndex: 1
      },

      autoScrollFab: {
        height: {
          xs: "32px",
          sm: "42px",
          md: "52px",
          lg: "62px",
        },
        width: {
          xs: "32px",
          sm: "42px",
          md: "52px",
          lg: "62px",
        },
        backgroundColor: "#611913",
        "&:hover": {
          backgroundColor: "#EBA731",
        }
      }
    }
  };
  