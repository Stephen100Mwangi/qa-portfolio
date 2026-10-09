import { ShieldCheck, Zap, BugOff, Sprout } from "lucide-react";

const MyMetrics = [
  { icon: <ShieldCheck />, text: "Test Coverage", value: "85%" },
  { icon: <Zap />, text: "Faster Test Execution", value: "60%" },
  { icon: <BugOff />, text: "Fewer Post Release Defects", value: "40%" },
  { icon: <Sprout />, text: "Years of Experience", value: "2+" },
];
const Metrics = () => {
  return (
    <div className="p-10 flex justify-between shadow-md bg-[#03172B]">
      {MyMetrics.map((metric, index) => (
        <div key={index} className="metric flex items-center gap-5">
          <span className="text-primary-bright scale-125">{metric.icon}</span>
          <div className="flex flex-col">
            <p className="text-lg font-bold text-lg">{metric.value}</p>
            <p className="font-light text-base">{metric.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
