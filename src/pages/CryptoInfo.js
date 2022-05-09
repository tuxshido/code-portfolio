import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

const Main = require("../assets/imgs/maincrypto.png");
const Chart = require("../assets/imgs/chartcrypto.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const JsxLogo = require("../assets/logos/JsxLogo.png");
const ChartjsLogo = require("../assets/logos/ChartjsLogo.png");

const CryptoInfo = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Crypto-info
                </code>
                <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full">
                    <div className="flex flex-row  mb-3 float-right">
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
                            src={ChartjsLogo}
                            alt="Chartjs logo"
                            className="h-6 w-6 mr-2 text-yellow_vs"
                        />
                    </div>
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-10 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                <code>
                    this web app is crypto-currency tracker. <br />
                    It is build with React and React-Router, using the CoinGecko
                    API. It displays a list of crypto-currency with its basic
                    information and provides pagination. Each crypto is
                    clickable and leads to a dedicated page with more info. The
                    chart is build with Chartjs.
                </code>
                <div className="grid grid-cols-2 gap-1 text-sm mt-10">
                    <img
                        src={Main}
                        alt="main page"
                        className="h-80 w-80 ml-3 mr-4 text-yellow_vs"
                    />
                    <img
                        src={Chart}
                        alt="page with chart"
                        className="h-90 w-80 ml-3 mr-4 text-yellow_vs"
                    />
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
                        <a
                            href="https://tuxshido.github.io/crypto-info/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <code>Web app</code>
                        </a>
                    </button>
                    <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
                        <a
                            href="https://github.com/tuxshido/crypto-info"
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

export default CryptoInfo;
