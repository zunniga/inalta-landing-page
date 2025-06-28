"use client";

import React from "react";
import HeroCarousel from "@/components/sections/inicio/hero-carousel";
import { FirstSection } from "@/components/sections/inicio/certificate-section";
import { FeaturedCourses } from "@/components/sections/inicio/featured-courses";
import Testimonials from "@/components/sections/inicio/testimonials";
import  CounterNumber  from "@/components/sections/inicio/counter-number";
import  ContactView  from "@/components/sections/inicio/contact-view";
// import { RectangularInfo } from "@/components/sections/inicio/rectangular-info";
import { FeaturedDiplomas } from "@/components/sections/inicio/featured-diplomas";
import type { HeroSlide, Testimonial } from "@/types";
import type { CourseData } from "@/types/course";
import type { GraduateData } from "@/types/graduate";
import type { StatItem } from "@/components/sections/inicio/stats";

interface HomeLayoutProps {
  countryCode: string;
  countryName: string;
  heroSlides: HeroSlide[];
  featuredCourses: CourseData[];
  testimonials: Testimonial[];
  stats: StatItem[];
  featuredDiplomas: GraduateData[];
  ctaBackgroundImage?: string;
}

export default function HomeLayout({
  countryCode,
  featuredCourses,
  featuredDiplomas,
}: HomeLayoutProps) {
  return (
    <>
      {/* Hero Section - Full screen */}
      <section className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 dark:from-[#0a0f1c]/90 dark:via-[#0a0f1c]/90 dark:to-[#0a0f1c]/90 relative w-full h-screen">
        <HeroCarousel />
      </section>

      {/* Rest of content with proper spacing */}
      <main className="bg-gray-100 dark:bg-[#0F172A] ">
        <div className=" mx-auto">
          {/* Certificate Section - Nueva sección */}
          <section>
            <FirstSection />
          </section>

          {/* Featured Courses */}

          <section>
            <FeaturedDiplomas
              countryCode={countryCode}
              graduates={featuredDiplomas}
            />
          </section>

          <section>
            <Testimonials />
          </section>
          <section>
            <FeaturedCourses
              countryCode={countryCode}
              courses={featuredCourses}
            />
          </section>
          <section>
            <CounterNumber />
          </section>
          <section>
            <ContactView />
          </section>
        </div>
      </main>
    </>
  );
}
