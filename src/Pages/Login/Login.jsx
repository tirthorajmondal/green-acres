import { useContext } from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/AuthProvider';

const Login = () => {

    const { loginUser, setUser, googleSignIn, facebookSignIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(form, email, password);

        loginUser(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => console.log(error)
            )
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => console.log(error)
            )
    }
    const handleFacebookSignIn = () => {
        
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className=" font-bold text-4xl mt-10">Please Login</h2>
            <div className=" md:w-1/3 mx-auto mt-6 pb-8 lg:pb-12 p-6  border border-light-gray rounded-lg bg-soft-beige">
                <form onSubmit={handleLogin} className="flex flex-col mx-auto space-y-4">
                    <div>
                        <label className="text-sm text-dark-charcoal">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="w-full px-2 py-1 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-dark-charcoal">Password</label>
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            className="w-full px-2 py-1 mb-3 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-forest-green font-bold text-off-white px-4 py-2 rounded-md hover:bg-golden-yellow hover:text-dark-charcoal transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p>Don't have account? <Link className="btn btn-link" to='/register'>Register</Link></p>

                <hr className="border-gray-400 m-2" />
                <div className='text-center font-medium -mt-7 rounded-full  p-3 py-2'>
                    <p className='inline bg-soft-beige p-2 rounded-full py-1.5'>OR</p>
                </div>
                <div className="flex justify-center gap-5 mt-3">
                    <div onClick={handleGoogleSignIn} className="cursor-pointer border-2 border-slate-300 text-lg flex px-4 rounded-lg items-center font-bold p-2"><FcGoogle className='text-2xl inline-block mr-2' />
                        Google
                    </div>
                    <div onClick={handleFacebookSignIn} className="cursor-pointer border-2 border-slate-300 text-lg flex px-4 rounded-lg items-center font-bold p-2"><FaFacebook className='text-2xl inline-block mr-2 text-sky-500' />
                        Facebook
                    </div>
                </div>
            </div>
            <div className="flex">
                <p className="w-10 bg-forest-green">44</p>
                <p className="w-10 bg-earth-brown">44</p>
                <p className="w-10 bg-golden-yellow">44</p>
                <p className="w-10 bg-sky-blue">44</p>
                <p className="w-10 bg-soft-beige">44</p>
                <p className="w-10 bg-light-gray">44</p>
                <p className="w-10 bg-dark-charcoal">44</p>
                <p className="w-10 bg-off-white">44</p>
            </div>
        </div >
    );
};

export default Login;