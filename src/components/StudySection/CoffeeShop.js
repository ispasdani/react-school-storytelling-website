import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import coffeeStudy from "../../assets/videos/coffeeshop.mp4";
import "./coffeeShop.css";

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

const textFromRightVariants = {
  hidden: {
    x: "200%",
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

const textFromRightVariantsFast = {
  hidden: {
    x: "200%",
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

const videoFromLeftVariants = {
  hidden: {
    x: "-200%",
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

function CoffeeShop() {
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView2) {
      animation2.start("visible");
    }
    if (!inView2) {
      animation2.start("hidden");
    }
  }, [inView2]);

  return (
    <section className="section-coffee">
      <div className="coffee-section-container" ref={ref2}>
        <div className="coffee-study-container">
          <motion.div
            className="coffee-study-video-container"
            variants={videoFromLeftVariants}
            initial="hidden"
            animate={animation2}
          >
            <video autoPlay muted loop className="home-study-video">
              <source src={coffeeStudy} type="video/mp4" />
            </video>
          </motion.div>
          <div className="coffee-study-text">
            <motion.h1
              variants={titlesVariants}
              initial="hidden"
              animate={animation2}
            >
              Coffee Shops
            </motion.h1>
            <motion.p
              variants={textFromRightVariants}
              initial="hidden"
              animate={animation2}
            >
              Then you also have the Lynfabrikken, it is situated in a former
              factory building, tucked away in a charming backyard in the middle
              of Aarhus. it is a coffee shop with a nice and quiet atmosphere
              where everyone is really friendly. And also important: the coffee
              and food is really good here!
            </motion.p>
            <motion.p
              variants={textFromRightVariantsFast}
              initial="hidden"
              animate={animation2}
            >
              In Aarhus there are also multiple Espresso houses and Starbucks
              found, these are also quite calm places where you can sit and work
              on school. There is of course good coffee, but it is a bit more
              pricy.
            </motion.p>
            <motion.div
              className="body-navigation"
              variants={navFromBottomVariants}
              initial="hidden"
              animate={animation2}
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
        </div>
      </div>
    </section>
  );
}

export default CoffeeShop;
