import { motion } from 'motion/react'
import profilePic from './assets/profile-pic.png'
import defiux from './assets/defiux.png'
import functor from './assets/functor.png'
import gds from './assets/gds2.png'
import landing from './assets/landing.png'
import MtnBackground from './components/MtnBackground'
import WindowBlur from './components/WindowBlur'
import TextCarousel from './components/TextCarousel'
import Button from './components/Button'
import Link from './components/Link'
import ProjectCard from './components/ProjectCard'
import KpiCard from './components/KpiCard'
import Divider from './components/Divider'
import Showcase from './components/home/Showcase'


function App() {
  const heroTexts = [
    "Visual craft",
    "Design systems",
    "Growth",
    "UX strategy",
    "Project leadership",
    "Product intelligence"
  ]

  // Experience calculation
  const startYear = 2012;
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;

  return (
    <>
      <WindowBlur />
      <motion.div id='background'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <MtnBackground />
      </motion.div>

      <motion.main id='content'
        className="mx-auto flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
      >
        <motion.div id='hero'
          className="md:h-[75vh] max-w-[785px] flex flex-col items-center gap-24 justify-center md:my-0 my-8 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className='flex md:flex-row flex-col md:gap-24 gap-8 items-center'>
            <div className="md:min-w-67 w-fit flex flex-col items-center gap-4">
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
              <h1 className="title text-white min-w-full text-center">Edgar Priday</h1>
            </div>
            <div className="md:w-full md:mx-0 mx-12 flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="flex-col justify-start items-start flex w-full">
                  <div className="text-white/50 text-2xl text-center md:text-left w-full">Multidisciplinary</div>
                  <div className="text-white/90 md:text-[40px] text-[32px] font-semibold tracking-tight leading-[40px] text-center md:text-left w-full">Product design leader</div>
                </div>
                <Divider />
                <div className='inline-flex md:w-fit gap-8 items-center justify-center md:justify-normal w-full'>
                  <KpiCard title='Experience' kpi={yearsExperience + ' years'} />
                  <KpiCard title='Designed for' kpi='500k+ MAUs' />
                </div>
                <div className="text-white text-base font-medium text-center md:text-left">Throughout my career, I've turned complex product challenges into thoughtfully crafted solutions that look beautiful, feel natural, and are useful for everyone.</div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center w-full">
                  <Button text="Resume/Portfolio" url="https://edgar-p.notion.site/" />
                  <div className='flex items-center gap-4 md:gap-0'>
                    <Link text="LinkedIn" url="https://www.linkedin.com/in/edpriday/" />
                    <Link text="Reach out" url="mailto:toedgar@pm.me" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextCarousel slides={heroTexts} />
        </motion.div>


        <motion.div id='case studies'
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className='relative mt-10 mx-auto md:max-w-[900px]'
        >
          <h2 className='section-title text-white pb-12 text-center'>Case studies</h2>
          <div
            className="absolute -top-30 -left-20 md:w-200 h-50 rotate-45 mix-blend-hard-light rounded-full blur-[75px] origin-top-left"
            style={{
              background: 'radial-gradient(ellipse 67.05% 179.10% at 16.58% 39.07%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
          />
          <div className='grid md:grid-cols-2 grid-cols-1 md:px-0 px-2 gap-4'>
            <ProjectCard image={gds} title='Refactoring a 100+ component design system' discipline='Design systems' url='https://edgar-p.notion.site/Refactoring-the-Graph-Design-System-1931795f3a0c800fa9b1ec6320553673' />
            <ProjectCard image={functor} title='Functor webapp and browser extension' discipline='0→1 design' url='https://edgar-p.notion.site/Functor-web-app-and-browser-extension-1931795f3a0c80cab6c5ca428f8f443f' />
            <ProjectCard image={defiux} title='Improving DeFi UX' discipline='UX design' url='https://edgar-p.notion.site/Improving-DeFi-UX-2141795f3a0c8059adb4c72ec20a8678' />
            <ProjectCard image={landing} title='Product landing page design' discipline='Growth design' url='https://edgar-p.notion.site/Product-Landing-page-design-1931795f3a0c8049be08cadf30fa2a03' />
          </div>
        </motion.div>
        <motion.div id='showcase'
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className='relative mt-10'
        >
          <h2 className='section-title text-white pb-12 text-center'>Showcase</h2>
          <Showcase />
        </motion.div>
        <motion.div id='footer'
          className='md:w-[900px] w-full mx-auto px-4 mt-24 z-21'
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-[#7E90D4]"></div>
          <div className='w-full inline-flex items-center justify-between py-6'>
            <div className="text-white md:text-base text-sm">Time zone: PST (UTC-7)</div>
            <div className="text-white md:text-base text-sm flex items-center gap-4 w-fit">
              <Link text="LinkedIn" url="https://www.linkedin.com/in/edpriday/" />
              <Link text="See my resume" url="https://edgar-p.notion.site/" />
            </div>
          </div>
        </motion.div>
      </motion.main >
    </>
  )
}

export default App