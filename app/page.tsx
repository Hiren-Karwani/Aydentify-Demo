import { Navbar }      from '@/app/components/Navbar'
import { Hero }        from '@/app/sections/Hero'
import { LogoWall }    from '@/app/sections/LogoWall'
import { Testimonial } from '@/app/sections/Testimonial'
import { HowItWorks }  from '@/app/sections/HowItWorks'
import { Benefits }    from '@/app/sections/Benefits'
import { Pricing }     from '@/app/sections/Pricing'
import { FinalCTA }    from '@/app/sections/FinalCTA'
import { FAQ }         from '@/app/sections/FAQ'
import { Footer }      from '@/app/sections/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <LogoWall />
        <Testimonial
          quote="I used to search everywhere for customers. Now, Aydentify does the work, and I focus on selling, increasing my productivity, and closing more deals."
          role="Partner at Nutrivise"
          avatarSeed="nutrivise-partner"
        />
        <HowItWorks />
        <Testimonial
          quote="Aydentify helped us get 20 new customers quickly. It changed how we connect with customers, making it simple and faster!"
          role="Sales Manager at Ujin Pharmachem"
          avatarSeed="ujin-sales"
        />
        <Benefits />
        <Testimonial
          quote="Previously, our sales team spent hours finding prospective customers. Now, with Aydentify, it takes just minutes. It's a massive time-saver!"
          role="Director at Aegar Healthcare"
          avatarSeed="aegar-director"
        />
        <Pricing />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
