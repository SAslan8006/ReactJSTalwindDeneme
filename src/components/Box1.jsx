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
                        x: 0, //'20rem'
                        opacity: 1,
                        scale: 1.5,
                        rotate: 270,
                        backgroundColor: "blue"
                    }}
                    initial={{
                        x: 250,
                        opacity: 0,
                        backgroundColor: "red"
                    }}
                    transition={{
                        duration: 5,
                        //type: "spring",
                        //damping: 100,
                        //duration: 5 //Kaç Saniyede gelmesini istersen burada belirtirsin
                        //stiffness: 800,
                    }}
                >
                </motion.div>
            </div>
        </div >
    )
}

export default Box1

