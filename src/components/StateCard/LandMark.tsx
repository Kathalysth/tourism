import { landMarkType } from "../../data/types";
import RenderRatings from "../RenderRatings";

function LandMark({
  landMark,
  delay,
}: {
  landMark: landMarkType;
  delay: number;
}): JSX.Element {
  return (
    <div className="h-full bg-transparent rounded-xl">
      <div className="p-2">
        <h4 className="text-sm  bg-transparent capitalize text-gray-100 w-full">
          {landMark.name}, {landMark.location}
        </h4>
        <RenderRatings rating={landMark.rating} />
      </div>
      <div className="card w-full h-full  rounded-xl">
        <div
          style={{
            backgroundImage: `url('/${landMark.url}.webp')`,
          }}
          className="background_landmark w-full h-full  rounded-xl"
        />
      </div>
    </div>
  );
}

export default LandMark;
