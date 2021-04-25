import React from "react";
import "./index.css";

type ButtonProps = {
  text: string;
  title: string;
  onClick: (key: string) => void;
};

const Button = ({ title, text, onClick }: ButtonProps) => (
  <button title={title} className="ipa" onClick={() => onClick(text)}>
    {text}
  </button>
);

export default Button;
