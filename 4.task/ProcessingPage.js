import React, { useEffect, useState } from "react";

import shuffle from "./shuffle";

const ProcessingPage = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({
    title: "",
    message: "",
  });

  const getProcessingPage = (array) => {
    let stateOne = array[0].state;
    let stateTwo = array[1].state;

    if (stateOne === "processing") {
      setIsLoading(true);
      setTimeout(() => {
        switch (stateTwo) {
          case "success":
            setResult({ title: "Order complete", message: "null" });
            break;
          case "error":
            setResult({ title: "Error page", message: "null" });
            break;
          case "NO_STOCK":
            setResult({
              title: "Error page",
              message: "No stock has been found'",
            });
            break;
          case "INCORRECT_DETAILS":
            setResult({
              title: "Error page",
              message: "Incorrect details have been entered",
            });
            break;
          case "null":
            setResult({ title: "Error page", message: "null" });
            break;
          case "undefined":
            setResult({ title: "Error page", message: "null" });
            break;
          default:
            break;
        }
        setIsLoading(false);
      }, 2000);
    }
    console.log(stateOne, stateTwo);
  };

  const processPage = () => {
    const states = [
      [{ state: "processing" }, { state: "success" }],
      [{ state: "processing" }, { state: "error" }],
      [{ state: "processing" }, { state: "NO_STOCK" }],
      [{ state: "processing" }, { state: "INCORRECT_DETAILS" }],
      [{ state: "processing" }, { state: "null" }],
      [{ state: "processing" }, { state: "undefined" }],
    ];

    // const shuffled = shuffle(states);

    getProcessingPage(shuffled[0]);
    // getProcessingPage(states[0]);
  };

  if (isLoading) return <h1>loading ...</h1>;

  return (
    <>
      <h4>Title: {result.title}</h4>
      <p>Message: {result.message}</p>
      <button onClick={processPage}>Process page</button>
    </>
  );
};

export default ProcessingPage;
