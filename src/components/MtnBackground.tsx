import bgImage from '../assets/bg-image.png'

export default function MtnBackground() {
    return (
        <div className="absolute top-0 left-0 -z-11 w-full overflow-visible">
            <img
                className="w-full opacity-90"
                src={bgImage}
                alt="Mountain background"
            />
            <div className="absolute top-0 left-0 w-full h-full origin-top-left rotate-[0.91deg] opacity-75 mix-blend-hard-light bg-[radial-gradient(ellipse_82.87%_98.01%_at_97.00%_98.09%,_rgba(102,_216,_255,_0.20)_0%,_rgba(102,_216,_255,_0)_100%)] rounded-full blur-[100px]" />
            <div className="absolute top-0 left-0 w-80 h-36 origin-top-left rotate-[0.91deg] opacity-100 mix-blend-hard-light bg-[radial-gradient(ellipse_67.05%_179.10%_at_16.58%_39.07%,_rgba(14,_26,_45,_0.15)_0%,_rgba(14,_26,_45,_0)_100%)] rounded-full blur-[100px]" />
        </div>
    )
}