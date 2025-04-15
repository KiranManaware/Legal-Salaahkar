import React from 'react'
import bgImage from "../assets/hero.jpg";

const Loader = () => {
  return (
    <div className="min-h-screen p-10"  style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
          }}>
      <h1 className="text-center my-10 font-bold text-3xl">Loading...</h1>
    </div>
  )
}

export default Loader
