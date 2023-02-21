import { BsArrowRightShort } from "react-icons/bs";
import { Wrench, Heartbeat, Activity, FirstAidKit } from "phosphor-react";

export function Especialidades() {
  return(
    <section className="mb-40">
      <article className="flex gap-12 justify-between mb-20">
        <h2 className="text-5xl text-blue">Serving your health need is my priority</h2>
        <div className="flex flex-col gap-4">
          <p className="text-lg text-gray">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It was popularised in the 1960s.</p>
          <a className="text-blue flex items-center gap-1 cursor-pointer">Entre em contato <BsArrowRightShort /></a>
        </div>
      </article>
      <article>
        <div className="grid grid-cols-2">
          <div className="flex items-center py-12 justify-start gap-4 border-b border-r border-border">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <Wrench size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue text-lg font-medium">Cirurgia Ortopédica 1</h3>
              <p className="text-blue max-w-sm">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It was popularised in the 1960s.</p>
            </div>
          </div>
          <div className="flex items-center py-12 justify-end gap-4 border-b border-border">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <Heartbeat size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue text-lg font-medium">Cirurgia Ortopédica 2</h3>
              <p className="text-blue max-w-sm">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It was popularised in the 1960s.</p>
            </div>
          </div>
          <div className="flex items-center py-12 justify-start gap-4 border-r border-border">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <Activity size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue text-lg font-medium">Cirurgia Ortopédica 3</h3>
              <p className="text-blue max-w-sm">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It was popularised in the 1960s.</p>
            </div>
          </div>
          <div className="flex items-center py-12 justify-end gap-4">
            <div className="rounded-full bg-green w-16 h-16 flex justify-center items-center">
              <FirstAidKit size={32} className="text-blue" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-blue text-lg font-medium">Cirurgia Ortopédica 4</h3>
              <p className="text-blue max-w-sm">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. It was popularised in the 1960s.</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}