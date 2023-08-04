import Tech from '@/components/Tech'
import About from '@/components/home/About'
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import Portfolio from '@/components/home/Portfolio'
import Services from '@/components/home/Services'
import StayInTouch from '@/components/home/StayInTouch'
import Testimonial from '@/components/home/Testimonial'

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Services />
      <Tech />
      <Portfolio />
      <Testimonial />
      <StayInTouch />
    </div>
  )
}
