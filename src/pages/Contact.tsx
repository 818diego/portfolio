import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;