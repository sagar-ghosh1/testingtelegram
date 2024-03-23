import React from 'react';
import Container from '../Container/Container';
import featuresIcon1 from '@/assets/features/Group64.png';
import featuresIcon2 from '@/assets/features/Group65.png';
import featuresIcon3 from '@/assets/features/Group66.png';

const Features = () => {
  return (
    <div id='features'>
      <Container>
        <div>
          {/* title part  */}
          <h2 className='mt-[90px] mb-[60px] text-[#EAE8E1] font-manrope text-[47px] font-bold leading-[54.05px]' data-aos="fade-up"
                data-aos-duration="2000">Key Features </h2>

          {/* card section  */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-[30px]'>
            <div className='px-[30px] pt-[30px] bg-[#201B15] border border-[#3d2d1a] rounded-[30px] relative overflow-hidden' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">

              {/* Shadow */}
              <div className='w-[281px] h-[80px] lg:h-[120px] cardShadow absolute bottom-0' />

              <img className='mb-[30px] mix-blend-screen' src={featuresIcon1} alt="image" />
              <p className='mb-[16px] text-[#EAE8E1] font-manrope text-[26px] font-bold leading-[36.4px]'>Block analysis</p>
              <p className='mb-[30px] text-[#A5A39B] font-inter leading-[25.6px]'>Was the launch bundled? Who was first? How much did they bribe?</p>
            </div>

            <div className='px-[30px] pt-[30px] bg-[#201B15] border border-[#3d2d1a] rounded-[30px] relative overflow-hidden' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">

              {/* Shadow */}
              <div className='w-[281px] h-[80px] lg:h-[120px] cardShadow absolute bottom-0' />

              <img className='mb-[30px] mix-blend-screen' src={featuresIcon2} alt="image" />
              <p className='mb-[16px] text-[#EAE8E1] font-manrope text-[26px] font-bold leading-[36.4px]'>Tax inspector</p>
              <p className='mb-[30px] text-[#A5A39B] font-inter leading-[25.6px]'>Did the launch have tax? How much money did the tax wallet receive?</p>
            </div>

            <div className='px-[30px] pt-[30px] bg-[#201B15] border border-[#3d2d1a] rounded-[30px] relative overflow-hidden' data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000">

              {/* Shadow */}
              <div className='w-[281px] h-[80px] lg:h-[120px] cardShadow absolute bottom-0' />

              <img className='mb-[30px] mix-blend-screen' src={featuresIcon3} alt="image" />
              <p className='mb-[16px] text-[#EAE8E1] font-manrope text-[26px] font-bold leading-[36.4px]'>Insider tracker</p>
              <p className='mb-[30px] text-[#A5A39B] font-inter leading-[25.6px]'>Enter a list of addresses to cross reference tokens they all bought.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;