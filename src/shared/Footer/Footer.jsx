import moonImg from '@/assets/footer/Ellipse1.png';
import logoImg from '@/assets/footer/image.png';
import line1 from '@/assets/footer/Line1.png';
import Container from '@/components/sections/Container/Container';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='-mt-72 md:mt-24' id='docs'>
      <Container>
        <div>
          <img src={moonImg} alt="Image" className='mx-auto' data-aos="fade-up"
            data-aos-duration="1000" />

          {/* Content */}
          <div className='flex justify-center -mt-[280px] md:-mt-[350px] lg:-mt-[390px]'>
            <div>
              <img src={logoImg} alt="Image" className='w-[112px] mx-auto' data-aos="fade-up"
                data-aos-duration="1500" />
              <img src={line1} alt="Image" className='w-[500px] my-6' />

              <div className="flex justify-center items-center">
                <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[12px] 2xl:p-4 rounded-full mr-3 group duration-300" data-aos="fade-up"
                  data-aos-duration="2000">
                  <FaTelegramPlane className="text-[25px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                </a>

                <a href="#" className="border border-[#FFCC4C] hover:bg-[#ffcc4c2d] p-[13px] 2xl:p-4 rounded-full group duration-300" data-aos="fade-up"
                  data-aos-duration="2000">
                  <FaXTwitter className="text-[22px] text-[#ffcc4c] group-hover:scale-110 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </Container >

      {/* All rights reserved */}
      <div className='max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 lg:px-16 md:px-10 sm:px-2 px-4 mt-32 border-t border-[#2f23118f] bg-[#EAE8E1] bg-opacity-[0.002]'>

        <div>
          <div className='text-[#A5A39B] font-inter md:flex justify-between py-5'>
            <p className='capitalize'>©2023 Early Bird. All Rights Reserved.</p>

            <div className='flex gap-x-5 mt-3 md:mt-0'>
              <a href="" className='hover:underline'>Privacy</a>
              <a href="" className='hover:underline'>Police</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
