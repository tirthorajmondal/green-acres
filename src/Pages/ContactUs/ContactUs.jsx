
const ContactUs = () => {
    return (
        <div>
            <section className="bg-cover bg-center h-64" style={{ backgroundImage: "url('/path-to-contact-header-image.jpg')" }}>
                <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
                    <h1 className="text-4xl text-white font-bold">Get in Touch</h1>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-forest-green">Address</h2>
                        <p className="mt-4 text-lg text-gray-700"><strong>Office Address:</strong> 123 Land Avenue, Greenfield, CA 90210</p>
                        <p className="mt-2 text-lg text-gray-700"><strong>Phone:</strong> +1 (800) 555-1234</p>
                        <p className="mt-2 text-lg text-gray-700"><strong>Email:</strong> contact@greenacres.com</p>
                    </div>
                    <div>
                        <iframe
                            title="Google Map"
                            className="w-full h-64 rounded-md shadow-lg"
                            src="https://maps.google.com/maps?q=123%20Land%20Avenue&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-soft-beige">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-forest-green">Send Us a Message</h2>
                    <form className="mt-8 flex flex-col gap-4 max-w-md mx-auto">
                        <input type="text" name="name" placeholder="Your Name" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden-yellow" />
                        <input type="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden-yellow" />
                        <textarea name="message" placeholder="Your Message" className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-golden-yellow" />
                        <button type="submit" className="bg-golden-yellow text-white py-3 px-6 rounded-md hover:bg-yellow-500 transition">Submit</button>
                    </form>
                </div>
            </section>

            <section className="py-16 text-center">
                <h2 className="text-3xl font-bold text-forest-green">Our Office Hours</h2>
                <p className="mt-4 text-lg text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="mt-2 text-lg text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="mt-2 text-lg text-gray-700">Sunday: Closed</p>
            </section>
        </div>
    );
};

export default ContactUs;