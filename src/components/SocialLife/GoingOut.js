import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./goingOut.css";
import beerDoors from "../../assets/videos/beerDoors.mp4";
import goingOutVideo from "../../assets/videos/partying.mp4";
import haveADrink from "../../assets/images/stuff/partyingBla.jpg";
import PartySvg from "../Svgs/PartySvg";

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

function GoingOut() {
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
    <div className="going-out-section" ref={ref}>
      <div className="going-row">
        <div className="going-content-side">
          <video autoPlay muted loop className="video-going-out">
            <source src={goingOutVideo} type="video/mp4" />
          </video>
          <img
            src={haveADrink}
            alt="going-out-photos"
            className="going-out-photos"
          />
          <video autoPlay muted loop className="video-going-out">
            <source src={beerDoors} type="video/mp4" />
          </video>
        </div>
        <div className="going-out-text-side">
          <motion.h1
            variants={titlesVariants}
            initial="hidden"
            animate={animation}
          >
            Going Out
          </motion.h1>
          <motion.p
            variants={textFromRightVariantsFast}
            initial="hidden"
            animate={animation}
          >
            Besides that I love to eat and hangout with my friends, I also
            really like going out with them and also experience Aarhus outside
            of the dorms! Well, this is not always exactly the case. The dorm
            where I live has a really cool bar where we like to go to.
          </motion.p>
          <motion.p
            variants={textFromRightVariantsSlow}
            initial="hidden"
            animate={animation}
          >
            This bar is from students for students. Everyone is so nice there
            and it is the perfect place to get to meet new people who also live
            in the dorms! The drinks are quite cheap here compared to other
            places, it is easy to get to (I only have to cross the parking) and
            it is so easy to request your favorite song!
          </motion.p>
          <PartySvg />
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

export default GoingOut;
