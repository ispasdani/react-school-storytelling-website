import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./study.css";
import homeStudy from "../../assets/videos/homeStudy.mp4";
import studyHomeSvg from "../../assets/images/SVG/studyOneSvg.svg";

const titleSectionVariants = {
  hidden: {
    x: "-200%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

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

function StudyPlaces() {
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
    <section>
      <div className="study-places-section" id="4">
        <motion.div
          className="title-study"
          variants={titleSectionVariants}
          initial="hidden"
          animate={animation}
        >
          <h1>
            <span>My</span> study places..
          </h1>
        </motion.div>

        <div className="home-study-container" ref={ref}>
          <div className="home-study-text">
            <motion.h1
              variants={titlesVariants}
              initial="hidden"
              animate={animation}
            >
              Home Study
            </motion.h1>
            <motion.p
              variants={textFromLeftVariants}
              initial="hidden"
              animate={animation}
            >
              Every study program is built different, some students have a lot
              of self-study days and others have to go to school every day. For
              me, I only have about 2 school days and the rest is self-study.
              This is not free time, because you have to work on projects and
              study.
            </motion.p>
            <motion.p
              variants={textFromLeftVariantsFast}
              initial="hidden"
              animate={animation}
            >
              Sometimes I prefer to study at my own place, but after a while
              this can be boring and my concentration is getting bad. To prepare
              you for this in advance I will tell you all about the best places
              to study in Aarhus!
            </motion.p>

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
            className="home-study-video-container"
            variants={videoFromRightVariants}
            initial="hidden"
            animate={animation}
          >
            <video autoPlay muted loop className="home-study-video">
              <source src={homeStudy} type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default StudyPlaces;
