import { motion } from 'framer-motion'

interface TextCarouselProps {
    slides: string[]
    duration?: number
}

const TextCarousel = ({ slides, duration = 3000 }: TextCarouselProps) => {
    // Triple the slides for seamless looping
    const tripleSlides = [...slides, ...slides, ...slides]

    return (
        <div
            className="w-full relative h-8 overflow-hidden"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 64px), transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 64px), transparent)'
            }}
        >
            <motion.div
                className="flex items-center absolute left-1/2"
                style={{ x: '-50%' }}
                animate={{
                    x: ['-50%', 'calc(-50% - 33.333%)']
                }}
                transition={{
                    duration: slides.length * (duration / 1000),
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {tripleSlides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex justify-center flex-shrink-0 px-4"
                    >
                        <p className="text-md font-medium text-center whitespace-nowrap text-black/50">
                            {slide}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default TextCarousel