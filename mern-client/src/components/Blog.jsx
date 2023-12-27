// Blog.js

import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-teal-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-md mt-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">The Written Realm</h1>

        <div className="grid grid-cols-1 gap-6">
          {/* Blog Post 1 */}
          <div className="bg-white p-6 rounded-md shadow-lg">
            <img
              src="https://source.unsplash.com/random/800x400"
              alt="Blog Post"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">The Joy of Reading</h2>
            <p className="text-gray-600 mb-4">Published on December 10, 2023</p>
            <p className="text-gray-700">
              Reading has the power to transport us to different worlds, ignite our imaginations, and
              broaden our perspectives. In this blog post, we explore the joy of reading and its
              profound impact on our lives.
            </p>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <img
              src="https://source.unsplash.com/random/800x400"
              alt="Blog Post"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Building a Reading Habit</h2>
            <p className="text-gray-600 mb-4">Published on December 12, 2023</p>
            <p className="text-gray-700">
              Cultivating a reading habit can be a rewarding journey. Discover practical tips and
              strategies to build a consistent reading routine that fits into your busy lifestyle.
            </p>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <img
              src="https://source.unsplash.com/random/800x400"
              alt="Blog Post"
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Exploring Different Genres</h2>
            <p className="text-gray-600 mb-4">Published on December 15, 2023</p>
            <p className="text-gray-700">
              Diversify your reading experience by exploring various literary genres. From classic
              literature to contemporary fiction, there's a world of stories waiting for you to
              uncover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;