export function Navbar() {
  return(
    <header>
      <nav className="max-w-[1360px] m-auto flex justify-between px-20 py-10 text-blue">
        <h1 className="logo text-lg">Dr. Leonardo Marcolino</h1>
        <ul className="flex justify-between gap-10">
          <li><a href="./">Home</a></li>
          <li><a href="/#sobre">Sobre</a></li>
          <li><a href="/#especialidades">Especialidades</a></li>
          <li><a href="/#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}