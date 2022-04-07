import React from "react";
import { motion } from "framer-motion";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 3,
            delay: 1,
          },
        }}
        whileHover={{
          scale: [1, 1.1],
          transition: {
            repeat: Infinity,
            duration: 0.5,
          },
        }}
      >
        Meike.
      </motion.h1>
      <motion.div
        className="nav-btns"
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 3,
            delay: 1,
          },
        }}
      >
        <motion.p
          whileHover={{
            scale: [1, 1.1, 1],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
        >
          <a href="#1">how I ended up here?</a>
        </motion.p>
        <motion.p
          whileHover={{
            scale: [1, 1.1, 1],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
        >
          <a href="#2">life in dorm</a>
        </motion.p>
        <motion.p
          whileHover={{
            scale: [1, 1.1, 1],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
        >
          <a href="#4">places to study</a>
        </motion.p>
        <motion.p
          whileHover={{
            scale: [1, 1.1, 1],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
        >
          <a href="#3">social life</a>
        </motion.p>
      </motion.div>
    </nav>
  );
}

export default Navbar;
