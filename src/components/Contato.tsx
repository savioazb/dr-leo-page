import Image from "next/image";
import { MapPinLine } from "phosphor-react";
import { FormEvent, useState } from "react";
import logo from '../../public/logo-white.svg'

interface Contact{
  name: string,
  email: string,
  phone: string,
  office: string
}

export function Contato() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [office, setOffice] = useState('')

  function handleContactSubmit(event: FormEvent) {
    event.preventDefault()
    const contact:Contact = {name, email, phone, office}
    console.log(contact);
    fetch('api/mail', {
      method: 'post',
      body: JSON.stringify(contact)
    })
    setName('')
    setEmail('')
    setPhone('')
    setOffice('')
  }

  return (
    <section
      id="contato"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-[1360px] m-auto px-4 lg:px-20 py-10"
    >
      <article className="bg-blue py-16 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image src={logo} alt="Doutor Leonardo Marcolino Logo" />
            <h1 className="logo text-white text-lg">
              Dr. Leonardo Marcolino Ayres
            </h1>
          </div>

          <div className="flex items-baseline gap-2">
            <MapPinLine className="text-white" />
            <div className="flex flex-col justify-start">
              <h2 className="text-white font-bold text-lg">Consultório</h2>
              <p className="text-white">
                Rua da Conceição, 188 - sala 2207-A <br /> Torre do Niterói
                Shopping <br />
                Centro, Niterói-RJ <br /> (21) 2722-4317
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 self-baseline">
            <MapPinLine className="text-white" />
            <div className="flex flex-col justify-start">
              <h2 className="text-white font-bold text-lg">Clínica Osteo</h2>
              <p className="text-white">
                Rua Geraldo Martins, 116 <br /> Santa Rosa, Niterói-RJ <br />{" "}
                (21) 2722-7404 | (21) 2272-7464
              </p>
            </div>
          </div>
        </div>
      </article>
      <article>
        <h3 className="text-5xl text-blue mb-8">Agende sua consulta</h3>
        <form onSubmit={handleContactSubmit}>
          <label
            className="text-blue font-medium text-lg block mb-4"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nome completo"
          />

          <label
            className="text-blue font-medium text-lg block mb-4"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@exemplo.com"
          />

          <label
            className="text-blue font-medium text-lg block mb-4"
            htmlFor="phone"
          >
            Telefone
          </label>
          <input
            className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14"
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(XX) XXXXX XXXX"
          />

          <label
            className="text-blue font-medium text-lg block mb-4"
            htmlFor="office"
          >
            Selecione o local:
          </label>
          <select
            className="block mb-6 rounded-xl border border-border w-[100%] placeholder:text-gray h-14"
            name="office"
            id="office"
            value={office}
            onChange={(event) => setOffice(event.target.value)}
            placeholder="Excolha o local do seu atendimento"
          >
            <option value="" selected>Selecione o local de atendimento</option>
            <option value="consultorio">Consultório - NIterói Shopping</option>
            <option value="clinica">Clínica Osteo</option>

          </select>

          <button type="submit" className="w-full transition bg-green hover:bg-green-light text-blue rounded-xl px-8 py-4">
            Enviar
          </button>
        </form>
      </article>
    </section>
  );
}