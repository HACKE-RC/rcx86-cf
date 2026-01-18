import React from 'react'
import { Button } from '@/components/ui/button'
import {ArrowUpRight, CircleArrowOutUpRightIcon, MessageCircleIcon} from 'lucide-react'
const CtaSection = () => {
  return (
    <div className='cta-section flex flex-col gap-2'>
      <p className='text-sm text-muted-foreground opacity-70'>
       <i>
         Hey! Interested in working together  would love to chat. Feel free to schedule a meet anytime.
       </i>
      </p>
      <Button className='rounded-none invert w-fit' size={"sm"}>
        

        Shoot a Dm 
        <ArrowUpRight/>
      </Button>
    </div>
  )
}

export default CtaSection
