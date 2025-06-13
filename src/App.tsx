import Header from './components/Header'
import MtnBackground from './components/MtnBackground'

function App() {

  return (
    <>
      <MtnBackground />
      <main className="container mx-auto max-w-[940px]">
        <Header />
        <div className="w-full flex justify-center gap-12 flex-col">
          <div className="w-[470px] p-3 bg-[#173253] rounded-[30px] flex-col justify-start items-start gap-4 inline-flex self-center">
            <div className="p-8 bg-[#d7e4f3] rounded-3xl border border-black flex-col justify-start items-start gap-6 flex overflow-hidden">
              <div className="h-[85px] flex-col justify-start items-start gap-2 flex">
                <div className="text-black/50 text-2xl">Software and web design leader</div>
                <div className="text-black/90 text-[40px] font-medium font-['Bricolage Grotesque']">10 years</div>
              </div>
              <div className="text-black text-base font-medium">I'm a designer based in Oregon with 10+ years of experience in designing and leading product design initiatives.</div>
              <div className="px-4 py-2 bg-gradient-to-b from-[#0f1825] to-[#0f1825] rounded-[999px] border border-white justify-center items-center gap-1 inline-flex">
                <div className="text-center text-[#cccccc] text-base font-medium leading-loose">Reach out</div>
              </div>
            </div>
            <div className="w-full inline-flex px-2 pb-1 justify-between">
              <div className="text-white text-base">Time zone: PST</div>
              <div className="text-white text-base">Time zone: PTSD</div>
            </div>
          </div>
          <div className="h-fit p-8 bg-white/2 rounded-3xl flex-col justify-start items-start gap-6 inline-flex overflow-hidden">
            <div className="self-stretch text-white/50 text-2xl">Timeline</div>
            <div className="self-stretch h-fit flex-col justify-start items-start gap-3 flex">
              <div className="h-fit relative origin-top-left -rotate-90">
                <div className="w-[779px] h-[0px] left-[6px] top-[791px] absolute origin-top-left -rotate-90 border border-black"></div>
                <div className="w-3 h-3 left-0 top-[6px] absolute bg-white/95 rounded-full shadow-[0px_0px_8px_0px_rgba(255,255,255,0.25)]"></div>
                <div className="w-3 h-3 left-0 top-[178px] absolute bg-white/95 rounded-full shadow-[0px_0px_8px_0px_rgba(255,255,255,0.25)]"></div>
                <div className="w-3 h-3 left-0 top-[381px] absolute bg-white/95 rounded-full shadow-[0px_0px_8px_0px_rgba(255,255,255,0.25)]"></div>
                <div className="w-3 h-3 left-0 top-[582px] absolute bg-white/95 rounded-full shadow-[0px_0px_8px_0px_rgba(255,255,255,0.25)]"></div>
                <div className="w-3 h-3 left-0 top-[785px] absolute bg-white/95 rounded-full shadow-[0px_0px_8px_0px_rgba(255,255,255,0.25)]"></div>
                <div className="w-3 h-3 left-0 top-[988px] absolute bg-white/95 rounded-full shadow-[0px_0px_8px_0px_rgba(255,255,255,0.25)]"></div>
              </div>
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch text-white/25 tracking-wide">2012-2015</div>
                    <div className="self-stretch text-white/95">Freelance digital designer</div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2015-2021</div>
                  <div className="self-stretch text-white/95">Started and built a digital agency managing 5 creatives</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2018-2021</div>
                  <div className="self-stretch text-white/95">Joined a global digital agency to lead operations</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2020-2021</div>
                  <div className="self-stretch text-white/95">Contributed to web3 teams through BUILD dao</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2021-2022</div>
                  <div className="self-stretch text-white/95">Lead product designer at a web3 startup, Cypher</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2022-2025</div>
                  <div className="self-stretch text-white/95">Joined The Graph to make improvements throughout the platform and now focused on Growth.</div>http://localhost:5173/src/assets/bg-image.png
                </div>
              </div>
            </div>
          </div>
          {/* testing unifying dots with items */}
          <div className="h-fit p-8 bg-white/2 rounded-3xl flex-col justify-start items-start gap-6 inline-flex overflow-hidden">
            <div className="self-stretch text-white/50 text-2xl">Timeline</div>
            <div className="self-stretch h-fit flex-col justify-start items-start gap-3 flex">
              {/* to-do fix the line here */}
              <div className="h-fit relative origin-top-left -rotate-90">
                <div className="w-[779px] h-[0px] left-[6px] top-[791px] absolute origin-top-left -rotate-90 border border-black"></div>
              </div>
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div>
                  <div className="w-3 h-3 left-[10px] top-[10px] absolute bg-white/95 rounded-full shadow-[0px_0px_8px_0px_rgba(255,255,255,0.25)]"></div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <div className="self-stretch text-white/25 tracking-wide">2012-2015</div>
                    <div className="self-stretch text-white/95">Freelance digital designer</div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2015-2021</div>
                  <div className="self-stretch text-white/95">Started and built a digital agency managing 5 creatives</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2018-2021</div>
                  <div className="self-stretch text-white/95">Joined a global digital agency to lead operations</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2020-2021</div>
                  <div className="self-stretch text-white/95">Contributed to web3 teams through BUILD dao</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2021-2022</div>
                  <div className="self-stretch text-white/95">Lead product designer at a web3 startup, Cypher</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-white/25 tracking-wide">2022-2025</div>
                  <div className="self-stretch text-white/95">Joined The Graph to make improvements throughout the platform and now focused on Growth.</div>http://localhost:5173/src/assets/bg-image.png
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-12">
            <div className="w-full h-fit p-8 flex flex-col gap-6 border-solid border-[1px] border-white rounded-[30px]">
              <div className="self-stretch text-white/50 text-2xl">What I bring to the table</div>
              <div className="self-stretch text-white/90 text-xl">Blockchain specialist<br />Senior designer at major infra product<br />Systems and design thinking <br />Leadership and 0→N expertise<br />Figma, HTML, CSS, growing React skills<br />Complex technical UX and design systems</div>
            </div>
            <div className="w-full border-solid border-[1px] border-white rounded-[30px] ">
              <div className="text-white/90">Design Portfolio</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
