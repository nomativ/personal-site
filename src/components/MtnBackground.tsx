// import bgImage from '../assets/bg-image.png'

export default function MtnBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Large purple gradient */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-75 mix-blend-hard-light rounded-full blur-[100px] origin-top-left rotate-[0.91deg]"
                style={{
                    background: 'radial-gradient(ellipse 82.87% 98.01% at 3.00% 1.91%, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0) 100%)'
                }}
            />

            {/* Large blue gradient overlay */}
            <div
                className="absolute top-0 left-0 w-[1459.37px] h-[606.24px] opacity-75 mix-blend-hard-light rounded-full blur-[100px] origin-top-left rotate-[0.91deg]"
                style={{
                    background: 'radial-gradient(ellipse 82.87% 98.01% at 97.00% 98.09%, rgba(102, 216, 255, 0.10) 0%, rgba(102, 216, 255, 0) 100%)'
                }}
            />
        </div>
    )
}