import Featured from "../sections/Learning.Featured";
import Header from "../sections/Learning.Header";
import Paths from "../sections/Learning.Paths";

const Learning = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <Featured></Featured>
      <Paths></Paths>
    </div>
  );
};

export default Learning;
