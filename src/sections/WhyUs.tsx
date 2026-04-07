import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './WhyUs.css'

const WhyUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Certyfikowani eksperci',
      description: 'Nasz zespół posiada oficjalne certyfikaty Google, co gwarantuje najwyższy poziom wiedzy i kompetencji w prowadzeniu kampanii.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Indywidualne podejście',
      description: 'Każdy projekt traktujemy wyjątkowo. Nie stosujemy szablonów - tworzymy strategie dopasowane do Twoich celów i budżetu.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Transparentność',
      description: 'Regularne raporty i pełny dostęp do danych. Zawsze wiesz, na co idzie Twój budżet i jakie są efekty naszych działań.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Mierzalne wyniki',
      description: 'Skupiamy się na konkretnych KPI i ROI. Naszym celem jest dostarczenie realnej wartości biznesowej, nie tylko "ładnych statystyk".',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Kompleksowa obsługa',
      description: 'Od strategii po realizację - zajmujemy się wszystkim. Ty skupiasz się na biznesie, my na Twoim marketingu online.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      number: '06',
      title: 'Stały kontakt',
      description: 'Dedykowany opiekun klienta, szybkie odpowiedzi i regularne spotkania. Współpraca z nami to partnerstwo, nie tylko usługa.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="why-us" id="dlaczego">
      <div className="why-us-bg">
        <div className="why-us-gradient"></div>
      </div>
      <div className="container">
        <div className="why-us-layout">
          <motion.div 
            className="why-us-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Dlaczego my</span>
            <h2 className="section-title why-us-title">
              Partnerzy, na których możesz polegać
            </h2>
            <p className="why-us-description">
              Wybierając WB Horizon, zyskujesz nie tylko wykonawcę, ale prawdziwego 
              partnera biznesowego. Nasza misja to Twój sukces w cyfrowym świecie.
            </p>
            <Link to="/kontakt" className="btn btn-primary">
              Porozmawiajmy o Twoim projekcie
            </Link>
          </motion.div>

          <motion.div 
            className="reasons-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="reason-card"
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <div className="reason-number">{reason.number}</div>
                <div className="reason-content">
                  <div className="reason-header">
                    <div className="reason-icon">{reason.icon}</div>
                    <h3 className="reason-title">{reason.title}</h3>
                  </div>
                  <p className="reason-description">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
