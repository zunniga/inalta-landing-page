"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Variantes de animación para el contenedor principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

// Variantes para elementos que vienen desde la izquierda
const slideInLeft = {
  hidden: {
    x: -100,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
      duration: 0.8,
    },
  },
}

// Variantes para elementos que vienen desde la derecha
const slideInRight = {
  hidden: {
    x: 100,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 1,
    },
  },
}

// Variantes para el título con efecto de escritura
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
}

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
}

// Variantes para elementos flotantes
const floatingVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: 1.2,
    },
  },
}

export default function HeroCarousel() {
  // Función para dividir texto en palabras para animación
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span key={index} variants={letterVariants} className="inline-block mr-2">
        {word}
      </motion.span>
    ))
  }

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0c8492] via-[#0c8492] to-[#0c8492] dark:from-[#0F172A] dark:via-[#06202B] dark:to-[#0F172A]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Imagen de fondo con la misma opacidad que hero-section */}
      <div className="absolute inset-0 opacity-35">
        <Image src="/es/bg/world3.png" alt="" fill className="object-cover" priority />
      </div>

      {/* Elementos flotantes decorativos con los colores de hero-section */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-cyan-400/20 rounded-full blur-lg"
        variants={floatingVariants}
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-10 w-16 h-16 bg-white/10 rounded-full blur-lg"
        variants={floatingVariants}
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-400/30 rounded-full blur-md"
        variants={floatingVariants}
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Contenido de texto con colores de hero-section */}
          <motion.div className="text-white order-2 lg:order-1" variants={slideInLeft}>
            <motion.div
              className="text-4xl text-center lg:text-left md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6"
              variants={titleVariants}
            >
              <motion.span className="text-white" variants={letterVariants}>
                {splitText("Educación que")}
              </motion.span>
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-[#A1D302]"
                variants={letterVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                transforma vidas.
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-center lg:text-left lg:text-2xl mb-8 text-gray-200 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 1.5,
                  },
                },
              }}
            >
              Capacitación 100% virtual, accesible y certificada en áreas técnicas y profesionales.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-12 justify-center lg:justify-start"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    delay: 2,
                  },
                },
              }}
            >
              <motion.div
                className="rounded-full"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 169, 187, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 bg-[#00A9BB] dark:bg-[#06202B] dark:border dark:border-gray-100/60 text-white hover:bg-cyan-600 dark:hover:bg-[#0F172A] border-0 shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00A9BB]/25 rounded-full"
                >
                  <Link href="/graduates">Ver diplomados</Link>
                </Button>
              </motion.div>

              <motion.div
                className="rounded-full"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(161, 211, 2, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-4 bg-[#A1D302]/80 text-white hover:bg-[#A1D302]/40 transition-all duration-300 rounded-full"
                >
                  <Link href="/#contacts">Contáctanos</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Área con imagen */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            variants={slideInRight}
          >
            <div className="relative w-full max-w-2xl">
              {/* Imagen principal con animaciones mejoradas */}
              <motion.div
                className="relative z-10"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="relative w-full max-w-md mx-auto">
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 100,
                      delay: 0.8,
                    }}
                  >
                    <Image
                      src="/es/bg/bgg.png"
                      alt="Educación que transforma vidas - Estudiante con laptop"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </motion.div>

                  {/* Formas decorativas con los colores de hero-section */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  />
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                  />
                  <motion.div
                    className="absolute top-1/2 -right-4 w-24 h-24 bg-[#A1D302]/30 rounded-full blur-xl -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.1, duration: 1 }}
                  />

                  {/* Elementos decorativos adicionales alrededor de la imagen */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 dark:bg-[#A1D302]/30 rounded-full blur-sm"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/20 dark:bg-[#A1D302]/30 rounded-full blur-sm"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
