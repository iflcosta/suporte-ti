import { Logo } from "@/components/ui/logo"

export function Footer() {
  const navItems = [
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
    { label: "Hub", href: "/negocios" },
  ]

  return (
    <footer className="border-t border-[#1F1F1F] py-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo />
          
          <div className="flex items-center gap-8 text-sm text-[#78716c]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#F5F0E8] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#1F1F1F] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#78716c]">
          <p>© {new Date().getFullYear()} Il Potere Tech. Todos os direitos reservados.</p>
          <p>Bragança Paulista, SP · CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  )
}
