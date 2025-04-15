import React from 'react'
import bgImage from '../assets/hero.jpg';
import about from '../assets/about.jpg';
import service from '../assets/service.jpg';
import Contact from '../assets/contact.jpg';


const HomePage = () => {
    return (
        <div className='bg-gray-100'>
            {/* Hero Section */}
            <section className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className=" bg-opacity-50 p-10 rounded-lg">
                    <h1 className="text-5xl text-[#001431] font-bold mb-4">"Welcome to Legal Salaahkar"</h1>
                    <p className="text-xl text-black">*Legal Salaahkar* is a comprehensive online platform designed to simplify and enhance access to legaladvisory services for individuals and businesses. Recognizing the complexities of legal processes and theneed for clear, reliable guidance, Legal Salaahkar provides users with essential tools to navigate legalmatters confidently. Users can upload legal documents to receive expert reviews, explore essential policyinformation with highlighted terms, and access step-by-step guidance on various legal issues. The platformalso offers a dedicated section addressing user-specific  concerns, including advice on consumer rights,employee rights, property disputes, and criminal matters. With access to licensed legal advisors, real-timeconsultations, and a curated database of legal articles and templates, Legal Salaahkar serves as a one-stopsolution for all legal needs...</p>
                </div>
            </section>
            {/* Services Section */}
            <section className="h-auto flex flex-col md:flex-row items-center justify-center bg-white border-6 border-[#C49603]">
                <div className="w-full md:w-1/2 h-[50vh] flex justify-center items-center">
                    <img src={service} alt="About Us" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 h-[50vh] flex flex-col justify-center p-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Legal Consultation</h2>
                    <p className="text-gray-600">Consult with our legal experts on issues concerning you.</p>
                </div>
            </section>

            {/* About Us Section */}
            <section className="h-auto flex flex-col-reverse     md:flex-row items-center justify-center bg-white border-6 border-[#C49603]">
                <div className="w-full md:w-1/2 h-[50vh] flex flex-col justify-center p-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-600">We are a team dedicated to providing the best experience through our services and innovative technology.</p>
                </div>
                <div className="w-full md:w-1/2 h-[50vh] flex justify-center items-center">
                    <img src={about} alt="About Us" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="h-auto flex flex-col md:flex-row items-center justify-center bg-white border-6 border-[#C49603]">
                <div className="w-full md:w-1/2 h-[50vh] flex justify-center items-center">
                    <img src={Contact} alt="About Us" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 h-[50vh] flex flex-col justify-center p-6 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-600">We are a team dedicated to providing the best experience through our services and innovative technology.</p>
                    <p className="text-gray-600">Reach out to us for any legal advice or guidance. We're here to help you!</p>
                    <p className="text-gray-600">abc@gmail.com</p>
                    <p className="text-gray-600">8765432083</p>
                </div>
            </section>



        </div>
    )
}

export default HomePage
