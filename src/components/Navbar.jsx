import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { Tooltip } from 'react-tooltip'


const Navbar = () => {

    const { user, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
            })
            .catch(error => console.log(error))
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
        <div className="navbar bg-forest-green">
            <div className="navbar-start">
                <div className="dropdown ">
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
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-32 text-center p-2 py-4 shadow gap-2 text-off-white bg-forest-green [&_*]:inline-block">
                        {navlinks}
                    </ul>
                </div>
                <NavLink to='/' className=" px-4 font-extrabold text-3xl  text -sky-blue text-golden-yellow">GreenAcres</NavLink>
                {
                    user && <p>{user.displayName}</p>
                }
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2 text-off-white">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">

                {/* dynamic content */}

                <div href="" data-tooltip-id="my-tooltip" data-tooltip-content={user && user.displayName} className="dropdown dropdown-end ">
                    <Tooltip id='my-tooltip' />

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img
                                    alt="profile-pic"
                                    src={user.photoURL} /> : <img
                                    alt="profile-pic"
                                    src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                            }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 border p-2 gap-2 shadow">
                        <li>
                            <NavLink to='/a' className="justify-between">
                                Update Profile
                            </NavLink>
                        </li>
                        <li><NavLink onClick={handleLogOut} className=''>Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;