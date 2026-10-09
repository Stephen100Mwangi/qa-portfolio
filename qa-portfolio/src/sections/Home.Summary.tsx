import CTA from "../components/CTA";
import { Check, Download, ShieldCheck } from "lucide-react";

const keyMetrics = ["Tests Passing", "Build Successful", "Coverage: 85%"];
const keyIndicators = ["#00B87A", "#EF5350", "#F5B942"];

const Summary = () => {
  return (
    <div className="summary flex justify-between gap-10 items-center px-10 py-5">
      <div className="leftPanel w-1/2 flex flex-col gap-2">
        <p className="text-lg font-bold uppercase text-primary-bright">
          Quality Assurance Engineer
        </p>
        <p className="font-bold text-4xl">Stephen Wahome</p>
        <p className="supportText text-lg font-medium">
          Breaking Software before users do.
        </p>
        <p className="description font-light text-base">
          I'm a QA Engineer with a passion for quality, automation and building
          reliable software. I specialize in manual and automated testing, API
          testing, and integration testing for web and enterprise applications.
        </p>

        <div className="flex gap-3 my-5">
          <CTA text="View Work" icon={<ShieldCheck />} />
          <CTA text="Download Resume" icon={<Download />} />
        </div>
      </div>
      <div className="rightPanel relative w-1/2 flex justify-center items-center">
        <img src="././public/QAE.svg" alt="Hero Image" className="heroImage" />
        <div className="absolute border-border w-40 bg-[#021020] text-text-primary rounded-md p-3 flex flex-col gap-3 top-5 right-5">
          <div className="keyIndicators flex gap-2">
            {keyIndicators.map((color, index) => (
              <div
                key={index}
                className="indicator size-2 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <div className="keyMetrics flex flex-col gap-1 text-sm -translate-x-2 font-light">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="metric flex items-center gap-1">
                <span>
                  <Check className="scale-50" />
                </span>
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
