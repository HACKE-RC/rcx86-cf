import React from 'react'
import { socials } from '@/data/socials';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

const Socials = () => {
  return (
    <div className='w-full py-4 text-muted-foreground'>
    
      <div className="socials flex items-center justify-center flex-wrap gap-7 w-full py-4 ">
        {socials.map((s,i)=>{
            return (
                <React.Fragment key={i}>
                    <Link title={s.name} href={s.url} target='_blank' className='group relative text-xs text-muted-foreground flex items-center gap-1.5'>
                       
                        <p>{s.name}</p>
                        <div className='absolute w-full h-[0.5px] opacity-70 -bottom-0.5 scale-x-0 group-hover:scale-x-100 duration-300 transition-all origin-left left-0  bg-muted-foreground'/>
                        <ArrowUpRightIcon size={13} className='translate-y-0.5 group-hover:translate-y-0 transition-all duration-300 delay-150 opacity-0 group-hover:opacity-100'/>
                    </Link >
                </React.Fragment>


            )
        })}
      </div>
    </div>
  )
}

export default Socials
