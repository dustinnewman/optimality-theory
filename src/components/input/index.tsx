import React from "react";
import save_candidates from "../../utils/save-candidates";
import save_input from "../../utils/save-input";
import Keyboard from "./keyboard";

const Input = () => (
  <section>
    <h1>Input</h1>
    <Keyboard save={save_input} />
    <h1>Candidates</h1>
    <p>Use commas to separate inputs.</p>
    <Keyboard save={save_candidates} />
  </section>
);

export default Input;
