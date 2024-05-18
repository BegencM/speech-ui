import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/virtual";
import "swiper/css/autoplay";
// import "swiper/css/effect-fade";
import { Typography } from "antd";
import { Autoplay } from "swiper/modules";
import MovieCard from "../components/movie/MovieCard";
import { useMediaQuery } from "react-responsive";

type SliderType = "reverse" | "defualt";

const Movies = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const MoviesSlider = (props: { type: SliderType }) => {
    return (
      <Swiper
        spaceBetween={15}
        slidesPerView={isTabletOrMobile ? 2 : 6}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          reverseDirection: props.type == "reverse",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {new Array(10).fill(0).map((_, index) => {
          return (
            <SwiperSlide>
              <MovieCard image="/images/movie.jpg" onClick={() => {}} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Typography id="service-title">Hemme zat normalnyy</Typography>
        <Typography>Hemme zat normalnyy</Typography>
      </div>
      <br />
      <MoviesSlider type="defualt" />
      <br />
      <MoviesSlider type="reverse" />
    </div>
  );
};

export default Movies;
