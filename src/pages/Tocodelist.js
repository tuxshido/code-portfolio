import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

const ToCodeCapt = require("../assets/imgs/tocodelistcapture.gif");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const NTLogo = require("../assets/logos/NetlifyLogo.png");
const FireLogo = require("../assets/logos/FirebaseLogo.png");
const GoogLogo = require("../assets/logos/Google-Logo.png");
const TSLogo = require("../assets/logos/TypescriptLogo.png");

const PhotoReact = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    To-Code-List
                </code>
                <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full">
                    <div className="flex flex-row  mb-3 float-right">
                        <img
                            src={ReactLogo}
                            alt="React logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={TSLogo}
                            alt="Typescript logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={FireLogo}
                            alt="firebase logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={GoogLogo}
                            alt="Bootstrap logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={NTLogo}
                            alt="Netlify logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                    </div>
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                <code>
                    To-Code-list is an managment tool for your personnal
                    project.
                    <br /> With To-Code-List App, you can create a task to code,
                    test and deploy. You can drag'n drop it to another column.
                    You can edit its information and it will be circled in red
                    if the due date is over.
                    <br />
                    It features Goolgle authentification with Firebase, cloud
                    database with Firestore, and modal windows and it was
                    deployed with Netlify.
                </code>
                <img
                    src={ToCodeCapt}
                    alt="main page"
                    className="h-80 w-90 mt-10 ml-3 mr-4 text-yellow_vs"
                />
                <div className="grid grid-cols-2 gap-20 text-sm mt-10">
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
                        <a
                            href="https://to-code-list.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <code>Web app</code>
                        </a>
                    </button>
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
                        <a
                            href="https://github.com/tuxshido/to-code-list"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <code>GitHub repo</code>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhotoReact;
