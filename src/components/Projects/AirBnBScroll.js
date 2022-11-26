import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useAnimation } from "framer-motion";
import styles from "../../styles/Projects.css";

const Scroll = () => {
  const myRef = useRef();
  const [onVisible, setOnVisible] = useState();
  console.log("onVisible", onVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setOnVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  const animate = useAnimation();
  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "300px",
        }}
        ref={myRef}
      >
        {" "}
        <img
          style={{
            width: "90%",
            borderRadius: "5px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          className={`${styles.airbnb} ${onVisible ? styles.grow : " "}`}
          src="./images/project-img/abnb4.png"
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
                cursor: "pointer",
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
          update their data, create a house to be listed and edit a currently
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
                cursor: "pointer",
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
