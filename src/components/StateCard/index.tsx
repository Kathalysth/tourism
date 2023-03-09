import { useRef } from "react";
import { Navigation, A11y, Autoplay, EffectCoverflow } from "swiper";
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
    <section className="h-full grid grid-cols-1 md:grid-cols-2 items-center px-4 md:pr-4">
      <div className="navigation__wrapper relative h-full">
        <div className="flex flex-col justify-center pl-20 h-full text-start">
          <div className="text-7xl font-extrabold tracking-wider pt-8">
            <span className="bg-clip-text  text-gray-100 capitalize font_ animate__animated animate__fadeIn">
              {state.name}
            </span>
            <p className="text-xl text-gray-200/[0.8]">{state.capital}</p>
            <p className="text-xs text-gray-200 w-96 font-black mt-7 capitalize bg-slate-50/[0.2] p-4 ">
              {state.description}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-4 items-center  mb-4">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <h2 className="font-extrabold  text-lg bg-clip-text text-slate-100 bg-gradient-to-b from-gray-100">
            Places you could check out
          </h2>
        </div>
        <Swiper
          tag="ul"
          className="h-96 w-full"
          modules={[Navigation, A11y, Autoplay, EffectCoverflow]}
          spaceBetween={5}
          slidesPerView={2}
          effect="coverflow"
          lazyPreloaderClass="swiper-lazy-preloader"
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{
            delay: 5000,
          }}
          breakpoints={{
            1600: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1300: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            900: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
            },
          }}
        >
          {state.landMarks.map((landMark: landMarkType, index: number) => (
            <SwiperSlide
              tag="li"
              className="bg-transparent rounded-xl relative"
              key={landMark.name}
            >
              <LandMark landMark={landMark} delay={index + 1} />
            </SwiperSlide>
          ))}
        </Swiper>

        <ul className="flex items-center pl-2 mt-8 gap-8">
          <li>
            <button
              role="button"
              type="button"
              aria-label="prev button"
              ref={prevRef}
              className="focus:outline-none w-9 h-9 p-2 bg-transparent rounded-full border border-gray-200 flex items-center justify-center"
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
          </li>

          <li>
            <button
              role="button"
              type="button"
              aria-label="next button"
              ref={nextRef}
              className="focus:outline-none w-9 h-9 p-2 bg-transparent rounded-full border border-gray-200 flex items-center justify-center"
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
          </li>
        </ul>
      </div>
    </section>
  );
}

export default StateCard;
