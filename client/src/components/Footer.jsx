import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#001331] text-white py-4 mt-10">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            <div className="flex items-center justify-center my-2">
                <p href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</p>
                <p href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</p>
                <p href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
