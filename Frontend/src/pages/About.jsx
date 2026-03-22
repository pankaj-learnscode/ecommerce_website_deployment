import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-1 md:px-10 md:py-10 mt-20 mb-3">
      
      {/* About Section */}
      <div className="max-w-4xl w-full text-center bg-white p-8 rounded-lg shadow-2xl mt-3 md:mt-3">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">About Us</h1>
        <p className="text-base md:text-lg mb-4 text-gray-700">
          Welcome to Scrach, your number one source for all things related to e-commerce. This website was created by <strong>Deepak Rathore</strong>, a skilled Web Developer, and deployed by <strong>Pankaj Suman</strong>, a talented DevOps Engineer. Both are smart, passionate, and constantly embracing challenges while building their startup.
        </p>
        <p className="text-base md:text-lg mb-4 text-gray-700">
          Our goal is to provide a seamless shopping experience, with quality products and reliable service. We hope you enjoy our platform as much as we enjoy creating it.
        </p>
        <p className="text-base md:text-lg mb-4 text-gray-700">
          Sincerely,<br />
          Deepak Rathore & Pankaj Suman
        </p>
      </div>

      {/* Our Team Section */}
      <div className="max-w-4xl w-full mt-10 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-black">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">

          {/* Deepak Rathore */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img 
              src="https://tse3.mm.bing.net/th?id=OIP.h_6BkC8gtDIwXLwW33zWTQHaHa&pid=Api&P=0&h=180" 
              alt="Deepak Rathore" 
              className="w-32 h-32 rounded-full mb-4 object-cover shadow-md" 
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Deepak Rathore</h3>
            <p className="text-gray-500">Founder & Web Developer</p>
          </div>

          {/* Pankaj Suman */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img 
              src="https://www.seekpng.com/png/detail/60-604032_face-businessman-png-dummy-images-for-testimonials.png" 
              alt="Pankaj Suman" 
              className="w-32 h-32 rounded-full mb-4 object-cover shadow-md" 
            /> 
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Pankaj Suman</h3>
            <p className="text-gray-500">Co-Founder & DevOps Engineer</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;