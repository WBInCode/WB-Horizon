import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Portfolio.css'

type Category = 'all' | 'seo' | 'ads' | 'web'

interface Project {
  id: number
  title: string
  category: Category
  description: string
  image: string
  tags: string[]
  stats: { label: string; value: string }[]
  color: string
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<Category>('all')

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: 'Wszystkie' },
    { key: 'seo', label: 'SEO' },
    { key: 'ads', label: 'Google Ads' },
    { key: 'web', label: 'Strony WWW' },
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Fashion',
      category: 'seo',
      description: 'Kompleksowa strategia SEO dla sklepu z odzieżą premium. Wzrost organicznego ruchu o 340% w 8 miesięcy.',
      image: '🛍️',
      tags: ['SEO', 'E-commerce', 'Content'],
      stats: [
        { label: 'Wzrost ruchu', value: '+340%' },
        { label: 'Pozycje TOP 3', value: '47' },
        { label: 'ROI', value: '520%' },
      ],
      color: '#035131',
    },
    {
      id: 2,
      title: 'Kancelaria Prawna',
      category: 'ads',
      description: 'Kampanie Google Ads generujące wysokiej jakości leady dla renomowanej kancelarii prawnej.',
      image: '⚖️',
      tags: ['Google Ads', 'Lead Gen', 'B2B'],
      stats: [
        { label: 'Koszt leada', value: '-65%' },
        { label: 'Konwersje', value: '+180%' },
        { label: 'Quality Score', value: '9/10' },
      ],
      color: '#a62026',
    },
    {
      id: 3,
      title: 'Startup Tech',
      category: 'web',
      description: 'Nowoczesna strona produktowa z zaawansowanymi animacjami i interakcjami dla startupu SaaS.',
      image: '🚀',
      tags: ['React', 'UI/UX', 'Animacje'],
      stats: [
        { label: 'Czas ładowania', value: '0.8s' },
        { label: 'Lighthouse', value: '98/100' },
        { label: 'Konwersja', value: '+85%' },
      ],
      color: '#0d467b',
    },
    {
      id: 4,
      title: 'Sieć Restauracji',
      category: 'seo',
      description: 'Lokalne SEO dla sieci 12 restauracji. Dominacja w Google Maps i wynikach lokalnych.',
      image: '🍔',
      tags: ['Local SEO', 'Google Maps', 'Reviews'],
      stats: [
        { label: 'Wizyt z Map', value: '+420%' },
        { label: 'Opinie', value: '4.8★' },
        { label: 'Lokalne #1', value: '12/12' },
      ],
      color: '#035131',
    },
    {
      id: 5,
      title: 'Sklep Meblowy',
      category: 'ads',
      description: 'Kampanie Performance Max i Shopping dla dużego sklepu meblowego z showroomem.',
      image: '🛋️',
      tags: ['PMax', 'Shopping', 'ROAS'],
      stats: [
        { label: 'ROAS', value: '780%' },
        { label: 'Sprzedaż', value: '+250%' },
        { label: 'CTR', value: '4.2%' },
      ],
      color: '#a62026',
    },
    {
      id: 6,
      title: 'Firma Budowlana',
      category: 'web',
      description: 'Strona korporacyjna z galerią realizacji i systemem zapytań ofertowych dla firmy budowlanej.',
      image: '🏗️',
      tags: ['WordPress', 'CRM', 'Portfolio'],
      stats: [
        { label: 'Zapytania', value: '+320%' },
        { label: 'Mobile', value: '100%' },
        { label: 'Loading', value: '1.2s' },
      ],
      color: '#0d467b',
    },
    {
      id: 7,
      title: 'Klinika Medyczna',
      category: 'seo',
      description: 'Content marketing i SEO dla prywatnej kliniki medycznej z 15 specjalizacjami.',
      image: '🏥',
      tags: ['Medical SEO', 'Content', 'E-E-A-T'],
      stats: [
        { label: 'Ruch organiczny', value: '+580%' },
        { label: 'Artykuły TOP 10', value: '120+' },
        { label: 'Rezerwacje', value: '+210%' },
      ],
      color: '#035131',
    },
    {
      id: 8,
      title: 'Agencja Nieruchomości',
      category: 'ads',
      description: 'Wielokanałowe kampanie dla agencji premium z segmentacją na luksusowe nieruchomości.',
      image: '🏠',
      tags: ['Display', 'YouTube', 'Remarketing'],
      stats: [
        { label: 'Zapytania', value: '+190%' },
        { label: 'CPC', value: '-45%' },
        { label: 'View rate', value: '42%' },
      ],
      color: '#a62026',
    },
    {
      id: 9,
      title: 'Platforma EdTech',
      category: 'web',
      description: 'Aplikacja webowa do nauki online z systemem kursów, płatności i certyfikatami.',
      image: '📚',
      tags: ['Next.js', 'Stripe', 'LMS'],
      stats: [
        { label: 'Użytkownicy', value: '15K+' },
        { label: 'Kursy', value: '50+' },
        { label: 'Ukończenia', value: '89%' },
      ],
      color: '#0d467b',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg">
          <div className="portfolio-hero-gradient"></div>
          <div className="portfolio-grid-pattern"></div>
          <motion.div 
            className="hero-orb orb-1"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="hero-orb orb-2"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
        <div className="container">
          <motion.div 
            className="portfolio-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="label-dot"></span>
              Portfolio
            </motion.div>
            <h1>Nasze <span className="text-gradient-accent">realizacje</span></h1>
            <p>
              Poznaj projekty które zrealizowaliśmy dla naszych klientów. 
              Każdy case study to historia sukcesu i wymiernych rezultatów.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects">
        <div className="container">
          {/* Filters */}
          <motion.div 
            className="portfolio-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-image" style={{ background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}40 100%)` }}>
                    <span className="project-emoji">{project.image}</span>
                    <div className="project-overlay">
                      <button className="view-btn">Zobacz więcej</button>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stats">
                      {project.stats.map((stat, i) => (
                        <div key={i} className="stat">
                          <span className="stat-value" style={{ color: project.color }}>{stat.value}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="portfolio-results">
        <div className="container">
          <motion.div 
            className="results-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="results-text">
              <span className="section-label">Nasze wyniki</span>
              <h2>Liczby mówią same za siebie</h2>
              <p>
                Nie obiecujemy - dostarczamy. Nasze strategie opierają się na danych 
                i sprawdzonych metodologiach, które przynoszą wymierne rezultaty.
              </p>
            </div>
            <div className="results-stats">
              <div className="result-item">
                <span className="result-number">2.5M+</span>
                <span className="result-label">Wygenerowanych wizyt</span>
              </div>
              <div className="result-item">
                <span className="result-number">€4M+</span>
                <span className="result-label">Przychodu klientów</span>
              </div>
              <div className="result-item">
                <span className="result-number">340%</span>
                <span className="result-label">Średni wzrost ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="container">
          <motion.div 
            className="cta-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2>Twój projekt może być następny</h2>
              <p>Porozmawiajmy o tym, jak możemy pomóc w rozwoju Twojego biznesu online.</p>
              <a href="/kontakt" className="btn btn-primary">
                Rozpocznij projekt
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
            <div className="cta-decoration">
              <div className="deco-ring ring-1"></div>
              <div className="deco-ring ring-2"></div>
              <div className="deco-ring ring-3"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
