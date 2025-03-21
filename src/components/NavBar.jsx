import { Link } from "react-router-dom";
import { Sun } from "lucide-react"; // Sun icon for theme toggle

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 bg-white w-full shadow-md py-6 px-25 z-50">
        <div className="mx-auto flex items-center justify-between">
            <div className="w-35">
                <img src="ewalled.png" alt="vite icon" />
            </div>
            <ul className="flex items-center space-x-15">
                <li>
                    <Link to = '/home' className="text-blue-500 hover:font-bold hover:text-blue-500">
                        <p className="text-xl">Dashboard</p>
                    </Link>
                </li>
                <li>
                    <Link to = '/transfer' className="hover:font-bold hover:text-blue-500">
                        <p className="text-xl">Transfer</p>
                    </Link>
                </li>
                <li>
                    <Link to = '/topup' className="hover:font-bold hover:text-blue-500">
                        <p className="text-xl">Top Up</p>
                    </Link >
                </li>
                <li>
                    <Link to ='/login' className="hover:font-bold hover:text-blue-500">
                        <p className="text-xl">Sign Out</p>
                    </Link>
                </li>
                <li>
                    <div className="border-l-2 border-gray-200 h-8"></div>
                </li>
                <li>
                        <div className="bg-white">
                            <Sun className="text-yellow-300 w-8 h-8 hover:text-black" />
                        </div>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default NavBar;
