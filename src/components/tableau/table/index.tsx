import React, { useEffect, useState } from "react";
import config from "../../../config";
import retrieve_input from "../../../utils/retrieve-input";
import Row from "./row";
import "./index.css";
import retrieve_candidates from "../../../utils/retrieve-candidates";

const Table = () => {
  const [input, setInput] = useState(retrieve_input());
  const [candidates, setCandidates] = useState(retrieve_candidates());

  const input_changed = () => setInput(retrieve_input());
  const candidates_changed = () => setCandidates(retrieve_candidates());
  // We have to use the effect hook to prevent double calling the inputs
  // changed handler.
  useEffect(() => {
    window.addEventListener(config.input_changed, input_changed);
    window.addEventListener(config.candidates_changed, candidates_changed);
    // We need to remove event listeners or else we will leak memory by
    // leaving unfreed event listeners scattered about
    return function cleanup() {
      window.removeEventListener(config.input_changed, input_changed);
      window.removeEventListener(config.candidates_changed, candidates_changed);
    };
  });
  console.log(candidates);
  return (
    <div id="tableau">
      <Row inputs={[input || ""]} />
      <Row inputs={candidates || []} />
    </div>
  );
};

export default Table;
