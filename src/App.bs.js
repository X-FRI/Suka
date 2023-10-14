// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import LogoSvg from "./logo.svg";
import * as JsxRuntime from "react/jsx-runtime";

var logo = LogoSvg;

import './App.css'
;

function App(props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  return JsxRuntime.jsx("div", {
              children: JsxRuntime.jsxs("header", {
                    children: [
                      JsxRuntime.jsx("img", {
                            className: "App-logo",
                            alt: "logo",
                            src: logo
                          }),
                      JsxRuntime.jsx("p", {
                            children: "Hello Vite + React + ReScript!"
                          }),
                      JsxRuntime.jsx("p", {
                            children: JsxRuntime.jsx("button", {
                                  children: "count is: " + match[0].toString() + "",
                                  className: "inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]",
                                  onClick: (function (_e) {
                                      Curry._1(setCount, (function (count) {
                                              return count + 1 | 0;
                                            }));
                                    })
                                }),
                            className: "my-6"
                          }),
                      JsxRuntime.jsxs("p", {
                            children: [
                              "Edit ",
                              JsxRuntime.jsx("code", {
                                    children: "App.res"
                                  }),
                              " and save to test HMR updates."
                            ]
                          }),
                      JsxRuntime.jsxs("p", {
                            children: [
                              JsxRuntime.jsx("a", {
                                    children: "Learn React",
                                    className: "App-link",
                                    href: "https://reactjs.org",
                                    rel: "noopener noreferrer",
                                    target: "_blank"
                                  }),
                              " | ",
                              JsxRuntime.jsx("a", {
                                    children: "Vite Docs",
                                    className: "App-link",
                                    href: "https://vitejs.dev/guide/features.html",
                                    rel: "noopener noreferrer",
                                    target: "_blank"
                                  }),
                              " | ",
                              JsxRuntime.jsx("a", {
                                    children: "ReScript Docs",
                                    className: "App-link",
                                    href: "https://rescript-lang.org/docs/react/latest/introduction",
                                    rel: "noopener noreferrer",
                                    target: "_blank"
                                  })
                            ]
                          })
                    ],
                    className: "App-header"
                  }),
              className: "App"
            });
}

var make = App;

export {
  make ,
}
/* logo Not a pure module */
