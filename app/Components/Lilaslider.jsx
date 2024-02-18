"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const partnersLogos = [
  "Apple",
  "Google",
  "Facebook",
  "IBM",
  "Autodesk",
  "Infosys",
  "Linkdin",
  "Microsoft",
  "Msnote",
  "Tata",
];

function SampleNextArrow(props) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "hidden" }} />;
}

const Lilaslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="border  bg-gray-100 pt-6 pb-6">
      <h2 className="Education-partner ">Our Leading Education Partners</h2>
      <h1
        className="lg:text-xl lg:font-normal text-center 
    md:text-xl md:font-normal
    text-xs text-gray-500"
      >
        Our Premium Education Partners
      </h1>
      <Slider {...settings}>
        {partnersLogos.map((partnersLogo, index) => (
          <img
            className="lg:h-20 md:h-12 h-8 m-4"
            src={`${partnersLogo}.svg`}
            alt={partnersLogo}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Lilaslider;
