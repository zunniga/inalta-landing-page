"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeSwitch } from "@/components/ThemeSwitch"
import { CountrySwitcher } from "../country-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap } from "lucide-react"
import { useTheme } from "next-themes"

// Importamos las configuraciones de países
import { countries, commonRoutes } from "@/config/countries"

export function Navbar({ countryCode = "" }: { countryCode?: string }) {
  const pathname = usePathname()
  const [country, setCountry] = React.useState<string>(countryCode || "pe")
  const { resolvedTheme } = useTheme()
  const [logoSrc, setLogoSrc] = useState("/es/logos/inalta_logo_main.png")
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar país desde la ruta
  useEffect(() => {
    setMounted(true)
    if (!countryCode) {
      const detectedCountry = Object.keys(countries).find((code) => pathname.includes(`/${code}`))
      if (detectedCountry) {
        setCountry(detectedCountry)
      }
    }
  }, [pathname, countryCode])

  // Manejar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cambiar logo según el tema
  useEffect(() => {
    if (resolvedTheme === "dark") {
      setLogoSrc("/es/logos/inalta_logo_dark.png")
    } else {
      setLogoSrc("/es/logos/inalta_logo_main.png")
    }
  }, [resolvedTheme])

  // Controlar overflow del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMobileMenu = () => setIsMenuOpen(false)

  return (
    <>
      {/* Header Principal */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 animate-fadeIn ${
          isScrolled
            ? "bg-black/40 dark:bg-[#0F172A] backdrop-blur-md shadow-md py-2"
            : "bg-gradient-to-b from-[#0c8492] via-[#0c8492] to-[#0c8492] dark:from-transparent dark:via-transparent dark:to-transparent py-4"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo - Sección Izquierda */}
            <div className="flex-1 flex justify-start">
              <Link href={`/${country}`} className="flex items-center space-x-2 transition-transform hover:scale-105">
                <div className="relative rounded-full overflow-hidden xl:w-44 xl:h-20 w-40 h-20 sm:w-20 sm:h-20 md:w-36 md:h-36">
                  {mounted && (
                    <Image src={logoSrc || "/placeholder.svg"} alt="Logo" fill className="object-contain" priority />
                  )}
                </div>
              </Link>
            </div>

            {/* Navegación Central - Desktop */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-1">
                {commonRoutes.map((item) => {
                  const fullHref = item.href === "" ? `/${country}` : `/${country}${item.href}`
                  const isActive =
                    item.href === "" ? pathname === `/${country}` : pathname === `/${country}${item.href}`

                  return (
                    <Link
                      key={item.label}
                      href={fullHref}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:scale-105 transform ${
                        isActive
                          ? "text-white border border-[#A1D302]/60 bg-[#0c8492] dark:bg-transparent shadow-md"
                          : "text-gray-100 hover:text-white hover:bg-primary/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Controles de la Derecha */}
            <div className="flex-1 flex justify-end">
              <div className="flex items-center space-x-3">
                {/* Botón Aula Virtual - Desktop */}
                <Link
                  href="https://www.unp.auladm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 transform bg-transparent border border-zinc-300/70 dark:border-zinc-700 text-white shadow-lg hover:shadow-xl hover:border-white/30"
                >
                  <GraduationCap size={16} />
                  AULA VIRTUAL
                </Link>

                {/* Theme Switch */}
                <ThemeSwitch />

                {/* Botón de menú móvil */}
                <Button
                  size="icon"
                  className="lg:hidden bg-primary text-white hover:bg-primary-dark"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay del menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] lg:hidden" onClick={closeMobileMenu} />
      )}

      {/* Menú móvil */}
      <div
        className={`
          fixed top-0 right-0 h-[600px] w-80 max-w-[65vw] 
          bg-[#007389] dark:bg-[#030712] rounded-xl z-[70] lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header del menú móvil */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="relative w-32 h-16">
            {mounted && (
              <Image
                src={logoSrc || "/placeholder.svg?height=64&width=128"}
                alt="Logo"
                fill
                className="object-contain"
              />
            )}
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-white hover:bg-white/20"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </Button>
        </div>

        {/* Contenido del menú */}
        <div className="p-4 overflow-y-auto h-full pb-20">
          {/* Botón Aula Virtual móvil */}
          <Link
            href="https://www.unp.auladm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center px-4 py-3 rounded-2xl text-base font-bold mb-4 transition-all bg-transparent border border-zinc-300/70 dark:border-zinc-700 text-white shadow-lg flex items-center justify-center gap-2"
            onClick={closeMobileMenu}
          >
            <GraduationCap size={18} />
            AULA VIRTUAL
          </Link>

          {/* Enlaces de navegación */}
          {commonRoutes.map((item) => {
            const fullHref = item.href === "" ? `/${country}` : `/${country}${item.href}`
            const isActive = item.href === "" ? pathname === `/${country}` : pathname === `/${country}${item.href}`

            return (
              <Link
                key={item.label}
                href={fullHref}
                className={`text-center block px-4 py-3 rounded-2xl text-base font-medium mb-2 transition-colors ${
                  isActive
                    ? "text-gray-800 dark:text-white border bg-white dark:bg-[#A1D302] shadow-md"
                    : "text-gray-100 dark:text-gray-100 hover:text-white hover:bg-white/20"
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            )
          })}

          {/* Country Switcher en el menú móvil */}
          <div className="flex justify-center mt-6 pt-4 border-t border-white/20">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-100">País:</span>
              <CountrySwitcher currentCountryCode={country} size="default" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
