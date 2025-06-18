import { motion } from 'motion/react'
import profilePic from './assets/profile-pic.png'
import defiux from './assets/defiux.png'
import functor from './assets/functor.png'
import gds from './assets/gds.png'
import landing from './assets/landing.png'
import MtnBackground from './components/MtnBackground'
import TextCarousel from './components/TextCarousel'
import Button from './components/Button'
import Link from './components/Link'
import ProjectCard from './components/ProjectCard'
import KpiCard from './components/KpiCard'

function App() {
  const heroTexts = [
    "Visual craft",
    "Design systems",
    "Growth",
    "UX strategy",
    "Project leadership"
  ]

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <MtnBackground />
      </motion.div>

      <motion.main
        className="max-w-[900px] md:mt-16 my-6 mx-auto gap-12 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
      >
        <motion.div
          className="w-full flex md:flex-row flex-col md:gap-18 gap-8 items-center md:my-12 my-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="min-w-67 flex flex-col items-center gap-4">
            <div className="relative w-67 h-67 overflow-hidden rounded-4xl">
              <img
                src={profilePic}
                alt='Edgar Priday profile picture'
                className="w-full h-full blur-[8px] scale-105"
              />
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={profilePic}
                  alt='Edgar Priday profile picture'
                  className="w-full h-full object-cover"
                  style={{
                    mask: 'linear-gradient(black 70%, transparent 100%)',
                    WebkitMask: 'linear-gradient(black 70%, transparent 100%)'
                  }}
                />
              </div>
            </div>
            <span className="text-[40px] text-white min-w-full text-center">Edgar Priday</span>
          </div>
          <div className="md:w-full md:mx-0 mx-2 p-3 bg-[#173253] rounded-[30px] shadow-[0px_8px_8px_-4px_rgba(0,0,0,0.15)] flex-col justify-start items-start gap-4 inline-flex">
            <div className="md:p-8 p-6 bg-[#d7e4f3] rounded-3xl shadow-[0px_8px_8px_-4px_rgba(0,0,0,0.15)] flex-col justify-start items-start gap-6 flex overflow-hidden">
              <div className="flex-col justify-start items-start flex">
                <div className="text-black/50 text-2xl">Multidisciplinary</div>
                <div className="text-black/90 md:text-[40px] text-[32px] font-semibold leading-[40px]">Product designer</div>
              </div>
              <div className="text-black text-base font-medium">For over <b>10 years</b>, I've turned complex product challenges into thoughtfully crafted solutions that look beautiful, feel natural, and are useful to everyone.</div>
              <div className="flex flex-row items-center">
                <Button text="Resume/Portfolio" url="https://edgar-p.notion.site/"></Button>
                <Link text="LinkedIn" url="https://www.linkedin.com/in/edpriday/"></Link>
                <Link text="Reach out" url="mailto:toedgar@pm.me"></Link>
              </div>
              < TextCarousel slides={heroTexts} />
            </div>
            <div className="w-full inline-flex px-2 pb-1 justify-between">
              <div className="text-white md:text-base text-sm">Time zone: PST (UTC-7)</div>
              <div className="text-white md:text-base text-sm flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Available for hire
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className='text-white font-semibold text-xl pb-6'>Case studies</h2>
          <div className='grid md:grid-cols-2 grid-cols-1 md:px-0 px-2 gap-8'>
            <ProjectCard image={gds} title='Refactoring a 100+ component design system' discipline='Design systems' url='https://edgar-p.notion.site/Refactoring-the-Graph-Design-System-1931795f3a0c800fa9b1ec6320553673'></ProjectCard>
            <ProjectCard image={functor} title='Functor webapp and browser extension' discipline='0→1 design' url='https://edgar-p.notion.site/Functor-web-app-and-browser-extension-1931795f3a0c80cab6c5ca428f8f443f'></ProjectCard>
            <ProjectCard image={defiux} title='Improving DeFi UX' discipline='UX design' url='https://edgar-p.notion.site/Improving-DeFi-UX-2141795f3a0c8059adb4c72ec20a8678'></ProjectCard>
            <ProjectCard image={landing} title='Product landing page design' discipline='Growth design' url='https://edgar-p.notion.site/Product-Landing-page-design-1931795f3a0c8049be08cadf30fa2a03'></ProjectCard>
          </div>
        </motion.div>

        <div className='px-4'>
          <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-[#7E90D4]"></div>
          <div className='w-full md:inline-flex items-center justify-between py-6'>
            <div className='inline-flex w-fit gap-4 items-center md:pb-0 pb-4'>
              <p className='text-white'>See more of my work and experience on my resume</p>
              <Button text="View in Notion" url="https://edgar-p.notion.site/"></Button>
            </div>
            <div className='inline-flex w-fit gap-8 items-center'>
              <KpiCard title='Experience' kpi='10 years'></KpiCard>
              <KpiCard title='Designed for' kpi='500k+ MAUs'></KpiCard>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  )
}

export default App