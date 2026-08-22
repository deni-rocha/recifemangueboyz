import { useEffect, useState } from "react";

const data = {
  label: "🛠️ PROJETO",
  title: "Projeto SbN Cajueiro",
  meta: [
    { icon: "📅", text: "2025" },
    { icon: "✍️", text: "RMBYZ × ARIES" },
    { icon: "🏷️", text: "SbN | Adaptação Climática" },
  ],
  highlight: {
    label: "💡 VOCÊ SABIA?",
    text: (
      <>
        O Projeto SbN Cajueiro foi selecionado com{" "}
        <strong>pontuação máxima em nível nacional</strong> no Edital nº
        1/2025 do Programa Cidades Verdes Resilientes.
      </>
    ),
  },
  paragraphs: [
    <>
      O Projeto SbN Cajueiro é uma iniciativa de adaptação climática urbana
      desenvolvida pela Agência Recife para Inovação e Estratégia (ARIES), em
      resposta ao Edital nº 1/2025 do Programa Cidades Verdes Resilientes,
      selecionado com pontuação máxima em nível nacional.
    </>,
    <>
      O projeto é viabilizado por meio de Termo de Fomento firmado com o
      Ministério do Meio Ambiente e Mudança do Clima (MMA), com recursos do
      Fundo Nacional sobre Mudança do Clima, no âmbito do Programa Cidades
      Verdes Resilientes.
    </>,
    <>
      O projeto tem como foco a implementação de Soluções Baseadas na Natureza
      no território periférico de Cajueiro, no Recife, visando a promoção da
      melhoria da qualidade ambiental, o fortalecimento comunitário e a
      construção de estratégias locais de adaptação às mudanças climáticas,
      gerando dados e aprendizados que podem ser replicados em outras áreas da
      cidade.
    </>,
  ],
  sources: [
    "Edital nº 1/2025 — Programa Cidades Verdes Resilientes. Ministério do Meio Ambiente e Mudança do Clima (MMA).",
    "Programa Cidades Verdes Resilientes. Fundo Nacional sobre Mudança do Clima (Fundo Clima). MMA.",
    "Agência Recife para Inovação e Estratégia (ARIES) — Recife/PE.",
  ],
};

const paperClass =
  "bg-linear-to-b from-[#F5FBF0] via-[#FAFEF7] to-[#EBF3E2] border-2 border-[#1E6B2E] rounded shadow-[inset_2px_2px_0_rgba(255,255,255,0.9),inset_-2px_-2px_0_rgba(0,0,0,0.15),4px_4px_12px_rgba(0,0,0,0.35)]";

function TitleAndMeta() {
  return (
    <>
      <div className="font-sans text-xs text-gray-500 mb-3 tracking-wider">
        {data.label}
      </div>
      <h2 className="font-sans font-bold text-lg md:text-2xl text-[#1E6B2E] leading-snug border-b-2 border-dashed border-[#C9D6BD] pb-3 mb-3">
        {data.title}
      </h2>
      <div className="font-sans text-base text-[#3C7A44] flex flex-wrap gap-x-5 gap-y-1 mb-5">
        {data.meta.map((m, i) => (
          <span key={i} className="flex items-center gap-1">
            {m.icon} {m.text}
          </span>
        ))}
      </div>
    </>
  );
}

function Sources() {
  const [showSources, setShowSources] = useState(false);

  return (
    <div className="mt-7 border-t-2 border-dashed border-[#D6D0BD] pt-5">
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showSources
            ? "max-h-[500px] opacity-100 mb-3"
            : "max-h-0 opacity-0 mb-0"
        }`}
      >
        <div className="bg-[#FAF8F0] border-2 border-[#ECE9D8] p-4 rounded">
          <div className="font-sans text-xs text-gray-500 mb-3 tracking-wider">
            📚 REFERÊNCIAS BIBLIOGRÁFICAS
          </div>
          <ul className="font-sans text-base md:text-lg text-gray-700 space-y-2.5 list-none">
            {data.sources.map((s, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="text-xs text-[#1E6B2E] mt-1.5 shrink-0">▶</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        onClick={() => setShowSources((v) => !v)}
        className="group font-sans text-base md:text-lg px-5 py-2 bg-linear-to-b from-white via-[#ECE9D8] to-[#D6D0BD] border-2 border-[#14522A] rounded shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(0,0,0,0.2)] hover:brightness-105 active:from-[#D6D0BD] active:to-[#ECE9D8] active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.9),inset_1px_1px_0_rgba(0,0,0,0.2)] cursor-pointer transition-all flex items-center gap-2"
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
  );
}

function FullContent() {
  return (
    <>
      <TitleAndMeta />

      <div className="bg-[#EAF6EC] border-l-4 border-[#1E6B2E] p-4 mb-6 rounded-r-md shadow-[inset_1px_1px_0_rgba(255,255,255,0.8)]">
        <div className="font-sans text-xs text-[#1E6B2E] mb-2 tracking-wider">
          {data.highlight.label}
        </div>
        <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed">
          {data.highlight.text}
        </p>
      </div>

      <div className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed space-y-5">
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <div className="flex items-center justify-center gap-3 my-7 text-[#1E6B2E]/30 select-none">
          <span className="h-px flex-1 bg-linear-to-r from-transparent to-[#1E6B2E]/20" />
          <span className="font-sans text-xs text-[#1E6B2E]/40">◆ ◆ ◆</span>
          <span className="h-px flex-1 bg-linear-to-r from-[#1E6B2E]/20 to-transparent" />
        </div>
      </div>

      <Sources />
    </>
  );
}

export function PostagemSbNCajueiro() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className={`${paperClass} p-5 md:p-7 mt-6 cursor-pointer transition-all hover:shadow-[inset_2px_2px_0_rgba(255,255,255,0.9),inset_-2px_-2px_0_rgba(0,0,0,0.15),6px_6px_16px_rgba(0,0,0,0.45)] hover:-translate-y-0.5`}
      >
        <TitleAndMeta />
        <p className="font-sans text-base text-gray-700 leading-relaxed line-clamp-2">
          {data.paragraphs[0]}
        </p>
        <div className="mt-4 flex items-center gap-2 font-sans text-sm text-[#1E6B2E] font-semibold">
          <span>ler postagem completa</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={data.title}
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          <article
            className={`relative ${paperClass} p-5 md:p-8 w-full max-w-4xl max-h-[92vh] overflow-y-auto`}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-linear-to-b from-[#E08356] via-[#C7522A] to-[#A33010] border border-black/30 rounded text-white font-bold text-lg hover:brightness-110 cursor-pointer"
              aria-label="Fechar"
            >
              ✕
            </button>
            <FullContent />
          </article>
        </div>
      )}
    </>
  );
}
