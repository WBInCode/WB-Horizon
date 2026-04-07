import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FAQ.css'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Jak długo trwa, zanim zobaczę efekty działań SEO?',
      answer: 'Pierwsze widoczne efekty SEO pojawiają się zazwyczaj po 3-6 miesiącach regularnych działań. Pełne rezultaty są osiągane po około 6-12 miesiącach, w zależności od konkurencyjności branży i stanu początkowego strony. SEO to proces długoterminowy, ale przynosi trwałe rezultaty.',
    },
    {
      question: 'Jaki jest minimalny budżet na kampanie Google Ads?',
      answer: 'Minimalny budżet zależy od branży i celów. Dla małych firm lokalnych rekomendujemy minimum 1500-2000 zł miesięcznie na sam budżet reklamowy, plus koszt obsługi. Dla e-commerce i bardziej konkurencyjnych branż budżety zaczynają się od 3000-5000 zł. Podczas konsultacji pomożemy dobrać optymalny budżet.',
    },
    {
      question: 'Czy oferujecie gwarancję na swoje usługi?',
      answer: 'Gwarantujemy profesjonalną realizację usług zgodnie z najlepszymi praktykami branżowymi. Dla SEO oferujemy gwarancję poprawy pozycji dla wybranych fraz w określonym czasie. W przypadku Google Ads gwarantujemy transparentność wydatków i ciągłą optymalizację kampanii. Szczegóły omawiamy indywidualnie.',
    },
    {
      question: 'Jak wygląda proces tworzenia strony internetowej?',
      answer: 'Proces składa się z kilku etapów: 1) Analiza potrzeb i brief, 2) Projekt graficzny (mockupy), 3) Akceptacja projektu, 4) Kodowanie i wdrożenie, 5) Testy i optymalizacja, 6) Uruchomienie i szkolenie. Cały proces trwa zwykle 4-8 tygodni dla standardowej strony firmowej.',
    },
    {
      question: 'Czy podpisujecie umowę na czas określony?',
      answer: 'Preferujemy umowy na czas nieokreślony z miesięcznym okresem wypowiedzenia. Dla SEO rekomendujemy jednak minimum 6-miesięczną współpracę, aby osiągnąć mierzalne efekty. Nie wiążemy klientów na siłę - jakość naszych usług jest najlepszą gwarancją długiej współpracy.',
    },
    {
      question: 'Czy mogę samodzielnie zarządzać stroną po jej utworzeniu?',
      answer: 'Tak! Wszystkie nasze strony są wyposażone w intuicyjny system zarządzania treścią (CMS). Po uruchomieniu przeprowadzamy szkolenie, jak dodawać i edytować treści. Oferujemy też pakiety wsparcia technicznego, jeśli wolisz zostawić zarządzanie nam.',
    },
  ]

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title">Często zadawane pytania</h2>
          <p className="section-description">
            Masz pytania? Znajdziesz tu odpowiedzi na najczęściej zadawane pytania. 
            Jeśli potrzebujesz więcej informacji, skontaktuj się z nami.
          </p>
        </motion.div>

        <motion.div 
          className="faq-list"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <motion.div 
                  className="faq-icon"
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
