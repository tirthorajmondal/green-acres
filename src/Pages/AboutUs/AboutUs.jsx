import React from 'react';
import { BsUniversalAccessCircle } from 'react-icons/bs';
import { LiaHandHoldingHeartSolid } from 'react-icons/lia';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="about-us">
            <section className="bg-cover bg-center h-64 bg-[url('/')]" >
                <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
                    <h1 className="text-4xl text-white font-bold">About Us</h1>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-forest-green">Who We Are</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Founded with a passion for land and a commitment to sustainability, LandScape has grown into a trusted name in real estate.
                            We specialize in matching people with the perfect property, whether it's for farming, investment, or simply a place to escape.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                            We believe in building strong relationships with our clients, offering transparency and trust, so you can confidently explore your options
                            and make the best choice for your future.
                        </p>
                    </div>
                    <div>
                        <img src="src\assets\team.jpg" alt="Our Story" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            <section className="py-24 bg-soft-beige">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-forest-green">Our Mission & Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center">
                        <VscWorkspaceTrusted className='text-6xl mx-auto mb-3'/>

                            <h3 className="text-xl font-semibold">Trust</h3>
                            <p className="mt-2 text-gray-700">We prioritize honesty and integrity in every interaction.</p>
                        </div>
                        <div className="text-center">
                            <LiaHandHoldingHeartSolid className='text-6xl mx-auto mb-3'/>
                            <h3 className="text-xl font-semibold">Sustainability</h3>
                            <p className="mt-2 text-gray-700">We support landowners who focus on sustainable practices.</p>
                        </div>
                        <div className="text-center">
                        <BsUniversalAccessCircle className='text-6xl mx-auto mb-3'/>
                            <h3 className="text-xl font-semibold">Client-Centric</h3>
                            <p className="mt-2 text-gray-700">Your satisfaction and success are at the heart of what we do.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 text-center">
                <h2 className="text-3xl font-bold text-forest-green">Ready to Find Your Land?</h2>
                <p className="mt-4 text-lg text-gray-700 w-2/3 mx-auto">We are here to help you take the next step. Get in touch with us today to start your journey toward owning your perfect piece of land!</p>
                <Link to="/contact" className="mt-6 inline-block bg-golden-yellow text-white py-3 px-6 rounded-md hover:bg-yellow-500 transition">Contact Us</Link>
            </section>
        </div>
    );
};

export default AboutUs;