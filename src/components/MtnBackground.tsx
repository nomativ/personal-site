import bgImage from '../assets/bg-image.png'

export default function MtnBackground() {
    return (
        <>
            <img className="absolute w-screen top-0 -z-10 opacity-90" src={bgImage} />
            <div className="absolute w-[1459.37px] h-[606.24px] origin-top-left rotate-[0.91deg] opacity-75 mix-blend-hard-light bg-[radial-gradient(ellipse_82.87%_98.01%_at_97.00%_98.09%,_rgba(102,_216,_255,_0.20)_0%,_rgba(102,_216,_255,_0)_100%)] rounded-full blur-[100px]">
            </div>
        </>
    )
}
