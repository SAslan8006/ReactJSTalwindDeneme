import React, { useState } from 'react'
import styles from '../../Styles'
import { motion } from 'framer-motion';

const Box3 = () => {
    const [isAnimating, setAnimating] = useState(false)

    return (
        <div className='bg-[#191825] m-0 p-5'>
            <motion.div className={styles.animasyonBox}
                whileHover={{
                    scale: 1.2
                }}
                drag
                dragConstraints={{
                    right: 20,
                    top: 40,
                    bottom: 10,
                    left: -10
                }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: '100%'
                }}
            >

            </motion.div>
        </div >
    )
}

export default Box3
