import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-5xl font-bold">Personal Collection Management</h2>
          <p className="py-6">{__('main.moto')}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
