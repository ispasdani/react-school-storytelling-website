import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import academyStudy from "../../assets/videos/school.mp4";
import "./academy.css";
import studyAcademySvg from "../../assets/images/SVG/studyAcademy.svg";

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

const textFromLeftVariants = {
  hidden: {
    x: "-200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};

const textFromLeftVariantsFast = {
  hidden: {
    x: "-200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
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

const videoFromRightVariants = {
  hidden: {
    x: "200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  },
};

function Academy() {
  const [ref3, inView3] = useInView({ threshold: 0.2 });
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView3) {
      animation3.start("visible");
    }
    if (!inView3) {
      animation3.start("hidden");
    }
  }, [inView3]);

  return (
    <div className="academy-container" ref={ref3}>
      <div className="academy-study-container">
        <div className="academy-study-text">
          <motion.h1
            variants={titlesVariants}
            initial="hidden"
            animate={animation3}
          >
            Study at the Academy
          </motion.h1>
          <motion.p
            variants={textFromLeftVariants}
            initial="hidden"
            animate={animation3}
          >
            First of all our school has some pretty good study places where you
            can meet up with your friends, project group or to study alone.
            There are private spaces where you can be closed from other
            students, but there are also common area's.
          </motion.p>
          <motion.p
            variants={textFromLeftVariantsFast}
            initial="hidden"
            animate={animation3}
          >
            And one more cool thing about this, is that you have 24/7 acces to
            everything inside the campus which is amazing!
          </motion.p>
          <motion.div
            className="body-navigation"
            variants={navFromBottomVariants}
            initial="hidden"
            animate={animation3}
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
            <div className="btn-body-nav selected-section">
              <motion.p
                whileHover={{
                  scale: [1, 1.2, 1],
                  transition: { repeat: Infinity },
                }}
              >
                <a href="#4">study places</a>
              </motion.p>
            </div>
            <div className="btn-body-nav not-selected">
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
        <motion.div
          className="academy-study-video-container"
          variants={videoFromRightVariants}
          initial="hidden"
          animate={animation3}
        >
          <video autoPlay muted loop className="home-study-video">
            <source src={academyStudy} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
}

export default Academy;
