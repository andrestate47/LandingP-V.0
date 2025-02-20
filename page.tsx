"use client"

import Image from "next/image"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Card, CardContent } from "./components/ui/card"
import { Code, Laptop, ShoppingCart, Menu, X, CheckCircle, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-2xl font-bold text-purple-500">
            TuNombre
          </a>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#sobre-mi">Sobre Mí</NavLink>
            <NavLink href="#proceso">Proceso</NavLink>
            <NavLink href="#proyectos">Proyectos</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </div>
          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <NavLink href="#servicios" mobile>
              Servicios
            </NavLink>
            <NavLink href="#sobre-mi" mobile>
              Sobre Mí
            </NavLink>
            <NavLink href="#proceso" mobile>
              Proceso
            </NavLink>
            <NavLink href="#proyectos" mobile>
              Proyectos
            </NavLink>
            <NavLink href="#contacto" mobile>
              Contacto
            </NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight">
          Transformando Ideas en Experiencias Digitales Impactantes
        </h1>
        <p className="mb-8 text-xl text-gray-300">
          Desarrollo de Landing Pages, Sitios Web y E-commerce de Alto Rendimiento
        </p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          Contáctame Ahora
        </Button>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <StatCard number="50+" text="Proyectos Completados" />
            <StatCard number="30+" text="Clientes Satisfechos" />
            <StatCard number="5+" text="Años de Experiencia" />
            <StatCard number="100%" text="Compromiso" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Mis Servicios</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<Code className="h-12 w-12 text-purple-500" />}
              title="Landing Pages"
              description="Páginas de aterrizaje optimizadas para convertir visitantes en clientes."
            />
            <ServiceCard
              icon={<Laptop className="h-12 w-12 text-blue-500" />}
              title="Sitios Web"
              description="Sitios web responsivos y atractivos que representan tu marca."
            />
            <ServiceCard
              icon={<ShoppingCart className="h-12 w-12 text-green-500" />}
              title="E-commerce"
              description="Tiendas en línea robustas y seguras para impulsar tus ventas."
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Tu Nombre"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="mb-6 text-3xl font-bold">Sobre Mí</h2>
              <p className="mb-4 text-gray-300">
                Soy un desarrollador web apasionado con años de experiencia en la creación de soluciones digitales
                impactantes. Mi enfoque se centra en combinar diseño atractivo con funcionalidad robusta para ofrecer
                experiencias excepcionales a los usuarios.
              </p>
              <p className="text-gray-300">
                Trabajo de cerca con mis clientes para entender sus necesidades y objetivos, asegurando que cada
                proyecto no solo cumpla, sino que supere las expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Mi Proceso de Trabajo</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <ProcessCard
              icon={<Users className="h-12 w-12 text-purple-500" />}
              step="1"
              title="Consulta"
              description="Entendemos tus necesidades y objetivos"
            />
            <ProcessCard
              icon={<Laptop className="h-12 w-12 text-blue-500" />}
              step="2"
              title="Diseño"
              description="Creamos mockups y prototipos"
            />
            <ProcessCard
              icon={<Code className="h-12 w-12 text-green-500" />}
              step="3"
              title="Desarrollo"
              description="Construimos tu solución digital"
            />
            <ProcessCard
              icon={<CheckCircle className="h-12 w-12 text-yellow-500" />}
              step="4"
              title="Lanzamiento"
              description="Desplegamos y optimizamos tu proyecto"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Proyectos Destacados</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <ProjectCard
              image="/placeholder.svg?height=200&width=300"
              title="E-commerce de Moda"
              description="Tienda en línea para una marca de ropa exclusiva"
            />
            <ProjectCard
              image="/placeholder.svg?height=200&width=300"
              title="Landing Page SaaS"
              description="Página de aterrizaje para una startup de software"
            />
            <ProjectCard
              image="/placeholder.svg?height=200&width=300"
              title="Sitio Web Corporativo"
              description="Sitio web para una empresa de consultoría financiera"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cuánto tiempo toma desarrollar un sitio web?</AccordionTrigger>
              <AccordionContent>
                El tiempo de desarrollo varía según la complejidad del proyecto. Una landing page simple puede tomar 1-2
                semanas, mientras que un e-commerce completo puede llevar 2-3 meses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Ofreces mantenimiento después del lanzamiento?</AccordionTrigger>
              <AccordionContent>
                Sí, ofrezco planes de mantenimiento para asegurar que tu sitio web permanezca actualizado, seguro y
                funcionando óptimamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>¿Puedo actualizar el contenido de mi sitio por mi cuenta?</AccordionTrigger>
              <AccordionContent>
                Absolutamente. Implemento sistemas de gestión de contenido fáciles de usar que te permiten actualizar tu
                sitio sin conocimientos técnicos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Contáctame</h2>
          <form className="mx-auto max-w-lg space-y-6">
            <Input type="text" placeholder="Nombre" className="bg-gray-700" />
            <Input type="email" placeholder="Email" className="bg-gray-700" />
            <Textarea placeholder="Mensaje" className="bg-gray-700" />
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

function NavLink({ href, children, mobile = false }) {
  const baseClasses = "text-gray-300 hover:text-white transition-colors duration-300"
  const mobileClasses = mobile ? "block py-2 px-4 text-lg" : ""

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="bg-gray-700">
      <CardContent className="flex flex-col items-center p-6 text-center">
        {icon}
        <h3 className="mb-2 mt-4 text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function StatCard({ number, text }) {
  return (
    <Card className="bg-gray-700">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <span className="text-4xl font-bold text-purple-500">{number}</span>
        <p className="mt-2 text-gray-300">{text}</p>
      </CardContent>
    </Card>
  )
}

function ProcessCard({ icon, step, title, description }) {
  return (
    <Card className="bg-gray-700">
      <CardContent className="flex flex-col items-center p-6 text-center">
        {icon}
        <span className="mt-4 text-2xl font-bold text-purple-500">Paso {step}</span>
        <h3 className="mb-2 mt-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ image, title, description }) {
  return (
    <Card className="bg-gray-700 overflow-hidden">
      <Image src={image || "/placeholder.svg"} alt={title} width={300} height={200} className="w-full object-cover" />
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

