"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, ShoppingCart, Menu, X, CheckCircle, Users, ThumbsUp, Zap, Target, Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "@/components/ui/chart"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#03071e] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#03071e] bg-opacity-90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="#" className="text-2xl font-bold text-[#dc2f02]">
            Andrés Figueroa
          </a>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#por-que-yo">¿Por qué yo?</NavLink>
            <NavLink href="#proceso">Proceso</NavLink>
            <NavLink href="#proyectos">Proyectos</NavLink>
            <NavLink href="#testimonios">Testimonios</NavLink>
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
            <NavLink href="#por-que-yo" mobile>
              ¿Por qué yo?
            </NavLink>
            <NavLink href="#proceso" mobile>
              Proceso
            </NavLink>
            <NavLink href="#proyectos" mobile>
              Proyectos
            </NavLink>
            <NavLink href="#testimonios" mobile>
              Testimonios
            </NavLink>
            <NavLink href="#contacto" mobile>
              Contacto
            </NavLink>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 lg:py-36 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Transformando Ideas en Experiencias Digitales Impactantes
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Desarrollo de Landing Pages, Sitios Web y E-commerce de Alto Rendimiento
              </p>
              <Button size="lg" className="bg-[#dc2f02] hover:bg-[#f535eb] text-white">
                Contáctame Ahora
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/robot.jpeg"
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03071e] to-transparent opacity-90"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#801977] py-20">
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
              icon={<Code className="h-12 w-12 text-[#dc2f02]" />}
              title="Landing Pages"
              description="Páginas de aterrizaje optimizadas para convertir visitantes en clientes."
            />
            <ServiceCard
              icon={<Laptop className="h-12 w-12 text-[#7209b7]" />}
              title="Sitios Web"
              description="Sitios web responsivos y atractivos que representan tu marca."
            />
            <ServiceCard
              icon={<ShoppingCart className="h-12 w-12 text-[#dc2f02]" />}
              title="E-commerce"
              description="Tiendas en línea robustas y seguras para impulsar tus ventas."
            />
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="por-que-yo" className="bg-[#801977] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">¿Por qué contratarme?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <WhyMeCard
              icon={<Zap className="h-12 w-12 text-[#dc2f02]" />}
              title="Experiencia Comprobada"
              description="Más de 5 años desarrollando soluciones web de alto impacto."
            />
            <WhyMeCard
              icon={<Target className="h-12 w-12 text-[#7209b7]" />}
              title="Enfoque en Resultados"
              description="Diseño estratégico orientado a cumplir tus objetivos de negocio."
            />
            <WhyMeCard
              icon={<ThumbsUp className="h-12 w-12 text-[#dc2f02]" />}
              title="Satisfacción Garantizada"
              description="Trabajo hasta que estés 100% satisfecho con el resultado."
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <Image
                src="/images/robot.jpeg"
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
      <section id="proceso" className="bg-[#801977] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Mi Proceso de Trabajo</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <ProcessCard
              icon={<Users className="h-12 w-12 text-[#dc2f02]" />}
              step="1"
              title="Consulta"
              description="Entendemos tus necesidades y objetivos"
            />
            <ProcessCard
              icon={<Laptop className="h-12 w-12 text-[#7209b7]" />}
              step="2"
              title="Diseño"
              description="Creamos mockups y prototipos"
            />
            <ProcessCard
              icon={<Code className="h-12 w-12 text-[#dc2f02]" />}
              step="3"
              title="Desarrollo"
              description="Construimos tu solución digital"
            />
            <ProcessCard
              icon={<CheckCircle className="h-12 w-12 text-[#7209b7]" />}
              step="4"
              title="Lanzamiento"
              description="Desplegamos y optimizamos tu proyecto"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20">
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

      {/* Testimonials Section */}
      <section id="testimonios" className="bg-[#801977 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">Lo que dicen de mí</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              rating={5}
              quote="Gracias a su landing, triplicamos nuestras ventas en un mes. ¡Increíble trabajo!"
              author="María G."
              company="Boutique de Moda"
              textColor="text-[#dc2f02]"
            />
            <TestimonialCard
              rating={5}
              quote="Andres transformó nuestra presencia online. Ahora tenemos un e-commerce que realmente vende."
              author="Carlos R."
              company="Tienda de Electrónicos"
              textColor="text-[#7209b7]"
            />
            <Card className="bg-[#03071e] p-6">
              <CardContent className="p-0">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-8 w-2 bg-[#dc2f02]" />
                  <h3 className="text-xl font-semibold text-white">Rendimiento</h3>
                </div>
                <p className="mb-6 text-lg text-[#dc2f02]">
                  "Mis sitios cargan en menos de 2s y tienen +90 en Google PageSpeed. Optimización al máximo."
                </p>
                <p className="font-medium text-gray-300">- Andres Figueroa</p>
                <div className="mt-4 h-[150px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "Carga", value: 95 },
                        { name: "SEO", value: 98 },
                        { name: "Mobile", value: 92 },
                      ]}
                    >
                      <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <Bar dataKey="value" fill="#dc2f02" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
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
      <section id="contacto" className="bg-[#801977] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">Contáctame</h2>
          <form className="mx-auto max-w-lg space-y-6">
            <Input type="text" placeholder="Nombre" className="bg-[#03071e] text-white" />
            <Input type="email" placeholder="Email" className="bg-[#03071e] text-white" />
            <Textarea placeholder="Mensaje" className="bg-[#03071e] text-white" />
            <Button type="submit" className="w-full bg-[#dc2f02] hover:bg-[#7209b7] text-white">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#03071e] py-6 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

function NavLink({ href, children, mobile = false }) {
  const baseClasses = "text-white hover:text-[#dc2f02] transition-colors duration-300"
  const mobileClasses = mobile ? "block py-2 px-4 text-lg" : ""

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="bg-[#03071e] hover:bg-[#801977] transition-colors duration-300 shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        {icon}
        <h3 className="mb-2 mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function StatCard({ number, text }) {
  return (
    <Card className="bg-[#03071e] hover:bg-[#801977] transition-colors duration-300 shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <span className="text-4xl font-bold text-[#dc2f02]">{number}</span>
        <p className="mt-2 text-gray-300">{text}</p>
      </CardContent>
    </Card>
  )
}

function ProcessCard({ icon, step, title, description }) {
  return (
    <Card className="bg-[#03071e] hover:bg-[#801977] transition-colors duration-300 shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        {icon}
        <span className="mt-4 text-2xl font-bold text-[#dc2f02]">Paso {step}</span>
        <h3 className="mb-2 mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ image, title, description }) {
  return (
    <Card className="bg-[#03071e] overflow-hidden hover:bg-[#801977] transition-colors duration-300 shadow-md">
      <Image src={image || "/placeholder.svg"} alt={title} width={300} height={200} className="w-full object-cover" />
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function WhyMeCard({ icon, title, description }) {
  return (
    <Card className="bg-[#03071e] hover:bg-[#801977] transition-colors duration-300 shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        {icon}
        <h3 className="mb-2 mt-4 text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ rating, quote, author, company, textColor = "text-[#dc2f02]" }) {
  return (
    <Card className="bg-[#03071e]">
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-[#dc2f02] text-[#dc2f02]" />
          ))}
        </div>
        <p className={`mb-4 text-lg ${textColor}`}>"{quote}"</p>
        <div>
          <p className="font-semibold text-white">- {author}</p>
          <p className="text-gray-300">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}

