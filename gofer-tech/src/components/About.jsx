/* eslint-disable no-unused-vars */
import React from 'react';

const teamMembers = [
  {
    name: 'Abel Dagnew',
    role: 'Co-Founder & CEO',
    image: 'abel.jpg',
    description: 'Experienced entrepreneur with over 15 years in the tech industry, specializing in leadership and strategy.',
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: 'https://via.placeholder.com/150',
    description: 'Skilled developer with expertise in full-stack web development, focusing on scalable applications and clean code.',
  },
  {
    name: 'Michael Brown',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150',
    description: 'Creative designer with a passion for creating intuitive and beautiful user interfaces that enhance user experiences.',
  },
  {
    name: 'Emily Johnson',
    role: 'SEO Specialist',
    image: 'https://via.placeholder.com/150',
    description: 'SEO expert with a proven track record of increasing organic traffic through strategic on-page and off-page optimization.',
  },
];

const About = () => {
  return (
    <section className="about bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="text-center px-6">
        <h2 className="text-5xl font-bold">About Us</h2>
        <p className="mt-4 text-2xl max-w-2xl mx-auto">
          Fejlesztő Technology Plc, founded in 2012, is a professional IT company that offers web design, SEO, software development, and IT services. We aim to push the limits of creativity and deliver high-quality work with fast turnaround times.
        </p>

        <h3 className="text-3xl font-semibold mt-12">Meet Our Team</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300 shadow-lg"
              />
              <h4 className="mt-4 text-2xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
              
              {/* Larger pop-up container with explicit width and height, now below the image */}
              <div className="absolute top-full mt-4 bg-gray-800 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center p-6 rounded-lg w-[300px] h-[400px]">
                <div className="text-center bg-gray p-6 rounded-lg shadow-lg w-[300px] h-[400px]">
                  {/* Round photo in the pop-up */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-35 h-35 mx-auto rounded-full border-4 border-gray-300 mb-6"
                  />
                  <h4 className="text-2xl font-semibold text-white">{member.name}</h4>
                  <p className="text-white text-xl">{member.role}</p>
                  <p className="text-white mt-6 text-sm max-w-xs mx-auto">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
