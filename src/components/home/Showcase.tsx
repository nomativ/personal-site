import Divider from '../Divider'
import Button from '../Button'
import { Figma } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { a, b, c, d, e, f, g, h, i, j, primary, gradients } from '../../assets/vida'
import { useInView } from 'framer-motion';

export default function Showcase() {
    const gridRef = useRef(null);
    const isInView = useInView(gridRef, { once: true, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const variants = (delay: number) => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, delay } }
    });

    return (
        <>
            <div id="slide-vida" className='relative w-full max-w-[1440px] h-[625px] mx-auto rounded-3xl bg-[#0A0E15] p-8 md:py-12 md:px-19 overflow-hidden'>
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
                        <img src={a} loading="lazy" alt="Vida screenshot 1" />
                    </motion.div>
                    <motion.div id='col-2' className='mt-25' variants={variants(0.9)} initial="hidden" animate={controls}>
                        <img src={b} loading="lazy" alt="Vida screenshot 2" />
                        <img src={c} loading="lazy" alt="Vida screenshot 3" />
                    </motion.div>
                    <motion.div id='col-3' variants={variants(0.6)} initial="hidden" animate={controls}>
                        <img src={d} loading="lazy" alt="Vida screenshot 4" />
                        <img src={e} loading="lazy" alt="Vida screenshot 5" />
                    </motion.div>
                    <motion.div id='col-4' className='mt-25' variants={variants(0.3)} initial="hidden" animate={controls}>
                        <img src={primary} loading="lazy" alt="Vida screenshot 6" />
                        <img src={gradients} loading="lazy" className="-mt-6" alt="Vida screenshot 7" />
                    </motion.div>
                    <motion.div id='col-5' variants={variants(0.6)} initial="hidden" animate={controls}>
                        <img src={f} loading="lazy" alt="Vida screenshot 8" />
                        <img src={g} loading="lazy" alt="Vida screenshot 9" />
                    </motion.div>
                    <motion.div id='col-6' variants={variants(0.9)} initial="hidden" animate={controls}>
                        <img src={h} loading="lazy" alt="Vida screenshot 10" />
                    </motion.div>
                    <motion.div id='col-7' className='mt-25' variants={variants(1.2)} initial="hidden" animate={controls}>
                        <img src={i} loading="lazy" alt="Vida screenshot 11" />
                        <img src={j} loading="lazy" alt="Vida screenshot 12" />
                    </motion.div>
                </div>
            </div>
            <div className='flex justify-center w-full mt-6'>
                <Button text='See my portfolio' url='https://www.notion.so/imaginary-minnow-e0c/2151795f3a0c80beb52af984a193f5a1?v=2151795f3a0c8005ad92000c2dfbf18e&source=copy_link' iconBefore={false} />
            </div>
        </>
    )
}
