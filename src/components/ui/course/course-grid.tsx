"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Calendar, Star, ArrowRight, BookOpen, GraduationCap, CreditCard, Zap } from "lucide-react"
import type { CourseData } from "@/types/course"
import { formatCurrencyInstallmentCourse, formatDate } from "@/utils/format"

interface CourseGridProps {
  countryCode: string
  courses: CourseData[]
}

export function CourseGrid({ countryCode, courses }: CourseGridProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {courses && Array.isArray(courses) && courses.length > 0 ? (
        courses.map((course, index) => {
          const priceData = formatCurrencyInstallmentCourse(course.totalPrice || "0", countryCode)

          return (
            <motion.div
              key={course.id}
              variants={item}
              className="group relative h-full"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect - custom teal theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#006174]/10 to-[#00A9BB]/10 dark:from-[#A1D302]/10 dark:to-[#00A9BB]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-[#00A9BB]/50 dark:hover:border-[#A1D302]/50 transition-all duration-500 hover:shadow-2xl h-full flex flex-col backdrop-blur-sm">
                {/* Imagen - altura fija */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#00A9BB]/10 to-[#006174]/10 dark:from-gray-800 dark:to-gray-900 flex-shrink-0">
                  <Image
                    src="/peru/course/diplomado.webp"
                    alt={course.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#006174] to-[#00A9BB] text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg">
                    <GraduationCap className="w-3 h-3 inline mr-1" />
                    Curso
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full">
                    #{index + 1}
                  </div>
                </div>

                {/* Contenido - flex-grow para ocupar espacio disponible */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Header badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#00A9BB]/10 dark:bg-[#A1D302]/30 text-[#006174] dark:text-[#A1D302] px-3 py-1 rounded-full text-xs font-bold">
                      DESTACADO
                    </span>
                    <Star className="w-5 h-5 text-yellow-500 group-hover:animate-pulse" />
                  </div>

                  {/* Título - altura consistente */}
                  <h3 className="font-black text-xl text-gray-900 dark:text-white mb-4 group-hover:text-[#006174] dark:group-hover:text-[#A1D302] transition-colors duration-300 leading-tight min-h-[3.5rem] flex items-start">
                    {course.name}
                  </h3>

                  {/* Descripción - altura fija con ellipsis */}
                  <div className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed h-16 overflow-hidden">
                    <p className="line-clamp-3">
                      {course.corporation[0]?.institute?.name ||
                        "Programa diseñado para profesionales que buscan especialización y crecimiento en su carrera."}
                    </p>
                  </div>

                  {/* Spacer para empujar el footer hacia abajo */}
                  <div className="flex-grow"></div>

                  {/* Footer fijo - Stats + Pricing + Button todo junto */}
                  <div className="mt-auto space-y-4">
                    {/* Stats - ahora también en el footer */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Clock className="h-4 w-4 mr-2 text-[#00A9BB]" />
                          <span className="font-semibold text-sm">Duración</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white bg-[#00A9BB]/10 dark:bg-[#A1D302]/30 px-3 py-1 rounded-full text-xs">
                          {course.corporation[0]?.hours || "120"} hrs
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Calendar className="h-4 w-4 mr-2 text-[#A1D302]" />
                          <span className="font-semibold text-sm">Inicio</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white bg-[#A1D302]/20 dark:bg-[#A1D302]/30 px-3 py-1 rounded-full text-xs">
                          {formatDate(course.startDate)}
                        </span>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-[#00A9BB]" />
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Desde</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-500">{priceData.installmentText}</span>
                      </div>

                      <div className="flex items-baseline justify-between mb-4">
                        <span className="text-2xl font-black text-[#006174] dark:text-white">
                          {priceData.installmentPrice}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Total: {priceData.totalPrice}</span>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/${countryCode}/cursos/${course.id}`}
                        className="bg-[#006174] hover:bg-[#004d5a] dark:bg-[#A1D302] dark:hover:bg-[#8fb002] text-white dark:text-gray-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl group/link transform hover:scale-105 text-sm w-full justify-center"
                      >
                        Ver curso
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Zap className="w-6 h-6 text-[#A1D302]" />
                </div>
              </div>
            </motion.div>
          )
        })
      ) : (
        <motion.div
          className="col-span-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-16 text-center border border-gray-200 dark:border-gray-700">
            <BookOpen className="h-24 w-24 mx-auto text-gray-300 dark:text-gray-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Próximamente nuevos cursos</h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mx-auto">
              Estamos preparando contenido excepcional para tu desarrollo profesional.
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
