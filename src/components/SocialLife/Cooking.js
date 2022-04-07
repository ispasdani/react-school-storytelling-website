import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./cooking.css";
// import cookingVideo from "../../assets/videos/cooking.mp4";
import cookingIngredients from "../../assets/images/stuff/cookingBurger.jpg";
import cookingHand from "../../assets/images/cookingHand.jpg";
import CookingSvg from "../Svgs/CookingSvg";

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

function Cooking() {
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
    <div className="cooking-night-section" ref={ref}>
      <div className="cooking-row">
        <div className="cooking-content-side">
          {/* <video autoPlay muted loop className="video-cooking">
            <source src={cookingVideo} type="video/mp4" />
          </video> */}
          <iframe
            className="video-cooking"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gisAjtw3WEY?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img
            src={cookingHand}
            alt="cooking-photos"
            className="cooking-photos"
          />
          <img
            src={cookingIngredients}
            alt="cooking-photos"
            className="cooking-photos"
          />
        </div>
        <div className="cooking-text-side">
          <motion.h1
            variants={titlesVariants}
            initial="hidden"
            animate={animation}
          >
            Cooking night
          </motion.h1>
          <motion.p
            variants={textFromRightVariantsFast}
            initial="hidden"
            animate={animation}
          >
            After doing the groceries we also need to cook the food of course.
            We try to eat as varied as possible and try to cook something else
            every weekday. For cooking it's kind of the same as doing the
            groceries, we try to divide the cooking and every night someone else
            does the main cooking.
          </motion.p>
          <motion.p
            variants={textFromRightVariantsSlow}
            initial="hidden"
            animate={animation}
          >
            But we all help with cutting the vegetables and stuff like that. It
            is also really fun to cook since my friends and I are from different
            nationalities. I have already learned many new recipes that I really
            liked. They say good food is a good mood and this is really true!
          </motion.p>

          <CookingSvg />
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

export default Cooking;
