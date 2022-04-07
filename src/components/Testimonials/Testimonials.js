import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./testimonials.css";
// import testimonialsVideo from "../../assets/videos/interviews.mp4";

const textFromLeftVariants = {
  hidden: {
    x: "-200%",
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

const textFromRightVariants = {
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

const videoFromBottomVariants = {
  hidden: {
    y: "200%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

function Testimonials() {
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
    <div className="testimonials-section" ref={ref}>
      <div className="testimonials-title">
        <motion.h1
          variants={textFromLeftVariants}
          initial="hidden"
          animate={animation}
        >
          This was my story,
        </motion.h1>
        <motion.h2
          variants={textFromRightVariants}
          initial="hidden"
          animate={animation}
        >
          but we all have our reasons to love Denmark!
        </motion.h2>
      </div>
      <div className="testimonials-video-side">
        <motion.div
          variants={videoFromBottomVariants}
          initial="hidden"
          animate={animation}
          className="testimonials-video-container"
        >
          {/* <video autoPlay muted loop controls className="testimonials-video">
            <source src={testimonialsVideo} type="video/mp4" />
          </video> */}

          <iframe
            width="560"
            className="testimonials-video"
            height="315"
            src="https://www.youtube.com/embed/mT8XPIvGZxU?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

export default Testimonials;
