import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="lg:w-3/5 mt-40 mb-4 text-justify mx-12 lg:mr-60 lg:ml-auto"
    >
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Software Engineer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">FikaDev </code>
            <br />
            <code className="text-xs text-brown_vs">• 2022</code>
            <code className="text-sm">
              <br />
              Full-stack developer, was responsible of:
              <br />• Redesign the website
              <br />• Extend the functionnality of the CLI
              <br />• Create a brew package
              <br />• Integration of new agile managment softwares (Jira, Asana
              and Linear)
              <br />• Redesign the database to work fluently with different
              managment tool
            </code>
            <br />
            <br />
            <code className="text-blue_vs">IT Engineer</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Nokia Networks{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 2019 - 2021</code>
            <code className="text-sm">
              <br />• On-Site engineer
              <br />• Fixing end-user IT-related trouble in compliance with SLA
              <br />• Troubleshooting and fixing the server rooms problems with
              the global network team
            </code>
            <br />
            <br />
            <code className="text-blue_vs">Mathematic Teacher</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              French School of Seoul and Paris area{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 2006 - 2017</code>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4">
            <code className="text-blue_vs">Full-stack coding bootcamp</code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              <a
                href="https://wcoding.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wcoding Institute, Seoul
              </a>
            </code>
            <br />
            <code className="text-xs text-brown_vs">
              • January 2022 - April 2022
            </code>
            <code className="text-sm">
              <br />• HTML, CSS, UI design, responsive design.
              <br />• JavaScript, DOM manipulation, asynchronous programming,
              advanced Data Structure
              <br />• PHP, SQL, server side rendering, data management,
              Client/Server architecture, web integration with Apache
              <br />• Design and development, product Management, project
              Management
              <br />• React, Firebase
            </code>
            <br />
            <br />
            <code className="text-blue_vs">
              Master Degree of Mathematics Applied to Science Computing
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Université Pierre et Marie Curie, Paris VI
            </code>
            <br />
            <code className="text-xs text-brown_vs">• Sept 2005</code>
            <br />
            <br />
            <code className="text-blue_vs">
              Bachelor degree in Mathematics, 3 years university degree
            </code>
            <br />
            <code className="italic text-sm text-lightblue_vs">
              Complutense University, Madrid
            </code>
            <br />
            <code className="text-xs text-brown_vs">• 2000</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
