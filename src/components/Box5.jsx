import React from 'react'
import { motion } from 'framer-motion';
import styles from './../Styles';

const Box5 = () => {
    const boxVariant = {
        hidden: {
            opacity: 1,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 0.5,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2,
                duration: 2
            }
        }
    }
    const liVariant = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }
    return (
        <div className='bg-[#191825] m-0 p-5'>
            <motion.div className={styles.animasyonBox}
                variants={boxVariant}
                animate="visible"
                initial="hidden"
                transition={{ duration: 2 }}

            > {[1, 2, 3].map(box => {
                return (
                    <motion.li className="w-[50px] h-[50px] bg-white p-[5px] list-none m-[5px]"
                        variants={liVariant}
                    >

                    </motion.li>
                )
            })}
            </motion.div>
        </div >
    )
}

export default Box5
