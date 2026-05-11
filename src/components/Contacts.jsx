import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-br 
    from-gray-900 via-black to-gray-800 p-4 text-white"
    >
      <div
        className="flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
                border-cyan-500 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Contacts
          </p>
          <p className="py-6 text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/2487672f-7aef-493a-bb76-d8cd3cf8cd1e"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-black/50 backdrop-blur-sm 
                    border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-black/50 backdrop-blur-sm 
                    border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-black/50 backdrop-blur-sm 
                    border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500 transition-colors"
            ></textarea>

            <button
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              {" "}
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
