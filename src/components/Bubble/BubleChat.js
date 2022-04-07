import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./buble.css";

function BubleChat({ messageContent, duration, animateDuration }) {
  const [showComponent, setShowComponent] = useState(false);

  const bubbleVariants = {
    visible: {
      scale: 1,
      opacity: 1,
    },
    hidden: {
      scale: 0,
      opacity: 0,
      transition: { duration: animateDuration },
    },
  };

  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setInterval(() => {
        setShowComponent(true);
      }, duration);
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
      setShowComponent(false);
    }
  }, [showComponent, inView]);

  return (
    <motion.div
      ref={ref}
      className="bubble-message"
      variants={bubbleVariants}
      initial="hidden"
      animate={animation}
    >
      {showComponent ? (
        <div className="show-message">
          <p>{messageContent}</p>
        </div>
      ) : (
        <div className="loading-dots">
          <div className="dot-elastic"></div>
        </div>
      )}
    </motion.div>
  );
}

export default BubleChat;

{
  /* <div className="loading-dots">
        <div className="dot-elastic"></div>
      </div> 
     
 

<div className="show-message">
        <p>"This is my story at BAAA"</p>
      </div> */
}
