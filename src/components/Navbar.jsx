import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const handleLogOut = () => {


    }

    const navlinks = <>
        <li><NavLink to='/' className={
            ({ isActive }) =>
                isActive ? 'font-bold border-b-2 border-golden-yellow rounded-none hover:bg-transparent focus:text-white' : 'hover:text-golden-yellow font-bold rounded-none hover:bg-transparent'

        }>Home</NavLink></li>
        <li><NavLink to='/login' className={
            ({ isActive }) =>
                isActive ? 'font-bold border-b-2 border-golden-yellow rounded-none hover:bg-transparent focus:text-white' : 'hover:text-golden-yellow font-bold rounded-none hover:bg-transparent'

        }>Login</NavLink></li>
        <li><NavLink to='/register' className={
            ({ isActive }) =>
                isActive ? 'font-bold border-b-2 border-golden-yellow rounded-none hover:bg-transparent focus:text-white' : 'hover:text-golden-yellow font-bold rounded-none hover:bg-transparent'

        }>Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-forest-green text-[#FAFAFA]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl bg-green-600 text-amber-950">GreenAcres</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">

                {/* dynamic content */}

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="profile-pic"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 border p-2 gap-2 shadow">
                        <li>
                            <NavLink to='unknown' className="justify-between">
                                Update Profile
                            </NavLink>
                        </li>
                        <li><NavLink onClick={handleLogOut} to='unknown'>Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;