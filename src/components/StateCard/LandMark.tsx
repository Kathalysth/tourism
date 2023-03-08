import { landMarkType } from "../../data/types";
import RenderCirles from "../RenderCirles";

function LandMark({
  landMark,
  delay,
}: {
  landMark: landMarkType;
  delay: number;
}): JSX.Element {
  return (
    <li className="h-full bg-transparent rounded-xl">
      <div className="p-2">
        <h4 className="text-sm  bg-transparent capitalize text-gray-100 w-full">
          {landMark.name}, {landMark.location}
        </h4>
        <RenderCirles />
      </div>
      <div className="card w-full h-full  rounded-xl">
        <div
          style={{
            backgroundImage: `url('/${landMark.url}.jpg')`,
          }}
          className="background_landmark w-full h-full  rounded-xl"
        />
      </div>
    </li>
  );
}

export default LandMark;
