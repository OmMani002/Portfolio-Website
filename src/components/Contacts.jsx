import React from 'react';

const Contacts = () => {
  return (
    <div name='contact' className="w-full h-screen bg-gradient-to-b 
    from-black via-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-black">Contacts</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>

            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/2487672f-7aef-493a-bb76-d8cd3cf8cd1e" 
                method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" 
                    placeholder="Enter your name" 
                    className="p-2 bg-transparent 
                    border-2 rounded-md text-white focus:outline-none" 
                    />
                    <input type="text" name="email" 
                    placeholder="Enter your email" 
                    className="my-4 p-2 bg-transparent 
                    border-2 rounded-md text-white focus:outline-none" 
                    />
                    <textarea name="message" placeholder="Enter your message" 
                    rows="10" className="p-2 bg-transparent 
                    border-2 rounded-md text-white focus:outline-none"></textarea>

                    <button className="text-white bg-gradient-to-b from-blue-200 to-green-800
                    px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"> Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacts;