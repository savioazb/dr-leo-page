import Image from "next/image";
import { MapPinLine } from "phosphor-react";
import { FormEvent, useState } from "react";
import logo from "../../public/logo-blue.svg";

interface Contact {
  name: string;
  email: string;
  phone: string;
  office: string;
}

export function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [office, setOffice] = useState("");

  function handleContactSubmit(event: FormEvent) {
    event.preventDefault();
    const contact: Contact = { name, email, phone, office };
    console.log(contact);
    fetch("api/mail", {
      method: "post",
      body: JSON.stringify(contact),
    });
    setName("");
    setEmail("");
    setPhone("");
    setOffice("");
  }

  return (
    <section
      id="contato"
      className="m-auto mb-20 grid max-w-[1360px] grid-cols-1 gap-8 px-4 py-10 md:grid-cols-2 lg:px-20"
    >
      <article className="flex flex-col items-center justify-center py-4 px-4 md:py-16">
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image src={logo} alt="Doutor Leonardo Marcolino Logo" />
            <h1 className="logo text-lg text-blue">
              Dr. Leonardo Marcolino Ayres
            </h1>
          </div>

          <div className="flex items-baseline gap-2">
            <MapPinLine className="text-blue" />
            <div className="flex flex-col justify-start">
              <h2 className="text-lg font-bold text-blue">Consultório</h2>
              <p className="text-blue">
                Rua da Conceição, 188 - sala 2207-A <br /> Torre do Niterói
                Shopping <br />
                Centro, Niterói-RJ <br /> (21) 2722-4317
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-2 self-baseline">
            <MapPinLine className="text-blue" />
            <div className="flex flex-col justify-start">
              <h2 className="text-lg font-bold text-blue">Clínica Osteo</h2>
              <p className="text-blue">
                Rua Geraldo Martins, 116 <br /> Santa Rosa, Niterói-RJ <br />{" "}
                (21) 2722-7404 | (21) 2272-7464
              </p>
            </div>
          </div>
        </div>
      </article>
      <article>
        <h3 className="mb-8 text-center text-5xl text-blue md:text-right">
          Agende sua consulta
        </h3>
        <form onSubmit={handleContactSubmit}>
          <label
            className="mb-4 block text-lg font-medium text-blue"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            className="mb-6 block h-14 w-[100%] rounded-xl border border-border placeholder:text-gray"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Nome completo"
          />

          <label
            className="mb-4 block text-lg font-medium text-blue"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="mb-6 block h-14 w-[100%] rounded-xl border border-border placeholder:text-gray"
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@exemplo.com"
          />

          <label
            className="mb-4 block text-lg font-medium text-blue"
            htmlFor="phone"
          >
            Telefone
          </label>
          <input
            className="mb-6 block h-14 w-[100%] rounded-xl border border-border placeholder:text-gray"
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(XX) XXXXX XXXX"
          />

          <label
            className="mb-4 block text-lg font-medium text-blue"
            htmlFor="office"
          >
            Selecione o local:
          </label>
          <select
            className="mb-6 block h-14 w-[100%] rounded-xl border border-border placeholder:text-gray"
            name="office"
            id="office"
            value={office}
            onChange={(event) => setOffice(event.target.value)}
            placeholder="Excolha o local do seu atendimento"
          >
            <option value="">Selecione o local de atendimento</option>
            <option value="consultorio">Consultório - NIterói Shopping</option>
            <option value="clinica">Clínica Osteo</option>
          </select>

          <button
            type="submit"
            className="w-full rounded-xl bg-green px-8 py-4 text-blue transition hover:bg-green-light"
          >
            Enviar
          </button>
        </form>
      </article>
    </section>
  );
}
