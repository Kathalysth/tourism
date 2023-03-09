import { useRef, useState } from "react";
import { Navigation, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./data";
import { stateType } from "./data/types";
import Navbar from "./components/Navbar";
import StateCard from "./components/StateCard";

function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [previousState, setPreviousState] = useState("");
  const [nextState, setNextState] = useState("");

  function handleChangeStateName(data: Array<stateType>, index: number) {
    if (data.length > index + 1) {
      setNextState(data[index + 1].name);
    } else {
      setNextState("");
    }
    if (index - 1 >= 0) {
      setPreviousState(data[index - 1].name);
    } else {
      setPreviousState("");
    }
  }

  return (
    <main className="max-h-screen">
      <Navbar />
      <Swiper
        tag="ul"
        className="max-h-screen relative"
        modules={[Navigation, A11y, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        direction="vertical"
        onSlideChange={(swiper) => {
          handleChangeStateName(data, swiper.activeIndex ?? 0);
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          handleChangeStateName(data, swiper.activeIndex ?? 0);
        }}
      >
        {data.map((state: stateType) => {
          return (
            <SwiperSlide
              tag="li"
              className="relative bg-gradient-to-r to-slate-50 from-indigo-300"
              key={state.name.toLowerCase()}
            >
              <div
                style={{
                  backgroundImage: `url('/${state.url}/${state.url}.webp')`,
                }}
                className="bg-gradient-to-r to-slate-50 from-indigo-300 background_state absolute top-0 left-0 right-0 bottom-0 -z-[1]"
              />
              <StateCard state={state} />
            </SwiperSlide>
          );
        })}

        <div className="absolute md:h-full w-full md:w-fit left-0 top-0 z-[40]">
          <ul className="flex md:flex-col w-full md:h-full items-center md:items-start justify-between px-4 py-16 md:pl-20">
            <li
              ref={prevRef}
              className="text-xl md:text-5xl font-extrabold select-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100  capitalize tracking-wider font_ animate__animated animate__fadeIn">
                {previousState}
              </span>
            </li>
            <li
              ref={nextRef}
              className="text-xl md:text-5xl font-extrabold select-none"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-100  capitalize tracking-wider font_ animate__animated animate__fadeIn">
                {nextState}
              </span>
            </li>
          </ul>
        </div>
      </Swiper>
    </main>
  );
}

export default App;
