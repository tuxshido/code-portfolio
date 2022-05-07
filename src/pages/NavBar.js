import React from "react";
import tw from "tailwind-styled-components";
import { CogIcon, XIcon } from "@heroicons/react/solid";

const MailLogo = require("../assets/logos/MailLogo.png");
const JSIcon = require("../assets/icons/JSIcon.png");
const RELogo = require("../assets/logos/ReactLogo.png");
const PYLogo = require("../assets/logos/PythonLogo.png");
const PHLogo = require("../assets/logos/PhpLogo.png");
const INLogo = require("../assets/logos/InfoLogo.png");
const CVLogo = require("../assets/logos/CvLogo.png");

const Container = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const ActiveContainer = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const NavBar = ({ showPage, setShowPage, hidePage, setHidePage }) => {
    const tabsInfo = [
        [INLogo, "about", "About"],
        [CVLogo, "resume", "Resume"],
        [MailLogo, "contact", "Contact"],
        [RELogo, "photoreact", "Prophoto-react"],
        [RELogo, "cryptoinfo", "Crypto-info"],
        [RELogo, "githubusers", "Search-github-users"],
        [PYLogo, "jdblogpost", "Jd-blogpost"],
        [PHLogo, "prophoto", "Prophoto"],
    ];

    return (
        <div className="flex flex-row h-full">
            {showPage === "home" ? (
                <ActiveContainer
                    onClick={() => {
                        setShowPage("home");
                    }}>
                    <img
                        src={JSIcon}
                        alt="JS Icon"
                        className="w-7 mr-1  text-yellow_vs"
                    />
                    Home.js
                </ActiveContainer>
            ) : (
                <Container
                    onClick={() => {
                        setShowPage("home");
                    }}>
                    <img
                        src={JSIcon}
                        alt="JS Icon"
                        className="w-7 mr-1  text-yellow_vs"
                    />
                    Home.js
                </Container>
            )}
            {tabsInfo.map((item, index) => (
                <>
                    {hidePage.includes(item[1]) ? null : showPage ===
                      item[1] ? (
                        <ActiveContainer
                            onClick={() => {
                                setShowPage(item[1]);
                            }}
                            key={index}>
                            <img
                                src={item[0]}
                                alt={item[1]}
                                className="w-7 mr-1  text-yellow_vs"
                            />
                            {item[2]}
                            <XIcon
                                className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPage("home");
                                    setHidePage((prevState) => [
                                        ...prevState,
                                        item[1],
                                    ]);
                                }}
                            />
                        </ActiveContainer>
                    ) : (
                        <Container
                            onClick={() => {
                                setShowPage(item[1]);
                            }}>
                            <img
                                src={item[0]}
                                alt="item[1]"
                                className="w-7 mr-1  text-yellow_vs"
                            />
                            {item[2]}
                            <XIcon
                                className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPage("home");
                                    setHidePage((prevState) => [
                                        ...prevState,
                                        item[1],
                                    ]);
                                }}
                            />
                        </Container>
                    )}
                </>
            ))}
        </div>
    );
};
export default NavBar;
