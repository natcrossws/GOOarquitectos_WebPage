import { useState } from 'react'
import type { Page } from '../App'

const services = [
  {
    num: '01',
    name: 'Estructuración Estratégica de Proyectos',
    desc: 'Participamos desde las etapas donde realmente se genera valor, identificando oportunidades y estructurando negocios inmobiliarios de forma integral.',
    items: [
      'Identificación y evaluación de terrenos y oportunidades inmobiliarias',
      'Estudios de viabilidad técnica, normativa, comercial y financiera',
      'Definición del producto inmobiliario',
      'Desarrollo del concepto arquitectónico',
      'Elaboración del proyecto arquitectónico',
      'Corrida financiera y estructuración del negocio',
      'Estrategia comercial y plan de ventas',
      'Desarrollo de renders y material de comercialización',
      'Integración de inversionistas y socios estratégicos',
      'Coordinación integral del desarrollo hasta su ejecución',
    ],
  },
  {
    num: '02',
    name: 'Dictamen Técnico Independiente',
    desc: 'Análisis objetivo e independiente para la toma de decisiones estratégicas en proyectos inmobiliarios y arquitectónicos.',
    items: [
      'Selección y evaluación de terrenos',
      'Estudios de factibilidad',
      'Análisis normativo',
      'Conceptualización del proyecto',
      'Producto inmobiliario',
      'Proyecto arquitectónico',
      'Corridas financieras',
      'Estrategias comerciales',
      'Planes de negocio',
      'Procesos constructivos',
      'Desarrollo y supervisión de obra',
      'Comercialización del proyecto',
    ],
  },
  {
    num: '03',
    name: 'Project Management',
    desc: 'Coordinación integral del proyecto desde su planeación hasta la entrega final, asegurando el cumplimiento de objetivos, plazos y presupuesto.',
    items: [
      'Planeación del proyecto',
      'Coordinación de equipos multidisciplinarios',
      'Administración del cronograma',
      'Seguimiento de avances',
      'Control de presupuesto',
      'Gestión de riesgos',
      'Supervisión de entregables',
      'Coordinación entre cliente, diseñadores, especialistas y constructores',
      'Control de calidad y cumplimiento de objetivos',
    ],
  },
  {
    num: '04',
    name: 'Bid & Partnership Unit',
    desc: 'Unidad especializada en la participación estratégica en licitaciones y la integración de alianzas entre despachos y equipos especializados.',
    items: [
      'Identificación de licitaciones y concursos',
      'Análisis de bases y requisitos',
      'Integración de equipos multidisciplinarios',
      'Vinculación entre despachos especializados',
      'Coordinación de propuestas técnicas',
      'Organización documental',
      'Coordinación general durante el proceso de licitación',
    ],
  },
  {
    num: '05',
    name: 'Architecture & Interior Design',
    desc: 'Diseño arquitectónico e interiorismo de alta calidad, desde la conceptualización hasta el proyecto ejecutivo y la visualización.',
    items: [
      'Diseño arquitectónico',
      'Diseño de interiores',
      'Proyecto ejecutivo',
      'Coordinación de ingenierías',
      'Visualización arquitectónica',
      'Renders',
      'Diseño de experiencias espaciales',
    ],
  },
  {
    num: '06',
    name: 'Construction & Design Build',
    desc: 'Ejecución integral de obra bajo un modelo design-build que garantiza coherencia entre el diseño y la construcción.',
    items: [
      'Construcción de obra nueva',
      'Remodelaciones',
      'Interiorismo',
      'Adecuaciones comerciales',
      'Coordinación de contratistas',
      'Supervisión de obra',
      'Control de calidad',
      'Entrega llave en mano',
    ],
  },
  {
    num: '07',
    name: 'Furniture Design & Product Development',
    desc: 'Diseño y desarrollo de mobiliario a medida y productos arquitectónicos especiales, coordinando fabricación e instalación.',
    items: [
      'Diseño de mobiliario sobre medida',
      'Diseño de cocinas, closets y mobiliario fijo',
      'Desarrollo de mobiliario para oficinas, comercio y hospitalidad',
      'Diseño de productos arquitectónicos especiales',
      'Desarrollo de prototipos',
      'Elaboración de planos de fabricación',
      'Selección de materiales y acabados',
      'Coordinación con talleres y fabricantes especializados',
      'Supervisión de fabricación',
      'Instalación y control de calidad',
    ],
  },
]

function ServiceRow({
  svc,
  isLast,
}: {
  svc: (typeof services)[0]
  isLast: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid rgba(26,25,23,0.1)' }}>
      {/* Header row — always visible */}
      <button
        className="w-full text-left py-10 grid gap-8 items-start group"
        style={{ gridTemplateColumns: '60px 1fr 1fr auto' }}
        onClick={() => setOpen(o => !o)}
      >
        <div className="font-mono text-[9px] tracking-widest text-bronze pt-1">{svc.num}</div>
        <div className="font-display text-xl lg:text-2xl text-charcoal group-hover:text-bronze transition-colors leading-snug">
          {svc.name}
        </div>
        <div
          className="text-[13px] leading-relaxed hidden lg:block"
          style={{ color: 'rgba(26,25,23,0.55)' }}
        >
          {svc.desc}
        </div>
        <div
          className="font-mono text-xs text-charcoal/40 group-hover:text-bronze transition-all duration-300 mt-1"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        >
          +
        </div>
      </button>

      {/* Expanded items */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? '600px' : '0px', transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
      >
        <div className="pb-10 pl-[68px] pr-4">
          <div className="lg:hidden mb-6 text-[13px] leading-relaxed" style={{ color: 'rgba(26,25,23,0.55)' }}>
            {svc.desc}
          </div>
          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3">
            {svc.items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-sm"
                style={{ color: 'rgba(26,25,23,0.68)' }}
              >
                <span className="font-mono text-[8px] text-bronze mt-1.5 flex-shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <div className="bg-parchment min-h-screen">
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-14 py-5"
        style={{
          background: 'rgba(242,239,233,0.94)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(26,25,23,0.08)',
        }}
      >
        <button
          onClick={() => navigate('home')}
          className="font-mono text-xs tracking-[0.2em] text-charcoal font-bold hover:text-bronze transition-colors"
        >
          EA / ESTUDIO
        </button>
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => navigate('home')}
            className="text-xs tracking-wide text-charcoal/45 hover:text-charcoal transition-colors"
          >
            ← Inicio
          </button>
          <span
            className="text-xs tracking-wide text-charcoal font-medium"
            style={{ borderBottom: '1px solid rgba(26,25,23,0.3)', paddingBottom: '2px' }}
          >
            Servicios
          </span>
        </div>
        <button
          onClick={() => navigate('home')}
          className="font-mono text-[9px] tracking-widest text-charcoal/40 hover:text-bronze transition-colors"
        >
          INICIO →
        </button>
      </nav>

      {/* PAGE HERO */}
      <div
        className="pt-32 pb-20 px-10 lg:px-20"
        style={{ borderBottom: '1px solid rgba(26,25,23,0.08)' }}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-16 items-end">
          <div>
            <span className="font-mono text-[9px] tracking-[0.35em] text-bronze block mb-6">
              LÍNEAS DE SERVICIO
            </span>
            <h1 className="font-display text-5xl lg:text-[68px] text-charcoal leading-[1.05]">
              Una plataforma<br />
              <span style={{ fontStyle: 'italic' }}>integral</span> de desarrollo<br />
              arquitectónico
            </h1>
          </div>
          <div>
            <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(26,25,23,0.55)' }}>
              Siete líneas de negocio especializadas que nos permiten participar en cada etapa del ciclo de vida de un proyecto, desde la identificación de la oportunidad hasta la entrega final.
            </p>
            <div className="flex gap-8 mt-10">
              <div>
                <div className="font-display text-3xl text-charcoal">7</div>
                <div className="font-mono text-[8px] tracking-widest mt-1" style={{ color: 'rgba(26,25,23,0.38)' }}>
                  LÍNEAS DE NEGOCIO
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-charcoal">360°</div>
                <div className="font-mono text-[8px] tracking-widest mt-1" style={{ color: 'rgba(26,25,23,0.38)' }}>
                  COBERTURA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INDEX BAR */}
      <div
        className="px-10 lg:px-20 py-5 flex items-center gap-3 overflow-x-auto"
        style={{ borderBottom: '1px solid rgba(26,25,23,0.08)', background: 'rgba(232,228,220,0.5)' }}
      >
        {services.map((s, i) => (
          <button
            key={i}
            className="flex-shrink-0 font-mono text-[9px] tracking-widest px-4 py-1.5 border transition-all hover:bg-charcoal hover:text-parchment hover:border-charcoal"
            style={{ borderColor: 'rgba(26,25,23,0.15)', color: 'rgba(26,25,23,0.5)' }}
          >
            {s.num} {s.name.split(' ').slice(0, 2).join(' ')}
          </button>
        ))}
      </div>

      {/* SERVICES LIST */}
      <div className="max-w-6xl mx-auto px-10 lg:px-20 py-8">
        {services.map((svc, i) => (
          <ServiceRow key={i} svc={svc} isLast={i === services.length - 1} />
        ))}
      </div>

      {/* CTA */}
      <div className="py-28 px-10 lg:px-20 bg-charcoal text-parchment text-center">
        <span className="font-mono text-[9px] tracking-[0.35em] text-bronze block mb-10">
          SIGUIENTE PASO
        </span>
        <h2 className="font-display text-4xl lg:text-5xl mb-8 leading-[1.1]">
          Listo para estructurar<br />
          <span style={{ fontStyle: 'italic' }}>tu próximo proyecto?</span>
        </h2>
        <p
          className="text-[15px] mb-12 max-w-lg mx-auto leading-relaxed"
          style={{ color: 'rgba(242,239,233,0.48)' }}
        >
          Agenda una conversación con nuestro equipo y exploremos juntos
          cómo podemos generar valor en tu próximo desarrollo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-bronze text-parchment px-12 py-4 text-sm hover:bg-parchment hover:text-charcoal transition-all duration-300 font-medium w-full sm:w-auto">
            Contactar al estudio
          </button>
          <button
            onClick={() => navigate('home')}
            className="text-sm font-medium transition-colors w-full sm:w-auto"
            style={{ color: 'rgba(242,239,233,0.45)', borderBottom: '1px solid rgba(242,239,233,0.2)', paddingBottom: '2px' }}
          >
            ← Volver al inicio
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="py-12 px-10 lg:px-20 bg-charcoal"
        style={{ borderTop: '1px solid rgba(242,239,233,0.06)' }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="font-mono text-[10px] tracking-wider" style={{ color: 'rgba(242,239,233,0.28)' }}>
            EA / ESTUDIO DE ARQUITECTURA · México · 2024
          </div>
          <div className="font-mono text-[10px]" style={{ color: 'rgba(242,239,233,0.28)' }}>
            © 2024 Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  )
}
