'use client'
import ACT from '@/components/ACT/ACT'
import ClientLogos from '@/components/clientLogos/ClientLogos'
import Expertise from '@/components/expertise/Expertise'
import InfotechWeekly from '@/components/infotechWeekly/InfotechWeekly'
import Intro from '@/components/intro/Intro'
import Projects from '@/components/projects/Projects'
import Review from '@/components/review/Review'
import Robot from '@/components/robot/Robot'
import Subscribe from '@/components/subscribe/Subscribe'
import Testimonial from '@/components/testimonial/Testimonial'

export default function Home() {
  return (
    <main>
      <Intro/>
      <ClientLogos/>
      <ACT/>
      <Robot/>
      <Expertise/>
      <Projects/>
      <Testimonial/>
      <Review/>
      <InfotechWeekly/>
      <Subscribe/>
    </main>
  )
}
