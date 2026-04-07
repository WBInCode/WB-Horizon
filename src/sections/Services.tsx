import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 'seo',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      ),
      title: 'SEO',
      subtitle: 'Pozycjonowanie stron',
      description: 'Zwiększamy widoczność Twojej strony w wynikach wyszukiwania Google. Kompleksowa optymalizacja techniczna, content marketing i budowanie autorytetu domeny dla długotrwałych efektów.',
      features: [
        'Audyt SEO i analiza konkurencji',
        'Optymalizacja techniczna strony',
        'Content marketing i linkbuilding',
        'Raportowanie i monitoring pozycji',
      ],
      color: '#035131',
      gradient: 'linear-gradient(135deg, #067543 0%, #035131 100%)',
    },
    {
      id: 'google-ads',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20V10"></path>
          <path d="M18 20V4"></path>
          <path d="M6 20v-4"></path>
        </svg>
      ),
      title: 'Google Ads',
      subtitle: 'Kampanie reklamowe',
      description: 'Prowadzimy skuteczne kampanie Google Ads, które generują realne wyniki. Jako certyfikowani partnerzy Google posiadamy wiedzę i doświadczenie potrzebne do maksymalizacji ROI.',
      features: [
        'Kampanie Search i Display',
        'Remarketing i Performance Max',
        'Optymalizacja konwersji',
        'Certyfikowani specjaliści Google',
      ],
      color: '#a62026',
      gradient: 'linear-gradient(135deg, #c9383f 0%, #a62026 100%)',
      badge: 'Certyfikat Google',
    },
    {
      id: 'web-development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: 'Strony internetowe',
      subtitle: 'Tworzenie stron WWW',
      description: 'Projektujemy i tworzymy nowoczesne, responsywne strony internetowe. Od prostych wizytówek po zaawansowane sklepy e-commerce - każdy projekt dopasowujemy do Twoich potrzeb.',
      features: [
        'Responsywny design',
        'Optymalizacja wydajności',
        'System zarządzania treścią',
        'Integracje i utrzymanie',
      ],
      color: '#0d467b',
      gradient: 'linear-gradient(135deg, #1a5a96 0%, #0d467b 100%)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="services" id="uslugi">
      <div className="services-bg">
        <div className="services-pattern"></div>
      </div>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Nasze usługi</span>
          <h2 className="section-title">Kompleksowe rozwiązania dla Twojego biznesu</h2>
          <p className="section-description">
            Oferujemy pełen zakres usług marketingu cyfrowego, które pomogą 
            Ci osiągnąć cele biznesowe i wyprzedzić konkurencję.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              {service.badge && (
                <div className="service-badge" style={{ background: service.gradient }}>
                  {service.badge}
                </div>
              )}
              
              <div className="service-icon" style={{ background: service.gradient }}>
                {service.icon}
              </div>
              
              <div className="service-content">
                <span className="service-subtitle" style={{ color: service.color }}>
                  {service.subtitle}
                </span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={service.color} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/kontakt" 
                  className="service-link"
                  style={{ color: service.color }}
                >
                  Zapytaj o ofertę
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              <div 
                className="service-glow" 
                style={{ background: `radial-gradient(circle at center, ${service.color}20 0%, transparent 70%)` }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
