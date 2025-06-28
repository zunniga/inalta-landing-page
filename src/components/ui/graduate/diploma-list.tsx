"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Calendar, Star, ArrowRight, Award, Medal, Crown, CreditCard } from "lucide-react"
import type { GraduateData } from "@/types/graduate"
import { formatCurrencyInstallment, formatDate } from "@/utils/format"

interface DiplomaListProps {
  countryCode: string
  diplomas: GraduateData[]
}

export function DiplomaList({ countryCode, diplomas }: DiplomaListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="space-y-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {diplomas && Array.isArray(diplomas) && diplomas.length > 0 ? (
        diplomas.map((diploma, index) => {
          const priceData = formatCurrencyInstallment(diploma.corporation[0]?.priceGraduate || "0", countryCode)

          return (
            <motion.div
              key={diploma.id}
              variants={item}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Glow effect para lista - custom teal theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#006174]/10 to-[#00A9BB]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-[#00A9BB]/50 dark:hover:border-[#A1D302]/60 transition-all duration-500 hover:shadow-2xl backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row">
                  {/* Imagen - misma altura que el grid */}
                  <div className="relative h-48 sm:h-auto sm:w-60 flex-shrink-0 bg-gradient-to-br from-[#00A9BB]/5 to-[#006174]/5 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                    <Image
                      src="/peru/course/diplomado.webp"
                      alt={diploma.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    />

                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#006174] to-[#00A9BB] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                      <Medal className="w-3 h-3 inline mr-1" />
                      Diplomado
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                      #{index + 1}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Header badges */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#A1D302]/20 dark:bg-[#A1D302]/10 text-[#006174] dark:text-[#A1D302] px-3 py-1 rounded-full text-xs font-bold">
                        ESPECIALIZACIÓN
                      </span>
                      <Star className="w-5 h-5 text-[#A1D302] group-hover:animate-pulse" />
                    </div>

                    {/* Título */}
                    <h3 className="font-black text-xl sm:text-2xl text-gray-900 dark:text-white mb-3 group-hover:text-[#00A9BB] dark:group-hover:text-[#A1D302] transition-colors duration-300 leading-tight">
                      {diploma.name}
                    </h3>

                    {/* Stats - mismo estilo que el grid */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 mb-4 space-y-3 flex-shrink-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Clock className="h-4 w-4 mr-2 text-[#00A9BB]" />
                          <span className="font-semibold text-sm">Duración</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white bg-[#00A9BB]/20 dark:bg-[#00A9BB]/10 text-[#006174] dark:text-[#A1D302] px-3 py-1 rounded-full text-xs">
                          {diploma.corporation[0]?.hours || "180"} hrs
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4 mr-2 text-[#A1D302]" />
                          <span className="font-semibold text-sm">Inicio</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white bg-[#A1D302]/20 dark:bg-[#A1D302]/10 text-[#006174] dark:text-[#A1D302] px-3 py-1 rounded-full text-xs">
                          {formatDate(diploma.startDate)}
                        </span>
                      </div>
                    </div>

                    {/* Spacer para empujar el footer hacia abajo */}
                    <div className="flex-grow"></div>

                    {/* Footer reorganizado */}
                    <div className="mt-auto space-y-4">
                      {/* Pricing - Fila completa como los stats */}
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-[#00A9BB]" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Desde</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-500">{priceData.installmentText}</span>
                        </div>

                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-black text-[#00A9BB] dark:text-[#A1D302]">
                            {priceData.installmentPrice}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            Total: {priceData.totalPrice}
                          </span>
                        </div>
                      </div>

                      {/* CTA Button - Fila separada */}
                      <div className="flex justify-center">
                        <Link
                          href={`/${countryCode}/diplomados/${diploma.id}`}
                          className="bg-[#006174] hover:bg-[#004d5a] dark:bg-[#A1D302] dark:hover:bg-[#8fb002] text-white dark:text-gray-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl group/link transform hover:scale-105 text-sm w-full justify-center"
                        >
                          Ver diplomado
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Crown className="w-6 h-6 text-[#A1D302]" />
                </div>
              </div>
            </motion.div>
          )
        })
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-16 text-center border border-gray-200 dark:border-gray-700">
            <Award className="h-24 w-24 mx-auto text-gray-300 dark:text-gray-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Próximamente nuevos diplomados</h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
              Estamos preparando programas especializados de alta calidad para tu crecimiento profesional.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
