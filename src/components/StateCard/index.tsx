import { useRef, useState } from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { landMarkType, stateType } from "../../data/types";
import "swiper/swiper-bundle.css";
import LandMark from "./LandMark";

type stateCardProps = {
  state: stateType;
};

function StateCard({ state }: stateCardProps): JSX.Element {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="h-full grid grid-cols-2 items-center pr-4">
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
      <div>
        <div>
          <h2 className="font-extrabold mb-4 text-lg bg-clip-text text-slate-100 bg-gradient-to-b from-gray-100">
            Places you could check out
          </h2>
        </div>
        <Swiper
          className="h-96 w-full"
          modules={[Navigation, A11y]}
          spaceBetween={5}
          slidesPerView={2}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {state.landMarks.map((landMark: landMarkType, index: number) => (
            <SwiperSlide className="bg-slate-100 rounded-xl relative">
              <LandMark
                landMark={landMark}
                key={landMark.name}
                delay={index + 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center pl-2 mt-8 gap-8">
          <button
            ref={prevRef}
            className="focus:outline-none w-9 h-9 bg-transparent rounded-full border border-gray-200 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <button
            ref={nextRef}
            className="focus:outline-none w-9 h-9 bg-transparent rounded-full border border-gray-200 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default StateCard;
