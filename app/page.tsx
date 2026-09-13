import Image from "next/image";
import BookingButton from "@/components/BookingButton";
import Header from "@/components/Header";
import OpeningStatus from "@/components/OpeningStatus";

const hours = [
  ["Maandag", "Gesloten"],
  ["Dinsdag", "09:00 – 18:00"],
  ["Woensdag", "09:00 – 18:00"],
  ["Donderdag", "15:00 – 21:00"],
  ["Vrijdag", "09:00 – 18:00"],
  ["Zaterdag", "09:00 – 17:00"],
  ["Zondag", "Gesloten"],
];

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="heroCopy">
          <div className="kicker"><span>✦</span> Russell De Barber · Nijverdal</div>
          <h1><span>Stijl.</span><br />Precisie.<br /><em>Vertrouwen.</em></h1>
          <p>
            Een eigen plek, een eigen stijl. Russell werkt vanuit Constantijnstraat 29 in Nijverdal en plant afspraken via zijn eigen online agenda.
          </p>
          <div className="heroActions">
            <BookingButton label="Plan je afspraak" />
            <a className="textLink" href="https://wa.me/31641383466" target="_blank" rel="noreferrer">WhatsApp Russell <span>→</span></a>
          </div>
          <div className="heroMeta">
            <OpeningStatus />
            <span className="metaDivider" />
            <span>Constantijnstraat 29</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Barber visual">
          <div className="heroFrame">
            <Image src="/hero-haircut.jpg" alt="Barber haircut in Russell-stijl" fill priority sizes="(max-width: 900px) 90vw, 46vw" />
            <div className="frameShade" />
            <div className="signature">R</div>
          </div>
          <div className="floatingCard">
            <span className="tinyLabel">DIRECT BOEKEN</span>
            <strong>Russell z&apos;n eigen agenda</strong>
            <BookingButton label="Bekijk tijden" />
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Russell kernwaarden">
        <div className="marqueeTrack">
          <span>CLASSIC CUTS</span><i>✦</i><span>MODERN STYLE</span><i>✦</i><span>NIJVERDAL</span><i>✦</i><span>PRECISION</span><i>✦</i><span>RUSSELL DE BARBER</span>
        </div>
      </section>

      <section className="experience section" id="ervaring">
        <div className="sectionIntro">
          <div>
            <span className="eyebrow">01 / De ervaring</span>
            <h2>Geen standaard<br /><em>kappersbezoek.</em></h2>
          </div>
          <p>
            De site is opgezet rond Russell als eigen barbermerk: donker, warm en premium. Geen ingebouwde nepplanner; elke boekingsknop brengt je rechtstreeks naar zijn officiële afsprakensysteem.
          </p>
        </div>

        <div className="editorialGrid">
          <article className="editorialCard cardLarge">
            <Image src="/interior.jpg" alt="Donkere premium barbershop sfeer" fill sizes="(max-width: 800px) 100vw, 60vw" />
            <div className="cardOverlay" />
            <div className="cardCaption"><span>ATMOSFEER</span><strong>Dark. Warm. Personal.</strong></div>
          </article>
          <article className="editorialCard cardTall">
            <Image src="/detail-cut.jpg" alt="Detail van een precisie haircut" fill sizes="(max-width: 800px) 100vw, 35vw" />
            <div className="cardOverlay" />
            <div className="cardCaption"><span>DETAIL</span><strong>Precisie zit in de afwerking.</strong></div>
          </article>
        </div>
      </section>

      <section className="services section" id="diensten">
        <div className="sectionIntro compact">
          <div>
            <span className="eyebrow">02 / Diensten</span>
            <h2>Wat je hier<br /><em>straks boekt.</em></h2>
          </div>
          <p className="conceptNote">Diensten en prijzen hieronder zijn bewust nog niet ingevuld als feiten. Russell kan zijn definitieve behandelingen en tarieven aanleveren; de structuur staat al klaar.</p>
        </div>
        <div className="serviceList">
          {[
            ["01", "Knippen / styling", "Definitieve omschrijving + prijs volgt"],
            ["02", "Fade / contour", "Definitieve omschrijving + prijs volgt"],
            ["03", "Baard / combinatie", "Definitieve omschrijving + prijs volgt"],
          ].map(([n, title, text]) => (
            <div className="serviceRow" key={n}>
              <span className="serviceNumber">{n}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <span className="serviceArrow">↗</span>
            </div>
          ))}
        </div>
        <div className="servicesCta">
          <div><span className="eyebrow">Klaar?</span><h3>Bekijk Russell z&apos;n echte beschikbare tijden.</h3></div>
          <BookingButton label="Open afspraken" />
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactPanel">
          <div className="contactMain">
            <span className="eyebrow">03 / Contact</span>
            <h2>Zie je in<br /><em>Nijverdal.</em></h2>
            <p>Constantijnstraat 29<br />7442 MD Nijverdal</p>
            <div className="contactLinks">
              <a href="tel:+31641383466">+31 6 41 38 34 66 <span>↗</span></a>
              <a href="https://wa.me/31641383466" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
            </div>
            <BookingButton label="Plan online" />
          </div>
          <div className="hoursCard">
            <div className="hoursHeader"><strong>Openingstijden</strong><OpeningStatus /></div>
            <div className="hoursList">
              {hours.map(([day, time]) => <div className="hoursRow" key={day}><span>{day}</span><span>{time}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerBrand"><Image src="/logo.svg" width={210} height={90} alt="Russell De Barber" /></div>
        <div className="footerText">Russell De Barber · Constantijnstraat 29 · Nijverdal</div>
        <div className="footerActions"><a href="tel:+31641383466">Bellen</a><a href="https://wa.me/31641383466" target="_blank" rel="noreferrer">WhatsApp</a></div>
      </footer>

      <div className="mobileBar">
        <a className="mobileCall" href="tel:+31641383466" aria-label="Bel Russell">☎</a>
        <BookingButton label="Afspraak maken" />
      </div>

      <div className="conceptBadge">Concept - Voorstel</div>
    </main>
  );
}
