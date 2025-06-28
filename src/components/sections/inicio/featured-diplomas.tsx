"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, ArrowRight } from "lucide-react"
import type { GraduateData } from "@/types/graduate"
import { DiplomaGrid } from "@/components/ui/graduate/diploma-grid"

interface FeaturedDiplomasProps {
  countryCode: string
  graduates: GraduateData[]
}

export function FeaturedDiplomas({ countryCode, graduates }: FeaturedDiplomasProps) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Floating elements - usando la nueva paleta de colores */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full blur-xl"
        style={{
          background: "linear-gradient(to right, #A1D30220, #00A9BB20)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full blur-xl"
        style={{
          background: "linear-gradient(to right, #00617420, #A1D30220)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 3,
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
               <div className="flex items-center justify-center w-full mb-4">
            <span className="text-[#006174] dark:text-[#A1D302] font-semibold text-md tracking-wider uppercase transition-colors duration-300">
              DIPLOMADOS
            </span>
            <div className="ml-3 w-12 h-0.5 bg-[#006174] dark:bg-[#A1D302] transition-colors duration-300"></div>
          </div>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestros{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #00A9BB, #006174)",
                }}
              >
                Diplomados
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforma tu futuro profesional con programas de vanguardia diseñados por líderes de la industria
            </p>
          </motion.div>

          {/* Course Grid Component */}
          <div className="mb-16">
            <DiplomaGrid countryCode={countryCode} diplomas={graduates} />
          </div>

          {/* Botón Ver Todos los Diplomados */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/${countryCode}/diplomados`}
              className="group inline-flex items-center text-white font-bold bg-gradient-to-r from-[#006174] to-[#00A9BB] hover:from-[#006174]/90 hover:to-[#00A9BB]/90 dark:from-[#739700]/70 dark:to-[#8eb902] px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
             
            >
              <Award className="w-5 h-5 mr-3" />
              Ver Todos los Diplomados
              <ArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
