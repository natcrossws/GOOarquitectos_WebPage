import { useState } from 'react'
import type { Page } from '../App'
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
import proj13img from '../imports/image-13.png'
import proj14img from '../imports/image-14.png'
import proj15img from '../imports/image-15.png'
import proj16img from '../imports/image-16.png'
import proj17img from '../imports/image-17.png'
import proj18img from '../imports/image-18.png'
import proj19img from '../imports/image-19.png'
import proj20img from '../imports/image-20.png'
import proj21img from '../imports/image-21.png'
import proj22img from '../imports/image-22.png'

const allProjects = [
  { title: 'Casa Miraflores', type: 'Residencial', year: '2024', area: '420 m²', location: 'Monterrey, MX', img: proj3img },
  { title: 'Anfiteatro Costa', type: 'Espacio Público', year: '2024', area: '3,800 m²', location: 'Mazatlán, MX', img: proj4img },
  { title: 'Parque Cívico', type: 'Paisajismo', year: '2023', area: '12,000 m²', location: 'Guadalajara, MX', img: proj5img },
  { title: 'Casa Horizonte', type: 'Residencial', year: '2024', area: '580 m²', location: 'San Miguel, MX', img: proj6img },
  { title: 'Pabellón Rural', type: 'Hospitalidad', year: '2023', area: '890 m²', location: 'Oaxaca, MX', img: proj7img },
  { title: 'Torre Montejo', type: 'Inmobiliario', year: '2023', area: '8,200 m²', location: 'Ciudad de México, MX', img: proj8img },
  { title: 'Plaza Arco', type: 'Comercial', year: '2022', area: '5,400 m²', location: 'Monterrey, MX', img: proj9img },
  { title: 'Edificio Lomas', type: 'Residencial', year: '2023', area: '6,700 m²', location: 'Ciudad de México, MX', img: proj10img },
  { title: 'Club Centenario', type: 'Hospitalidad', year: '2022', area: '2,100 m²', location: 'Querétaro, MX', img: proj11img },
  { title: 'Pabellón Estructural', type: 'Instalación', year: '2022', area: '320 m²', location: 'Ciudad de México, MX', img: proj12img },
  { title: 'Casa Triangular', type: 'Residencial', year: '2023', area: '340 m²', location: 'Valle de Bravo, MX', img: proj13img },
  { title: 'Proyecto Acuático', type: 'Espacio Público', year: '2023', area: '—', location: '—', img: proj14img },
  { title: 'Proyecto 15', type: 'Comercial', year: '2022', area: '—', location: '—', img: proj15img },
  { title: 'Proyecto 16', type: 'Residencial', year: '2023', area: '—', location: '—', img: proj16img },
  { title: 'Proyecto 17', type: 'Inmobiliario', year: '2022', area: '—', location: '—', img: proj17img },
  { title: 'Proyecto 18', type: 'Hospitalidad', year: '2023', area: '—', location: '—', img: proj18img },
  { title: 'Proyecto 19', type: 'Comercial', year: '2022', area: '—', location: '—', img: proj19img },
  { title: 'Proyecto 20', type: 'Residencial', year: '2023', area: '—', location: '—', img: proj20img },
  { title: 'Proyecto 21', type: 'Paisajismo', year: '2022', area: '—', location: '—', img: proj21img },
  { title: 'Proyecto 22', type: 'Instalación', year: '2022', area: '—', location: '—', img: proj22img },
]

const FILTERS = ['Todos', 'Residencial', 'Inmobiliario', 'Espacio Público', 'Hospitalidad', 'Comercial', 'Paisajismo', 'Instalación']

export default function ProjectsPage({ navigate }: { navigate: (page: Page) => void }) {
  const [filter, setFilter] = useState('Todos')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = filter === 'Todos' ? allProjects : allProjects.filter(p => p.type === filter)

  return (
    <div className="bg-parchment min-h-screen">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-12 py-5"
        style={{ background: 'rgba(242,239,233,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(26,25,23,0.07)' }}
      >
        <button onClick={() => navigate('home')} className="font-mono text-xs tracking-[0.22em] font-bold text-charcoal hover:text-bronze transition-colors">
          EA / ESTUDIO
        </button>
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => navigate('home')} className="text-xs tracking-wide text-charcoal/45 hover:text-charcoal transition-colors">
            ← Inicio
          </button>
          <span className="text-xs tracking-wide text-charcoal font-medium" style={{ borderBottom: '1px solid rgba(26,25,23,0.3)', paddingBottom: '2px' }}>
            Proyectos
          </span>
          <button onClick={() => navigate('services')} className="text-xs tracking-wide text-charcoal/45 hover:text-charcoal transition-colors">
            Servicios
          </button>
        </div>
        <button onClick={() => navigate('home')} className="font-mono text-[9px] tracking-widest text-charcoal/40 hover:text-bronze transition-colors">
          INICIO →
        </button>
      </nav>

      {/* PAGE HERO */}
      <div className="pt-36 pb-16 px-10 lg:px-20" style={{ borderBottom: '1px solid rgba(26,25,23,0.08)' }}>
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <span className="font-mono text-[9px] tracking-[0.35em] text-bronze block mb-5">PORTAFOLIO COMPLETO</span>
            <h1 className="font-display text-5xl lg:text-[72px] text-charcoal leading-[1.0]">
              Nuestro<br /><span style={{ fontStyle: 'italic' }}>trabajo</span>
            </h1>
          </div>
          <div className="hidden lg:flex items-end gap-12 pb-2">
            <div className="text-right">
              <div className="font-display text-4xl text-charcoal">{allProjects.length}</div>
              <div className="font-mono text-[8px] tracking-widest mt-1" style={{ color: 'rgba(26,25,23,0.38)' }}>PROYECTOS</div>
            </div>
            <div className="text-right">
              <div className="font-display text-4xl text-charcoal">6+</div>
              <div className="font-mono text-[8px] tracking-widest mt-1" style={{ color: 'rgba(26,25,23,0.38)' }}>AÑOS</div>
            </div>
            <div className="text-right">
              <div className="font-display text-4xl text-charcoal">MX</div>
              <div className="font-mono text-[8px] tracking-widest mt-1" style={{ color: 'rgba(26,25,23,0.38)' }}>PRESENCIA</div>
            </div>
          </div>
        </div>
      </div>

      {/* STICKY FILTER BAR */}
      <div
        className="sticky top-[65px] z-40 px-10 lg:px-20 py-4"
        style={{ background: 'rgba(242,239,233,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(26,25,23,0.07)' }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto">
          <span className="font-mono text-[8px] tracking-widest shrink-0 mr-2" style={{ color: 'rgba(26,25,23,0.35)' }}>FILTRAR</span>
          {FILTERS.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="shrink-0 font-mono text-[9px] tracking-widest px-4 py-1.5 transition-all duration-200"
              style={{
                border: '1px solid',
                borderColor: filter === t ? '#1A1917' : 'rgba(26,25,23,0.15)',
                background: filter === t ? '#1A1917' : 'transparent',
                color: filter === t ? '#F2EFE9' : 'rgba(26,25,23,0.5)',
              }}
            >
              {t}
            </button>
          ))}
          <span className="font-mono text-[9px] ml-auto shrink-0" style={{ color: 'rgba(26,25,23,0.3)' }}>
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="px-10 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12">
          {filtered.map((p, i) => (
            <div
              key={p.title + i}
              className="group cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '1/1', background: '#E8E4DC' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 flex items-end p-5 transition-opacity duration-300"
                  style={{ background: 'rgba(26,25,23,0.6)', opacity: hovered === i ? 1 : 0 }}
                >
                  <div>
                    <div className="font-mono text-[8px] tracking-widest mb-2" style={{ color: 'rgba(242,239,233,0.5)' }}>
                      {p.area}{p.location !== '—' ? ` · ${p.location}` : ''}
                    </div>
                    <div className="font-display text-parchment text-sm" style={{ fontStyle: 'italic' }}>
                      Ver proyecto →
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-base text-charcoal leading-tight group-hover:text-bronze transition-colors">
                    {p.title}
                  </div>
                  <div className="font-mono text-[9px] tracking-wide mt-1.5" style={{ color: 'rgba(26,25,23,0.4)' }}>
                    {p.type}
                  </div>
                </div>
                <div className="font-mono text-[10px] text-bronze mt-0.5 shrink-0 ml-3">{p.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-10 lg:px-20 bg-charcoal text-parchment text-center">
        <span className="font-mono text-[9px] tracking-[0.35em] text-bronze block mb-8">SIGUIENTE PASO</span>
        <h2 className="font-display text-4xl lg:text-5xl mb-6 leading-[1.1]">
          ¿Tienes un proyecto<br /><span style={{ fontStyle: 'italic' }}>en mente?</span>
        </h2>
        <p className="text-[14px] mb-10 max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(242,239,233,0.45)' }}>
          Conversemos sobre cómo podemos estructurar y desarrollar tu próximo desarrollo.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            className="bg-bronze text-parchment px-12 py-4 text-sm font-medium hover:bg-parchment hover:text-charcoal transition-all duration-300"
            style={{ borderRadius: '999px' }}
          >
            Contactar al estudio
          </button>
          <button
            onClick={() => navigate('services')}
            className="text-sm font-medium transition-colors"
            style={{ color: 'rgba(242,239,233,0.45)', borderBottom: '1px solid rgba(242,239,233,0.2)', paddingBottom: '2px' }}
          >
            Ver nuestros servicios →
          </button>
        </div>
      </div>

      <footer className="py-12 px-10 lg:px-20 bg-charcoal" style={{ borderTop: '1px solid rgba(242,239,233,0.06)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
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
