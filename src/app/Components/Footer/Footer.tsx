import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="h-[250px] w-full bg-red-700" id="contact">
        <div className=" flex text-white">
            <div className=" p-10 text-[18px]"><h1 className="text-white">Need Help?</h1><br /> <h2>+92-25602624-235</h2><p> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
            <div className="pl-[40px]"><h1 className="p-10 text-[19px]">Services</h1>
          <Link href="/"><div className="pl-[50px] hover:text-pink-500">Home</div></Link>
          <Link href="#about"><div className="pl-[50px] hover:text-pink-500">About</div></Link>
          <Link href="#portfolio"><div className="pl-[45px] hover:text-pink-500">Portfolio</div></Link>
            </div>
           
           
           
           
            <div className="p-[20px] pl-[150px] pt-20 w-full">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, illum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sequi ducimus deserunt culpa amet maiores provident sed asperiores aliquam at? Similique harum eveniet id necessitatibus, ipsam quasi nobis ab dolorum.
            <br />
            </div>
        </div>
    </div>
  )
}

export default Footer