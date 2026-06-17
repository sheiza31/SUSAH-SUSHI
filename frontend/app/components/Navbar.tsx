import Link from "next/link"
const Navbar = async () =>{
    return (
        <>      
        <nav className="flex w-full items-center text-white bg-black justify-between py-6 px-8">
            <h1 className="lg:text-4xl font-bold text-[16px] ">Susah Sushi</h1>
            <div className="flex flex-row lg:gap-8 gap-1.5">
            <li className="list-none text-[12px] lg:text-lg">
                <Link href={"/#aboutus"}>About Us</Link>
            </li>
            <li className="list-none text-[12px] lg:text-lg">
                <Link href={"/#bestseller"}>Best Seller</Link>
            </li>
            <li className="list-none text-[12px] lg:text-lg">
                <Link href={"/#ourclient"}>Our Client</Link>
            </li>
            <li className="list-none text-[12px] lg:text-lg">
                <Link href={"/#contact"}>Contact</Link>
            </li>
            </div>
        </nav>
        </>
    )
}

export default Navbar