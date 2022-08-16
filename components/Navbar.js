import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="navbar-custom">
            <div className="logo">
                <Image src="/wizlist-logo.png" width={180} height={60} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/wizards"><a>Wizard Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;