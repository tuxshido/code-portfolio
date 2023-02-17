import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import LeftBar from "./LeftBar";
import Resume from "./Resume";
import Tocodelist from "./Tocodelist";
import CryptoInfo from "./CryptoInfo";
import GitHubUsers from "./GitHubUsers";
import JdBlogPost from "./JdBlogPost";
import FikaDev from "./FikaDev";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {
  const [showPage, setShowPage] = useState("home");
  const [hidePage, setHidePage] = useState([
    "tocodelist",
    "jdblogpost",
    "cryptoinfo",
    "githubusers",
    "fikadev",
    "about",
    "resume",
    "contact",
  ]);
  return (
    <div id="home" className="App flex h-max bg-[#1e1e1e]">
      <div className="bg-[#262526] fixed h-full hidden lg:block">
        <LeftBar
          setShowPage={setShowPage}
          hidePage={hidePage}
          setHidePage={setHidePage}
        />
      </div>
      <div className="bg-[#1e1e1e] lg:pl-72 h-full ">
        <div className="lg:hidden">
          <MobileMenu
            showPage={showPage}
            setShowPage={setShowPage}
            hidePage={hidePage}
            setHidePage={setHidePage}
          />
        </div>
        <div className="bg-[#424042] h-16 w-full fixed hidden lg:block">
          <NavBar
            showPage={showPage}
            setShowPage={setShowPage}
            hidePage={hidePage}
            setHidePage={setHidePage}
          />
        </div>
        {showPage === "home" ? (
          <>
            <Header id="Header" />
            <About id="About" />
            <Resume id="Resume" />
            <Contact id="Contact" />{" "}
          </>
        ) : showPage === "about" ? (
          <About id="About" />
        ) : showPage === "resume" ? (
          <Resume id="Resume" />
        ) : showPage === "contact" ? (
          <Contact id="Contact" />
        ) : showPage === "tocodelist" ? (
          <Tocodelist id="Tocodelist" />
        ) : showPage === "cryptoinfo" ? (
          <CryptoInfo id="CryptoInfo" />
        ) : showPage === "githubusers" ? (
          <GitHubUsers id="GitHubUsers" />
        ) : showPage === "jdblogpost" ? (
          <JdBlogPost id="JdBlogPost" />
        ) : showPage === "fikadev" ? (
          <FikaDev id="FikaDev" />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
