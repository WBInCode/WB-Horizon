import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        <motion.div 
          className="hero-circle hero-circle-1"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div 
          className="hero-circle hero-circle-2"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot"></span>
            Certyfikowany Partner Google
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Rozwijamy Twój biznes
            <span className="hero-title-accent"> w świecie cyfrowym</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Specjalizujemy się w SEO, kampaniach Google Ads oraz tworzeniu 
            nowoczesnych stron internetowych. Pomagamy firmom osiągać realne 
            wyniki i budować silną obecność online.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="/kontakt" className="btn btn-primary btn-large">
              Rozpocznij współpracę
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a href="#uslugi" className="btn btn-secondary btn-large">
              Zobacz usługi
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Zadowolonych klientów</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Lat doświadczenia</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">300%</span>
              <span className="stat-label">Średni wzrost ROI</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-visual-container">
            {/* Animated rings */}
            <div className="visual-ring ring-1"></div>
            <div className="visual-ring ring-2"></div>
            <div className="visual-ring ring-3"></div>
            
            {/* Center logo area */}
            <div className="visual-center">
              <img src="/WB Horizon.svg" alt="WB Horizon" className="visual-logo" />
            </div>

            {/* Floating badges */}
            <motion.div 
              className="floating-badge badge-seo"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="badge-icon badge-icon-green">📈</span>
              <span>SEO</span>
            </motion.div>
            
            <motion.div 
              className="floating-badge badge-ads"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="badge-icon badge-icon-red">🎯</span>
              <span>Google Ads</span>
            </motion.div>
            
            <motion.div 
              className="floating-badge badge-web"
              animate={{ y: [-3, 7, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="badge-icon badge-icon-blue">💻</span>
              <span>Web Dev</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
