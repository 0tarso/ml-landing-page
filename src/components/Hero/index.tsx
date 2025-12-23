import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import Container from '../Container'

import heroImage from '../../assets/heroImage.png'

const Hero = () => {

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 600, 0); // Diminui até opacidade 0
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>

      <div style={{ opacity }} className=' h-screen fixed w-full max-sm:mt-16'>


        <div className='flex flex-row w-full mt-8 relative max-md:flex-col -z-0 max-sm:mt-2'>

          {/* title section */}
          <div className='z-20'>

            <p className='text-[#f6f6f6] text-[160px] leading-[160px] font-black italic mt-16 max-xl:text-[100px] max-xl:leading-[100px] transition-all max-md:mt-0 max-md:text-[60px] max-md:leading-[60px]'>MAICON</p>
            <p className='text-[#f6f6f6] text-[160px] leading-[160px] font-black italic max-xl:text-[100px] max-xl:leading-[100px] transition-all max-md:text-[60px] max-md:leading-[60px]'>LUCHESE</p>

            <motion.div className='h-2 bg-[#006FFF] mb-2 max-md:w-3/4'
              initial={{ width: 0 }}
              whileInView={{ width: "75%", transition: { duration: 2 } }}
            ></motion.div>

            <p className='text-white max-md:w-2/4 max-sm:w-4/5 text-3xl max-md:text-lg'>Superando limites, </p>
            <p className='text-white max-md:w-2/4 max-sm:w-4/5 text-3xl max-md:text-lg'>um passo de cada vez</p>

            <a href='/#competicao' className='bg-blue-600 w-[250px] h-[60px] rounded-md flex justify-center items-center mt-12 hover:bg-[#006FFF] transition-all hover:scale-105 active:scale-100 active:bg-[#009fff] hover:cursor-pointer max-sm:w-36 max-sm:h-10 max-sm:mt-8'>
              <p className='text-2xl max-sm:text-xl text-[#f6f6f6]'>Ver Mais</p>
            </a>
          </div>


          {/* iamge section */}
          <div className=' w-full relative max-md:absolute max-sm:h-screen group'>

            <div className=' overflow-clip w-full flex justify-center max-md:justify-end max-sm:h-full mt-12'>
              <motion.img
                src={heroImage}
                className='h-[1200px] z-20 drop-shadow-xl max-xl:h-[900px] mr-64 max-2xl:mr-0 transition-all max-sm:h-[800px] max-sm:absolute max-sm:mr-0 max-sm:-bottom-52 group-hover:scale-[1.01] duration-500'
                animate={{
                  opacity: 1,
                  marginRight: 20,
                  scale: 1.01,
                  transition: {
                    duration: 2,
                    ease: 'easeInOut',
                    // repeat: Infinity,
                    // repeatType: 'reverse'
                  },

                }}
                initial={{
                  opacity: 0,
                  scale: 1,
                  // marginRight: 0,
                }}
              />
            </div>

            <motion.div
              className='h-[90%] w-[350px] bg-[#006FFF] absolute bottom-0 ml-28 -z-0 -skew-x-6 max-sm:ml-0 max-sm:h-[40%] max-sm:w-full max-sm:rotate-12 max-sm:scale-150 group-hover:ml-24 transition-all duration-500 shadow-[#006fff90] shadow-[5px_-4px_20px] max-sm:group-hover:ml-0'
              animate={{
                opacity: 0.9,
                transition: {
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            ></motion.div>

          </div>

          {/* <p className='max-md:hidden text-[150px] rotate-90 text-center absolute right-[-300px] top-72 leading-[160px] font-black opacity-[0.05] text-white'>CORRIDA</p> */}
          {/* <p className='max-md:hidden  text-[150px] rotate-90 text-center absolute left-[-380px] top-72 leading-[160px] font-black opacity-[0.05] text-white'>ESPORTE</p> */}
        </div>

      </div>
    </Container>
  )
}

export default Hero