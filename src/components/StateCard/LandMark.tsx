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
    <li className="card w-full h-full">
      <div className="space-y-2 absolute bottom-0 left-2 p-4">
        <h4 className="text-sm capitalize text-gray-100 w-full">
          {landMark.name}, {landMark.location}
        </h4>
        <RenderCirles />
      </div>
      <div className="background_landmark w-full h-full" />
    </li>
  );
}

export default LandMark;
