import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LKLogo = require("../assets/logos/LinkedinLogo.png");
// const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");
//const LILogo = require("../assets/logos/LinkedinLogo.png");
//const TSIcon = require("../assets/icons/TSIcon.png");
const RELogo = require("../assets/logos/ReactLogo.png");
const PYLogo = require("../assets/logos/PythonLogo.png");
const PHLogo = require("../assets/logos/PhpLogo.png");
const INLogo = require("../assets/logos/InfoLogo.png");
const CVLogo = require("../assets/logos/CvLogo.png");

const LeftBar = ({ showPage, setShowPage, hidePage, setHidePage }) => {
    const [showReactTeamList, SetShowReactTeamList] = useState(true);
    const [showReactList, SetShowReactList] = useState(true);
    const [showPythonList, SetShowPythonList] = useState(true);
    const [showPhpList, SetShowPhpList] = useState(true);
    const [showTeamPjList, SetShowTeamPjList] = useState(true);
    const [showProjectsList, SetShowProjectsList] = useState(true);
    const [showHomeList, SetShowHomeList] = useState(true);

    const RenderItemList = (titleLogo, titleName, titlePage) => (
        <div>
            <button
                href="#"
                onClick={(e) => {
                    e.stopPropagation();
                    setHidePage(hidePage.filter((item) => item !== titlePage));
                    setShowPage(titlePage);
                }}>
                <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
                    <img
                        src={titleLogo}
                        alt={titleName}
                        className="w-7 mr-1  ml-5 text-yellow_vs"
                    />
                    <p>{titleName}</p>
                </div>
            </button>
        </div>
    );

    const HomeList = () => (
        <>
            {RenderItemList(INLogo, "About", "about")}
            {RenderItemList(CVLogo, "Resume", "resume")}
            {RenderItemList(MailLogo, "Contact", "contact")}
        </>
    );

    const ReactList = () => (
        <>
            {RenderItemList(RELogo, "Crypto-info", "cryptoinfo")}
            {RenderItemList(RELogo, "Search-github-users", "githubusers")}
        </>
    );

    const ReactTeamList = () => (
        <>{RenderItemList(RELogo, "Prophoto-React", "photoreact")}</>
    );

    const PythonList = () => (
        <>{RenderItemList(PYLogo, "Jd-blogpost", "jdblogpost")}</>
    );

    const PhpList = () => <>{RenderItemList(PHLogo, "Prophoto", "prophoto")}</>;

    return (
        <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
            <div>
                <div
                    className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                    onClick={() => SetShowHomeList(!showHomeList)}>
                    {showHomeList ? (
                        <ChevronDownIcon className="w-7 mr-1" />
                    ) : (
                        <ChevronRightIcon className="w-7 mr-1" />
                    )}
                    <p>Home</p>
                </div>
                {showHomeList ? <HomeList /> : null}
                <div
                    className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                    onClick={() => SetShowProjectsList(!showProjectsList)}>
                    {showProjectsList ? (
                        <ChevronDownIcon className="w-7 mr-1" />
                    ) : (
                        <ChevronRightIcon className="w-7 mr-1" />
                    )}
                    <p>Personal Projects</p>
                </div>
                {showProjectsList ? (
                    <>
                        <div
                            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                            onClick={() => SetShowReactList(!showReactList)}>
                            {showReactList ? (
                                <ChevronDownIcon className="w-7 mr-1  ml-5" />
                            ) : (
                                <ChevronRightIcon className="w-7 mr-1  ml-5" />
                            )}

                            <p>React</p>
                        </div>
                        {showReactList ? <ReactList /> : null}
                        <div
                            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                            onClick={() => SetShowPythonList(!showPythonList)}>
                            {showPythonList ? (
                                <ChevronDownIcon className="w-7 mr-1  ml-5" />
                            ) : (
                                <ChevronRightIcon className="w-7 mr-1  ml-5" />
                            )}

                            <p>Python</p>
                        </div>
                        {showPythonList ? <PythonList /> : null}
                    </>
                ) : null}
                <div
                    className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                    onClick={() => SetShowTeamPjList(!showTeamPjList)}>
                    {showTeamPjList ? (
                        <ChevronDownIcon className="w-7 mr-1" />
                    ) : (
                        <ChevronRightIcon className="w-7 mr-1" />
                    )}
                    <p>Team Projects</p>
                </div>
                {showTeamPjList ? (
                    <>
                        <div
                            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                            onClick={() =>
                                SetShowReactList(!showReactTeamList)
                            }>
                            {showReactTeamList ? (
                                <ChevronDownIcon className="w-7 mr-1  ml-5" />
                            ) : (
                                <ChevronRightIcon className="w-7 mr-1  ml-5" />
                            )}

                            <p>React</p>
                        </div>
                        {showReactTeamList ? <ReactTeamList /> : null}
                        <div
                            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
                            onClick={() => SetShowPhpList(!showPhpList)}>
                            {showPhpList ? (
                                <ChevronDownIcon className="w-7 mr-1  ml-5" />
                            ) : (
                                <ChevronRightIcon className="w-7 mr-1  ml-5" />
                            )}

                            <p>PHP</p>
                        </div>
                        {showPhpList ? <PhpList /> : null}
                    </>
                ) : null}
                <div className="absolute inset-x-0 bottom-10 ">
                    <div className="flex px-6 space-x-7">
                        <a href="https://github.com/tuxshido">
                            <img
                                src={GitLogo}
                                alt="Git Logo"
                                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/charles-metman-914429237/">
                            <img
                                src={LKLogo}
                                alt="Linkedin Logo"
                                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                            />
                        </a>
                        <a href="mailto:c.metman@e.email">
                            <img
                                src={MailLogo}
                                alt="Mail Logo"
                                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;
