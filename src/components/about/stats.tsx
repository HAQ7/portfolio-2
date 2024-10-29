'use client';

import { motion, Transition, Variants } from 'framer-motion';
import htmlTagIcon from '@/assets/icons/code.svg';
import tooldsIcon from '@/assets/icons/tools.svg';
import timeIcon from '@/assets/icons/time.svg';
import Image from 'next/image';
import statsBg from '@/assets/icons/stats.svg';

export default function Stats() {
  const variants: Variants = {
    appear: {
      x: 0,
      opacity: 1
    },
  };
  const initial = {
    x: 100,
    opacity: 0
  };
  const transition: Transition = {
    type: 'spring',
    bounce: 0,
    // duration: 2
  }
  return (
    <div className="grid place-items-center relative">
      <motion.div
        whileInView={'appear'}
        viewport={{ once: true, margin: '-30% 0px' }}
        transition={{ staggerChildren: 0.2 }}
        className="absolute flex flex-col items-center justify-around h-full text-3xl text-nowrap "
      >
        <motion.div
          initial={initial}
          variants={variants}
          transition={transition}
          className="flex flex-col items-center gap-1"
        >
          <div>+20</div>
          <div className="font-normal">websites</div>
          <div>
            <Image className="w-14" src={htmlTagIcon} alt="website icon" />
          </div>
        </motion.div>
        <motion.div
          initial={initial}
          variants={variants}
          transition={transition}
          className="flex flex-col items-center gap-1"
        >
          <div>+3</div>
          <div className="font-normal">Years Web Dev</div>
          <div>
            <Image className="w-14" src={timeIcon} alt="exp icon" />
          </div>
        </motion.div>
        <motion.div
          initial={initial}
          variants={variants}
          transition={transition}
          className="flex flex-col items-center gap-1"
        >
          <div>+10</div>
          <div className="font-normal">Web Tech</div>
          <div>
            <Image className="w-14" src={tooldsIcon} alt="web tech icon" />
          </div>
        </motion.div>
      </motion.div>
      <Image className="min-w-44 w-[12vw]" src={statsBg} alt="deco" />
    </div>
  );
}
