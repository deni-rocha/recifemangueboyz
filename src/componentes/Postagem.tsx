import { useState } from "react";

const sources = [
  {
    title:
      'Science, Chico & Du Peixe, Jorge. "1º Manifesto do Movimento Mangue Bit." Recife, 1991.',
  },
  {
    title:
      'Zero Quatro, Fred. "Caranguejos com Cérebro." Manifesto do Movimento Mangue Bit, 1992.',
  },
  {
    title:
      'Lima, João Marcelo. "Origem do termo Manguebit." Super, 2016. Disponível em: super.abril.com.br',
  },
  {
    title:
      "Wikipedia. \"Manguebeat.\" Disponível em: pt.wikipedia.org/wiki/Manguebeat",
  },
  {
    title:
      'Mundo Livre S/A. "Mangue Bit: A Revolução do Caranguejo com Cérebro." Mundo Livre, 2010.',
  },
];

export function Postagem() {
  const [showSources, setShowSources] = useState(false);

  return (
    <article className="bg-linear-to-b from-[#FFFBF0] via-[#FFFDF5] to-[#F5F0E0] border-2 border-[#0054E3] rounded shadow-[inset_2px_2px_0_rgba(255,255,255,0.9),inset_-2px_-2px_0_rgba(0,0,0,0.15),4px_4px_12px_rgba(0,0,0,0.35)] p-5 md:p-7 mt-6">
      <div className="font-sans text-xs text-gray-500 mb-3 tracking-wider">
        📝 POSTAGEM
      </div>

      <h2 className="font-sans font-bold text-lg md:text-2xl text-[#0054E3] leading-snug border-b-2 border-dashed border-[#D6D0BD] pb-3 mb-3">
        Manguebit: O Nome que a Imprensa Mudou
      </h2>

      <div className="font-sans text-base md:text-lg text-[#3A6EA5] flex flex-wrap gap-x-5 gap-y-1 mb-5">
        <span className="flex items-center gap-1">📅 1991</span>
        <span className="flex items-center gap-1">✍️ Coletivo RMBYZ</span>
        <span className="flex items-center gap-1">🏷️ História | Manguebeat</span>
      </div>

      <div className="bg-[#E6F0FA] border-l-4 border-[#0054E3] p-4 mb-6 rounded-r-md shadow-[inset_1px_1px_0_rgba(255,255,255,0.8)]">
        <div className="font-sans text-xs text-[#0054E3] mb-2 tracking-wider">
          💡 VOCÊ SABIA?
        </div>
        <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed">
          O nome original do movimento era <strong>"Mangue Bit"</strong> — com
          "bit", a menor unidade de informação digital. A imprensa mudou para
          "Manguebeat", trocando o conceito tecnológico por um termo mais
          musical.
        </p>
      </div>

      <div className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed space-y-5">
        <p>
          Você sabia que o movimento musical que revolucionou Recife nos anos 90
          quase não se chamava Manguebeat?
        </p>
        <p>
          Em 1991, Chico Science e Fred Zero Quatro lançaram o "1º Manifesto do
          Movimento Mangue Bit". Repare: Mangue Bit, com "bit" — a menor unidade
          de informação digital. A ideia era conectar o manguezal periférico à
          tecnologia emergente: antenas parabólicas, computadores, internet. O
          caranguejo com antena enfiada na lama simbolizava essa ponte entre
          tradição e modernidade.
        </p>
        <p>
          Mas a imprensa brasileira, ao cobrir o fenômeno, preferiu "Manguebeat"
          — "beat" soava mais musical, mais internacional, mais fácil de vender.
          A intenção tecnológica dos artistas foi diluída. "Bit" virou "beat", e
          o conceito de futuro digital na periferia virou rótulo de gênero
          musical.
        </p>

        <div className="flex items-center justify-center gap-3 my-7 text-[#0054E3]/30 select-none">
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-[#0054E3]/20" />
          <span className="font-sans text-xs text-[#0054E3]/40">◆ ◆ ◆</span>
          <span className="h-px flex-1 bg-linear-to-r from-[#0054E3]/20 to-transparent" />
        </div>

        <p>
          Hoje, "Manguebeat" prevalece. Mas "Manguebit" ainda carrega a utopia
          original: que o Nordeste não ficaria para trás na revolução digital.
        </p>
      </div>

      <div className="mt-7 border-t-2 border-dashed border-[#D6D0BD] pt-5">
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showSources ? "max-h-[500px] opacity-100 mb-3" : "max-h-0 opacity-0 mb-0"
          }`}
        >
          <div className="bg-[#FAF8F0] border-2 border-[#ECE9D8] p-4 rounded">
            <div className="font-sans text-xs text-gray-500 mb-3 tracking-wider">
              📚 REFERÊNCIAS BIBLIOGRÁFICAS
            </div>
            <ul className="font-sans text-base md:text-lg text-gray-700 space-y-2.5 list-none">
              {sources.map((s, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="text-xs text-[#0054E3] mt-1.5 shrink-0">
                    ▶
                  </span>
                  <span>{s.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => setShowSources((v) => !v)}
          className="group font-sans text-base md:text-lg px-5 py-2 bg-linear-to-b from-white via-[#ECE9D8] to-[#D6D0BD] border-2 border-[#003C74] rounded shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(0,0,0,0.2)] hover:brightness-105 active:from-[#D6D0BD] active:to-[#ECE9D8] active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.9),inset_1px_1px_0_rgba(0,0,0,0.2)] cursor-pointer transition-all flex items-center gap-2"
        >
          <span
            className={`inline-block transition-transform duration-300 ${
              showSources ? "rotate-90" : ""
            }`}
          >
            ▶
          </span>
          {showSources ? "ocultar fontes" : "ver fontes"}
        </button>
      </div>
    </article>
  );
}
