import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import LeftBar from "./LeftBar";
import Resume from "./Resume";
import PhotoReact from "./PhotoReact";
import CryptoInfo from "./CryptoInfo";
import GitHubUsers from "./GitHubUsers";
import JdBlogPost from "./JdBlogPost";
import ProPhoto from "./ProPhoto";
import MobileMenu from "./MobileMenu";
import Header from "./Header";
import NavBar from "./NavBar";

const Home = () => {
    const [showPage, setShowPage] = useState("home");
    const [hidePage, setHidePage] = useState([
        "photoreact",
        "jdblogpost",
        "cryptoinfo",
        "githubusers",
        "jdblogpost",
        "prophoto",
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
                ) : showPage === "photoreact" ? (
                    <PhotoReact id="PhotoReact" />
                ) : showPage === "cryptoinfo" ? (
                    <CryptoInfo id="CryptoInfo" />
                ) : showPage === "githubusers" ? (
                    <GitHubUsers id="GitHubUsers" />
                ) : showPage === "jdblogpost" ? (
                    <JdBlogPost id="JdBlogPost" />
                ) : showPage === "prophoto" ? (
                    <ProPhoto id="ProPhoto" />
                ) : null}
            </div>
        </div>
    );
};

export default Home;
