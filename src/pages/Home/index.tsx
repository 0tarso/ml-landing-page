import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Competicoes from '../../components/Competicoes'
import Parceiros from '../../components/Parceiros'
import TimeLine from '../../components/Timeline'

const Home = () => {
  return (
    <div className='bg-[#05050580]'>
      <Header />

      <div className="h-[700px] w-32 bg-[#006FFF10] absolute -skew-x-6  max-md:hidden"></div>

      <div >
        <Hero />
      </div>


      <div>
        <Competicoes />
      </div>

      <TimeLine />

      <div className="">
        <Parceiros />
      </div>

    </div>
  )
}

export default Home