import classnames from "classnames";

function City({
  city,
  delay,
}: {
  city: { name: string };
  delay: number;
}): JSX.Element {
  return (
    <li
      className={classnames(
        "card animate__animated animate__fadeIn",
        `animate__delay-${delay}s`
      )}
    >
      <div className="space-y-3">
        <div className="space-y-2">
          <h4 className="text-sm capitalize text-gray-200 w-full">
            {city.name}
          </h4>
          <div>
            <ul className="flex items-center space-x-1">
              <li className="w-2 h-2 rounded-full bg-gray-200"></li>
              <li className="w-2 h-2 rounded-full bg-gray-200"></li>
              <li className="w-2 h-2 rounded-full bg-gray-300"></li>
              <li className="w-2 h-2 rounded-full bg-gray-300"></li>
              <li className="w-2 h-2 rounded-full bg-gray-300"></li>
            </ul>
          </div>
        </div>
        <div className="bg_bali">
          <div className="m-3 float-right bg-gray-100 w-7 h-7 rounded-full flex items-center justify-center">
            <button className="focus:outline-none text-gray-400 hover:text-gray-500">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default City;
