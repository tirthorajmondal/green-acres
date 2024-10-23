
const UpdateProfile = () => {
    return (
        <div className="w-2/5 mx-auto">
            <form className="flex flex-col mx-auto space-y-4 border p-5 rounded-lg mt-6">
                <div >
                    <label className="text-sm text-dark-charcoal">New Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="New Name"
                        className="w-full px-2 py-1 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                    />
                </div>
                <div>
                    <label className="text-sm text-dark-charcoal">Photo URL</label>
                    <input
                        name="photo"
                        type="text"
                        placeholder="New Photo URL"
                        className="w-full px-2 py-1 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                    />
                </div>
                {/* <div>
                    <label className="text-sm text-dark-charcoal">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full px-2 py-1 rounded-md border border-light-gray focus:outline-none focus:ring-2 focus:ring-golden-yellow"
                    />
                </div>
                 */}
                <button
                    type="submit"
                    className="mt-6 bg-forest-green font-bold text-off-white px-4 py-2 rounded-md hover:bg-golden-yellow hover:text-dark-charcoal transition duration-300"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;