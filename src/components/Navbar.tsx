import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className=" fixed top-0 w-full bg-light px-4 py-6 text-blue sm:px-20">
      <nav className="m-auto hidden max-w-[1360px] justify-between sm:flex">
        <Link href="#home">
          <h1 className="logo text-sm font-bold uppercase hover:underline">
            Dr. Leonardo Marcolino
          </h1>
        </Link>
        <ul className="flex justify-between gap-10">
          <li>
            <Link href="#home">
              <p className="text-sm font-bold uppercase hover:underline">
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/#sobre">
              <p className="text-sm font-bold uppercase hover:underline">
                Sobre
              </p>
            </Link>
          </li>
          <li>
            <Link href="/#especialidades">
              <p className="text-sm font-bold uppercase hover:underline">
                Especialidades
              </p>
            </Link>
          </li>
          <li>
            <Link href="/#contato">
              <p className="text-sm font-bold uppercase hover:underline">
                Contato
              </p>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Button */}
      <div
        onClick={handleNav}
        className={`flex ${
          nav ? "justify-end" : "justify-between"
        }  relative z-10 sm:hidden ${nav ? "text-white" : "text-blue"}`}
      >
        {!nav && <h1 className="logo text-lg">Dr. Leonardo Marcolino</h1>}
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 flex h-screen w-full items-center justify-center bg-blue text-center duration-300 ease-in sm:hidden ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul>
          <li onClick={handleNav} className="p-4 text-4xl uppercase text-white">
            <Link href="#home">Home</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl uppercase  text-white"
          >
            <Link href="#sobre">Sobre</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl uppercase  text-white"
          >
            <Link href="#especialidades">Especialidades</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl uppercase text-white">
            <Link href="#contato">Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
