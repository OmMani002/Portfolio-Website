import React from 'react'
// import myImage from '../assets/profile.jpg';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                 About</p>
            </div>
            <p className="text-xl mt-18">
              Hello! I'm a Full Stack Web Developer with a passion for crafting immersive digital experiences. Proficient in HTML, CSS, JavaScript, Node.js, Python, and more,
              I seamlessly blend front-end and back-end technologies to create visually appealing and functional websites. My expertise extends to database management, ensuring
              robust and dynamic web applications. Staying abreast of the latest trends, I constantly enhance my skills to deliver cutting-edge solutions. Beyond coding,
              I'm deeply fascinated by 3D artistry, leveraging skills in modeling, texturing, and rendering. Whether designing responsive websites with captivating animations or
              integrating interactive 3D elements, I push boundaries to create unique and memorable digital experiences.
            </p>
            <br/> <br/>
            <p className="text-xl">
            By combining my skills in Web Development and 3D artistry, I strive to create immersive digital experiences that 
            seamlessly blend aesthetics and functionality. Whether it's designing websites with captivating animations or integrating 
            interactive 3D elements into user interfaces,
             I constantly push boundaries to deliver unique and memorable experiences.
            </p>
            {/* <div>
                <img src={myImage} alt="my profile" 
                className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div> */}
        </div>
    </div>
  )
}

export default About;