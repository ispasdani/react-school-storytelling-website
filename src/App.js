import "./App.css";
import React, { useState, useEffect } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Vlog from "./components/VlogSection/Vlog";
import StudyPlaces from "./components/StudySection/StudyPlaces";
import CoffeeShop from "./components/StudySection/CoffeeShop";
import Academy from "./components/StudySection/Academy";
import SocialLife from "./components/SocialLife/SocialLife";
import Cooking from "./components/SocialLife/Cooking";
import EatingTogether from "./components/SocialLife/EatingTogether";
import Testimonials from "./components/Testimonials/Testimonials";
import GoingOut from "./components/SocialLife/GoingOut";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [loading]);

  return (
    <div className="content-body">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <motion.div key="header">
                <Header />
                <SectionTwo />
                <Vlog />
                <StudyPlaces />
                <CoffeeShop />
                <Academy />
                <SocialLife />
                <Cooking />
                <EatingTogether />
                <GoingOut />
                <Testimonials />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
