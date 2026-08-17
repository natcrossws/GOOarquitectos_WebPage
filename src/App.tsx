import { useState } from 'react'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'

export type Page = 'home' | 'services' | 'projects'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="bg-parchment min-h-screen">
      {page === 'home' && <HomePage navigate={navigate} />}
      {page === 'services' && <ServicesPage navigate={navigate} />}
      {page === 'projects' && <ProjectsPage navigate={navigate} />}
    </div>
  )
}
