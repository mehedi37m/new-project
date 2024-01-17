import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';



// import required modules
import { EffectCreative } from 'swiper/modules';

const Banner = () => {
    return (
       
            
            <>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='h-[600px]'>
                <img src="https://i.ibb.co/PD5xCyr/peter-wendt-r5-KSMkyo-Sc-unsplash.jpg" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div >
                <img className='h-[600px]' src="https://i.ibb.co/WpnM4kv/ashkan-forouzani-AFyk-Ei-Jspto-unsplash.jpg" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='h-[600px]'>
                <img src="https://i.ibb.co/jrHVQRR/elle-hughes-s-FU3-fw-Z6n-Q-unsplash.jpg" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div >
                <img className='h-[600px]' src="https://i.ibb.co/jrHVQRR/elle-hughes-s-FU3-fw-Z6n-Q-unsplash.jpg" alt="" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='h-[600px]'>
                <img src="https://i.ibb.co/jrHVQRR/elle-hughes-s-FU3-fw-Z6n-Q-unsplash.jpg" alt="" />
            </div>
            </SwiperSlide>
       
      </Swiper>
    </>
            
       
    );
};

export default Banner;