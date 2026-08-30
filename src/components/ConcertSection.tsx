import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const upcomingConcerts = [
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
              Valašské Zkušebny #10
            </h3>
            <p className="text-foreground/60 mb-8">Rožnov pod Radhoštěm | Vrátnice</p>
            <p className="text-foreground/100 mb-8 font-semibold">Jubilejní 10. ročník festivalu lokálních kapel</p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Calendar className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Datum:</span> <strong>11. 9. 2026</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Clock className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Začátek:</span> <strong>17:00</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span><span className="text-foreground/60 text-sm">Místo:</span> <strong>Vrátnice | Rožnov pod Radhoštěm</strong></span>
              </li>
            </ul>

            <a
              href="https://www.tka.cz/program/2026/09/valasske-zkusebny-10"
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
              src="https://mapy.com/s/felanugago"
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



