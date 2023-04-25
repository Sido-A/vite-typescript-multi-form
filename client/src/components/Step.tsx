import React from "react";

const Step: React.FC<{
  step: number;
  index: number;
  title: string;
  isMobile: Boolean;
}> = ({ step, index, title, isMobile }) => {
  return (
    <li
      className={`steps md:mx-14 md:mb-6 md:pl-14 md:pr-9 ${
        step === index ? "active" : ""
      }`}
    >
      {!isMobile && (
        <small className="text-xs text-gray-400 -mb-2">Step {index}</small>
      )}

      {isMobile ? (
        <p className="text-sm text-white mr-11 md:mr-auto"></p>
      ) : (
        <p className="text-sm text-white">{title}</p>
      )}
    </li>
  );
};

export default Step;
