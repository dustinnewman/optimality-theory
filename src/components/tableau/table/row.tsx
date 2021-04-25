import React from "react";
import Cell from "./cell";

type RowProps = {
  inputs: string[];
};

const Row = ({ inputs }: RowProps) => (
  <div id="tableau-row">
    {inputs.map((input) => (
      <Cell key={input} input={input} />
    ))}
  </div>
);

export default Row;
