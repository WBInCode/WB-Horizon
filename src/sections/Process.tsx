import { motion } from 'framer-motion'
import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Konsultacja',
      description: 'Poznajemy Twój biznes, cele i potrzeby. Analizujemy rynek i konkurencję.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Strategia',
      description: 'Tworzymy spersonalizowaną strategię dopasowaną do Twoich celów i budżetu.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Realizacja',
      description: 'Wdrażamy zaplanowane działania i na bieżąco optymalizujemy kampanie.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
    },
    {
      number: '4',
      title: 'Raportowanie',
      description: 'Regularnie analizujemy wyniki i dostarczamy przejrzyste raporty z postępów.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
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

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="process" id="proces">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Proces współpracy</span>
          <h2 className="section-title">Jak wygląda współpraca z nami?</h2>
          <p className="section-description">
            Przejrzysty proces współpracy, który gwarantuje skuteczność 
            i pełną kontrolę nad projektem.
          </p>
        </motion.div>

        <motion.div 
          className="process-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              variants={stepVariants}
            >
              <div className="step-connector">
                <div className="step-line"></div>
                <motion.div 
                  className="step-number"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>
              
              <motion.div 
                className="step-card"
                whileHover={{ y: -5 }}
              >
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
