function App() {

  return (
    <>
      <main className="max-w-full mt-16 flex">
        <div className="max-w-[900px] inline-flex flex-row gap-18 mx-auto items-center">
          <div className="inline-flex flex-col items-center gap-6">
            <img src='src/assets/profile-pic.png' alt='ímage alt' className="w-67 h-67 rounded-[30px]" />
            <h1 className="text-2xl text-white min-w-fit">Edgar Priday</h1>
          </div>
          <div className="w-[470px] p-3 bg-[#173253] rounded-[30px] flex-col justify-start items-start gap-4 inline-flex self-center">
            <div className="p-8 bg-[#d7e4f3] rounded-3xl border border-black flex-col justify-start items-start gap-6 flex overflow-hidden">
              <div className="h-[85px] flex-col justify-start items-start gap-2 flex">
                <div className="text-black/50 text-2xl">Software and web design leader</div>
                <div className="text-black/90 text-[40px] font-medium font-['Bricolage Grotesque']">10 years</div>
              </div>
              <div className="text-black text-base font-medium">I'm a designer based in Oregon with 10+ years of experience in designing and leading product design initiatives.</div>
              <div className="flex flex-row items-center gap-4">
                <a href="https://edgar-p.notion.site/" className="px-4 py-2 bg-gradient-to-b from-[#0f1825] to-[#0f1825] rounded-[999px] border border-white justify-center items-center gap-1 inline-flex">
                  <span className="text-center text-[#cccccc] text-base font-medium leading-loose">Portfolio</span>
                </a>
                <a href="https://www.linkedin.com/in/edpriday/">LinkedIn</a>
                <a href="mailto:toedgar@pm.me">Reach out</a>
              </div>
            </div>
            <div className="w-full inline-flex px-2 pb-1 justify-between">
              <div className="text-white text-base">Time zone: PST (UTC-7)</div>
              <div className="text-white text-base flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Available for work
              </div>
            </div>
          </div>0
        </div>
      </main >
    </>
  )
}

export default App
