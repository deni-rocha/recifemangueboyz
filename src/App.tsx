import { useState, useEffect } from "react";
import { XPWindow, StartMenu, Taskbar, Postagem, PostagemSbNCajueiro, CardIntegrante } from "./componentes";

const sections = ["início", "sobre", "projetos", "integrantes"];

const sectionIcons: Record<string, string> = {
  "início": "📁",
  sobre: "ℹ️",
  projetos: "🛠️",
  integrantes: "👥",
};

export default function App() {
  const titles = ["RECIFEMANGUEBOYZ", "MANGUEBIT"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTitleIdx((i) => (i + 1) % titles.length);
      setAnimKey((k) => k + 1);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("início");

  const handleNav = (s: string) => {
    setCurrentSection(s);
  };

  return (
    <div className="min-h-screen bg-[#3A6EA5] bg-linear-to-b from-[#3A6EA5] via-[#6BAFE5] to-[#4A9E35] pb-10 overflow-x-hidden">
      <div className="max-w-[960px] mx-auto px-5 pt-6 pb-3">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-4">
          <style>{`
            @keyframes flipChar {
              0% { transform: rotateY(90deg); opacity: 0; }
              50% { transform: rotateY(0deg); opacity: 1; }
            }
          `}</style>
          <h1 className="font-['Bitcount_Grid_Double'] text-2xl md:text-4xl text-yellow-300">
            {titles[titleIdx].split("").map((char, i) => (
              <span
                key={`${animKey}-${i}`}
                className="inline-block"
                style={{
                  animation: `flipChar 0.5s ease-out ${i * 0.07}s both`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <span className="text-lg text-white/80 drop-shadow-[1px_1px_0_rgba(0,0,0,0.5)] self-start md:self-auto">
            ~ coletivo sociocultural e ambiental ~
          </span>
        </div>

        <div className="flex gap-0 mb-[-2px] relative z-10 flex-wrap">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className={`px-4 py-1.5 border-2 border-[#919B9C] border-b-0 rounded-t-md cursor-pointer transition-colors font-sans text-lg ${
                currentSection === s
                  ? "bg-white text-[#0054E3] border-[#0054E3] font-bold z-[2]"
                  : "bg-[#ECE9D8] text-gray-600 hover:bg-white hover:text-[#0054E3]"
              }`}
            >
              {sectionIcons[s]}{ " "}
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[960px] mx-auto px-5 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4 items-start">
          <XPWindow
            title={`RMBYZ — ${currentSection}`}
            icon="🏠"
            className="min-h-[300px]"
          >
            <div className="bg-white border-2 border-[#0054E3] p-6 min-h-[200px] space-y-4">
              {currentSection === "início" && (
                <>
                  <div className="font-sans font-bold text-xl text-gray-600 leading-relaxed">
                    🌍 RECIFEMANGUEBOYZ (RMBYZ)
                  </div>
                  <p className="font-sans text-lg text-gray-700 leading-relaxed">
                    O Recifemangueboyz (ou RMBYZ) é um coletivo sociocultural e
                    ambiental atuante no Recife e região metropolitana. Fundado em
                    2020, o grupo foca na inclusão, preservação ambiental e no
                    fortalecimento das identidades periféricas e indígenas, além de
                    realizar intervenções artísticas e ações climáticas nas
                    comunidades locais.
                  </p>
                  <div className="border-2 border-[#ECE9D8] border-dashed p-3 mt-4">
                    <div className="font-sans text-base text-gray-500 mb-2">
                      🎯 Nossas frentes de atuação
                    </div>
                    <ul className="font-sans text-base text-gray-700 space-y-1 list-none">
                      <li>🌿 → Preservação ambiental e ações climáticas</li>
                      <li>🤝 → Inclusão social e fortalecimento de identidades</li>
                      <li>🎨 → Intervenções artísticas em comunidades</li>
                      <li>🏹 → Valorização das culturas periféricas e indígenas</li>
                    </ul>
                  </div>

                  <Postagem />
                </>
              )}
              {currentSection === "sobre" && (
                <div className="text-lg text-gray-700 leading-relaxed space-y-3">
                  <div className="text-xl font-bold text-gray-600">
                    📖 SOBRE O RMBYZ
                  </div>
                  <p>
                    O RMBYZ nasceu em 2020 da união de jovens artistas,
                    ativistas e desenvolvedores do Recife com um objetivo em
                    comum: transformar realidades através da cultura, da
                    tecnologia e da preservação ambiental.
                  </p>
                  <p>
                    Atuamos diretamente nas comunidades periféricas e indígenas
                    da região metropolitana, promovendo oficinas, mutirões
                    ecológicos e intervenções artísticas que fortalecem
                    identidades e geram pertencimento.
                  </p>
                  <p>
                    Acreditamos que a mudança começa localmente — e é feita com
                    as mãos, com o coração e com os pés no chão da comunidade.
                  </p>
                </div>
              )}
              {currentSection === "projetos" && (
                <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-3">
                  <div className="font-sans font-bold text-xl text-gray-600">
                    🛠️ PROJETOS
                  </div>
                  <PostagemSbNCajueiro />
                </div>
              )}
              {currentSection === "integrantes" && (
                <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-3">
                  <div className="font-sans font-bold text-xl text-gray-600">
                    👥 INTEGRANTES
                  </div>
                  <p>
                    Conheça as pessoas que fazem o RMBYZ acontecer — artistas,
                    ativistas e desenvolvedores com os pés no mangue.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    <CardIntegrante nome="Denilson Rocha" iniciais="DR" />
                    <CardIntegrante nome="Anderson Pereira" iniciais="AP" />
                    <CardIntegrante nome="Paulo Henrique" iniciais="PH" />
                  </div>
                </div>
              )}
            </div>
          </XPWindow>

          <div className="space-y-4 hidden lg:block">
            <XPWindow
              title="navegação"
              icon="📌"
              variant="green"
              className="shadow-[3px_3px_10px_rgba(0,0,0,0.3)]"
            >
              <div className="space-y-3">
                <div className="font-sans font-bold text-xl text-gray-600 leading-relaxed">
                  RMBYZ — Recife/PE
                </div>

                <div className="border-2 border-[#ECE9D8] border-dashed p-2 mt-2">
                  <div className="font-sans text-base text-gray-500 mb-1 pl-1">
                    📌 Seções
                  </div>
                  {sections.map((s) => (
                    <div
                      key={s}
                      onClick={() => handleNav(s)}
                      className={`flex items-center gap-2 py-1 px-1 cursor-pointer text-base transition-colors border-b border-dotted border-[#D5D2C5] last:border-0 ${
                        currentSection === s
                          ? "text-[#0054E3] font-bold"
                          : "text-gray-700 hover:text-[#0054E3]"
                      }`}
                    >
                      <span className="w-3">{sectionIcons[s]}</span>{" "}
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </div>
                  ))}
                </div>

                <div className="border-2 border-[#ECE9D8] border-dashed p-2 mt-2">
                  <div className="font-sans text-base text-gray-500 mb-1 pl-1">
                    📊 Info
                  </div>
                  <div className="font-sans text-base text-gray-700 leading-relaxed">
                    📍 Recife — PE
                    <br />
                    🗓️ Fundado em 2020
                    <br />
                    🌿 Foco: socioambiental
                    <br />
                    🤝 Inclusão e identidades
                  </div>
                </div>

                <div className="border-2 border-[#ECE9D8] border-dashed p-2 mt-2 text-center">
                  <div className="font-sans text-base text-gray-500 mb-1">
                    ♥ Contato
                  </div>
                  <div className="font-sans text-base text-[#0054E3] mb-1">
                    📷 @recifemangueboyz
                  </div>
                  <button
                    onClick={() =>
                      alert(
                        "📧 contato@recifemangueboyz.com\n📷 Instagram: @recifemangueboyz",
                      )
                    }
                    className="font-sans text-base w-full mt-1 px-3 py-1 bg-linear-to-b from-white via-[#ECE9D8] to-[#D6D0BD] border-2 border-[#003C74] rounded hover:brightness-105 active:from-[#D6D0BD] active:to-[#ECE9D8]"
                  >
                    📬 Entrar em contato
                  </button>
                </div>
              </div>
            </XPWindow>
          </div>
        </div>
      </div>

      <div className="text-center text-white/60 font-sans text-base pb-4 drop-shadow-[1px_1px_0_rgba(0,0,0,0.5)]">
        recifemangueboyz —{" "}
        <span className="text-pink-400 inline-block animate-pulse">♥</span>{" "}
        inclusão, cultura e preservação ambiental
      </div>

      <Taskbar onStartToggle={() => setStartMenuOpen(!startMenuOpen)} />
      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onNavigate={handleNav}
      />
    </div>
  );
}
