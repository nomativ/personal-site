import Header from './components/Header'

function App() {

  return (
    <>
    <Header />
    <div className="w-full flex justify-center gap-12 flex-col">
      <div className="w-[470px] p-3 bg-[#173253] rounded-[30px] flex-col justify-start items-start gap-4 inline-flex self-center">
        <div className="p-8 bg-[#d7e4f3] rounded-3xl border border-black flex-col justify-start items-start gap-6 flex overflow-hidden">
            <div className="h-[85px] flex-col justify-start items-start gap-2 flex">
                <div className="text-black/50 text-2xl font-normal font-['Inter']">Software and web design leader</div>
                <div className="text-black/90 text-[40px] font-medium font-['Bricolage Grotesque']">10 years</div>
            </div>
            <div className="text-black text-base font-medium font-['Instrument Sans']">I'm a designer based in Oregon with 10+ years of experience in designing and leading product design initiatives. I'm looking for my next opportunity as a staff designer.</div>
            <div className="px-4 py-2 bg-gradient-to-b from-[#0f1825] to-[#0f1825] rounded-[999px] border border-white justify-center items-center gap-1 inline-flex">
                <div className="text-center text-[#cccccc] text-base font-medium font-['Instrument Sans'] leading-loose">Reach out</div>
            </div>
        </div>
        <div className="px-2 pb-1 inline-flex justify-items-normal">
          <div className="text-white text-base font-normal font-['Inter']">Time zone: PST</div>
          <div className="text-white text-base font-normal font-['Inter']">Time zone: PTSD</div>
        </div>
      </div>
    <div className="bg-[#173253] rounded-[30px] w-full h-7"></div>  
    <div className="w-full flex flex-row gap-6">
      <div className="border-solid border-[1px] border-white w-full h-[200px]"></div>
      <div className="border-solid border-[1px] border-white w-full"></div>
    </div>
  </div>
    </>
  )
}

export default App
