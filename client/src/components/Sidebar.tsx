import React from 'react';
import Step from "./Step";

const Sidebar: React.FC<{ step: number, isMobile:Boolean }> = ({ step,isMobile }) => {
  const steps = ["Your info", "Select plan", "Add-ons", "Summary",'Completed'];
  return (
    <ol id="sidebar" className="flex justify-center md:justify-start md:flex-col md:pt-9 uppercase min-h-[180px] md:min-h-[600px]">
      {steps.map((title, i) => (
        <Step step={step} index={i + 1} title={title} key={title} isMobile={isMobile} />
      ))}
    </ol>
  );
};

export default Sidebar;
