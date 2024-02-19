import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import styles from '../../Styles';

const Box6 = () => {
    const control = useAnimation();

    return (
        <div className='bg-[#191825] m-0 p-5'>
            <button onClick={() => {
                control.start({
                    x: 100,
                    transition: { duration: 2 }

                })
            }} className={styles.button2}>Right</button>
            <button onClick={() => {
                control.start({
                    x: -100,
                    transition: { duration: 2 }

                })
            }} className={styles.button2}>Left</button>
            <button onClick={() => {
                control.start({
                    borderRadius: '20%',
                    transition: { duration: 2 }

                })
            }} className={styles.button2}>Circle</button>
            <button onClick={() => {
                control.start({
                    borderRadius: '0%',
                    transition: { duration: 2 }

                })
            }} className={styles.button2}>Square</button>
            <motion.div className={styles.animasyonBox}
                animate={control}
            >
            </motion.div>
        </div >
    )
}

export default Box6
