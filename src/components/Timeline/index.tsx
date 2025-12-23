import React from 'react'
import { motion } from 'motion/react'

//@ts-expect-error: Typescript não encontra o módulo
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaRoad, FaRunning } from "react-icons/fa";
import { FaRankingStar } from 'react-icons/fa6';

type EventType = {
  title: string
  locale: string
  description: string
  date: string
  icon: React.ReactNode
}

const TimeLine = () => {

  const events: EventType[] = [
    { title: 'Primeira Corrida - 5km', locale: 'Sobradinho, Rio Grande do Sul', description: 'A corrida não era apenas uma prova de velocidade, mas de determinação e superação pessoal. Ao cruzar a linha de chegada, senti uma onda de realização e orgulho que jamais esquecerei.', date: '2022', icon: <FaRunning /> },
    { title: 'Primeiro Pódio - 5km', locale: 'Santa Cruz do Sul, Rio Grande do Sul', description: 'Subir ao pódio pela primeira vez foi um momento indescritível. A sensação de ver todo o esforço recompensado trouxe uma alegria imensa e a certeza de que estava no caminho certo.', date: '2023', icon: <FaRankingStar /> },
    { title: 'Meia Maratona', locale: 'Santa Cruz do Sul, Rio Grande do Sul', description: 'Correr uma meia maratona foi como embarcar em uma montanha-russa de emoções. E ao cruzar a linha de chegada, foi como se eu tivesse conquistado o mundo!', date: '2023', icon: <FaRoad /> },
    { title: 'Meia Maratona', locale: 'Santa Cruz do Sul, Rio Grande do Sul', description: 'Correr uma meia maratona foi como embarcar em uma montanha-russa de emoções. E ao cruzar a linha de chegada, foi como se eu tivesse conquistado o mundo!', date: '2023', icon: <FaRoad /> },
    { title: 'Meia Maratona', locale: 'Santa Cruz do Sul, Rio Grande do Sul', description: 'Correr uma meia maratona foi como embarcar em uma montanha-russa de emoções. E ao cruzar a linha de chegada, foi como se eu tivesse conquistado o mundo!', date: '2023', icon: <FaRoad /> },
  ]


  return (
    <motion.div className='opacity-0 mt-12 relative pt-8 overflow-x-clip max-sm:mt-24 bg-[#006fff]'
      whileInView={{
        opacity: 1
      }}
    >


      <div className='relative z-20' id='historia'>
        <p className='pl-10 text-[#f6f6f6] text-[160px] leading-[160px] font-extrabold mt-16 max-xl:text-[100px] max-xl:leading-[100px] transition-all max-md:mt-0 max-md:text-[60px] max-md:leading-[60px] max-sm:pl-6'>HISTÓRIA</p>
      </div>

      <VerticalTimeline
        layout={'1-column-left'}
        className='z-20'
      >

        {events && events.map(eventItem => (

          <motion.div className='mt-8 opacity-0 z-10'
            whileInView={{
              opacity: 1
            }}
          >

            <VerticalTimelineElement
              className="vertical-timeline-element--work w-4/5 max-sm:w-11/12 -skew-x-3 z-10 "
              contentStyle={{ background: '#f6f6f6', color: '#050505', borderRadius: '10px' }}
              contentArrowStyle={{ borderRight: '10px solid  #a6a6a6' }}
              date={eventItem.date}
              iconStyle={{ background: '#f6f6f6', color: '#006fff' }}
              icon={eventItem.icon}

            >
              <h3 className="vertical-timeline-element-title text-2xl text-[#006fff]">{eventItem.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{eventItem.locale}</h4>
              <p className=''>{eventItem.description}</p>
            </VerticalTimelineElement>
          </motion.div>
        ))}


      </VerticalTimeline>

      <div className='absolute h-[70%] w-full bg-[#006fff] shadow-[#006fff90] shadow-[1px_-10px_20px] top-12 -z-0 rotate-6 scale-125 max-sm:scale-150'></div>
    </motion.div>
  )
}

export default TimeLine