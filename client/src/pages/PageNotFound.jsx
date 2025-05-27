import React from 'react'
import bgImage from "../assets/hero.jpg";


const PageNotFound = () => {
  return (
     <div
          className="min-h-screen p-10 "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
          }}
        >
            <h1 className='text-center text-4xl font-bold mt-40'>Page not found</h1>
    </div>
  )
}

export default PageNotFound
