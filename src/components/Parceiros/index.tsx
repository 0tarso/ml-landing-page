import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import aGranjaLogo from '../../assets/aGranjaLogo.jpg'
import formulaLogo from '../../assets/formulaLogo.jpg'
import metalForteLogo from '../../assets/metalForteLogo.jpg'
import mercadoDalmolin from '../../assets/redeFortLogo.jpg'
import vidracariaCentroSerra from '../../assets/vidracariaCentroSerraLogo.jpg'
import { motion } from 'motion/react'

// Import Swiper styles
import 'swiper/types'

//@ts-expect-error: Swiper CSS import is required but TypeScript does not recognize it
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

type ParceiroSlideType = {
  name: string,
  group: string,
  logo: string
}


const Parceiros = () => {

  const parceirosSlide: ParceiroSlideType[] = [
    { name: 'Fórmula', group: 'Academia', logo: formulaLogo },
    { name: 'A Granja', group: 'Agropecuária', logo: aGranjaLogo },
    { name: 'Metal Forte', group: 'Metalúrgica', logo: metalForteLogo },
    { name: 'Dalmolin', group: 'Mercado', logo: mercadoDalmolin },
    { name: 'Centro Serra', group: 'Vidraçaria', logo: vidracariaCentroSerra },
  ]

  return (
    <motion.div className=' opacity-0 h-screen -z-0 overflow-x-clip max-sm:h-[350px]'
      whileInView={{
        marginTop: 150,
        opacity: 1,
        transition: {
          duration: 0.7,
          delay: 0.2
        }
      }}
    >

      <motion.p className=' text-[#f6f6f6] text-[160px] leading-[160px] font-extrabold mt-16 max-xl:text-[100px] max-xl:leading-[100px] transition-all max-md:mt-0 max-md:text-[60px] max-md:leading-[60px] z-10 will-change-transform pl-2'
      >PARCEIROS</motion.p>

      <Swiper
        className='w-full mt-2 '
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 1000 }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
      >
        {parceirosSlide && parceirosSlide.map(parceiro => (
          <SwiperSlide className=''>
            <div className='w-[300px] h-[300px] flex flex-col justify-center items-center rounded-xl max-sm:w-[150px] max-sm:h-[200px]'>
              <div className='w-[200px] h-[200px] max-sm:w-[100px] max-sm:h-[100px] hover:scale-105 transition-all duration-500'>
                <img src={parceiro.logo} className='rounded-full shadow-xl border-[#0606ff] border-2' />

              </div>
              <p className='text-3xl font-bold text-[#f6f6f6] max-sm:text-xl'>{parceiro.name}</p>
              <p className='text-xl text-[#f6f6f6] max-sm:text-lg'>{parceiro.group}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className='h-2/4 w-full absolute bottom-12 bg-[#006fff] shadow-[#006fff90] shadow-[5px_-10px_20px] -z-10 max-sm:h-1/4 '></div> */}
    </motion.div>
  )
}

export default Parceiros