import { home_page_data } from '@/data/home'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex  items-center justify-center border-t py-3 w-full'>
        <p className='text-xs text-muted-foreground opacity-70'>
            &copy; {new Date().getFullYear()} {home_page_data.name}
        </p>
    </footer>
  )
}

export default Footer
