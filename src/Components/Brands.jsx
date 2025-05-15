import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/alko.png"
import image2 from "../assets/ALQ.webp"
import image3 from "../assets/american.jpg"
import image4 from "../assets/angarkha.jpg"
import image5 from "../assets/bently.jpg"
import image6 from "../assets/bold.svg"
import image7 from "../assets/botai.png"
import image8 from "../assets/brracs.png"
import image9 from "../assets/casegear.png"
import image10 from "../assets/gym.jpg"
import image11 from "../assets/jh.png"
import image12 from "../assets/jwewlry1.jpg"
import image13 from "../assets/jwewlry2.jpg"
import image14 from "../assets/kazo.jpg"
import image15 from "../assets/mesai.png"
import image16 from "../assets/must.jpg"
import image17 from "../assets/of.jpg"
import image18 from "../assets/swim.jpg"
import image19 from "../assets/tokio.png"
import image20 from "../assets/wv.jpg"
const Brands = () => {
  const brandsLeft = [
   image1,image2,image3,image4,image5,image6,image7,image8,image9,image10
  ];
  const brandsRight = [
    image11,image12,image13,image14,image15,image16,image17,image18,image19,image20
  ];
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };
  const stats = [
    { value: 150, label: "Brands", description: "Collaborated with over 150 brands." },
    { value: 80, label: "Projects", description: "Working across many markets internationally." },
    { value: 15, label: "Team", description: "Spanning a dozen key capitals." },
    { value: 8, label: "Years of Expertise", description: "A decade of impactful results." },
  ];
  return (
    <motion.div className="w-full bg-gradient-to-b from-[#961B2F] to-[#961B2F] py-24 relative z-[1]">
      <motion.h2 className="text-4xl font-bold text-[#F1F3F0] text-center mb-16">
        Trusted by <span className="text-[#A6A7A3]">Leading Brands</span>
      </motion.h2>
      <div className="space-y-12">
        <div className="overflow-hidden">
          <Slider {...settings}>
            {brandsLeft.map((item, index) => (
              <div key={index} className="px-1.5"> 
                <img
                  src={item}
                  alt="brand"
                  className="w-full h-48 object-cover rounded-2xl"
                  style={{ marginRight: "10px" }} 
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="overflow-hidden">
          <Slider {...settings} rtl>
            {brandsRight.map((item, index) => (
              <div key={index} className="px-1.5">
                <img
                  src={item}
                  alt="brand"
                  className="w-full h-48 object-cover rounded-2xl"
                  style={{ marginRight: "10px" }}                 />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 text-center mt-20 px-10 gap-10 text-[#F1F3F0]">
        {stats.map((stat, index) => (
          <motion.div key={index} className="space-y-2">
            <Counter target={stat.value} />
            <h3 className="text-lg font-bold">{stat.label}</h3>
            <p className="text-sm text-gray-300">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = Math.ceil(target / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCount(start);
      }, 30);
    }
  }, [isInView, target]);

  return (
    <h2 ref={ref} className="text-5xl font-bold">
      {count}+
    </h2>
  );
};

export default Brands;
