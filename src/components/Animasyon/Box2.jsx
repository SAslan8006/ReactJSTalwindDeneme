import React, { useState } from 'react'
import styles from '../../Styles'
import { motion } from 'framer-motion';

const Box2 = () => {
    const [isAnimating, setAnimating] = useState(false)

    return (
        <div className='bg-[#191825] m-0 p-5'>
            <motion.div className='pb-[30px]'>
                <motion.div className={styles.animasyonBox}
                    animate={{
                        x: isAnimating ? 100 : 0, //'20rem'
                        opacity: isAnimating ? 1 : 0.8,
                        scale: isAnimating ? 2 : 1,
                        rotate: isAnimating ? 270 : 0,
                        backgroundColor: "blue",
                    }}
                    initial={{
                        x: 0,
                        opacity: 0,
                        backgroundColor: "red"
                    }}
                    transition={{
                        duration: 5,
                    }}
                    onClick={() => setAnimating(!isAnimating)}
                >

                </motion.div>
            </motion.div>
        </div >
    )
}

export default Box2
