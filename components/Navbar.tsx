import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-1">
      <Link href="/">
        <Image src="/demoo_logo.png" alt="logo" width={150} height={50}></Image>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <Link href={link.href} key={link.key} className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        )) }
      </ul>

      <Image src="/menu.svg" alt="menu_button" 
      width={22} 
      height={29} 
      className="inline-block cursor-pointer lg:hidden"></Image>
    </nav>
  )
}

export default Navbar