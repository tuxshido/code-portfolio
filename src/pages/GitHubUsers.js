import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

const Users = require("../assets/imgs/githubusers.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsxLogo = require("../assets/logos/JsxLogo.png");
const BootLogo = require("../assets/logos/BootstrapLogo.png");

const GitHubUsers = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Search-github-users
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
                        src={BootLogo}
                        alt="Bootstrap logo"
                        className="h-6 w-6 mr-2 text-yellow_vs"
                    />
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                <code>
                    This is a single-page web app to display profile info of a
                    Github user. <br />
                    It is build with React and bootstrap, using the GitHub API.
                    it uses the github-username-regex package to check if the
                    username enter is correct or not.
                </code>
                <img
                    src={Users}
                    alt="main page"
                    className="h-80 w-90 mt-10 ml-3 mr-4 text-yellow_vs"
                />
                <div className="grid grid-cols-2 gap-20 text-sm mt-10">
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
                        <a
                            href="https://tuxshido.github.io/search-github-users/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <code>Web app</code>
                        </a>
                    </button>
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
                        <a
                            href="https://github.com/tuxshido/search-github-users"
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
export default GitHubUsers;
