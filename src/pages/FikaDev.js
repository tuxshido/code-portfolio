import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

const PostImage = require("../assets/imgs/Fika-capture.jpg");
const TSLogo = require("../assets/logos/TypescriptLogo.png");
const NXLogo = require("../assets/logos/NextLogo.png");
const TWLogo = require("../assets/logos/TailwindLogo.png");
const PGLogo = require("../assets/logos/PostgreSQL_logo.png");
const NSLogo = require("../assets/logos/nest-js-logo.png");
const JTLogo = require("../assets/logos/jest-logo.png");

const FikaDev = () => {
  return (
    <div id="Contact" className="pb-72 mt-36">
      <div className="table mx-12 lg:mx-60">
        <CodeIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          FikaDev
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full">
          <div className="flex flex-row  mb-3 float-right">
            <img
              src={TSLogo}
              alt="React logo"
              className="h-6 w-6 mr-2 text-yellow_vs"
            />
            <img
              src={NXLogo}
              alt="Jsx logo"
              className="h-6 w-6 mr-2 text-yellow_vs"
            />
            <img
              src={TWLogo}
              alt="Jsx logo"
              className="h-6 w-6 mr-2 text-yellow_vs"
            />
            <img
              src={PGLogo}
              alt="Mysql logo"
              className="h-6 w-6 mr-2 text-yellow_vs"
            />
            <img
              src={NSLogo}
              alt="Google logo"
              className="h-6 w-6 mr-2 text-yellow_vs"
            />
            <img
              src={JTLogo}
              alt="GD Library logo"
              className="h-6 w-6 mr-2 text-yellow_vs"
            />
          </div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-10 mx-12 lg:mx-60 flex flex-col items-center text-justify">
        <code>
          Fika is high-level git extension that helps team-shared development
          workflow and aligns issue management tool with git workflow <br />
          The webpage is build with Next.js, the back-end is using Nest.js,
          TypeORM and PostgreSQL, and the tests are made with Jest framework.{" "}
          <br /> You can install it as a npm package or a brew package.
          <br />
          Inside the project, I was responsible of:
          <br />• Redesign the website
          <br />• Extend the functionnality of the CLI
          <br />• Develop a Homebrew formulae, so Mac user can install Fika
          without node
          <br />• Integration of new agile managment softwares (Jira, Asana and
          Linear)
          <br />• Redesign the database to work fluently with different
          managment tool
        </code>
        <img
          src={PostImage}
          alt="main page"
          className="h-80 w-96 mt-10 ml-3 mr-4 text-yellow_vs"
        />
        <div className="grid grid-cols-2 gap-20 text-sm mt-10">
          <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
            <a
              href="https://fikaDev.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Web page</code>
            </a>
          </button>
          <button className=" border border-lightblue_vs text-lightblue_vs mt-4 p-3 justify-self-center rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/1">
            <a
              href="https://www.npmjs.com/package/fika-cli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Npm package</code>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FikaDev;
