import { motion } from 'framer-motion'
import './Privacy.css'

const Privacy = () => {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-hero-bg">
          <div className="privacy-hero-gradient"></div>
        </div>
        <div className="container">
          <motion.div 
            className="privacy-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Polityka prywatności</h1>
            <p>Ostatnia aktualizacja: Kwiecień 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <motion.div 
            className="privacy-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="privacy-section">
              <h2>1. Informacje ogólne</h2>
              <p>
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych 
                przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług oferowanych 
                przez WB Horizon.
              </p>
              <p>
                Administratorem danych osobowych jest WB Horizon z siedzibą w Polsce. 
                Kontakt z Administratorem możliwy jest poprzez adres email: kontakt@wbhorizon.pl.
              </p>
            </div>

            <div className="privacy-section">
              <h2>2. Zakres zbieranych danych</h2>
              <p>Zbieramy następujące dane osobowe:</p>
              <ul>
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu (opcjonalnie)</li>
                <li>Nazwa firmy (opcjonalnie)</li>
                <li>Treść wiadomości przesłanej przez formularz kontaktowy</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Cel przetwarzania danych</h2>
              <p>Dane osobowe przetwarzane są w celu:</p>
              <ul>
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
                <li>Przygotowania oferty handlowej</li>
                <li>Realizacji umówionych usług</li>
                <li>Wystawiania faktur i dokumentów księgowych</li>
                <li>Marketingu bezpośredniego własnych usług (za zgodą)</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Podstawa prawna przetwarzania</h2>
              <p>Przetwarzanie danych osobowych odbywa się na podstawie:</p>
              <ul>
                <li>Art. 6 ust. 1 lit. a RODO – zgoda osoby, której dane dotyczą</li>
                <li>Art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy</li>
                <li>Art. 6 ust. 1 lit. c RODO – wypełnienie obowiązku prawnego</li>
                <li>Art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes administratora</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>5. Okres przechowywania danych</h2>
              <p>
                Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, 
                dla których zostały zebrane, a po tym czasie przez okres wymagany przez 
                przepisy prawa lub do momentu wycofania zgody na ich przetwarzanie.
              </p>
            </div>

            <div className="privacy-section">
              <h2>6. Prawa użytkowników</h2>
              <p>Każdemu Użytkownikowi przysługuje prawo do:</p>
              <ul>
                <li>Dostępu do treści swoich danych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych („prawo do bycia zapomnianym")</li>
                <li>Ograniczenia przetwarzania danych</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody w dowolnym momencie</li>
                <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Pliki cookies</h2>
              <p>
                Strona internetowa wykorzystuje pliki cookies w celu zapewnienia prawidłowego 
                funkcjonowania serwisu, analizy ruchu oraz personalizacji treści. Użytkownik 
                może w każdej chwili zmienić ustawienia przeglądarki dotyczące plików cookies.
              </p>
              <p>Wykorzystujemy następujące rodzaje plików cookies:</p>
              <ul>
                <li><strong>Niezbędne</strong> – konieczne do prawidłowego działania strony</li>
                <li><strong>Analityczne</strong> – służące analizie sposobu korzystania ze strony</li>
                <li><strong>Marketingowe</strong> – wykorzystywane do personalizacji reklam</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>8. Bezpieczeństwo danych</h2>
              <p>
                Administrator stosuje odpowiednie środki techniczne i organizacyjne 
                zapewniające ochronę przetwarzanych danych osobowych, w szczególności 
                zabezpieczenia przed ich udostępnieniem osobom nieupoważnionym, zabraniem 
                przez osobę nieuprawnioną, przetwarzaniem z naruszeniem obowiązujących 
                przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.
              </p>
            </div>

            <div className="privacy-section">
              <h2>9. Udostępnianie danych</h2>
              <p>
                Dane osobowe mogą być udostępniane podmiotom trzecim wyłącznie w zakresie 
                niezbędnym do realizacji usług, w tym:
              </p>
              <ul>
                <li>Dostawcom usług hostingowych</li>
                <li>Dostawcom narzędzi analitycznych (np. Google Analytics)</li>
                <li>Podmiotom świadczącym usługi księgowe</li>
                <li>Organom państwowym na podstawie przepisów prawa</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>10. Zmiany w polityce prywatności</h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej 
                polityce prywatności. O wszelkich zmianach Użytkownicy będą informowani 
                poprzez publikację zaktualizowanej wersji na stronie internetowej.
              </p>
            </div>

            <div className="privacy-section">
              <h2>11. Kontakt</h2>
              <p>
                W sprawach związanych z ochroną danych osobowych prosimy o kontakt 
                pod adresem e-mail: <a href="mailto:kontakt@wbhorizon.pl">kontakt@wbhorizon.pl</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
