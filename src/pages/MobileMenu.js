import React, { useState } from "react";
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";

const JSIcon = require("../assets/icons/JSIcon.png");
const RELogo = require("../assets/logos/ReactLogo.png");
const PYLogo = require("../assets/logos/PythonLogo.png");
const FKLogo = require("../assets/logos/Fika_logo.png");
const TSLogo = require("../assets/logos/TypescriptLogo.png");

const MobileMenu = ({ showPage, setShowPage, hidePage, setHidePage }) => {
  const fika = [
    {
      name: "FikaDev",
      tab: "fikadev",
      icon: FKLogo,
    },
  ];
  const personalPj = [
    {
      name: "To-code-list",
      tab: "tocodelist",
      icon: TSLogo,
    },
    {
      name: "Crypto-info",
      tab: "cryptoinfo",
      icon: RELogo,
    },
    {
      name: "Search-github-users",
      tab: "githubusers",
      icon: RELogo,
    },
    {
      name: "Jd-blogpost",
      tab: "jdblogpost",
      icon: PYLogo,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [showPersonalList, SetShowPersonalList] = useState(true);
  const [showFika, SetShowTeamList] = useState(true);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {open ? (
              <XIcon className="block w-16" aria-hidden="true" />
            ) : (
              <MenuIcon className="block w-16" aria-hidden="true" />
            )}{" "}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="">
              <code className="px-2 pt-2 pb-3 space-y-1 text-white">
                <Disclosure.Button
                  key="Home"
                  as="a"
                  className={classNames(
                    showPage === "home"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={showPage === "home" ? "page" : undefined}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPage("home");
                  }}
                >
                  <div className="flex ml-6">
                    <img
                      src={JSIcon}
                      alt="JS Icon"
                      className="w-7 mr-1  ml-5 text-yellow_vs"
                    />
                    Home
                  </div>
                </Disclosure.Button>
                <div
                  className="mb-2 ml-4 font-bold flex text-xl"
                  onClick={() => SetShowTeamList(!showFika)}
                >
                  {showFika ? (
                    <ChevronDownIcon className="w-7 mr-4" />
                  ) : (
                    <ChevronRightIcon className=" w-7 mr-4 " />
                  )}
                  FikaDev
                </div>
                {showFika
                  ? fika.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        className={classNames(
                          showPage === item.tab
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={
                          showPage === item.tab ? "page" : undefined
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          setHidePage(
                            hidePage.filter((page) => page !== item.tab)
                          );
                          setShowPage(item.tab);
                        }}
                      >
                        <div className="flex ml-6">
                          <img
                            src={item.icon}
                            alt="Logo"
                            className="w-7 mr-1  ml-5 text-yellow_vs"
                          />
                          {item.name}
                        </div>
                      </Disclosure.Button>
                    ))
                  : null}
                <div
                  className="mb-2 ml-4 font-bold flex text-xl"
                  onClick={() => SetShowPersonalList(!showPersonalList)}
                >
                  {showPersonalList ? (
                    <ChevronDownIcon className="w-7 mr-4" />
                  ) : (
                    <ChevronRightIcon className=" w-7 mr-4 " />
                  )}
                  Personal Projects
                </div>
                {showPersonalList
                  ? personalPj.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        className={classNames(
                          showPage === item.tab
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={
                          showPage === item.tab ? "page" : undefined
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          setHidePage(
                            hidePage.filter((page) => page !== item.tab)
                          );
                          setShowPage(item.tab);
                        }}
                      >
                        <div className="flex ml-6">
                          <img
                            src={item.icon}
                            alt="Logo"
                            className="w-7 mr-1  ml-5 text-yellow_vs"
                          />
                          {item.name}
                        </div>
                      </Disclosure.Button>
                    ))
                  : null}
                {/* <div
                  className="mb-2 ml-4 font-bold flex text-xl"
                  onClick={() => SetShowTeamList(!showFika)}
                >
                  {showFika ? (
                    <ChevronDownIcon className="w-7 mr-4" />
                  ) : (
                    <ChevronRightIcon className=" w-7 mr-4 " />
                  )}
                  FikaDev
                </div>
                {showFika
                  ? fika.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        className={classNames(
                          showPage === item.tab
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={
                          showPage === item.tab ? "page" : undefined
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          setHidePage(
                            hidePage.filter((page) => page !== item.tab)
                          );
                          setShowPage(item.tab);
                        }}
                      >
                        <div className="flex ml-6">
                          <img
                            src={item.icon}
                            alt="Logo"
                            className="w-7 mr-1  ml-5 text-yellow_vs"
                          />
                          {item.name}
                        </div>
                      </Disclosure.Button>
                    ))
                  : null} */}
              </code>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default MobileMenu;
