import { useState } from "react"
import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"


const Nav = () => {
  const [showMenu, setshowMenu] = useState(false);
  const slideOut = () => {
    setshowMenu(prev => !prev);
  }
  return (
    <header className="padding-x py-8 absolute z-20 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {
            navLinks.map((item) =>(
              <li key={item.label} className="rounded p-2 ">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray "
                >
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>

        <div className="flex gap-2 text-lg leading-normal  font-medium font-montserrat max-lg:hidden wide:mr-24 bg-transparent hover:bg-black cursor-pointer">
          <a href='/' className=" cursor-pointer"> Sign In</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>

        

        <div className="block lg:hidden">
          <img src={hamburger} alt='hambuger icon' width={25} height={25} onClick={slideOut}/>
        </div>
        
        <div className={`absolute top-16 bg-white ${!showMenu ? 'mr-[-200px]' : 'mr-0'}   border right-1 p-4 lg:hidden  shadow-md transition-all`}>
          <ul className="flex flex-col">
          {
            navLinks.map((item) =>(
              <li key={item.label} className="rounded font-medium p-2 hover:bg-slate-100 hover:underline w-full">
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray "
                >
                  {item.label}
                </a>
              </li>
            ))
          }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
