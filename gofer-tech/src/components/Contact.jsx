/* eslint-disable no-unused-vars */
import React from 'react';


const Contact = () => {
  return (
    <section className="contact py-20 bg-gray-50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-6">
          <input
            type="text"
            placeholder="Name"
            className="block w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="block w-full px-4 py-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Write Your Message"
            className="block w-full px-4 py-2 mb-4 border rounded"
          ></textarea>
          <button className="px-6 py-2 bg-blue-600 text-white rounded">Send Message</button>
        </form>
        <div className="mt-6">
          <p className="text-lg">Address: 04 Giorgis Rd, Friendship building, 3rd Floor, Bahir Dar, Ethiopia</p>
          <p className="text-lg">Phone: +251 9898 72 748</p>
          <p className="text-lg">Email: info@fejleszto-tech.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
