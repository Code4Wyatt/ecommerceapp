import Image from "next/image";
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react"

function sliceAndCapitalize(str: string) {
    const spaceIndex = str.indexOf(' ');
    const sliced = str.slice(0, spaceIndex);
    const capitalized = sliced.charAt(0).toUpperCase() + sliced.slice(1);
    return capitalized;
}

function Header() {
    const { data: session } = useSession();
    console.log(session);

    let firstName = sliceAndCapitalize(session?.user?.name || 'Guest');

    return (
        <header>
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow ml-2 sm:flex-grow-0">
                    <Image src='https://links.papareact.com/f90' alt='logo' width={110} height={40} className="cursor-pointer ml-5 mr-10" />
                </div>

                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none pl-4" />
                    <MagnifyingGlassIcon className="h-12 p-4" />
                </div>

                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={() => signIn()} className="link cursor-pointer">
                        <p>Hello {firstName}</p>
                        <p className="font-extrabold md:text-sm">Account & Lists</p>
                    </div>
                    <div className="link cursor-pointer">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative link cursor-pointer flex items-center">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-small text-white">
                <p className="link flex items-center">
                    <Bars3Icon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Todays's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header