import Logo from "../assets/img/logo.png";

import { useState } from "react";

//import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";

//import icons
import { FaBars } from "react-icons/fa";
import { ImArrowRight2 } from "react-icons/im";

const Header = () => {
    const [navMobile, setNavMobile] = useState(false);

    return (
        <header className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0" data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'>
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-[120px]">
                        <a href="#" className="w-14">
                            <img src={Logo} alt="" />
                        </a>
                        <div className="hidden lg:flex">
                            <Nav />
                        </div>
                    </div>

                    <div
                        className={`${
                            navMobile ? "max-h-52" : "max-h-0"
                        } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
                    >
                        <NavMobile />
                    </div>
                    <button className="btn btn-quaternary flex items-center gap-x-[20px] group">
                        Request Demo{" "}
                        <ImArrowRight2 className="text-2xl text-accent-primary group-hover:text-white transition" />
                    </button>
                    <div onClick={() => setNavMobile(!navMobile)} className="text-2xl text-primary cursor-pointer lg:hidden">
                        <FaBars />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
