"use client"

import React from "react"
import { TECH_STACK } from "@/constants/landing-data"
import { Shield, Monitor, Cloud, Headphones, LucideIcon } from "lucide-react"

interface TechStackItem {
  label: string
  tools: string
}

const iconMap: Record<string, LucideIcon> = {
  "Gest\u00e3o Ativa": Monitor,
  "Seguran\u00e7a": Shield,
  "Backup": Cloud,
  "Conectividade": Headphones,
}

export function TrustBar() {
  return (
    <div className="w-full bg-[#080808] border-y border-[#1F1F1F] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8B2635] font-semibold whitespace-nowrap">
            Padr\u00e3o Corporativo de Entrega
          </span>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
            {TECH_STACK.map((item: TechStackItem) => {
              const Icon = iconMap[item.label] || Monitor
              return (
                <div key={item.label} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-[#1F1F1F] group-hover:bg-[#8B2635]/20 transition-colors">
                    <Icon className="w-4 h-4 text-[#C9A962]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-[#78716c]">
                      {item.label}
                    </span>
                    <span className="text-xs font-medium text-[#F5F0E8] whitespace-nowrap">
                      {item.tools}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
