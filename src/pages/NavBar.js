import React from "react";
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

const MailLogo = require("../assets/logos/MailLogo.png");
const JSIcon = require("../assets/icons/JSIcon.png");
const RELogo = require("../assets/logos/ReactLogo.png");
const PYLogo = require("../assets/logos/PythonLogo.png");
const PHLogo = require("../assets/logos/PhpLogo.png");
const INLogo = require("../assets/logos/InfoLogo.png");
const CVLogo = require("../assets/logos/CvLogo.png");
const TSLogo = require("../assets/logos/TypescriptLogo.png");

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
        { logo: INLogo, tab: "about", name: "About" },
        { logo: CVLogo, tab: "resume", name: "Resume" },
        { logo: MailLogo, tab: "contact", name: "Contact" },
        { logo: TSLogo, tab: "tocodelist", name: "To-code-list" },
        { logo: RELogo, tab: "cryptoinfo", name: "Crypto-info" },
        { logo: RELogo, tab: "githubusers", name: "Search-github-users" },
        { logo: PYLogo, tab: "jdblogpost", name: "Jd-blogpost" },
        { logo: PHLogo, tab: "prophoto", name: "Prophoto" },
    ];

    return (
        <div className="flex flex-row h-full">
            {showPage === "home" ? (
                <ActiveContainer
                    onClick={() => {
                        setShowPage("home");
                    }}
                >
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
                    }}
                >
                    <img
                        src={JSIcon}
                        alt="JS Icon"
                        className="w-7 mr-1  text-yellow_vs"
                    />
                    Home.js
                </Container>
            )}
            {tabsInfo.map((item, index) => (
                <div key={index}>
                    {hidePage.includes(item.tab) ? null : showPage ===
                      item.tab ? (
                        <ActiveContainer
                            onClick={() => {
                                setShowPage(item.tab);
                            }}
                        >
                            <img
                                src={item.logo}
                                alt={item.tab}
                                className="w-7 mr-1  text-yellow_vs"
                            />
                            {item.name}
                            <XIcon
                                className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPage("home");
                                    setHidePage((prevState) => [
                                        ...prevState,
                                        item.tab,
                                    ]);
                                }}
                            />
                        </ActiveContainer>
                    ) : (
                        <Container
                            onClick={() => {
                                setShowPage(item.tab);
                            }}
                        >
                            <img
                                src={item.logo}
                                alt={item.tab}
                                className="w-7 mr-1  text-yellow_vs"
                            />
                            {item.name}
                            <XIcon
                                className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowPage("home");
                                    setHidePage((prevState) => [
                                        ...prevState,
                                        item.tab,
                                    ]);
                                }}
                            />
                        </Container>
                    )}
                </div>
            ))}
        </div>
    );
};
export default NavBar;
