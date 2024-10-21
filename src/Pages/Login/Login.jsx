import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = () => {

    }
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className=" font-bold text-4xl mt-16">Please Login</h2>
            <div className=" w-1/3 mx-auto m-6 p-6  border border-light-gray rounded-lg bg-soft-beige">
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
                        className="bg-forest-green font-bold text-off-white px-4 py-2 rounded-md hover:bg-golden-yellow hover:text-earth-brown transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p>Don't have account? <Link className="btn btn-link" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;