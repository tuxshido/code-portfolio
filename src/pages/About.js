import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const JavaScriptLogo = require("../assets/logos/JsLogo.png");
const MysqlLogo = require("../assets/logos/MysqlLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const NodejsLogo = require("../assets/logos/NodeJSLogo.png");
const PhpMyAdminLogo = require("../assets/logos/PhpmyadminLogo.png");
const GItLogo = require("../assets/logos/GitSoftLogo.png");
const PHPLogo = require("../assets/logos/PhpLogo.png");
const ApacheLogo = require("../assets/logos/ApacheLogo.png");
const LinuxLogo = require("../assets/logos/TuxLogo.png");
const VimLogo = require("../assets/logos/VimLogo.png");
const VSCodeLogo = require("../assets/logos/VSCLogo.png");
const TrelloLogo = require("../assets/logos/TrelloLogo.png");
const BootstrapLogo = require("../assets/logos/BootstrapLogo.png");
const NTLogo = require("../assets/logos/NetlifyLogo.png");
const TSLogo = require("../assets/logos/TypescriptLogo.png");
const DKLogo = require("../assets/logos/DockerLogo.png");
const NSLogo = require("../assets/logos/nest-js-logo.png");
const NXLogo = require("../assets/logos/next-logo-2.png");
const JTLogo = require("../assets/logos/jest-logo.png");
const PGLogo = require("../assets/logos/PostgreSQL_logo.png");
const TWLogo = require("../assets/logos/TailwindLogo.png");
const NOLogo = require("../assets/logos/notion_logo.png");

const About = () => {
  const skillsInfo = [
    [JavaScriptLogo, "Javascript"],
    [TSLogo, "Typescript"],
    [ReactLogo, "React"],
    [NXLogo, "Nextjs"],
    [NodejsLogo, "Nodejs"],
    [NSLogo, "Nestjs"],
    [PGLogo, "PostgreSQL"],
    [FirebaseLogo, "Firebase"],
    [MysqlLogo, "MySQL"],
    [PhpMyAdminLogo, "PhpMyAdmin"],
    [GItLogo, "Git"],
    [JTLogo, "Jest"],
    [PHPLogo, "PHP"],
    [TWLogo, "Tailwind"],
    [BootstrapLogo, "Bootstrap"],
    [ApacheLogo, "Apache"],
    [NTLogo, "Netlify"],
    [DKLogo, "Docker"],
    [LinuxLogo, "Linux"],
    [PythonLogo, "Python"],
    [VimLogo, "Vim"],
    [VSCodeLogo, "VSCode"],
    [TrelloLogo, "Trello"],
    [NOLogo, "Notion"],
  ];

  return (
    <div
      id="About"
      className="mx-12 mt-40 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-[#a2aabc] text-lg mt-5">
          <code>
            Hello there ! I am a software engineer in Seoul looking for
            opportunities. I am working on the FikaDev project. Problem-solving
            and DIY mindset, I love to learn new things. As a linux enthusiast,
            the terminal is my friend. Before moving into development, I worked
            as a math teatcher for over ten years and I have a Master degree of
            Mathematics applied to computer science.
          </code>
          <br />
          <br />
          <code>Skills:</code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            {skillsInfo.map((item, index) => (
              <div className="flex flex-row  mb-3" key={index}>
                <img
                  src={item[0]}
                  alt={item[1] + " Logo"}
                  className="h-9 w-9 ml-3 mr-4 text-yellow_vs"
                />
                <code>{item[1]}</code>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
