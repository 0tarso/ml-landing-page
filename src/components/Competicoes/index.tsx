
import { motion } from 'motion/react'

import trilhasLogo from '../../assets/trilhasLogo.png'

import competicaoImg from '../../assets/competicaoImg.png'
import tttLogo from '../../assets/tttLOGO.png'

type CompeticoesType = {
  name: string,
  overview: string,
  logo: string
}

const Competicoes = () => {

  const competicoes: CompeticoesType[] = [
    { name: 'Trilhas e Montanhas', overview: 'X provas - Y pódiums', logo: trilhasLogo },
    { name: 'Travessia Torres Tramandaí', overview: '6km - 12min', logo: tttLogo },
    { name: 'Trilhas e Montanhas', overview: 'X provas - Y pódiums', logo: trilhasLogo }
  ]

  return (
    // <Container>

    <div className='w-full h-[900px] relative flex flex-row justify-between overflow-hidden max-md:flex-col max-md:h-full' id='competicao' >


      {/*  */}
      <p className='text-[#f6f6f6] text-[160px] leading-[160px] font-extrabold mt-8 max-xl:text-[120px] max-xl:leading-[120px] transition-all absolute z-10 left-10 max-lg:text-[100px] max-md:text-[80px] max-md:mt-0 max-md:left-2 max-sm:text-[50px]'>COMPETIÇÕES</p>

      {/* section image */}
      <div className='flex px-20 max-sm:px-0 max-sm:justify-center'>

        <div className='w-[400px] z-10 mt-36 ml-12 hover:scale-105 transition-all duration-700 max-lg:w-[300px] max-md:w-[250px] max-md:mt-20 max-sm:w-[350px]'>
          <img src={competicaoImg} className='z-10 scale-x-[-1] drop-shadow-2xl ' />
        </div>

      </div>

      <div className='z-20 h-full w-full flex flex-col justify-center items-end pr-7 max-md:pr-0 max-md:pl-0  max-md:items-center'>
        <div className='w-full flex justify-end mt-32 max-md:mt-10 max-md:w-4/5'>
          <p className=' w-3/4 text-center text-xl mb-4 text-white max-xl:w-full max-lg:text-lg max-md:text-xl'>Como um atleta que está sempre atrás de um novo desafio, tenho na bagagem diversas experiências que me motivam a ir além. Algumas podem ser vistas abaixo</p>
        </div>

        <div className='w-full flex flex-col items-end gap-y-4 max-md:px-4'>

          {competicoes && competicoes.map(competicao => (
            <motion.div className='flex flex-row items-center justify-between w-3/4 bg-[#f6f6f6] p-2 px-5 rounded-lg -skew-x-6 hover:scale-[1.02] transition-all max-xl:w-full hover:rounded-none hover:drop-shadow-xl'
              initial={{ opacity: 0, marginTop: 35 }}
              // animate={{ opacity: 1 }}
              whileInView={{ opacity: 1, marginTop: 0 }}
            >
              <div>
                <p className='text-[#050505] font-bold text-3xl max-sm:text-xl'>{competicao.name}</p>
                <p className='text-black text-xl max-sm:text-lg'>{competicao.overview}</p>
              </div>

              <div className=''>
                <img src={competicao.logo} className='object-contain w-[100px] max-sm:w-[70px]' />
              </div>
            </motion.div>
          ))}



        </div>
      </div>

      <div className=' bg-[#006FFF] shadow-[#006fff90] shadow-[5px_10px_20px] w-full h-3/5 absolute top-0 rotate-6 -skew-x-6 scale-150 max-md:h-2/5'></div>
    </div>

    // </Container >
  )
}

export default Competicoes