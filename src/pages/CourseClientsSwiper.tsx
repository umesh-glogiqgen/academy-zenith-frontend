import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./swiperCertificate.css";

const clients = [
  "/home/client-logo/accenture.svg",
  "/home/client-logo/aws.svg",
  "/home/client-logo/capgemini.svg",
  "/home/client-logo/deloitte.svg",
  "/home/client-logo/genpact.svg",
  "/home/client-logo/hp.svg",
  "/home/client-logo/intel.svg",
  "/home/client-logo/microsoft.svg",
  "/home/client-logo/tcs.svg",
  "/home/client-logo/tech-mahindra.svg",
  "/home/client-logo/wipro.svg",
  "/home/client-logo/zoho.svg",
];

export default function CourseClientsSwiper() {
  return (
    <section className="rotatingSwiper bg-[#f7f7f7] py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1E3A5F]">
          ERP Partners
        </h2>
        <Swiper
          modules={[Autoplay]}
          loop
          grabCursor
          slidesPerView={5}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000} // continuous speed
          allowTouchMove={false}
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="rotating-carousel"
        >
          {clients.map((src, i) => (
            <SwiperSlide key={i} className="rotating-slide">
              <div className="card3D">
                <img src={src} alt={`client-${i}`} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
