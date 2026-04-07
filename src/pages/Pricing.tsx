import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')

  const seoPackages = [
    {
      name: 'Starter',
      description: 'Dla małych firm rozpoczynających przygodę z SEO',
      price: { monthly: 1500, yearly: 1200 },
      features: [
        'Audyt SEO strony',
        'Optymalizacja do 10 podstron',
        'Link building - 5 linków/mies.',
        'Raportowanie miesięczne',
        'Analiza konkurencji',
        'Wsparcie mailowe',
      ],
      notIncluded: [
        'Content marketing',
        'Optymalizacja lokalna',
        'Konsultacje strategiczne',
      ],
      popular: false,
      color: 'green',
    },
    {
      name: 'Business',
      description: 'Kompleksowe SEO dla rozwijających się firm',
      price: { monthly: 3500, yearly: 2800 },
      features: [
        'Wszystko ze Starter +',
        'Optymalizacja do 30 podstron',
        'Link building - 15 linków/mies.',
        'Content - 4 artykuły/mies.',
        'Optymalizacja lokalna',
        'Raportowanie tygodniowe',
        'Konsultacje miesięczne',
        'Dedykowany opiekun',
      ],
      notIncluded: [
        'Szkolenia dla zespołu',
      ],
      popular: true,
      color: 'red',
    },
    {
      name: 'Enterprise',
      description: 'Dla dużych firm i e-commerce',
      price: { monthly: 7500, yearly: 6000 },
      features: [
        'Wszystko z Business +',
        'Nieograniczona optymalizacja',
        'Link building premium - 30+/mies.',
        'Content - 8 artykułów/mies.',
        'Strategia międzynarodowa',
        'Raportowanie w czasie rzeczywistym',
        'Konsultacje tygodniowe',
        'Szkolenia dla zespołu',
        'SLA 24h',
      ],
      notIncluded: [],
      popular: false,
      color: 'blue',
    },
  ]

  const adsPackages = [
    {
      name: 'Basic',
      description: 'Start z reklamami Google',
      price: { monthly: 1000, yearly: 800 },
      budgetMin: '2 000 zł',
      features: [
        'Kampanie Search',
        'Do 3 kampanii',
        'Remarketing podstawowy',
        'Raportowanie miesięczne',
        'Optymalizacja tygodniowa',
      ],
      popular: false,
    },
    {
      name: 'Advanced',
      description: 'Zaawansowane kampanie wielokanałowe',
      price: { monthly: 2500, yearly: 2000 },
      budgetMin: '5 000 zł',
      features: [
        'Wszystko z Basic +',
        'Kampanie Display & YouTube',
        'Performance Max',
        'Do 10 kampanii',
        'Raportowanie tygodniowe',
        'A/B testy landing pages',
        'Konsultacje miesięczne',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      description: 'Pełna obsługa kampanii',
      price: { monthly: 5000, yearly: 4000 },
      budgetMin: '15 000 zł',
      features: [
        'Wszystko z Advanced +',
        'Nieograniczona liczba kampanii',
        'Strategia omnichannel',
        'Integracja z CRM',
        'Custom dashboards',
        'Dedykowany team',
        'Spotkania tygodniowe',
      ],
      popular: false,
    },
  ]

  const webPrices = [
    {
      type: 'Landing Page',
      price: 'od 3 000 zł',
      time: '5-7 dni',
      features: ['Responsywny design', '1-3 sekcje', 'Formularz kontaktowy', 'Podstawowe SEO'],
    },
    {
      type: 'Strona Firmowa',
      price: 'od 6 000 zł',
      time: '2-3 tygodnie',
      features: ['Do 10 podstron', 'CMS WordPress', 'Blog', 'Optymalizacja prędkości'],
    },
    {
      type: 'Sklep E-commerce',
      price: 'od 15 000 zł',
      time: '4-8 tygodni',
      features: ['WooCommerce/Shopify', 'Integracja płatności', 'Panel zarządzania', 'Import produktów'],
    },
    {
      type: 'Aplikacja Webowa',
      price: 'Wycena indywidualna',
      time: 'Do ustalenia',
      features: ['React/Next.js', 'Backend API', 'Baza danych', 'Panel admina', 'Hosting & CI/CD'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="pricing-page">
      {/* Hero */}
      <section className="pricing-hero">
        <div className="pricing-hero-bg">
          <div className="pricing-gradient"></div>
          <motion.div 
            className="pricing-shape shape-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div 
            className="pricing-shape shape-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <div className="container">
          <motion.div 
            className="pricing-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">💰 Transparentne ceny</span>
            <h1>Cennik usług</h1>
            <p>
              Jasne zasady, brak ukrytych kosztów. Wybierz pakiet dopasowany 
              do potrzeb i budżetu Twojej firmy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Pricing */}
      <section className="pricing-section" id="seo">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Pozycjonowanie</span>
            <h2>Pakiety SEO</h2>
            <p>Długoterminowe strategie budujące widoczność w Google</p>
          </div>

          <div className="billing-toggle">
            <button 
              className={billingPeriod === 'monthly' ? 'active' : ''} 
              onClick={() => setBillingPeriod('monthly')}
            >
              Miesięcznie
            </button>
            <button 
              className={billingPeriod === 'yearly' ? 'active' : ''} 
              onClick={() => setBillingPeriod('yearly')}
            >
              Rocznie <span className="save-badge">-20%</span>
            </button>
          </div>

          <motion.div 
            className="packages-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {seoPackages.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`package-card ${pkg.popular ? 'popular' : ''} ${pkg.color}`}
                variants={itemVariants}
              >
                {pkg.popular && <span className="popular-badge">Najpopularniejszy</span>}
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                </div>
                <div className="package-price">
                  <span className="price-amount">
                    {pkg.price[billingPeriod].toLocaleString()} zł
                  </span>
                  <span className="price-period">/ miesiąc</span>
                </div>
                <div className="package-features">
                  <ul>
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="included">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                    {pkg.notIncluded.map((feature, i) => (
                      <li key={i} className="not-included">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/kontakt" className={`package-btn ${pkg.popular ? 'primary' : 'secondary'}`}>
                  Wybierz pakiet
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Google Ads Pricing */}
      <section className="pricing-section alt-bg" id="ads">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Reklamy Google</span>
            <h2>Pakiety Google Ads</h2>
            <p>Płatne kampanie z certyfikowanymi specjalistami Google</p>
          </div>

          <motion.div 
            className="packages-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {adsPackages.map((pkg, index) => (
              <motion.div 
                key={index}
                className={`package-card ads-card ${pkg.popular ? 'popular' : ''}`}
                variants={itemVariants}
              >
                {pkg.popular && <span className="popular-badge">Rekomendowany</span>}
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                </div>
                <div className="package-price">
                  <span className="price-amount">
                    {pkg.price[billingPeriod].toLocaleString()} zł
                  </span>
                  <span className="price-period">/ miesiąc</span>
                </div>
                <div className="budget-info">
                  <span>Min. budżet reklamowy:</span>
                  <strong>{pkg.budgetMin}</strong>
                </div>
                <div className="package-features">
                  <ul>
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="included">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/kontakt" className={`package-btn ${pkg.popular ? 'primary' : 'secondary'}`}>
                  Wybierz pakiet
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="google-badges">
            <span>Jesteśmy certyfikowanym partnerem Google</span>
            <div className="badges-row">
              <div className="badge-item">🏆 Google Partner</div>
              <div className="badge-item">📊 Analytics Certified</div>
              <div className="badge-item">🎯 Ads Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Pricing */}
      <section className="pricing-section" id="web">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Strony internetowe</span>
            <h2>Tworzenie stron WWW</h2>
            <p>Od landing page do rozbudowanych aplikacji webowych</p>
          </div>

          <motion.div 
            className="web-pricing-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {webPrices.map((item, index) => (
              <motion.div key={index} className="web-price-card" variants={itemVariants}>
                <div className="web-card-header">
                  <h3>{item.type}</h3>
                  <span className="web-time">{item.time}</span>
                </div>
                <div className="web-card-price">{item.price}</div>
                <ul className="web-features">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Link to="/kontakt" className="web-card-btn">Zapytaj o wycenę</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pricing-faq">
        <div className="container">
          <div className="section-header">
            <h2>Najczęściej zadawane pytania</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Czy ceny są negocjowalne?</h4>
              <p>Dla długoterminowych współprac oferujemy rabaty. Skontaktuj się, aby omówić szczegóły.</p>
            </div>
            <div className="faq-item">
              <h4>Jaki jest minimalny okres umowy?</h4>
              <p>SEO wymaga minimum 6 miesięcy dla efektów. Google Ads można rozpocząć bez zobowiązań.</p>
            </div>
            <div className="faq-item">
              <h4>Czy mogę zmienić pakiet?</h4>
              <p>Tak, możesz zmienić pakiet w dowolnym momencie na wyższy lub niższy.</p>
            </div>
            <div className="faq-item">
              <h4>Co jeśli potrzebuję czegoś innego?</h4>
              <p>Tworzymy indywidualne oferty dopasowane do specyficznych potrzeb klienta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Nie wiesz co wybrać?</h2>
            <p>Porozmawiajmy! Pomożemy dobrać rozwiązanie idealne dla Twojego biznesu.</p>
            <div className="cta-actions">
              <Link to="/kontakt" className="btn btn-primary">
                Umów bezpłatną konsultację
              </Link>
              <a href="tel:+48123456789" className="btn btn-secondary">
                📞 +48 123 456 789
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
