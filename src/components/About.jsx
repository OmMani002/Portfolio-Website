import React from 'react'
// import myImage from '../assets/profile.jpg';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                 About</p>
            </div>
            <p className="text-xl mt-20">
            Hey there! I'm a Front-End Developer and 3D artist. Let me share a bit about myself and my interests. 
            As a Front-End Developer, my passion lies in crafting visually appealing and user-friendly websites. 
            I enjoy the process of transforming ideas into captivating digital experiences. Whether it's coding in HTML, CSS, or JavaScript, 
            I find great satisfaction in bringing designs to life and ensuring seamless functionality. 
            Staying up-to-date with the latest web development trends and technologies is important to me, 
            as it allows me to continuously enhance my skills and deliver exceptional results.
            In addition to my development expertise, I have a deep fascination with 3D art. 
            I find immense joy in modeling, texturing, and rendering, as it allows me to transform imagination into reality.
            </p>

            <br/>
            <br/> <br/>
            <p className="text-xl">
            By combining my skills in Front-End Development and 3D artistry, I strive to create immersive digital experiences that 
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