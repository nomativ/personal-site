import Divider from '../Divider'
import Button from '../Button'
import { Figma } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { a, b, c, d, e, f, g, h, i, j, primary, gradients } from '../../assets/vida'
import { a1, b1, c1, d1, e1, f1, g1, h1, i1, j1, k1, l1 } from '../../assets/motion-graphics'
import { useInView } from 'framer-motion';

const motionGraphicsImages = [
    { src: d1, className: 'absolute w-60 top-65 left-126', alt: 'data funnel' },
    { src: i1, className: 'absolute w-47 top-62 left-186', alt: 'app rescilience' },
    { src: l1, className: 'absolute w-55 top-58 left-55', alt: 'block data' },
    { src: e1, className: 'absolute w-30 top-101 left-117', alt: 'delegator GRT value flow' },
    { src: a1, className: 'absolute w-110 top-59 left-0', alt: 'substreams data flow' },
    { src: j1, className: 'absolute w-183 top-80 left-145', alt: 'token api query types' },
    { src: k1, className: 'absolute w-130 top-29 left-235', alt: 'response cursor' },
    { src: c1, className: 'absolute w-23 top-24 left-120', alt: 'broken data flow' },
    { src: f1, className: 'absolute w-23 top-20 left-149', alt: 'broken data flow app loading' },
    { src: g1, className: 'absolute w-23 top-24 left-177', alt: 'data flow restored app connected' },
    { src: h1, className: 'absolute w-23 top-24 left-205', alt: 'app connected to indexers' },
    { src: b1, className: 'absolute w-40 top-120 left-295', alt: 'query and response' },
];

export default function Showcase() {
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: '-100px' });
    const controls = useAnimation();

    const motionGraphicsRef = useRef(null);
    const motionGraphicsInView = useInView(motionGraphicsRef, { once: true, margin: '-100px' });
    const motionGraphicsControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    useEffect(() => {
        if (motionGraphicsInView) {
            motionGraphicsControls.start('visible');
        }
    }, [motionGraphicsInView, motionGraphicsControls]);

    const variants = (delay: number) => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay } }
    });

    return (
        <div className='flex flex-col gap-6 relative max-w-[1440px] mx-auto md:px-0 px-2'>
            <div id="vida" className='relative h-[625px] rounded-3xl bg-[#0A0E15] p-8 md:py-12 md:px-19 overflow-hidden'>
                <div className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-200 h-100 bg-[#BBCDF210] mix-blend-hard-light rounded-full blur-[150px]" />
                <div className='w-full inline-flex flex-row items-center md:gap-6 justify-between'>
                    <div className='inline-flex flex-col min-w-fit'>
                        <h3 className='body text-white/50'>Vida</h3>
                        <p className='body-large text-white'>Mobile App</p>
                    </div>
                    <div className='w-full hidden md:inline-block'>
                        <Divider />
                    </div>
                    <Button text="Figma" url="https://www.figma.com/design/trGUjPieKyKyKLyjST5kBe/Vida?node-id=1-2&p=f&t=Zq8ntsCsKXsTn7jd-11" icon={Figma} iconBefore={true} />
                </div>
                <p className='md:absolute top-32 body text-white/50 md:w-64 mt-4 md:mt-0'>End-to-end design for an end-user app that rewards fans for their loyalty to creators.</p>
                <div ref={gridRef} className='grid grid-cols-7 h-full min-w-[800px] md:w-fit gap-2 md:gap-6 -ml-[50%] md:mx-auto mt-4 md:mt-0'>
                    <motion.div id='col-1' className='mt-50' variants={variants(1.2)} initial="hidden" animate={controls}>
                        <img src={a} alt="Vida screenshot 1" />
                    </motion.div>
                    <motion.div id='col-2' className='mt-25 flex flex-col gap-2 md:gap-6' variants={variants(0.9)} initial="hidden" animate={controls}>
                        <img src={b} alt="Vida screenshot 2" />
                        <img src={c} alt="Vida screenshot 3" />
                    </motion.div>
                    <motion.div id='col-3' className='flex flex-col gap-2 md:gap-6' variants={variants(0.6)} initial="hidden" animate={controls}>
                        <img src={d} alt="Vida screenshot 4" />
                        <img src={e} alt="Vida screenshot 5" />
                    </motion.div>
                    <motion.div id='col-4' className='mt-25' variants={variants(0.3)} initial="hidden" animate={controls}>
                        <img src={primary} alt="Vida screenshot 6" />
                        <img src={gradients} className="-mt-6" alt="Vida screenshot 7" />
                    </motion.div>
                    <motion.div id='col-5' className='flex flex-col gap-2 md:gap-6' variants={variants(0.6)} initial="hidden" animate={controls}>
                        <img src={f} alt="Vida screenshot 8" />
                        <img src={g} alt="Vida screenshot 9" />
                    </motion.div>
                    <motion.div id='col-6' variants={variants(0.9)} initial="hidden" animate={controls}>
                        <img src={h} alt="Vida screenshot 10" />
                    </motion.div>
                    <motion.div id='col-7' className='flex flex-col mt-25 gap-2 md:gap-6' variants={variants(1.2)} initial="hidden" animate={controls}>
                        <img src={i} alt="Vida screenshot 11" />
                        <img src={j} alt="Vida screenshot 12" />
                    </motion.div>
                </div>
            </div>
            <div id="motion-graphics" className='relative h-[625px] rounded-3xl bg-[#0A0E15] p-8 md:py-12 md:px-19 overflow-hidden z-1'>
                <div className="absolute -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-200 h-100 bg-[#BBCDF210] mix-blend-hard-light rounded-full blur-[150px]" />
                <div className='w-full inline-flex flex-row items-center md:gap-6 justify-between'>
                    <div className='inline-flex flex-col min-w-fit'>
                        <h3 className='body text-white/50'>The Graph</h3>
                        <p className='body-large text-white'>Motion Graphics</p>
                    </div>
                    <div className='w-full hidden md:inline-block'>
                        <Divider />
                    </div>
                    <Button text="Figma" url="https://www.figma.com/design/trGUjPieKyKyKLyjST5kBe/Vida?node-id=1-2&p=f&t=Zq8ntsCsKXsTn7jd-11" icon={Figma} iconBefore={true} />
                </div>
                <p className='md:absolute top-32 body text-white/50 md:w-93 mt-4 md:mt-0 z-2'>Simplifying complex technical products and concepts for growth and created a design language to scale our diagrams consistently.</p>
                <div id='images' ref={motionGraphicsRef}>
                    {motionGraphicsImages.map((img, i) => (
                        <motion.img
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            className={img.className}
                            initial="hidden"
                            animate={motionGraphicsControls}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.7, delay: 0.5 + i * 0.20 } },
                            }}
                        />
                    ))}
                </div>
                <div id='grid' className='absolute top-0 left-0 w-full h-full -z-10 opacity-40'>
                    <div id='lines-horizontal' className='absolute w-full h-full flex flex-col gap-8'>
                        {Array.from({ length: 28 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="h-0 self-stretch outline-[1px] outline-[#101320]"
                                style={{ originX: 0 }}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 1.2, delay: 0.4 + i * 0.10 }}
                            />
                        ))}
                    </div>
                    <div id='lines-vertical' className='absolute w-full h-full flex flex-row gap-8'>
                        {Array.from({ length: 44 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-0 self-stretch outline-[1px] outline-[#101320]"
                                style={{ originY: 0 }}
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 1.2, delay: 0.4 + i * 0.10 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full mt-6'>
                <Button text='See my portfolio' url='https://www.notion.so/imaginary-minnow-e0c/2151795f3a0c80beb52af984a193f5a1?v=2151795f3a0c8005ad92000c2dfbf18e&source=copy_link' iconBefore={false} />
            </div>
        </div>
    )
}
