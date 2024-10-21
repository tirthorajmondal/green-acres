import { Link } from "react-router-dom";





const Register = () => {


    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData();
        console.log(form.get(name));
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className=" font-bold text-4xl mt-6">Please Register</h2>
            <div className=" w-1/2 mx-auto mt-5 p-6  border border-light-gray rounded-lg bg-soft-beige ">
                <form onSubmit={handleSubmit} className="flex flex-col mx-auto space-y-4">
                    <div>
                        <label className="text-sm text-dark-charcoal">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-2 py-1 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-dark-charcoal">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="w-full px-2 py-1 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                        />
                    </div>
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
                            className="w-full px-2 py-1 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-6 bg-forest-green font-bold text-off-white px-4 py-2 rounded-md hover:bg-golden-yellow hover:text-earth-brown transition duration-300"
                    >
                        Register
                    </button>
                </form>
                <p>Already have account? <Link className="btn btn-link" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;