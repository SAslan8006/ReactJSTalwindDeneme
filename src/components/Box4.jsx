import React from 'react'
import styles from '../Styles'
import { motion } from 'framer-motion';

const Box4 = () => {
    return (
        <div className='bg-[#191825] m-0 p-5'>
            <motion.div className={styles.animasyonBox}
                animate={{
                    scale: [1, 1.2, 1.6, 2, 1],
                    borderRadius: ["20%", "20%", "50%", "80%", "20%"],
                    rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >
            </motion.div>
        </div >
    )
}

export default Box4
