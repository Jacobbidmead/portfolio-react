import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import { useAnimation } from "framer-motion";

const Scroll = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 0.5,
        transition: {
          type: "tween",
          duration: "1s",
        },
      });
    }

    if (!inView) {
      animation.start({
        scale: 1,
      });
    }

    console.log("use effect hook, inView = ", inView);
  }, [inView]);
  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
        ref={ref}
      >
        {" "}
        <motion.div animate={animation}>
          <img
            style={{
              width: "90%",
              zIndex: "5",
              borderRadius: "5px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
            className="airbnb-img"
            src="./images/project-img/abnb4.png"
            alt=""
          />
        </motion.div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: " 1fr 1fr",
          margin: "200px 70px 100px 70px",
        }}
      >
        <div>
          {" "}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <img
              style={{
                width: "100%",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="airbnb-img"
              src="./images/project-img/abnb1.png"
              alt=""
            />
          </Tilt>
        </div>
        <div
          style={{
            color: "white",
            marginLeft: "40%",
            textAlign: "right",
            marginBottom: "80px",
            width: "50%",
            fontSize: "25px",
          }}
        >
          Once a house is selected user is taken to the 'house' page, where they
          can interact with the house gallery.
          <p></p>
        </div>

        <div
          style={{
            color: "white",
            marginTop: "40px",
            width: "50%",
            fontSize: "25px",
          }}
        >
          Users are able to 'Request booking' and leave reviews after booking is
          complete.
        </div>
        <div style={{ marginTop: "50px" }}>
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <img
              style={{
                width: "100%",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="airbnb-img"
              src="./images/project-img/abnb2.png"
              alt=""
            />
          </Tilt>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        {" "}
        <img
          style={{
            width: "90%",
            borderRadius: "5px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          className="airbnb-img"
          src="./images/project-img/abnb3.png"
          alt=""
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: " 1fr 1fr",
          margin: "200px 70px 100px 70px",
        }}
      >
        <div>
          {" "}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <img
              style={{
                width: "100%",
                borderRadius: "5px",
                marginBottom: "80px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="airbnb-img"
              src="./images/project-img/abnb6.png"
              alt=""
            />{" "}
          </Tilt>
        </div>
        <div
          style={{
            color: "white",
            textAlign: "right",
            width: "50%",
            marginLeft: "40%",
            fontSize: "25px",
          }}
        >
          Users can log in and access thier 'Profile' page, where they can
          update their data, created a house to be listed and edit a currently
          listed house.
        </div>

        <div style={{ color: "white", width: "50%", fontSize: "30px" }}>
          List a house form that creates house in the database and populates
          data into 'houses' and 'profile' pages.
        </div>
        <div style={{ marginTop: "50px" }}>
          {" "}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
            <img
              style={{
                width: "100%",
                borderRadius: "5px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
              className="airbnb-img"
              src="./images/project-img/abnb7.png"
              alt=""
            />
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Scroll;
