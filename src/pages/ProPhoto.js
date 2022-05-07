import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

const Prophoto1 = require("../assets/imgs/prophoto1.png");
const Prophoto2 = require("../assets/imgs/prophoto2.png");
const Prophoto3 = require("../assets/imgs/prophoto3.png");
const PhpLogo = require("../assets/logos/PhpLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const MysqlLogo = require("../assets/logos/MysqlLogo.png");
const GoogLogo = require("../assets/logos/Google-Logo.png");
const GDLogo = require("../assets/logos/GDlibLogo.png");
const TrelloLogo = require("../assets/logos/TrelloLogo.png");

const ProPhoto = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Prophoto
                </code>
                <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
                <div className="flex flex-row  mb-3">
                    <img
                        src={PhpLogo}
                        alt="React logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={JsLogo}
                        alt="Jsx logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={MysqlLogo}
                        alt="Mysql logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={GoogLogo}
                        alt="Google logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={GDLogo}
                        alt="GD Library logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                    <img
                        src={TrelloLogo}
                        alt="Trello logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                <code>
                    Created as an end-of-the-batch project by the student of
                    wcoding bootcamp, Prophoto is web app build to showcase and
                    sell artist's images. <br />
                    It uses modal view and lets you creates a new account or
                    sign in with your Google ID. You can set your profile info
                    and picture, but if you had sign in with Google, it uses
                    your Google profile picture by default. The app uses the PHP
                    GD Graphics library to store images in 3 resolutions :
                    original size (never displyed), medium size (for the modal
                    image view) and small size (for every other view). <br />
                    You can bookmark the images you like, and as soon as you
                    complete the payment process, which is faking a credit card
                    transaction, you can download the original size image.{" "}
                    <br />
                    The team work was organized with Trello as agile managment
                    tool.
                </code>
                <div className="grid grid-cols-2 text-sm mt-10">
                    <img
                        src={Prophoto1}
                        alt="Login page"
                        className="h-80 w-90 text-yellow_vs"
                    />
                    <img
                        src={Prophoto3}
                        alt="Profile page"
                        className="h-80 w-90 text-yellow_vs"
                    />
                </div>
                <div className="grid grid-cols-2 gap-20 text-sm mt-10">
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
                        <a
                            href="https://github.com/leegihe95/proPhoto"
                            target="_blank"
                            rel="noopener noreferrer">
                            <code>GitHub repo</code>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProPhoto;
