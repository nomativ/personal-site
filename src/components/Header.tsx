export default function Header () {
  return (
    <header className="w-full inline-flex items-center justify-start gap-6 mb-16">
            <img src='src/assets/profile-pic.png' alt='ímage alt' className="w-24 h-24 rounded-full" />
          <h1 className="text-2xl font-bold text-white min-w-fit">Edgar Priday</h1>
          <div className="h-[0px] border border-white w-full">
          </div>
          <button className="min-w-fit">
            Reach Out
          </button>
    </header>
  )
}
