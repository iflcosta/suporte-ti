"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { PainPoints } from "@/components/sections/pain-points"
import { Services } from "@/components/sections/services"
import { Plans } from "@/components/sections/plans"
import { FAQ } from "@/components/sections/faq"
import { Process } from "@/components/sections/process"
import { Contact } from "@/components/sections/contact"
import { Toaster } from "@/components/ui/sonner"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F0E8] font-sans overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Process />
        <Plans />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  )
}
