"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Section, SectionTitle } from "@/components/ui/section-components"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({ message: "Insira um e-mail válido." }).or(z.literal("")),
  phone: z.string().min(10, { message: "Insira um telefone válido com DDD." }).or(z.literal("")),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
}).refine((data) => data.email !== "" || data.phone !== "", {
  message: "Pelo menos um e-mail ou telefone deve ser preenchido.",
  path: ["email"],
})

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    form.reset()
  }

  return (
    <Section id="contato" className="py-24 md:py-32 relative bg-gradient-to-b from-[#080808] to-[#0A0606]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B2635]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8B2635]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Contato"
              title="Pronto para transformar seu TI?"
              subtitle="Especialistas em infraestrutura para contabilidades, escritórios de advocacia e clínicas. Fale conosco agora mesmo para garantir tranquilidade tecnológica."
            />

            <div className="space-y-8 animate-fade-up delay-300">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#1F1F1F] border border-[#2a2a2a] flex items-center justify-center text-[#C9A962] text-xl">
                  📍
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-medium mb-1">Localização</h4>
                  <p className="text-[#78716c] text-sm">Bragança Paulista, SP</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#1F1F1F] border border-[#2a2a2a] flex items-center justify-center text-[#C9A962] text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-medium mb-1">E-mail</h4>
                  <p className="text-[#78716c] text-sm">contato@ilpotere.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#1F1F1F] border border-[#2a2a2a] flex items-center justify-center text-[#C9A962] text-xl">
                  📱
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-medium mb-1">WhatsApp</h4>
                  <p className="text-[#78716c] text-sm">+55 (11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#1F1F1F] p-8 md:p-10 animate-fade-up delay-200">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="bg-[#141414] border-[#1F1F1F] h-12 focus:border-[#8B2635] transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} className="bg-[#141414] border-[#1F1F1F] h-12 focus:border-[#8B2635] transition-colors" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} className="bg-[#141414] border-[#1F1F1F] h-12 focus:border-[#8B2635] transition-colors" />
                      </FormControl>
                      <FormDescription className="text-[10px] text-[#78716c]">
                        * É necessário preencher pelo menos um E-mail ou Telefone.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa (Opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da sua empresa" {...field} className="bg-[#141414] border-[#1F1F1F] h-12 focus:border-[#8B2635] transition-colors" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Como podemos ajudar?" 
                          className="bg-[#141414] border-[#1F1F1F] min-h-[120px] focus:border-[#8B2635] transition-colors resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-[#8B2635] hover:bg-[#A63344] text-[#F5F0E8] font-medium tracking-wide transition-all"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Section>
  )
}
