import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./social.css";
// import groceryVideo from "../../assets/videos/shopping.mp4";
import groceryBagImg from "../../assets/images/groceryBag.jpg";
import groceryStoreImg from "../../assets/images/groceryStore.jpg";
import GrocerySvg from "../Svgs/GrocerySvg";

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

function SocialLife() {
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
    <div className="social-life-section" id="3" ref={ref}>
      <div className="social-title">
        <motion.h1
          variants={titleSectionVariants}
          initial="hidden"
          animate={animation}
        >
          <span>My</span> social life..
        </motion.h1>
      </div>
      <div className="social-row">
        <div className="social-content-side">
          {/* <video autoPlay muted loop className="video-grocery">
            <source src={groceryVideo} type="video/mp4" />
          </video> */}
          <iframe
            width="560"
            height="315"
            className="video-grocery"
            src="https://www.youtube-nocookie.com/embed/zG85OBgOd3c?controls=0?autoplay=1?mute=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img
            src={groceryBagImg}
            alt="shopping-photos"
            className="shopping-photos"
          />
          <img
            src={groceryStoreImg}
            alt="shopping-photos"
            className="shopping-photos"
          />
        </div>
        <div className="social-text-side">
          <motion.h1
            variants={titlesVariants}
            initial="hidden"
            animate={animation}
          >
            Grocery
          </motion.h1>
          <motion.p
            variants={textFromRightVariantsFast}
            initial="hidden"
            animate={animation}
          >
            To have food on the table every night we of course need to do some
            groceries. I have a fixed group of 6 friends where I always eat with
            and with them I share a Tricount. Here we put all the expenses of
            the group and manage who pays for what, in this way we know who
            needs to pay who in an easy way.
          </motion.p>
          <motion.p
            variants={textFromRightVariantsSlow}
            initial="hidden"
            animate={animation}
          >
            Doing the groceries itself is not always with the 6 of us, we try to
            divide the tasks a little and this works well for us! The groceries
            are a bit more expensive in Denmark, so this is something you should
            keep in mind.
          </motion.p>
          <GrocerySvg />
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

export default SocialLife;
