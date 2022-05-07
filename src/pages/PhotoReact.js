import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

const PhotoR = require("../assets/imgs/photoreact.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsxLogo = require("../assets/logos/JsxLogo.png");
const FireLogo = require("../assets/logos/FirebaseLogo.png");
const GoogLogo = require("../assets/logos/Google-Logo.png");
const BootLogo = require("../assets/logos/BootstrapLogo.png");
const TrelloLogo = require("../assets/logos/TrelloLogo.png");

const PhotoReact = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Prophoto-React
                </code>
                <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
                <div className="flex flex-row  mb-3">
                    <img
                        src={ReactLogo}
                        alt="React logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={JsxLogo}
                        alt="Jsx logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={FireLogo}
                        alt="Bootstrap logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={GoogLogo}
                        alt="Bootstrap logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={BootLogo}
                        alt="Bootstrap logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />

                    <img
                        src={TrelloLogo}
                        alt="Bootstrap logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                <code>
                    Created as a follow-up to the ProPhoto project, this web app
                    is still a work in progress, the basic functionalities are
                    working. <br />
                    It is build with React and bootstrap, using the Google sign
                    in and Firebase.
                    <br />
                    The team work is also organized with agile managment tool.
                </code>
                <img
                    src={PhotoR}
                    alt="main page"
                    className="h-80 w-90 mt-10 ml-3 mr-4 text-yellow_vs"
                />
            </div>
        </div>
    );
};

export default PhotoReact;
