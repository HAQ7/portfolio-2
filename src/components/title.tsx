'use client'

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import glow from '@/assets/icon-glow.png';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Title(props: {
  children: React.ReactNode;
  image: StaticImport;
}) {
    const titleRef = useRef({} as HTMLDivElement)
    const isInView: boolean = useInView(titleRef, {margin: "-20% 0px", once: true})
  return (
    <div ref={titleRef} className="flex gap-2">
      <div className="grid place-items-center relative">
        <Image src={glow} className="absolute w-16" alt="title icon glow" />
        <Image src={props.image} className="w-16" alt="title icon" />
      </div>
      <div className="relative grid items-center">
        <h1 className={"absolute drop-shadow-white overflow-hidden whitespace-nowrap border-r-2 border-transparent w-0 text-3xl " + (isInView ? 'animate-typing-nodelay' : '')}>
          {props.children}
        </h1>

        <h1 className="text-3xl text-transparent p-1">{props.children}</h1>
      </div>
    </div>
  );
}
