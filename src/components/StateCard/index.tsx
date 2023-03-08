import { stateType } from "../../data/types";

type stateCardProps = {
  state: stateType;
};

function StateCard({ state }: stateCardProps): JSX.Element {
  return (
    <section className="grid grid-cols-2">
      <div className="navigation__wrapper relative h-full">
        <ul className="flex flex-col justify-center pl-20 h-full text-start">
          <li className="text-7xl font-extrabold tracking-wider">
            <span className="bg-clip-text  text-gray-100 capitalize font_">
              {state.name}
            </span>
            <p className="text-xs text-gray-200 w-96 font-medium mt-7 capitalize">
              {state.description}
            </p>
          </li>
        </ul>
      </div>

      <main className="pr-5">
        <section className="py-10 mt-10">
          <ul className="flex items-center space-x-4">
            <li className="card">
              <main className="space-y-3">
                <div className="space-y-2">
                  <h4 className="text-sm capitalize text-gray-100 w-full">
                    Great Barrier Reif, australia
                  </h4>
                  <div>
                    <ul className="flex items-center space-x-1">
                      <li className="w-2 h-2 rounded-full bg-gray-50"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-50"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                    </ul>
                  </div>
                </div>
                <div className="bg_barrier_reif">
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
              </main>
            </li>

            <li className="mt-10 card">
              <main className="space-y-3">
                <div className="space-y-2">
                  <h4 className="text-sm capitalize text-gray-900 w-full">
                    opera house, australia
                  </h4>
                  <div>
                    <ul className="flex items-center space-x-1">
                      <li className="w-2 h-2 rounded-full bg-gray-50"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-50"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img
                    src="/aus/opera.jpg"
                    alt="opera house"
                    className="bg_common"
                  />
                </div>
              </main>
            </li>

            <li className="mt-10 card">
              <main className="space-y-3">
                <div className="space-y-2">
                  <h4 className="text-sm capitalize text-gray-900 w-full">
                    gold cost, australia
                  </h4>
                  <div>
                    <ul className="flex items-center space-x-1">
                      <li className="w-2 h-2 rounded-full bg-gray-50"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-50"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                      <li className="w-2 h-2 rounded-full bg-gray-600"></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <img
                    src="/aus/gold-cost.jpg"
                    alt="gold cost"
                    className="bg_common"
                  />
                </div>
              </main>
            </li>
          </ul>
        </section>
        <div className="flex items-center space-x-3">
          <button className="focus:outline-none w-9 h-9 bg-transparent rounded-full border border-gray-200 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <button className="focus:outline-none w-9 h-9 bg-transparent rounded-full border border-gray-200 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </main>
    </section>
  );
}

export default StateCard;
