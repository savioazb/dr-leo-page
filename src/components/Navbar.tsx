import Link from "next/link";

export function Navbar() {
  return(
    <header>
      <nav className="max-w-[1360px] m-auto flex justify-between px-20 py-10 text-blue">
        <h1 className="logo text-lg">Dr. Leonardo Marcolino</h1>
        <ul className="flex justify-between gap-10">
          <li><Link href="./">Home</Link></li>
          <li><Link href="/#sobre">Sobre</Link></li>
          <li><Link href="/#especialidades">Especialidades</Link></li>
          <li><Link href="/#contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}