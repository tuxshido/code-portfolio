import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

const Post = require("../assets/imgs/jdblogpost.png");
const PythonLogo = require("../assets/logos/PythonLogo.png");
const FlaskLogo = require("../assets/logos/Flask-Logo.png");
const SqlaLogo = require("../assets/logos/Sqlalchemist-Logo.png");
const GoogLogo = require("../assets/logos/Google-Logo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const BootLogo = require("../assets/logos/BootstrapLogo.png");

const JdBlogPost = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Jd-blogpost
                </code>
                <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full">
                    <div className="flex flex-row  mb-3 float-right">
                        <img
                            src={PythonLogo}
                            alt="Python logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={FlaskLogo}
                            alt="Flask logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={JsLogo}
                            alt="Flask logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={SqlaLogo}
                            alt="SQLAlchemist logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={GoogLogo}
                            alt="Google Sign-in logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                        <img
                            src={BootLogo}
                            alt="Python logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                    </div>
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                <code>
                    Jd-blogpost is designed to share snippets and short-code.{" "}
                    <br />
                    It is build with flask, SQLAlchemist and bootstrap. Any user
                    can search and resd posts but you need to authenticate with
                    your Google ID to create a post. User can choose search with
                    a key word inside the title with tags.
                </code>
                <img
                    src={Post}
                    alt="main page"
                    className="h-80 w-90 mt-10 ml-3 mr-4 text-yellow_vs"
                />
                <div className="grid grid-cols-2 gap-20 text-sm mt-10">
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
                        <a
                            href="https://github.com/tuxshido/jd-blogpost"
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
export default JdBlogPost;
