import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div> <div className="w-full h-14 bg-slate-700 flex justify-between items-center fixed">
    <div className="text-[white] text-[30px] pl-[20px] ">N<span className="text-red-700">K</span></div>
    <ul className="flex pr-[250px] items-center gap-[80px] text-[20px]">
      <Link href={"/"}><li className="text-yellow-500  hover:text-red-500">Home</li></Link>
      <Link href={"#about"}><li className="text-yellow-500  hover:text-red-500">About us</li></Link>
      <Link href={"#portfolio"}><li className="text-yellow-500  hover:text-red-500">Portfolio</li></Link>
      <Link href={"#contact"}><li className="text-yellow-500  hover:text-red-500">Contacts</li></Link>
    </ul>
  </div></div>
  )
}

export default Header