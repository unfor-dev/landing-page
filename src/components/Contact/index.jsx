import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/mee.jpg`}
                            />
                        </div>
                        <h2>Let's work</h2>
                    </span>
                    <h2>together</h2>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>hamzayevasadulloh@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>+998 99 000 11 80</p>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Version</h3>
                            <p>2025 © Edition</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>00:00 PM GMT+0</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Telegram</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Gmail</p>
                        </Magnetic>
                        <Magnetic>
                            <p>LinkedIn</p>
                        </Magnetic>
                        <Magnetic>
                            <p>GitHub</p>
                        </Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
