import Hero from '../sections/Hero'
import Services from '../sections/Services'
import ForWhom from '../sections/ForWhom'
import WhyUs from '../sections/WhyUs'
import Process from '../sections/Process'
import FAQ from '../sections/FAQ'
import ContactForm from '../sections/ContactForm'
import '../sections/Hero.css'
import '../sections/Services.css'
import '../sections/ForWhom.css'
import '../sections/WhyUs.css'
import '../sections/Process.css'
import '../sections/FAQ.css'
import '../sections/ContactForm.css'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <ForWhom />
      <WhyUs />
      <Process />
      <FAQ />
      <ContactForm />
    </>
  )
}

export default Home
