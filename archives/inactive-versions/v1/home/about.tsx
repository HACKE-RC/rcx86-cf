
import Link from 'next/link'

const About = () => {
  
    
  return (
  <div className="about-me text-muted-foreground flex flex-col gap-4">
    <p >
     I&apos;m a passionate CS student obsessed with low-level systems, 
     reverse engineering, and understanding how computers actually work.
    </p>
    <p>
     Currently, I&apos;m focused on low-level computer science research and
     engineering  building tooling, breaking binaries, and going deeper into operating systems,
     compilers, and security. <Link title='pwno io' href={'https://pwno.io/'} className='text-foreground italic hover:underline'>
     Agentic Research Pwno. Magnificent Grants Grantee.
     </Link> 
    </p>
    <p>
    </p>
   </div>
  )
}

export default About
