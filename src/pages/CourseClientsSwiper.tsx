import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiperCertificate.css";

const clients = [
  { name: "Accenture", logo: "/home/client-logo/accenture.svg" },
  { name: "AWS", logo: "/home/client-logo/aws.svg" },
  { name: "Capgemini", logo: "/home/client-logo/capgemini.svg" },
  { name: "Deloitte", logo: "/home/client-logo/deloitte.svg" },
  { name: "Genpact", logo: "/home/client-logo/genpact.svg" },
  { name: "HP", logo: "/home/client-logo/hp.svg" },
  { name: "Intel", logo: "/home/client-logo/intel.svg" },
  { name: "Microsoft", logo: "/home/client-logo/microsoft.svg" },
  { name: "TCS", logo: "/home/client-logo/tcs.svg" },
  { name: "Tech Mahindra", logo: "/home/client-logo/tech-mahindra.svg" },
  { name: "Wipro", logo: "/home/client-logo/wipro.svg" },
  { name: "Zoho", logo: "/home/client-logo/zoho.svg" },
];

export default function CourseClientsSwiper() {
  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1E3A5F]">
          ERP Partners
        </h2>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          loop={true}
          speed={800}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 50,
            modifier: 0.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
              coverflowEffect: {
                rotate: 3,
                stretch: 0,
                depth: 30,
                modifier: 0.5,
              },
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
              coverflowEffect: {
                rotate: 4,
                stretch: 0,
                depth: 40,
                modifier: 0.5,
              },
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
              coverflowEffect: {
                rotate: 5,
                stretch: 0,
                depth: 50,
                modifier: 0.5,
              },
            },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiperCertificate mySwiper"
        >
          {clients.map((client, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  loading="lazy"
                  width="300"
                  height="300"
                  decoding="async"  
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
