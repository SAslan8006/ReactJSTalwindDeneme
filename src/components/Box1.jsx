import React from 'react'
import styles from '../Styles'
import { motion } from 'framer-motion'
const Box1 = () => {
    return (
        <div className='bg-[#191825] m-0 p-5'>
            <div className='pb-[30px]'>
                <motion.div className={styles.animasyonBox}
                    //style={{ opacity: 0.2 }}
                    animate={{

                        x: 250, //'20rem'
                        opacity: 1
                    }}
                    initial={{
                        x: -2000,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                </motion.div>
            </div>
        </div >
    )
}

export default Box1
