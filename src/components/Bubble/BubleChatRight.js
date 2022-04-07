import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./bubleRight.css";

function BubleChatRight({ messageContent, duration, animateDuration }) {
  const [showMessageRight, setShowMessageRight] = useState(false);
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  const bubbleRightVariants = {
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: animateDuration },
    },
    hidden: {
      scale: 0,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      setInterval(() => {
        setShowMessageRight(true);
      }, duration);
      animation.start("visible");
    }
    if (!inView) {
      setShowMessageRight(false);
      animation.start("hidden");
    }
  }, [showMessageRight, inView]);
  return (
    <motion.div
      ref={ref}
      className="buble-message-right"
      variants={bubbleRightVariants}
      initial="hidden"
      animate={animation}
    >
      {showMessageRight ? (
        <div className="show-message-right">
          <p>{messageContent}</p>
        </div>
      ) : (
        <div className="loading-dots-right">
          <div className="dot-elastic"></div>
        </div>
      )}
    </motion.div>
  );
}

export default BubleChatRight;
