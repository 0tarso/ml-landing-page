import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoMaicon from '../../assets/logoMarcaMaicon.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className={`py-4 px-20 flex bg-black justify-between items-center z-30 max-xl:px-4 transition-all duration-500 fixed z-999 w-full ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <a href='/' className='block font-bold text-white hover:cursor-pointer'>
        <img src={logoMaicon} className='w-20 hover:animate-pulse transition-all duration-150' alt='Logo' />
      </a>

      {/* Ícone do menu hambúrguer */}
      <button
        className='sm:hidden text-white'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menu de navegação */}
      <div className={`sm:flex gap-x-10 absolute sm:relative top-full w-full bg-black sm:bg-transparent flex-col sm:flex-row left-0 max-sm:h-[900px] items-center justify-end transition-all duration-500 max-sm:justify-center ${menuOpen ? 'flex' : 'hidden'} z-9999`}>
        <a className='text-white py-2 sm:py-0 max-sm:text-3xl max-sm:-mt-64 hover:border-b-2 border-[#006fff] transition-all duration-150' href='#' onClick={() => closeMenu()}>INÍCIO</a>
        <a className='text-white py-2 sm:py-0 max-sm:text-3xl max-sm:mt-8 hover:border-b-2 border-[#006fff] transition-all duration-150' href='#competicao' onClick={() => closeMenu()}>COMPETIÇÕES</a>
        <a className='text-white py-2 sm:py-0 max-sm:text-3xl max-sm:mt-8 hover:border-b-2 border-[#006fff] transition-all duration-150' href='#historia' onClick={() => closeMenu()}>HISTÓRIA</a>
        <a className='text-white py-2 sm:py-0 max-sm:text-3xl max-sm:mt-8 hover:border-b-2 border-[#006fff] transition-all duration-150' href='#' onClick={() => closeMenu()}>CONTATO</a>
      </div>
    </div>
  );
};

export default Header;
