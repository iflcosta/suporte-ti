import { Metadata } from "next"
import { PLANOS } from "@/constants/landing-data"

export const metadata: Metadata = {
  title: "Proposta Comercial — Il Potere Tech",
  description: "Planos de suporte TI para sua empresa",
}

export default function PropostaPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans">
      <header className="py-8 px-6 md:px-12 border-b border-[#1F1F1F]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-2xl text-[#8B2635]">Il Potere Tech</h1>
          <p className="text-sm text-[#78716c] mt-1">Proposta Comercial</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="text-lg text-[#78716c] leading-relaxed">
            Sua empresa merece um TI que funciona. Monitoramento 24/7, suporte remoto imediato e visitas técnicas quando precisar. Sem contrato de fidelidade — resolvemos ou você não paga.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {PLANOS.map((plano, i) => (
            <div
              key={plano.nome}
              className={`relative p-6 border ${
                plano.destaque 
                  ? "border-[#8B2635]/50 bg-gradient-to-r from-[#8B2635]/5 to-transparent" 
                  : "border-[#1F1F1F] bg-[#0F0F0F]"
              } ${plano.emBreve ? "opacity-60" : ""}`}
            >
              {plano.ofertaLançamento && (
                <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-[#C9A962]/20 border border-[#C9A962]/30">
                  <span className="text-xs font-medium text-[#C9A962]">
                    {plano.ofertaLançamento.badge} · {plano.ofertaLançamento.texto}
                  </span>
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-mono text-sm tracking-widest uppercase text-[#8B2635]">
                    {plano.nome}
                  </h2>
                  <p className="text-sm text-[#78716c] mt-1">{plano.subtitulo}</p>
                </div>
                <div className="text-right">
                  {plano.precoPromo ? (
                    <div>
                      <span className="text-lg text-[#78716c] line-through">{plano.preco}</span>
                      <span className="text-2xl text-[#C9A962] block">{plano.precoPromo}</span>
                    </div>
                  ) : (
                    <span className="text-2xl">{plano.preco}</span>
                  )}
                  <span className="text-sm text-[#78716c]">{plano.periodo}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {plano.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#a8a29e]">
                    <span className="text-[#8B2635]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {!plano.emBreve && (
                <a
                  href={`https://wa.me/5511999999999?text=Olá!+Gostaria+de+contratar+o+plano+${plano.nome}`}
                  target="_blank"
                  className={`block text-center py-3 font-medium tracking-wide ${
                    plano.destaque
                      ? "bg-[#8B2635] text-white hover:bg-[#A63344]"
                      : "border border-[#2a2a2a] text-[#F5F0E8] hover:border-[#8B2635]"
                  }`}
                >
                  Contratar {plano.nome}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#0F0F0F] p-6 border border-[#1F1F1F] mb-8">
          <h3 className="font-mono text-sm tracking-widest uppercase text-[#C9A962] mb-3">
            O que está incluído
          </h3>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-[#78716c]">
            <li className="flex items-center gap-2">
              <span className="text-[#8B2635]">✓</span>Monitoramento 24/7
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#8B2635]">✓</span>Suporte Remoto Imediato
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#8B2635]">✓</span>Visitas Técnicas
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#8B2635]">✓</span>Sem Fidelidade
            </li>
          </ul>
        </div>

        <div className="text-center p-6 border border-[#8B2635]/30 bg-[#8B2635]/5">
          <p className="text-[#C9A962] font-medium mb-2">Garantia Il Potere</p>
          <p className="text-sm text-[#78716c]">
            Se não resolver, você não paga. Sem multas ou burocracia.
          </p>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[#78716c] mb-4">Precisa de algo diferente?</p>
          <a
            href="https://wa.me/5511999999999?text=Olá!+Gostaria+de+falar+sobre+um+plano+personalizado"
            target="_blank"
            className="inline-block px-8 py-3 border border-[#8B2635] text-[#F5F0E8] hover:bg-[#8B2635]/10"
          >
            Falar com Especialista
          </a>
        </div>
      </main>

      <footer className="py-8 px-6 text-center border-t border-[#1F1F1F]">
        <p className="text-xs text-[#78716c]">
          Proposta válida por 15 dias · ilpoderetech.com.br
        </p>
      </footer>
    </div>
  )
}