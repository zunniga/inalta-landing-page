"use client"
import { motion } from "framer-motion"

interface HeroAboutProps {
  countryName: string
  stats: Array<{
    number: string
    label: string
  }>
}

export function HeroAbout({ countryName, stats }: HeroAboutProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Fondo con gradiente actualizado */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-[#A1D302]/10 to-[#00A9BB]/20 dark:from-gray-900 dark:to-[#006174]/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Patrón decorativo */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0,169,187,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#A1D302]/20 to-[#00A9BB]/20 dark:bg-gradient-to-r dark:from-[#006174]/30 dark:to-[#00A9BB]/30 text-[#006174] dark:text-[#00A9BB] rounded-full text-sm font-medium mb-4">
              Conoce INALTA {countryName}
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 80 }}
          >
            <motion.span
              className="text-gray-900 dark:text-white block"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transformando el futuro de la
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-[#006174] to-[#00A9BB] bg-clip-text text-transparent block"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              educación profesional
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="dark:hidden">
              Somos una institución líder en capacitación avanzada y desarrollo profesional, comprometidos con la
              excelencia académica y el crecimiento personal de cada estudiante en {countryName}.
            </span>
            <span className="hidden dark:inline">
              Representamos una organización vanguardista en formación especializada y evolución de competencias,
              enfocados en la calidad educativa superior y el desarrollo integral de nuestra comunidad en {countryName}.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="min-w-[140px]"
                initial={{ opacity: 0, scale: 0, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#006174] dark:text-[#00A9BB] mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  className="text-sm text-gray-600 dark:text-gray-400 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
