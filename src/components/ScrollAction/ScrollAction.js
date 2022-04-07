import React from "react";
import { motion } from "framer-motion";
import "./scroll.css";

function ScrollAction() {
  return (
    <motion.div
      className="circle-container"
      animate={{
        scale: [1, 1.2, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
        },
      }}
    >
      <p>&#8595;</p>
    </motion.div>
  );
}

export default ScrollAction;
