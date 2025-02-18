// import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="bg-cover bg-center h-screen flex items-center justify-center static bg-gray z-10"
      style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/04/40/29/94/360_F_440299419_s4b12RfNDJvpplheVDmKdhFGJiHlAYNs.jpg')` }}
    >
      <div className="absolute top-40 left-10 p-10 rounded-l text-center w-160 " >
        <h1 className="text-5xl font-bold text-white mb-4">We shape your business idea into <span className='text-red-600'>Reality</span></h1>
      </div>
    </section>
  );
};

export default HeroSection;