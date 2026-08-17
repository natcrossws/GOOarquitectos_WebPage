import { useState } from 'react'
import type { Page } from '../App'
import heroImg0 from '../imports/Screenshot_2026-08-13_at_20.30.36.png'
import heroImg1 from '../imports/Screenshot_2026-08-13_at_20.45.19.png'
import proj3img from '../imports/image-3.png'
import proj4img from '../imports/image-4.png'
import proj5img from '../imports/image-5.png'
import proj6img from '../imports/image-6.png'
import proj7img from '../imports/image-7.png'
import proj8img from '../imports/image-8.png'
import proj9img from '../imports/image-9.png'
import proj10img from '../imports/image-10.png'
import proj11img from '../imports/image-11.png'
import proj12img from '../imports/image-12.png'

const IMGS = {
  hero0: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1400&h=1400&fit=crop&auto=format',
  hero1: 'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?w=1400&h=1400&fit=crop&auto=format',
  hero2: 'https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=1400&h=1400&fit=crop&auto=format',
  proj1: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&h=1000&fit=crop&auto=format',
  proj2: 'https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?w=800&h=1000&fit=crop&auto=format',
  proj3: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=1000&fit=crop&auto=format',
}

function FloorPlan1() {
  return (
    <svg viewBox="0 0 300 220" fill="none" className="w-full h-full">
      <rect x="20" y="20" width="260" height="180" stroke="white" strokeWidth="1.5" />
      <line x1="20" y1="110" x2="165" y2="110" stroke="white" strokeWidth="1" />
      <line x1="165" y1="20" x2="165" y2="200" stroke="white" strokeWidth="1" />
      <path d="M20 80 A28 28 0 0 1 48 108" stroke="white" strokeWidth="1" />
      <path d="M88 200 A22 22 0 0 1 110 178" stroke="white" strokeWidth="1" />
      <line x1="55" y1="20" x2="88" y2="20" stroke="white" strokeWidth="3" />
      <text x="52" y="72" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="Space Mono">SALA</text>
      <text x="44" y="165" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="Space Mono">HABITACION</text>
    </svg>
  )
}

function FloorPlan2() {
  return (
    <svg viewBox="0 0 300 220" fill="none" className="w-full h-full">
      <rect x="15" y="15" width="270" height="190" stroke="white" strokeWidth="1.5" />
      <line x1="15" y1="95" x2="185" y2="95" stroke="white" strokeWidth="1" />
      <line x1="185" y1="15" x2="185" y2="205" stroke="white" strokeWidth="1" />
      <line x1="100" y1="95" x2="100" y2="205" stroke="white" strokeWidth="1" />
      <path d="M15 62 A30 30 0 0 1 45 92" stroke="white" strokeWidth="1" />
      <line x1="105" y1="15" x2="145" y2="15" stroke="white" strokeWidth="3" />
      <text x="58" y="62" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="Space Mono">LOBBY</text>
      <text x="202" y="65" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="Space Mono">OFICINAS</text>
    </svg>
  )
}

function FloorPlan3() {
  return (
    <svg viewBox="0 0 300 220" fill="none" className="w-full h-full">
      <rect x="25" y="25" width="250" height="170" stroke="white" strokeWidth="1.5" />
      <line x1="25" y1="120" x2="275" y2="120" stroke="white" strokeWidth="1" />
      <line x1="130" y1="25" x2="130" y2="195" stroke="white" strokeWidth="1" />
      <path d="M25 92 A24 24 0 0 1 49 116" stroke="white" strokeWidth="1" />
      <path d="M155 195 A22 22 0 0 1 177 173" stroke="white" strokeWidth="1" />
      <line x1="180" y1="25" x2="215" y2="25" stroke="white" strokeWidth="3" />
      <text x="44" y="52" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="Space Mono">RECEPCION</text>
      <text x="148" y="82" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="Space Mono">AREA COMUN</text>
    </svg>
  )
}

const projects = [
  { title: 'Casa Miraflores', type: 'Residencial Privado', year: '2024', img: proj3img, plan: <FloorPlan1 />, area: '420 m²', location: 'Monterrey, MX' },
  { title: 'Anfiteatro Costa', type: 'Espacio Público', year: '2024', img: proj4img, plan: <FloorPlan2 />, area: '3,800 m²', location: 'Mazatlán, MX' },
  { title: 'Parque Cívico', type: 'Paisajismo & Cultura', year: '2023', img: proj5img, plan: <FloorPlan3 />, area: '12,000 m²', location: 'Guadalajara, MX' },
  { title: 'Casa Horizonte', type: 'Residencial Privado', year: '2024', img: proj6img, plan: <FloorPlan1 />, area: '580 m²', location: 'San Miguel, MX' },
  { title: 'Pabellón Rural', type: 'Hospitalidad', year: '2023', img: proj7img, plan: <FloorPlan2 />, area: '890 m²', location: 'Oaxaca, MX' },
  { title: 'Torre Montejo', type: 'Desarrollo Inmobiliario', year: '2023', img: proj8img, plan: <FloorPlan3 />, area: '8,200 m²', location: 'Ciudad de Mexico, MX' },
  { title: 'Plaza Arco', type: 'Comercial & Mixto', year: '2022', img: proj9img, plan: <FloorPlan1 />, area: '5,400 m²', location: 'Monterrey, MX' },
  { title: 'Edificio Lomas', type: 'Residencial Plurifamiliar', year: '2023', img: proj10img, plan: <FloorPlan2 />, area: '6,700 m²', location: 'Ciudad de Mexico, MX' },
  { title: 'Club Centenario', type: 'Hospitalidad & Comercial', year: '2022', img: proj11img, plan: <FloorPlan3 />, area: '2,100 m²', location: 'Querétaro, MX' },
  { title: 'Pabellón Estructural', type: 'Instalación Temporal', year: '2022', img: proj12img, plan: <FloorPlan1 />, area: '320 m²', location: 'Ciudad de Mexico, MX' },
]

const visionSlides = [
  {
    num: '01',
    title: 'Mas alla del despacho tradicional',
    body: 'El modelo tradicional de los despachos de arquitectura depende de la obtencion constante de proyectos de diseno, lo que limita su crecimiento y los mantiene como proveedores de un servicio especifico.',
    highlight: 'Nuestra propuesta va mas alla del diseno: nos posicionamos como aliados estrategicos capaces de estructurar, desarrollar y gestionar proyectos desde su concepcion hasta su ejecucion.',
  },
  {
    num: '02',
    title: 'Donde se genera el valor real',
    body: 'Participamos desde las etapas donde realmente se genera valor: la identificacion de oportunidades, el analisis tecnico y financiero, la estructuracion de negocios y la coordinacion de equipos multidisciplinarios.',
    highlight: 'Cada proyecto es una plataforma de creacion de valor, no solo un encargo de diseno.',
  },
  {
    num: '03',
    title: 'Coordinacion integral',
    body: 'Integramos capacidades tecnicas, financieras, comerciales y de ejecucion bajo una sola vision estrategica. Nuestro enfoque asegura coherencia en cada etapa del desarrollo.',
    highlight: 'De la identificacion del terreno a la entrega del proyecto, somos el hilo conductor de todo el proceso.',
  },
]

const serviceLines = [
  { num: '01', name: 'Estructuracion Estrategica', short: 'Identificacion, viabilidad y estructuracion de negocios inmobiliarios.' },
  { num: '02', name: 'Dictamen Tecnico', short: 'Analisis independiente de terrenos, normativa, factibilidad y procesos.' },
  { num: '03', name: 'Project Management', short: 'Coordinacion integral desde planeacion hasta entrega final.' },
  { num: '04', name: 'Bid & Partnership', short: 'Integracion de equipos y coordinacion de licitaciones y concursos.' },
  { num: '05', name: 'Architecture & Design', short: 'Diseno arquitectonico, interiores y visualizacion de proyectos.' },
  { num: '06', name: 'Construction & Build', short: 'Obra nueva, remodelaciones y entrega llave en mano.' },
  { num: '07', name: 'Furniture & Product', short: 'Mobiliario a medida y desarrollo de productos arquitectonicos.' },
]

export default function HomePage({ navigate }: { navigate: (page: Page) => void }) {
  const [slide, setSlide] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="bg-parchment">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-12 py-5"
        style={{ background: 'rgba(242,239,233,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(26,25,23,0.07)' }}
      >
        <div className="font-mono text-xs tracking-[0.22em] font-bold text-charcoal">EA / ESTUDIO</div>
        <div className="hidden md:flex items-center gap-10">
          {['Vision', 'Proyectos', 'Servicios', 'Contacto'].map(item => (
            <button key={item} className="text-xs tracking-wide text-charcoal/50 hover:text-charcoal transition-colors"
              onClick={() => item === 'Servicios' ? navigate('services') : undefined}>
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: '100vh', display: 'grid', gridTemplateColumns: '53% 47%', overflow: 'hidden' }}>

        {/* LEFT PANEL */}
        <div
          className="relative flex flex-col justify-end px-10 lg:px-14 pb-14"
          style={{ animation: 'fadeUp 1s cubic-bezier(0.22,1,0.36,1) both', animationDelay: '0.05s' }}
        >
          <div className="absolute right-0 top-0 bottom-0" style={{ width: '1px', background: 'rgba(26,25,23,0.1)' }} />

          <div className="mb-8">
            <span className="font-mono text-[9px] tracking-[0.22em] text-charcoal/55 px-4 py-1.5 inline-block"
              style={{ border: '1px solid rgba(26,25,23,0.2)', borderRadius: '999px' }}>
              ESTUDIO DE ARQUITECTURA
            </span>
          </div>

          <h1 className="font-display leading-[1.0] mb-10 text-charcoal" style={{ fontSize: 'clamp(44px, 5vw, 76px)' }}>
            Dise&ntilde;o con<br />
            intenci&oacute;n.<br />
            Desarrollo<br />
            con visi&oacute;n.
          </h1>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('services')}
              className="bg-charcoal text-parchment text-sm font-medium hover:bg-bronze transition-colors"
              style={{ borderRadius: '999px', padding: '12px 28px' }}
            >
              Conocer el estudio
            </button>
            <button className="flex items-center gap-3 text-sm text-charcoal/55 hover:text-charcoal transition-colors">
              <div className="flex items-center justify-center shrink-0 text-xs"
                style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(26,25,23,0.22)' }}>
                &rarr;
              </div>
              Ver proyectos
            </button>
          </div>
        </div>

        {/* RIGHT PANEL — 3 independent circle strips at different heights */}
        <div className="relative overflow-hidden" style={{ height: '100vh' }}>

          {/* "20" — ARRIBA del primer círculo, imagen recortada en el número */}
          <div
            className="absolute font-display select-none pointer-events-none"
            style={{
              fontSize: '20vw',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              top: '3%',
              left: '-1%',
              zIndex: 1,
              backgroundImage: `url(${heroImg0})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            20
          </div>

          {/* "26" — justo debajo del círculo central, imagen recortada en el número */}
          <div
            className="absolute font-display select-none pointer-events-none"
            style={{
              fontSize: '20vw',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              top: 'calc(9% + 48vw - 1%)',
              left: '16%',
              zIndex: 1,
              backgroundImage: `url(${heroImg1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center bottom',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            26
          </div>

          {/* 3 column grid — strips occupy 78% of panel, leaving right breathing room */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.4fr 0.8fr', width: 'calc(100% - 100px)', height: '100%', position: 'relative', zIndex: 2 }}>

            {/* ─ Col 0: left — interior con ventana ─ */}
            <div className="relative overflow-hidden" style={{ borderRight: '1px solid rgba(26,25,23,0.1)' }}>
              <div
                className="absolute"
                style={{
                  width: '300%',
                  height: '48vw',
                  left: '0%',
                  top: '18%',
                  animation: 'slideUp 1.5s cubic-bezier(0.22,1,0.36,1) both',
                  animationDelay: '0.1s',
                }}
              >
                <img src={heroImg0} alt="" className="w-full h-full object-cover" style={{ borderRadius: '50%' }} />
              </div>
            </div>

            {/* ─ Col 1: center — fachada de madera ─ */}
            <div className="relative overflow-hidden" style={{ borderRight: '1px solid rgba(26,25,23,0.1)' }}>
              <div
                className="absolute"
                style={{
                  width: '300%',
                  height: '48vw',
                  left: '-100%',
                  top: '9%',
                  animation: 'slideDown 1.5s cubic-bezier(0.22,1,0.36,1) both',
                  animationDelay: '0.3s',
                }}
              >
                <img src={heroImg1} alt="" className="w-full h-full object-cover" style={{ borderRadius: '50%' }} />
              </div>
            </div>

            {/* ─ Col 2: right — edificio concreto ─ */}
            <div className="relative overflow-hidden">
              <div
                className="absolute"
                style={{
                  width: '300%',
                  height: '27vw',
                  left: '-200%',
                  top: '40%',
                  animation: 'slideUp 1.5s cubic-bezier(0.22,1,0.36,1) both',
                  animationDelay: '0.5s',
                }}
              >
                <img src={IMGS.hero2} alt="" className="w-full h-full object-cover" style={{ borderRadius: '50%' }} />
              </div>
            </div>

          </div>

          {/* Project card — Prisma (top-right, above col2 circle start) */}
          <div
            className="absolute z-10"
            style={{ right: '6%', top: '14%', animation: 'fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) both', animationDelay: '0.9s' }}
          >
            <div className="font-display text-sm text-charcoal mb-1.5" style={{ fontStyle: 'italic' }}>
              Prisma &mdash;
            </div>
            <div className="text-[11px] leading-snug" style={{ color: 'rgba(26,25,23,0.52)' }}>
              49 Social housing<br />rental apartments
            </div>
          </div>

          {/* Project card — Indigo (lower right) */}
          <div
            className="absolute z-10"
            style={{ right: '6%', bottom: '14%', animation: 'fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) both', animationDelay: '1.1s' }}
          >
            <div className="font-display text-sm text-charcoal mb-1.5" style={{ fontStyle: 'italic' }}>
              Indigo &mdash;
            </div>
            <div className="text-[11px] leading-snug" style={{ color: 'rgba(26,25,23,0.52)' }}>
              3 Penthouses y<br />28 residencias
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute right-4 bottom-8 flex flex-col items-center gap-3 z-20">
            <span className="font-mono text-[8px] tracking-widest"
              style={{ color: 'rgba(26,25,23,0.26)', writingMode: 'vertical-rl' }}>
              Scroll
            </span>
            <div className="flex items-center justify-center font-mono text-[9px]"
              style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid rgba(26,25,23,0.14)', color: 'rgba(26,25,23,0.26)' }}>
              0
            </div>
          </div>

        </div>
      </section>

      {/* VISION — charcoal dark */}
      <section
        id="vision"
        className="py-28 px-10 lg:px-20 relative overflow-hidden bg-charcoal text-parchment"
        style={{
          backgroundImage: `
            linear-gradient(rgba(242,239,233,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242,239,233,0.06) 1px, transparent 1px),
            linear-gradient(rgba(242,239,233,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242,239,233,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px, 96px 96px, 24px 24px, 24px 24px',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between mb-16">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] text-bronze">VISION DEL ESTUDIO</span>
              <h2 className="font-display text-4xl lg:text-5xl mt-3 text-parchment leading-[1.1]">
                Mas que arquitectura.<br />
                <span style={{ fontStyle: 'italic' }}>Desarrollo estrategico.</span>
              </h2>
            </div>
            <div className="hidden lg:flex items-center gap-2 mt-3">
              <button onClick={() => setSlide(s => Math.max(0, s - 1))} disabled={slide === 0}
                className="w-10 h-10 flex items-center justify-center border text-parchment hover:bg-parchment hover:text-charcoal transition-all disabled:opacity-25 text-sm"
                style={{ borderColor: 'rgba(242,239,233,0.2)' }}>&larr;</button>
              <button onClick={() => setSlide(s => Math.min(visionSlides.length - 1, s + 1))} disabled={slide === visionSlides.length - 1}
                className="w-10 h-10 flex items-center justify-center border text-parchment hover:bg-parchment hover:text-charcoal transition-all disabled:opacity-25 text-sm"
                style={{ borderColor: 'rgba(242,239,233,0.2)' }}>&rarr;</button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${slide * 100}%)`, transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}>
              {visionSlides.map((s, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                      <div className="font-display leading-none text-parchment select-none mb-2"
                        style={{ fontSize: '130px', opacity: 0.06 }}>{s.num}</div>
                      <h3 className="font-display text-2xl lg:text-3xl text-parchment leading-snug -mt-4">{s.title}</h3>
                    </div>
                    <div className="flex flex-col gap-6 lg:pt-4">
                      <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(242,239,233,0.55)' }}>{s.body}</p>
                      <div className="pl-5 py-4" style={{ borderLeft: '2px solid #8B7355' }}>
                        <p className="text-sm leading-relaxed font-medium text-parchment">{s.highlight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-12">
            {visionSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} className="transition-all duration-500"
                style={{ height: '2px', width: i === slide ? '44px' : '18px', background: i === slide ? '#8B7355' : 'rgba(242,239,233,0.18)' }} />
            ))}
            <span className="font-mono text-xs ml-4" style={{ color: 'rgba(242,239,233,0.3)' }}>
              {String(slide + 1).padStart(2, '0')} / {String(visionSlides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>

      {/* PROJECTS — bone warm neutral */}
      <section id="proyectos" className="py-24 px-10 lg:px-20" style={{ background: '#E8E4DC' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] text-bronze">PROYECTOS SELECCIONADOS</span>
              <h2 className="font-display text-4xl lg:text-5xl mt-3 text-charcoal">Nuestro trabajo</h2>
            </div>
            <button onClick={() => navigate('projects')} className="hidden md:block text-sm font-medium text-charcoal/55 hover:text-charcoal transition-colors"
              style={{ borderBottom: '1px solid rgba(26,25,23,0.22)', paddingBottom: '2px' }}>
              Ver todos los proyectos &rarr;
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <div key={i} className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredProject(i)} onMouseLeave={() => setHoveredProject(null)}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4', background: '#D4CFC7' }}>
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-10 transition-all duration-500"
                    style={{ background: 'rgba(22,20,18,0.9)', opacity: hoveredProject === i ? 1 : 0 }}>
                    <div className="w-full flex-1 max-h-52">{p.plan}</div>
                    <div className="w-full mt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <div className="font-mono text-[8px] tracking-widest mt-4 mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        PLANO ESQUEMATICO &middot; {p.area}
                      </div>
                      <div className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.location}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <div className="font-display text-lg text-charcoal leading-tight">{p.title}</div>
                    <div className="font-mono text-[9px] tracking-wide mt-1.5" style={{ color: 'rgba(26,25,23,0.4)' }}>{p.type}</div>
                  </div>
                  <div className="font-mono text-xs text-bronze mt-0.5">{p.year}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button onClick={() => navigate('projects')} className="border text-charcoal px-12 py-3.5 text-sm hover:bg-charcoal hover:text-parchment transition-all duration-300 font-medium"
              style={{ borderColor: 'rgba(26,25,23,0.22)' }}>
              Ver todos los proyectos
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES — editorial split layout */}
      <section className="overflow-hidden" style={{ background: '#F2EFE9', borderTop: '1px solid rgba(26,25,23,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '42% 58%', minHeight: '100vh' }}>

          {/* LEFT — stacked images */}
          <div className="relative flex flex-col" style={{ borderRight: '1px solid rgba(26,25,23,0.08)' }}>
            {/* Top image — tall */}
            <div className="relative overflow-hidden" style={{ flex: '0 0 62%' }}>
              <img
                src="https://images.unsplash.com/photo-1682184805271-11671b7ecf4c?w=900&h=800&fit=crop&auto=format"
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Floating label */}
              <div className="absolute bottom-6 left-6">
                <div className="font-mono text-[9px] tracking-widest text-parchment/60 mb-1">ARCHITECTURE & DESIGN</div>
                <div className="font-display text-parchment text-sm" style={{ fontStyle: 'italic' }}>Casa Miraflores, 2024</div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(26,25,23,0.08)' }} />

            {/* Bottom image — landscape */}
            <div className="relative overflow-hidden" style={{ flex: '1' }}>
              <img
                src="https://images.unsplash.com/photo-1549791084-5f78368b208b?w=900&h=500&fit=crop&auto=format"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(26,25,23,0.18)' }} />
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-10">
                <div>
                  <div className="font-display text-parchment leading-none" style={{ fontSize: '48px' }}>7</div>
                  <div className="font-mono text-[8px] tracking-widest mt-1" style={{ color: 'rgba(242,239,233,0.5)' }}>LÍNEAS DE SERVICIO</div>
                </div>
                <div>
                  <div className="font-display text-parchment leading-none" style={{ fontSize: '48px' }}>360°</div>
                  <div className="font-mono text-[8px] tracking-widest mt-1" style={{ color: 'rgba(242,239,233,0.5)' }}>COBERTURA INTEGRAL</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — title + service list */}
          <div className="flex flex-col justify-between py-16 px-12 lg:px-16">

            {/* Header */}
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] text-bronze">LÍNEAS DE NEGOCIO</span>
              <h2 className="font-display text-4xl lg:text-[52px] mt-4 text-charcoal leading-[1.05] mb-4">
                Una plataforma<br /><span style={{ fontStyle: 'italic' }}>integral de servicios</span>
              </h2>
              <p className="text-[14px] leading-relaxed max-w-sm" style={{ color: 'rgba(26,25,23,0.5)' }}>
                Siete líneas especializadas que nos permiten participar en cada etapa del ciclo de vida de un proyecto.
              </p>
            </div>

            {/* Service rows */}
            <div className="mt-10 flex-1 flex flex-col justify-center" style={{ borderTop: '1px solid rgba(26,25,23,0.1)' }}>
              {serviceLines.map((s, i) => (
                <button
                  key={i}
                  onClick={() => navigate('services')}
                  className="group w-full text-left flex items-center justify-between py-5 transition-colors hover:bg-bone/40"
                  style={{ borderBottom: '1px solid rgba(26,25,23,0.08)', paddingLeft: '0', paddingRight: '0' }}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[9px] tracking-widest text-bronze w-6 flex-shrink-0">{s.num}</span>
                    <span className="font-display text-lg text-charcoal group-hover:text-bronze transition-colors leading-snug">{s.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden lg:block text-[12px] max-w-[180px] text-right leading-snug transition-colors"
                      style={{ color: 'rgba(26,25,23,0.38)' }}>{s.short}</span>
                    <span className="font-mono text-xs text-charcoal/25 group-hover:text-bronze transition-all duration-300 translate-x-0 group-hover:translate-x-1">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-6">
              <button
                onClick={() => navigate('services')}
                className="bg-charcoal text-parchment text-sm font-medium hover:bg-bronze transition-colors"
                style={{ borderRadius: '999px', padding: '12px 28px' }}
              >
                Ver todos los servicios
              </button>
              <span className="font-mono text-[10px] tracking-wide" style={{ color: 'rgba(26,25,23,0.35)' }}>
                Detalle completo de cada línea
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-10 lg:px-20 bg-charcoal" style={{ borderTop: '1px solid rgba(242,239,233,0.07)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          <div>
            <div className="font-mono text-xs tracking-wider text-parchment/80 mb-4">EA / ESTUDIO DE ARQUITECTURA</div>
            <div className="font-mono text-[11px] leading-relaxed" style={{ color: 'rgba(242,239,233,0.3)' }}>
              Mexico &middot; 2024<br />contacto@estudio-arquitectura.mx
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <div className="font-mono text-[9px] tracking-widest mb-5" style={{ color: 'rgba(242,239,233,0.35)' }}>NAVEGACION</div>
              {['Vision', 'Proyectos', 'Servicios'].map(item => (
                <div key={item} className="text-xs mb-3 cursor-pointer" style={{ color: 'rgba(242,239,233,0.4)' }}
                  onClick={() => item === 'Servicios' ? navigate('services') : undefined}>{item}</div>
              ))}
            </div>
            <div>
              <div className="font-mono text-[9px] tracking-widest mb-5" style={{ color: 'rgba(242,239,233,0.35)' }}>CONTACTO</div>
              {['LinkedIn', 'Instagram', 'Houzz'].map(item => (
                <div key={item} className="text-xs mb-3" style={{ color: 'rgba(242,239,233,0.4)' }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6" style={{ borderTop: '1px solid rgba(242,239,233,0.06)' }}>
          <div className="font-mono text-[10px]" style={{ color: 'rgba(242,239,233,0.22)' }}>
            &copy; 2024 Estudio de Arquitectura. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
