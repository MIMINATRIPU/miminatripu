import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NewAlbumBanner = () => {
  const [isVisible, setIsVisible] = useState(() => window.scrollY < 180);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 180);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 2 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.95,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed bottom-4 right-4 z-[60] max-w-[360px] rounded-[1.5rem] border border-primary/50 bg-primary/95 px-5 py-4 shadow-[0_0_35px_hsl(var(--primary)/0.32)] backdrop-blur-md"
    >
      <div className="flex items-start gap-3.5">
        <span className="mt-1 inline-flex h-4 w-4 shrink-0 rounded-full bg-background/95" />
        <div className="min-w-0 space-y-1">
          <p className="text-[15px] font-semibold uppercase tracking-[0.6em] text-background/90">
            Mimořádná Informace
          </p>
          <p className="text-[14px] font-semibold text-background">Nahráváme nové ALBUM. <br />Připrav se na pořádnou dávku Valašského Funku!</p>
        </div>
      </div>
    </motion.div>
  );
};

export default NewAlbumBanner;
