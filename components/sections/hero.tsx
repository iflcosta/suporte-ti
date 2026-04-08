"use client"

import React from "react"
import Image from "next/image"
import { DIFERENCIAIS } from "@/constants/landing-data"
import { Section } from "@/components/ui/section-components"

interface DiferencialItem {
  numero: string
  label: string
}

export function Hero() {
  return (
    <Section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#8B2635]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B2635]/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#C9A962]/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#F5F0E8 1px, transparent 1px), linear-gradient(90deg, #F5F0E8 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-12 animate-fade-up">
            <Image 
              src="/logo.png" 
              alt="Il Potere Tech Logo" 
              width={320} 
              height={180} 
              className="opacity-90 hover:opacity-100 transition-opacity object-contain"
              priority
            />
          </div>
          
          <span className="inline-block font-mono text-xs tracking-[0.4em] uppercase text-[#8B2635] mb-8 animate-slide-in">
            Suporte em TI \u00b7 Bragan\u00e7a Paulista
          </span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-10 animate-fade-up delay-100 max-w-4xl">
            Tecnologia de Alta Performance para Bragan\u00e7a Paulista
          </h1>

          <p className="text-xl md:text-2xl text-[#78716c] leading-relaxed mb-12 max-w-2xl animate-fade-up delay-200">
            Gest\u00e3o de TI Especializada para Cl\u00ednicas e Escrit\u00f3rios. 
            Estabilidade, seguran\u00e7a e suporte consultivo n\u00edvel N3 para sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-24 animate-fade-up delay-300">
            <a
              href="#planos"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#8B2635] text-[#F5F0E8] font-medium tracking-wide hover:bg-[#A63344] transition-all text-lg"
            >
              Ver Planos
              <span className="group-hover:translate-x-1 transition-transform">\u2192</span>
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-[#2a2a2a] text-[#F5F0E8] font-medium tracking-wide hover:border-[#8B2635] hover:bg-[#8B2635]/10 transition-all text-lg"
            >
              Falar Agora
            </a>
          </div>

          {/* Stats Grid - Now Centered Below */}
          <div className="w-full max-w-4xl animate-fade-up delay-400">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#8B2635]/20" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#8B2635]/20" />
              
              <div className="relative bg-[#0F0F0F]/50 backdrop-blur-sm border border-[#1F1F1F] p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  {DIFERENCIAIS.map((item: DiferencialItem, i: number) => (
                    <div
                      key={i}
                      className="text-center group"
                      style={{ animationDelay: `${600 + i * 100}ms` }}
                    >
                      <span className="block font-serif text-4xl md:text-5xl text-[#C9A962] mb-2 group-hover:scale-110 transition-transform duration-500">
                        {item.numero}
                      </span>
                      <span className="text-xs md:text-sm text-[#78716c] uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in delay-700">
        <span className="font-mono text-xs tracking-widest text-[#78716c] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#8B2635] to-transparent" />
      </div>
    </Section>
  )
}
