# Padrão de Design — Postagens

## Estrutura do Componente

Toda postagem deve ser um componente React em `src/componentes/` usando o prefixo `Postagem` (ex: `PostagemManguebit.tsx`). O componente não recebe props — o conteúdo é estático internamente.

### Padrão de exibição: resumo + modal

A postagem tem **dois estados de exibição**:

1. **Resumo (visível no fluxo da página)** — mostra apenas o label, o título, os metadados (data, autor, gênero/tags) e um trecho curto. É clicável e abre o modal.
2. **Modal (exibição completa)** — abre ao clicar no resumo, cobrindo quase toda a tela (`max-w-4xl` + `max-h-[92vh]`), com o conteúdo completo. O fundo fica escurecido com sobreposição (`bg-black/75 backdrop-blur-sm`). Fecha ao clicar na sobreposição, no botão `✕` ou pressionando `Esc`. O scroll do corpo é bloqueado enquanto aberto.

```tsx
import { useEffect, useState } from "react";

export function PostagemFoo() {
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
      {/* Resumo */}
      <article onClick={() => setOpen(true)} className="...cursor-pointer...">
        {/* label + título + metadados + trecho curto */}
      </article>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-6">
          <div onClick={() => setOpen(false)} className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
          <article className="relative ... max-w-4xl max-h-[92vh] overflow-y-auto">
            <button onClick={() => setOpen(false)} className="...">✕</button>
            {/* conteúdo completo */}
          </article>
        </div>
      )}
    </>
  );
}
```

## Paleta de Cores

| Uso | Cor | Tailwind |
|---|---|---|
| Fundo do card | `#FFFBF0` → `#FFFDF5` → `#F5F0E0` (gradiente) | `from-[#FFFBF0] via-[#FFFDF5] to-[#F5F0E0]` |
| Borda do card | `#0054E3` | `border-[#0054E3]` |
| Título | `#0054E3` | `text-[#0054E3]` |
| Metadados | `#3A6EA5` | `text-[#3A6EA5]` |
| Corpo do texto | `#374151` (gray-700) | `text-gray-700` |
| Label "POSTAGEM" | `#6B7280` (gray-500) | `text-gray-500` |
| Fundo caixa de destaque | `#E6F0FA` | `bg-[#E6F0FA]` |
| Borda lateral destaque | `#0054E3` | `border-l-4 border-[#0054E3]` |
| Fundo referências | `#FAF8F0` | `bg-[#FAF8F0]` |
| Borda referências | `#ECE9D8` | `border-[#ECE9D8]` |
| Borda divisória | `#D6D0BD` | `border-[#D6D0BD]` |
| Botão "ver fontes" | branco → `#ECE9D8` → `#D6D0BD` | `from-white via-[#ECE9D8] to-[#D6D0BD]` |
| Borda botão | `#003C74` | `border-[#003C74]` |

## Tipografia

### Fontes

- **Source Code Pro bold** — títulos, labels, seções e cabeçalhos (fonte maior, estilo h1)
- **Source Code Pro regular** — corpo do texto, metadados, botões, referências e demais elementos

### Tamanhos (padrão web Tailwind)

| Elemento | Tamanho |
|---|---|
| Títulos / Labels / Seções (bold) | `text-lg` a `text-2xl` |
| Metadados | `text-base` |
| Caixa de destaque — label | `text-xs` |
| Caixa de destaque — texto | `text-lg` |
| Corpo do post | `text-lg` |
| Referências — label | `text-xs` |
| Referências — texto | `text-base` |
| Botão | `text-base` |

## Hierarquia do Post

### Estado de resumo (visível na página)

```
┌─ article (clicável) ────────────────────────┐
│  📝 POSTAGEM                  ← label seção │
│                                              │
│  Título                          ← h2 título │
│  ─ ─ ─ ─ ─ ─ (borda tracejada)              │
│                                              │
│  📅 1991 · ✍️ Autor · 🏷️ Tag   ← metadados  │
│                                              │
│  Trecho curto do texto...        ← 2 linhas  │
│                                              │
│  ler postagem completa →         ← chamada   │
└──────────────────────────────────────────────┘
```

### Estado completo (modal, ~tela inteira)

```
┌─ modal (max-w-4xl, max-h-[92vh]) ───────────┐
│ ✕ ← botão fechar                            │
│                                              │
│  📝 POSTAGEM                                 │
│  Título                                      │
│  📅 1991 · ✍️ Autor · 🏷️ Tag                │
│                                              │
│  ┌─ destaque ─────────────────────────────┐  │
│  │ 💡 VOCÊ SABIA?                        │  │
│  │ Texto de destaque...                  │  │
│  └───────────────────────────────────────┘  │
│                                              │
│  Parágrafo 1...                   ← corpo    │
│  Parágrafo 2...                              │
│                                              │
│  ─── ◆ ◆ ◆ ───              ← divisor       │
│                                              │
│  Parágrafo 3...                              │
│                                              │
│  ▶ ver fontes                    ← botão     │
│  ┌─ referências ───────–───────┐             │
│  │ 📚 REFERÊNCIAS              │  ← colaps.  │
│  │ ▶ Item 1                    │             │
│  │ ▶ Item 2                    │             │
│  └─────────────────────────────┘             │
└──────────────────────────────────────────────┘

Sobreposição: bg-black/75 + backdrop-blur-sm
Fechar: clique na sobreposição, botão ✕ ou tecla Esc
```

## Elementos Obrigatórios

### 1. Container (`<article>`)
```tsx
<article className="bg-linear-to-b from-[#FFFBF0] via-[#FFFDF5] to-[#F5F0E0] border-2 border-[#0054E3] rounded shadow-[inset_2px_2px_0_rgba(255,255,255,0.9),inset_-2px_-2px_0_rgba(0,0,0,0.15),4px_4px_12px_rgba(0,0,0,0.35)] p-5 md:p-7 mt-6">
```

### 2. Label da seção
```tsx
<div className="font-sans text-xs text-gray-500 mb-3 tracking-wider">
  📝 POSTAGEM
</div>
```

### 3. Título
```tsx
<h2 className="font-sans font-bold text-lg md:text-2xl text-[#0054E3] leading-snug border-b-2 border-dashed border-[#D6D0BD] pb-3 mb-3">
  Título do Post
</h2>
```

### 4. Metadados (data, autor, tags)
```tsx
<div className="font-sans text-base text-[#3A6EA5] flex flex-wrap gap-x-5 gap-y-1 mb-5">
  <span className="flex items-center gap-1">📅 ANO</span>
  <span className="flex items-center gap-1">✍️ Autor</span>
  <span className="flex items-center gap-1">🏷️ Tag1 | Tag2</span>
</div>
```

### 5. Caixa de Destaque (opcional, mas recomendada)
Usar para destacar um fato/curiosidade principal do post.
```tsx
<div className="bg-[#E6F0FA] border-l-4 border-[#0054E3] p-4 mb-6 rounded-r-md shadow-[inset_1px_1px_0_rgba(255,255,255,0.8)]">
  <div className="font-sans text-xs text-[#0054E3] mb-2 tracking-wider">
    💡 VOCÊ SABIA?
  </div>
  <p className="font-sans text-lg text-gray-700 leading-relaxed">
    Texto de destaque...
  </p>
</div>
```

### 6. Corpo do texto
```tsx
<div className="font-sans text-lg text-gray-700 leading-relaxed space-y-5">
  <p>Parágrafo 1</p>
  <p>Parágrafo 2</p>
  <!-- divisor opcional -->
  <p>Parágrafo 3</p>
</div>
```

### 7. Divisor decorativo (opcional)
Entre blocos de texto para pausa visual:
```tsx
<div className="flex items-center justify-center gap-3 my-7 text-[#0054E3]/30 select-none">
  <span className="h-px flex-1 bg-linear-to-r from-transparent to-[#0054E3]/20" />
  <span className="font-sans text-xs text-[#0054E3]/40">◆ ◆ ◆</span>
  <span className="h-px flex-1 bg-linear-to-r from-[#0054E3]/20 to-transparent" />
</div>
```

### 8. Seção de Referências (obrigatória se houver fontes)
```tsx
<div className="mt-7 border-t-2 border-dashed border-[#D6D0BD] pt-5">
  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showSources ? "max-h-[500px] opacity-100 mb-3" : "max-h-0 opacity-0 mb-0"}`}>
    <div className="bg-[#FAF8F0] border-2 border-[#ECE9D8] p-4 rounded">
      <div className="font-sans text-xs text-gray-500 mb-3 tracking-wider">
        📚 REFERÊNCIAS BIBLIOGRÁFICAS
      </div>
      <ul className="font-sans text-base text-gray-700 space-y-2.5 list-none">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="text-xs text-[#0054E3] mt-1.5 shrink-0">▶</span>
            <span>{s.title}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>

  <button
    onClick={() => setShowSources((v) => !v)}
    className="group font-sans text-base px-5 py-2 bg-linear-to-b from-white via-[#ECE9D8] to-[#D6D0BD] border-2 border-[#003C74] rounded shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(0,0,0,0.2)] hover:brightness-105 active:from-[#D6D0BD] active:to-[#ECE9D8] active:shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.9),inset_1px_1px_0_rgba(0,0,0,0.2)] cursor-pointer transition-all flex items-center gap-2"
  >
    <span className={`inline-block transition-transform duration-300 ${showSources ? "rotate-90" : ""}`}>▶</span>
    {showSources ? "ocultar fontes" : "ver fontes"}
  </button>
</div>
```

## Sombras

| Elemento | Sombra |
|---|---|
| Card do post | `shadow-[inset_2px_2px_0_rgba(255,255,255,0.9),inset_-2px_-2px_0_rgba(0,0,0,0.15),4px_4px_12px_rgba(0,0,0,0.35)]` |
| Caixa de destaque | `shadow-[inset_1px_1px_0_rgba(255,255,255,0.8)]` |
| Botão "ver fontes" | `shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(0,0,0,0.2)]` |
| Botão ativo | `shadow-[inset_-1px_-1px_0_rgba(255,255,255,0.9),inset_1px_1px_0_rgba(0,0,0,0.2)]` |

## Responsividade

- `p-5 md:p-7` — padding expande em desktop
- Tamanhos de fonte usam a escala padrão do Tailwind (`text-xs` a `text-2xl`)
- Metadados usam `flex-wrap` para quebrar em mobile
- Referências e botão ocupam largura total em mobile

## Como Criar um Novo Post

1. Criar arquivo `src/componentes/PostagemFoo.tsx`
2. Exportar componente `PostagemFoo`
3. Adicionar ao barrel export em `src/componentes/index.ts`
4. Usar `<PostagemFoo />` dentro do `App.tsx` na seção desejada
5. Manter a estrutura de `<article>` com as classes definidas acima
6. Garantir que fontes externas tenham seção de referências colapsável
7. Rodar `npm run build` para verificar se não há erros
