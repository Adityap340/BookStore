// AboutSection.js

import React from 'react';
import bookstoreImage from '../assets/bookStore.jpg'; // Import your own image

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">About Our E-Bookstore</h2>

        <div className="max-w-3xl mx-auto mb-8">
          <img
            src={bookstoreImage}
            alt="E-Bookstore Interior"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg text-gray-600 text-center mb-8">
          Welcome to our online haven for book lovers! At our e-bookstore, we are passionate about
          bringing the magic of literature to your fingertips. Whether you're a fan of gripping
          novels, insightful non-fiction, or imaginative children's books, we have a virtual library
          waiting for you.
        </p>

        <p className="text-lg text-gray-600 text-center mb-8">
          Our mission is to make reading accessible and enjoyable for everyone. Explore our vast
          collection, discover new authors, and embark on literary adventures from the comfort of your
          device. We believe that great stories have the power to transport and inspire, and we're
          excited to be a part of your reading journey.
        </p>

        <p className="text-lg text-gray-600 text-center mb-8">
          Navigate through our user-friendly platform, discover curated recommendations, and find your
          next favorite e-book. Whether you're a seasoned reader or just starting, our e-bookstore is
          here to cater to your literary cravings.
        </p>

        <p className="text-lg text-gray-600 text-center">
          Thank you for choosing us as your digital bookstore. Happy reading!
        </p>
      </div>
    </section>
  );
};

export default About;
