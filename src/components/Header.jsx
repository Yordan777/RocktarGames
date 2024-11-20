
import singin from '../img/sing-in.svg';
import "../style/header.css";
import MenuCenter from './MenuCenter';
import { CiSearch } from "react-icons/ci";



function Header() {
  return (
    <>
    <header className='header bg-black px-20'>
        <nav className='flex justify-between'>
            <a className='flex items-center'><span className='logo-rockstar'></span></a>
            <MenuCenter/>
            <div className='flex justify-center items-center gap-10'>
              <div><a className='btn-laucher'>get laucher</a></div>
              <div><button className='seach-header bg-transparent border-none p-0 flex'> <img src='https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg'></img></button></div>
              <div> <img src={singin} className=' w-9'/> </div>
            </div>
            
        </nav>
    </header>
    
    </>
  )
}


export default Header
