export default function WindowBlur() {
    return (
        <div
            className="fixed w-full z-20 h-24 bottom-0 backdrop-blur-3xl bg-[#0F1825]"
            style={{
                maskImage: 'linear-gradient(to top, black 5%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 5%, transparent 100%)'
            }}
        />
    )
}