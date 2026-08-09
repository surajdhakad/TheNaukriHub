import { useEffect, useState } from "react";
import "./PlacedStudents.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { getPlacements } from "../../../Api/PlacementApi";
import PlacementCard from "./PlacementCard";

import sectionBg from "../../../assets/Images/upcoming-placement-background.jpeg";

const PlacedStudents = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlacements = async () => {
    try {
      const res = await getPlacements();
      setPlacements(res.data.placements || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlacements();
  }, []);

  return (
    <section
      className="placed-students"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      <div className="placed-overlay"></div>

      <div className="placed-container">

        <div className="section-title">

          <h2>Our Placed Students</h2>

          <p>
            Meet our successful students who secured careers in India's
            leading banks and financial institutions through
            <strong> NaukriHub</strong>.
          </p>

        </div>

        {loading ? (

          <h3 className="loading">
            Loading Placements...
          </h3>

        ) : placements.length === 0 ? (

          <h3 className="loading">
            No Placements Found
          </h3>

        ) : (

          <Swiper
            modules={[Autoplay, Pagination]}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}

            pagination={{
              clickable: true,
            }}

            loop={placements.length > 3}

            speed={700}

            watchOverflow={true}

            centeredSlides={false}

            spaceBetween={30}

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {placements.map((placement) => (

              <SwiperSlide key={placement._id}>

                <PlacementCard placement={placement} />

              </SwiperSlide>

            ))}
          </Swiper>

        )}

      </div>
    </section>
  );
};

export default PlacedStudents;