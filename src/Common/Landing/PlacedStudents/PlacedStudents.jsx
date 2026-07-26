import { useEffect, useState } from "react";
import "./PlacedStudents.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { getPlacements } from "../../../Api/PlacementApi";
import PlacementCard from "./PlacementCard";

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
    <section className="placed-students">

      <div className="section-title">

        <h2>Our Placed Students</h2>

        <p>
          Students placed in top companies through NaukariHub
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
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          }}
        >

          {placements.map((placement) => (

            <SwiperSlide key={placement._id}>

              <PlacementCard
                placement={placement}
              />

            </SwiperSlide>

          ))}

        </Swiper>

      )}

    </section>
  );
};

export default PlacedStudents;