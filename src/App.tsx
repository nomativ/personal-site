import profilePic from './assets/profile-pic.png'
import MtnBackground from './components/MtnBackground'
import TextCarousel from './components/TextCarousel'

function App() {

  const heroTexts = [
    "Product",
    "Design systems",
    "Growth",
    "UX and Architecture",
    "Mobile"
  ]


  return (
    <>
      <MtnBackground />
      <main className="max-w-full mt-16">
        <div className="max-w-[900px] flex md:flex-row flex-col md:gap-18 gap-8 mx-auto items-center">
          <div className="flex flex-col items-center gap-6">
            <img src={profilePic} alt='Edgar Priday profile picture' className="w-67 h-67 rounded-[30px]" />
            <h1 className="text-2xl text-white min-w-fit">Edgar Priday</h1>
          </div>
          <div className="w-[470px] p-3 bg-[#173253] rounded-[30px] flex-col justify-start items-start gap-4 inline-flex self-center">
            <div className="p-8 bg-[#d7e4f3] rounded-3xl border border-black flex-col justify-start items-start gap-6 flex overflow-hidden">
              <div className="h-[85px] flex-col justify-start items-start flex">
                <div className="text-black/50 text-2xl">Product and web designer</div>
                <div className="text-black/90 text-[40px] font-medium">10 years expertise</div>
              </div>
              <div className="text-black text-base font-medium">I turn complex challenges into thoughtfully crafted, user-led solutions that feel natural, useful and accessible to everyone.</div>
              <div className="flex flex-row items-center gap-4">
                <a href="https://edgar-p.notion.site/" className="px-4 py-2 bg-gradient-to-b from-[#0f1825] to-[#0f1825] rounded-[999px] border border-white justify-center items-center gap-1 inline-flex">
                  <span className="text-center text-[#cccccc] text-base font-medium leading-loose">Portfolio</span>
                </a>
                <a href="https://www.linkedin.com/in/edpriday/">LinkedIn</a>
                <a href="mailto:toedgar@pm.me">Reach out</a>
              </div>
              < TextCarousel slides={heroTexts} />
            </div>
            <div className="w-full inline-flex px-2 pb-1 justify-between">
              <div className="text-white text-base">Time zone: PST (UTC-7)</div>
              <div className="text-white text-base flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Available for work
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default App
