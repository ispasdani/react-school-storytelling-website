import React from "react";
import { motion } from "framer-motion";
import "./loader.css";
import image1 from "../../assets/images/loader/loader1.jpg";
import image2 from "../../assets/images/loader/loader2.jpg";
import image3 from "../../assets/images/loader/loader3.jpg";
import image4 from "../../assets/images/loader/loader4.jpg";
import image5 from "../../assets/images/loader/loader5.jpg";

const container = {
  show: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function Loader({ setLoading }) {
  return (
    <motion.div
      className="loader"
      variants={container}
      animate="show"
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.h1
        className="loader-title"
        initial={{ x: "-100", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        exit={{
          y: "200%",
          transition: {
            duration: 1,
          },
        }}
      >
        a story with happy ending.
      </motion.h1>
      <motion.img
        className="loader-img individual-one"
        src={image1}
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
          rotate: "20deg",
        }}
        exit={{
          y: -100,
          opacity: 0,
          transition: {
            duration: 0.6,
          },
        }}
      ></motion.img>
      <motion.img
        className="loader-img individual-two"
        src={image2}
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1.2 },
          rotate: "-15deg",
        }}
        exit={{
          x: -100,
          opacity: 0,
          transition: {
            duration: 0.6,
          },
        }}
      ></motion.img>
      <motion.img
        className="loader-img individual-three"
        src={image3}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.9,
          },
          rotate: [360, 5],
        }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.4 } }}
      ></motion.img>
      <motion.img
        className="loader-img individual-four"
        src={image4}
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1.1 },
          rotate: "-17deg",
        }}
        exit={{
          x: 100,
          opacity: 0,
          transition: {
            duration: 0.6,
          },
        }}
      ></motion.img>
      <motion.img
        className="loader-img individual-five"
        src={image5}
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1.1 },
          rotate: "-17deg",
        }}
        exit={{
          y: -100,
          opacity: 0,
          transition: {
            duration: 0.6,
          },
        }}
      ></motion.img>
    </motion.div>
  );
}

export default Loader;
