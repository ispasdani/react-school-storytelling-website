import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./sectionTwo.css";
import BubleChatLeft from "../Bubble/BubleCharLeft";
import BubleChatRight from "../Bubble/BubleChatRight";
import { useInView } from "react-intersection-observer";
import polOne from "../../assets/images/polaroid/pol1.jpg";
import polTwo from "../../assets/images/polaroid/pol2.jpg";
import polThree from "../../assets/images/polaroid/pol3.jpg";
import polFour from "../../assets/images/polaroid/pol4.jpg";
import polFive from "../../assets/images/polaroid/pol5.jpg";
import polSix from "../../assets/images/polaroid/pol6.jpg";
import polSeven from "../../assets/images/polaroid/pol7.jpg";

const polaroidOneVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
    rotate: [360, -15],
  },
  hidden: { x: "200%", opacity: 0 },
};

const polaroidTwoVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2 },
    rotate: 15,
  },
  hidden: {
    x: "-200%",
    opacity: 0,
  },
};

const polaroidThreeVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2 },
    rotate: 5,
  },
  hidden: {
    x: "200%",
    opacity: 0,
  },
};

const polaroidFourthVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
    rotate: [-45, -20],
  },
  hidden: {
    x: "-200%",
    opacity: 0,
  },
};

const polaroidFifthVariants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
    rotate: 360,
  },
  hidden: {
    scale: 0,
    opacity: 0,
  },
};

const polaroidSixthVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.7 },
    rotate: [360, -6],
  },
  hidden: {
    y: "200%",
    opacity: 0.5,
  },
};

const polaroidSeventhVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2 },
    rotate: 20,
  },
  hidden: {
    y: "-200%",
    opacity: 0.3,
  },
};

const titleVariants = {
  visible: {
    y: 0,
    transition: { duration: 1 },
    bounce: 0.4,
  },
  hidden: {
    y: "100vh",
  },
};

function SectionTwo() {
  const { ref, inView } = useInView({ threshold: 0.2 });
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
    <div className="section-main-container" id="1" ref={ref}>
      <motion.h1
        className="main-how-title"
        variants={titleVariants}
        initial="hidden"
        animate={animation}
      >
        <span>How I</span> ended up here?
      </motion.h1>
      <div className="images-container">
        <motion.div
          className="polaroid-frame first-frame"
          drag
          dragConstraints={{ bottom: 300, top: 20, left: -50, right: 400 }}
          whileDrag={{ rotate: 0 }}
          initial="hidden"
          variants={polaroidOneVariants}
          animate={animation}
        >
          <div className="image-content">
            <img
              src={polTwo}
              alt="my-favourite-sport"
              className="img-in-frame"
            />
          </div>
          <h4>"my family"</h4>
        </motion.div>

        <motion.div
          className="polaroid-frame second-frame"
          drag
          dragConstraints={{ bottom: 300, top: 20, left: -300, right: 50 }}
          whileDrag={{ rotate: 0 }}
          variants={polaroidTwoVariants}
          initial="hidden"
          animate={animation}
        >
          <div className="image-content">
            <img
              src={polOne}
              alt="my-favourite-sport"
              className="img-in-frame"
            />
          </div>
          <h4>"my favourite sport"</h4>
        </motion.div>

        <motion.div
          className="polaroid-frame third-frame"
          drag
          dragConstraints={{ bottom: 30, top: -300, left: -50, right: 400 }}
          whileDrag={{ rotate: 0 }}
          variants={polaroidThreeVariants}
          initial="hidden"
          animate={animation}
        >
          <div className="image-content">
            <img
              src={polThree}
              alt="my-favourite-sport"
              className="img-in-frame"
            />
          </div>
          <h4>"group project"</h4>
        </motion.div>

        <motion.div
          className="polaroid-frame fourth-frame"
          drag
          dragConstraints={{ bottom: 40, top: -300, left: -300, right: 40 }}
          whileDrag={{ rotate: 0 }}
          variants={polaroidFourthVariants}
          initial="hidden"
          animate={animation}
        >
          <div className="image-content">
            <img
              src={polFour}
              alt="my-favourite-sport"
              className="img-in-frame"
            />
          </div>
          <h4>"food"</h4>
        </motion.div>

        <motion.div
          className="polaroid-frame fifth-frame"
          drag
          dragConstraints={{ bottom: 150, top: -150, left: -200, right: 150 }}
          variants={polaroidFifthVariants}
          initial="hidden"
          animate={animation}
        >
          <div className="image-content">
            <img
              src={polFive}
              alt="my-favourite-sport"
              className="img-in-frame"
            />
          </div>
          <h4>"night out"</h4>
        </motion.div>

        <motion.div
          className="polaroid-frame sixth-frame"
          drag
          dragConstraints={{ bottom: 300, top: -150, left: -200, right: 250 }}
          whileDrag={{ rotate: 0 }}
          variants={polaroidSixthVariants}
          initial="hidden"
          animate={animation}
        >
          <div className="image-content">
            <img
              src={polSix}
              alt="my-favourite-sport"
              className="img-in-frame"
            />
          </div>
          <h4>"yummy"</h4>
        </motion.div>

        <motion.div
          className="polaroid-frame seventh-frame"
          drag
          dragConstraints={{ bottom: 150, top: -340, left: -300, right: 150 }}
          whileDrag={{ rotate: 0 }}
          variants={polaroidSeventhVariants}
          initial="hidden"
          animate={animation}
        >
          <div className="image-content">
            <img
              src={polSeven}
              alt="my-favourite-sport"
              className="img-in-frame"
            />
          </div>
          <h4>"crazy friends"</h4>
        </motion.div>
      </div>
      <div className="messages-container">
        <div className="bubble-chat-container">
          <div className="messages">
            <div className="first-message">
              <BubleChatLeft
                messageContent="Hey Meike, thank you for helping me out and answering some of my questions!"
                duration="2000"
                animateDuration="1.2"
              />
            </div>
            <div className="second-message">
              <BubleChatRight
                messageContent=" Hey! That's no problem at all, ask me everything you would like to know :)"
                duration="3000"
                animateDuration="1.2"
              />
            </div>
            <div className="third-message">
              <BubleChatLeft
                messageContent="I would like to know how you prepared for this experience of moving and studying abroad. But first of all, why did you choose to study at BAA?"
                duration="4000"
                animateDuration="1.2"
              />
            </div>
            <div className="fourth-message">
              <BubleChatRight
                messageContent="That's a good question. I had always said that I wanted to study abroad once in my life and at this point I was given the perfect opportunity from my school. So now I had the possibility, it was time to choose the school. First of all Denmark is known for its scholar system and relaxed atmosphere. I was curious about this and wanted to experience this myself. Next to this BAA offered a study program that seemed really interesting and fitted perfectly with the program I'm studying at home in the Netherlands."
                duration="5000"
                animateDuration="1.2"
              />
            </div>
            <div className="fifth-message">
              <BubleChatLeft
                messageContent="Sounds like you really thought about this decision. Once you decided to take the plunge, was it hard to prepare with all the documents?"
                duration="5500"
                animateDuration="1.2"
              />
            </div>

            <div className="sixth-message">
              <BubleChatRight
                messageContent="Since the Netherlands and Denmark are both in the EU it's not as difficult as you might think. Denmark and BAA are well organized and I got all the necessary information beforehand so I was sure I had all the documents I needed. The most important things you need is your NemID and Yellow card. All this information can also be found on the website of BAA, you should check it out!"
                duration="5500"
                animateDuration="1.2"
              />
            </div>
            <div className="seventh-message">
              <BubleChatLeft
                messageContent="And how did you prepare packing your stuff for moving abroad?"
                duration="5500"
                animateDuration="1.2"
              />
            </div>

            <div className="eight-message">
              <BubleChatRight
                messageContent="Since the Netherlands and Denmark are both in the EU it's not as difficult as you might think. Denmark and BAA are well organized and I got all the necessary information beforehand so I was sure I had all the documents I needed. The most important things you need is your NemID and Yellow card. All this information can also be found on the website of BAA, you should check it out!"
                duration="5500"
                animateDuration="1.2"
              />
            </div>

            <div className="nine-message">
              <BubleChatLeft
                messageContent="Thank you for all the information, it helped me a lot!"
                duration=""
                animateDuration="1.2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
