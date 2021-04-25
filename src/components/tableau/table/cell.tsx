import React from "react";

type CellProps = {
  input: string;
};

const Cell = ({ input }: CellProps) => <div id="tableau-cell">{input}</div>;

export default Cell;
