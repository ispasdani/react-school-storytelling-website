import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./eating.css";
// import eatingVideo from "../../assets/videos/eating.mp4";
import eatingOne from "../../assets/images/eatingTogether.jpg";
import eatingTwo from "../../assets/images/eatingUnknown.jpg";
import FlyingPizza from "../Svgs/FlyingPizza";

const titlesVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [1, 1.1, 1],
    opacity: 1,
    rotate: [0, 10, 0, -10, 0],
    transition: {
      duration: 1.5,
    },
  },
};

const textFromRightVariantsFast = {
  hidden: {
    x: "200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

const textFromRightVariantsSlow = {
  hidden: {
    x: "200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.6,
    },
  },
};

const navFromBottomVariants = {
  hidden: {
    y: "200%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

function EatingTogether() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView]);

  return (
    <div className="eating-together-section" ref={ref}>
      <div className="eating-row">
        <div className="eating-content-side">
          {/* <video autoPlay muted loop className="video-eating">
            <source src={eatingVideo} type="video/mp4" />
          </video> */}
          <iframe
            width="560"
            className="video-eating"
            height="315"
            src="https://www.youtube.com/embed/28WgaawhMbI?autoplay=1mute=1loop=1controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img src={eatingOne} alt="eating-photos" className="eating-photos" />
          <img src={eatingTwo} alt="eating-photos" className="eating-photos" />
        </div>
        <div className="eating-text-side">
          <motion.h1
            variants={titlesVariants}
            initial="hidden"
            animate={animation}
          >
            Eating together
          </motion.h1>
          <motion.p
            variants={textFromRightVariantsFast}
            initial="hidden"
            animate={animation}
          >
            This is not the same for everyone, but I love eating with my friends
            every night! Some people prefer to eat alone to have some alone
            time, but for me eating with my friends is a really enjoyable and
            relaxing time. We talk about our days and just have some fun. It
            takes my mind of school and it helps me to not feel lonely.
          </motion.p>
          <motion.p
            variants={textFromRightVariantsSlow}
            initial="hidden"
            animate={animation}
          >
            I of course enjoy the company of my friends, but it also feels a bit
            like home. I used to always eat with my parents, so eating with my
            friends makes me feel like they are my second family here who I can
            trust.
          </motion.p>
          <FlyingPizza />
          <motion.div
            className="body-navigation"
            variants={navFromBottomVariants}
            initial="hidden"
            animate={animation}
          >
            <div className="btn-body-nav not-selected">
              <motion.p
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity },
                }}
              >
                <a href="#1">How I?</a>
              </motion.p>
            </div>
            <div className="btn-body-nav not-selected">
              <motion.p
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity },
                }}
              >
                <a href="#2">life in dorm</a>
              </motion.p>
            </div>
            <div className="btn-body-nav not-selected">
              <motion.p
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity },
                }}
              >
                <a href="#4">study places</a>
              </motion.p>
            </div>
            <div className="btn-body-nav selected-section">
              <motion.p
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity },
                }}
              >
                <a href="#3">social life</a>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default EatingTogether;
