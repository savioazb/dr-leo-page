import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Navbar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className=" px-4 sm:px-20 py-10 text-blue fixed top-0 w-full bg-light">
      <nav className="justify-between hidden sm:flex max-w-[1360px] m-auto">
        <h1 className="logo text-lg">Dr. Leonardo Marcolino</h1>
        <ul className="flex justify-between gap-10">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="/#sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/#especialidades">Especialidades</Link>
          </li>
          <li>
            <Link href="/#contato">Contato</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Button */}
      <div onClick={handleNav} className={`flex justify-end sm:hidden z-10 relative ${nav ? 'text-white' : 'text-blue'}`}>
        {nav ? (
          <AiOutlineClose size={20}  />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      <div
          className={`bg-blue sm:hidden absolute top-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300 ${nav ? 'left-0' : 'left-[-100%]'}`}
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white uppercase"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white  uppercase"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white  uppercase"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl text-white uppercase"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
    </header>
  );
}