import React from "react";
import { motion } from "framer-motion";
import teaser from "../../assets/videos/teaser.mp4";
import Navbar from "../Navbar/Navbar";
import mainChar from "../../assets/images/dddd.png";
import "./header.css";
import BubleChat from "../Bubble/BubleChat";
import ScrollAction from "../ScrollAction/ScrollAction";

function Header() {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: "-200%" }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 1,
      }}
    >
      <Navbar />
      <BubleChat
        messageContent="&#8220;This is my story at BAA&#8220;"
        duration="6000"
        animateDuration="4"
      />
      <ScrollAction />
      <motion.p
        className="header-sub-title"
        initial={{ x: "-200%" }}
        animate={{ x: 0, transition: { duration: 3.8 }, rotate: 720 }}
      >
        Hi,
      </motion.p>
      <motion.h1
        className="header-title"
        initial={{ x: "-200%" }}
        animate={{ x: 0, transition: { duration: 3.8 } }}
      >
        I'm Mei<span>ke Rutten</span>
      </motion.h1>
      <header>
        <motion.div
          className="left-side"
          animate={{
            scale: [1, 1.05],
            transition: {
              yoyo: Infinity,
              duration: 2,
            },
          }}
        >
          <motion.img
            src={mainChar}
            alt="header-main-char-img"
            className="main-char-header"
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                duration: 3.5,
              },
            }}
          ></motion.img>
        </motion.div>
        <motion.div
          className="video-side"
          initial={{ x: "200%" }}
          animate={{ x: 0, transition: { duration: 3.8 } }}
        >
          <video autoPlay controls muted loop className="teaser">
            <source src={teaser} type="video/mp4" />
          </video>
        </motion.div>
      </header>
    </motion.div>
  );
}

export default Header;
