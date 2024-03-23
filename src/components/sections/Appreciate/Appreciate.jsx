import { useEffect, useRef } from "react";
import Container from "../Container/Container";
import img from '@/assets/ideas/imageremovebg.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Appreciate = () => {
  const vidRef = useRef();

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.muted = false;
    }
  }, []);

  return (
    <div className="overflow-hidden relative lg:h-[520px] xl:h-[600px]" id="appreciate">
      <div className="overflow-hidden flex justify-center items-center relative">
        {/* video */}
        <div className="relative">
          <div className="w-full h-[2px] bg-[#2c281e] absolute top-0" />
          <div className="w-full h-[2px] bg-[#2c281e] absolute bottom-[517px] md:bottom-[0px] lg:bottom-[57px] xl:bottom-[160px] 2xl:bottom-[415px]" />
          <video
            className="h-[1280px] md:h-auto 2xl:-mt-14"
            muted
            autoPlay
            loop
            src='https://res.cloudinary.com/dyzbg4knq/video/upload/v1710883342/ue7gcmhaa5nhlxtmzk3y.mp4'
          ></video>
        </div>

        <div className="absolute w-full h-[52vh] md:h-full bg-[#151414] bg-opacity-40 2xl:-mt-10">
          <Container>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 -mt-[360px] md:mt-10 2xl:mt-16">
              <div className="mt-8 md:mt-0">
                <h1 className="text-[#ffffff] text-[40px] lg:text-[45px] 2xl:text-[47px] font-manrope font-semibold leading-[55px]" data-aos="fade-up"
                  data-aos-duration="1000">We would greatly <br /> appreciate hearing <br /> your ideas.</h1>

                <p className="text-[#EAE8E1] text-[18px] font-inter mt-4 mb-8" data-aos="fade-up"
                  data-aos-duration="1500">We eagerly await your valuable insight</p>

                {/* Custom Button */}
                <div className="flex items-center" data-aos="fade-up"
                  data-aos-duration="2000">
                  <a href="#" className="border border-[#3e3f3d] bg-[#383937a2] hover:bg-[#434642] p-[12px] 2xl:p-4 rounded-full mr-3 group duration-300">
                    <FaTelegramPlane className="text-[25px] text-[#FFFFFF] group-hover:scale-110 duration-300" />
                  </a>

                  <a href="#" className="border border-[#3e3f3d] bg-[#383937a2] hover:bg-[#434642] p-[13px] 2xl:p-4 rounded-full group duration-300">
                    <FaXTwitter className="text-[22px] text-[#FFFFFF] group-hover:scale-110 duration-300" />
                  </a>
                </div>
              </div>

              {/* Image */}
              <img src={img} alt="Image" className="scale-110 md:scale-100 w-[200px] md:w-[200px] lg:w-[250px] xl:w-[295px] 2xl:w-[300px]" />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Appreciate;
