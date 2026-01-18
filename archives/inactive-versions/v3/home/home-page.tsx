import { home_page_data } from '@/data/home'
import React from 'react'
import Header from './header'
import Footer from './footer'
import Socials from './socials'
import About from './about'
import Project from './projects'
import MyBlogs from './my-blogs'
import { ModeToggle } from '@/components/mode-toggle'
const data = home_page_data

const HomePage = () => {
  
    
  return (
    <main className='w-full mx-auto max-w-3xl px-4 '>
      <div className='fixed top-5 right-5'>
        <ModeToggle/>
      </div>
   <Header/>
 <About/>
  {/* looks good but dosent fit */}
   {/* <CtaSection/> */}
   <Project/>
   <MyBlogs/>
   <Socials/>
   <Footer/>
    </main>
  )
}

export default HomePage
