import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";

const upcomingConcerts = [
  {
    title: "Valašské Zkušebny #10",
    date: "11. 9. 2026",
    place: "Rožnov pod Radhoštěm | Vrátnice",
    time: "start - 17:00",
  },
  {
    title: "Stanley Start B-day Party",
    date: "12. 9. 2026",
    place: "Valašské Meziříčí | DimenzeX",
    time: "start - 16:00",
  },
  {
    title: "MIMINATRIPU - Křest alba",
    date: "3. 10. 2026",
    place: "Valašské Meziříčí | M-klub",
    time: "čas upřesníme!",
  },
];

const ConcertSection = () => {
  return (
    <section id="koncerty" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// upcoming</p>
          <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight text-gradient">
            Nadcházející koncert
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border bg-card/60 backdrop-blur-md shadow-card"
        >
          <div className="p-8 sm:p-12 relative">
            <div className="absolute top-0 right-0 h-40 w-40 bg-primary/20 blur-3xl rounded-full" />
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">
              Veselá Fest 2026
            </h3>
            <p className="text-foreground/60 mb-8">Veselá</p>
            <p className="text-foreground/100 mb-8 font-semibold">Nejnadupanější festival na Valašsku!</p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Calendar className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Datum:</span> <strong>8. 8. 2026</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Začátek:</span> <strong>20:30</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Místo:</span> <strong>Veselá</strong></span>
              </li>
            </ul>

            <a
              href="https://veselafest.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition"
            >
              Stránka akce <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <iframe
              title="Mapa koncertu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d648.3206126854624!2d18.02527046597092!3d49.46027755098663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471391e6ead61d55%3A0xfb3c820fb617323a!2sVesel%C3%A1%20Fest!5e0!3m2!1scs!2sus!4v1785789427640!5m2!1scs!2sus"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition duration-700"
              style={{ border: 0 }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent" />
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-3xl border border-border bg-card/50 backdrop-blur-md p-6 sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// more</p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl mb-6">
            Další koncerty
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {upcomingConcerts.map((concert) => (
              <div
                key={concert.title}
                className="rounded-2xl border border-border bg-background/60 p-4 shadow-sm"
              >
                <p className="font-semibold text-foreground mb-2">{concert.title}</p>
                <div className="space-y-2 text-sm text-foreground/70 ">
                  <div className="flex items-center gap-2 ">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{concert.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{concert.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{concert.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConcertSection;



