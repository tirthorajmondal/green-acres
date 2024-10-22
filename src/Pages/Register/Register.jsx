import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider";

const Register = () => {

    const { signInUser, setUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        signInUser(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className=" font-bold text-4xl mt-6">Please Register</h2>
            <div className=" md:w-2/5 mx-auto mt-5 p-6  border border-light-gray rounded-lg bg-soft-beige ">
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
                        className="mt-6 bg-forest-green font-bold text-off-white px-4 py-2 rounded-md hover:bg-golden-yellow hover:text-dark-charcoal transition duration-300"
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