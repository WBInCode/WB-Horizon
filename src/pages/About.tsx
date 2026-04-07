import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const team = [
    {
      name: 'Wojciech Borkowski',
      role: 'CEO & Founder',
      image: '👨‍💼',
      description: 'Ekspert SEO z 10-letnim doświadczeniem w marketingu cyfrowym.',
    },
    {
      name: 'Anna Kowalska',
      role: 'Head of Google Ads',
      image: '👩‍💻',
      description: 'Certyfikowany specjalista Google z portfolio 200+ kampanii.',
    },
    {
      name: 'Michał Nowak',
      role: 'Lead Developer',
      image: '👨‍💻',
      description: 'Full-stack developer tworzący wydajne strony internetowe.',
    },
    {
      name: 'Karolina Wiśniewska',
      role: 'UX/UI Designer',
      image: '👩‍🎨',
      description: 'Projektantka z pasją do tworzenia intuicyjnych interfejsów.',
    },
  ]

  const stats = [
    { number: '150+', label: 'Zadowolonych klientów' },
    { number: '500+', label: 'Zrealizowanych projektów' },
    { number: '10+', label: 'Lat doświadczenia' },
    { number: '98%', label: 'Wskaźnik satysfakcji' },
  ]

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      title: 'Innowacyjność',
      description: 'Wykorzystujemy najnowsze technologie i trendy.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Partnerstwo',
      description: 'Traktujemy klientów jak partnerów biznesowych.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      title: 'Rezultaty',
      description: 'Skupiamy się na mierzalnych wynikach.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Terminowość',
      description: 'Dotrzymujemy ustalonych terminów.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  }

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-hero-gradient"></div>
          <div className="about-hero-pattern"></div>
          <motion.div 
            className="floating-shape shape-1"
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div 
            className="floating-shape shape-2"
            animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="container">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <motion.span 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              🚀 Poznaj nas bliżej
            </motion.span>
            <h1>Tworzymy <span className="text-gradient-accent">cyfrowe</span> sukcesy</h1>
            <p>
              Jesteśmy zespołem pasjonatów marketingu internetowego i programowania. 
              Od 2014 roku pomagamy firmom rozwijać się w świecie online.
            </p>
          </motion.div>

          <motion.div 
            className="stats-row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="stat-item" variants={itemVariants}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <motion.div 
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="section-label">Nasza historia</span>
              <h2>Od pasji do profesji</h2>
              <p>
                WB Horizon powstało z prostej idei - chcieliśmy tworzyć strony internetowe 
                i kampanie marketingowe, które naprawdę działają. Nie takie, które tylko 
                ładnie wyglądają, ale takie, które przynoszą realne rezultaty.
              </p>
              <p>
                Przez lata zbudowaliśmy zespół specjalistów, którzy łączą wiedzę techniczną 
                z kreatywnością. Każdy projekt traktujemy indywidualnie, bo wiemy, że 
                nie ma dwóch takich samych biznesów.
              </p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">📈</span>
                  <span>Średni wzrost ruchu: +180%</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💰</span>
                  <span>ROI kampanii: 340%</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">⭐</span>
                  <span>Ocena Google: 4.9/5</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="story-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="visual-card">
                <div className="visual-accent"></div>
                <div className="visual-content">
                  <span className="visual-year">2014</span>
                  <span className="visual-text">Rok założenia</span>
                </div>
              </div>
              <div className="visual-decorations">
                <div className="deco-circle deco-1"></div>
                <div className="deco-circle deco-2"></div>
                <div className="deco-line"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Nasze wartości</span>
            <h2>Co nas wyróżnia</h2>
            <p>Fundamenty na których budujemy każdy projekt</p>
          </motion.div>

          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Nasz zespół</span>
            <h2>Poznaj ekspertów</h2>
            <p>Ludzie którzy stoją za sukcesem Twoich projektów</p>
          </motion.div>

          <motion.div 
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="team-avatar">{member.image}</div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.description}</p>
                </div>
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Gotowy na współpracę?</h2>
            <p>Porozmawiajmy o Twoim projekcie i zobaczmy jak możemy Ci pomóc.</p>
            <div className="cta-buttons">
              <a href="/kontakt" className="btn btn-primary">
                Skontaktuj się
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="/portfolio" className="btn btn-secondary">
                Zobacz realizacje
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
