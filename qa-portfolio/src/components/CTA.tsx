import React from "react";

interface CTAProps {
  text: string;
  icon?: React.ReactNode;
  color?: string;
}

const CTA = ({ text, icon }: CTAProps) => {
  return (
    <div
      className={`cta flex items-center gap-2 cursor-pointer text-sm border p-2 rounded-md transition-all duration-300`}
    >
      <span className="scale-75">{icon}</span>
      <p>{text}</p>
    </div>
  );
};

export default CTA;
