import React, { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Typing from "react-typing-effect";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Career from "../components/Career";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import "../assets/styles/intro.css";
import backgroundImage from "../assets/images/background.jpg";

const HomePage = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 30); // 30msごとに1%増加
  }, []);

  useEffect(() => {
    if (loadingProgress === 100) {
      setTimeout(() => {
        setShowMainContent(true);
        setShowHeader(false); // 初期状態ではヘッダーを非表示
        setTimeout(() => {
          scroller.scrollTo("profileSection", {
            duration: 2000, // スクロールの持続時間を2秒に設定
            delay: 0,
            smooth: "easeInOutQuart",
          });
        }, 5000); // 5秒後にスクロール

        setTimeout(() => {
          setShowHeader(true); // スクロール後にヘッダーを表示
        }, 7000); // スクロール完了後にヘッダーを表示
      }, 1000); // 1秒後にメインコンテンツを表示
    }
  }, [loadingProgress]);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AnimatePresence>{showHeader && <Header />}</AnimatePresence>
      {showMainContent ? (
        <div className="container">
          <motion.div
            className="intro"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>
              <Typing
                text={["いつかできるから、今日できる"]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={5000}
              />
            </h1>
          </motion.div>

          <Element name="profileSection">
            <Profile />
          </Element>

          <Element name="careerSection">
            <Career />
          </Element>

          <Element name="blogSection">
            <BlogList />
          </Element>

          <Footer />
        </div>
      ) : (
        <div className="intro">
          <h1>ようこそ、私のHPへ</h1>
          <div className="loading-container">
            <motion.div
              className="loading-bar"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="loading-text">{loadingProgress}%</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
