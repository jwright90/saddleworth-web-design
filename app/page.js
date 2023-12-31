import Image from 'next/image'
import HowItWorks from './HowItWorks'

import {FaPencilAlt} from 'react-icons/fa'
import {FaRocket} from 'react-icons/fa'
import {FaPaintBrush} from 'react-icons/fa'
import {BsFillSendFill} from 'react-icons/bs'

export default function Home() {

  return (
    <>
      {/* Landing Page */}

      <div className="min-h-screen text-white">
          <div className="relative h-screen">
          <Image 
              src="/saddleworth_1.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
            <div className="absolute w-full h-full bg-gray-900 bg-opacity-[35%] flex flex-col justify-center px-8">
              <h1 className="text-6xl md:text-8xl font-extrabold text-center text-white mb-8">Saddleworth <br></br> Web Design</h1>
              <h3 className="text-xl md:text-4xl text-center text-white max-w-[800px] mx-auto mb-12 font-light">Helping small businesses to grow sales through online presence</h3>
              <button className="font-medium rounded-full border-2 w-[400px] h-[60px] mx-auto text-xl md:text-2xl bg-diggle-green shadow-black shadow-2xl">Get a free website</button>
              <div className="text-center mt-4 max-w-[600px] mx-auto text-sm font-light italic">
                If you like the result then I ask for a testimonial, <br></br> pay what you feel it's worth (as much or as little as you like)
              </div>
            </div>
          </div>
      </div>

      {/* YouTube Video & About Section */}

      <div className="min-h-screen bg-cobalt-blue flex flex-col xl:px-40 lg:px-35 md:px-30 px-20 py-12 text-white">
        <div className="mb-[80px] bg-gray-300 w-[100%] h-[500px] rounded-lg text-gray-400 text-8xl text-center flex flex-col justify-center self-center">Youtube Video</div>
        <div className="flex justify-between xl:space-x-40 lg:space-x-20 md:space-x-12">
          <div className="flex flex-col gap-8 md:gap-4 lg:gap-8 md:flex-row">
            <div className="flex flex-col">
              <div className="font-bold text-lg lg:text-xl xl:text-2xl mb-3 flex gap-3 items-center"><FaPencilAlt /> Copywriting</div>
              <div className="font-light text-sm lg:text-base xl:text-lg">Our websites use advanced copywriting techniques to get customers to take action. We’ll help you to generate leads and convince people that your solution is right for them.</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg lg:text-xl xl:text-2xl mb-3 flex gap-3 items-center"><FaRocket/> Latest Tech</div>
              <div className="font-light text-sm lg:text-base xl:text-lg">We use the latest technology to build our websites, which enhances speed, and makes search engines like Google rank you higher. It also reduces bugs and requires less maintenance.</div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg lg:text-xl xl:text-2xl mb-3 flex gap-3 items-center"><FaPaintBrush /> Bespoke Design</div>
              <div className="font-light text-sm lg:text-base xl:text-lg">Designs are produced from scratch. We do not use “off the shelf” templates to build our sites. You’ll get a unique website tailored explicitly to your needs.</div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works section */}

      <div className="flex flex-col text-white">

        <HowItWorks 
        image={"/consultation.png"}
        number={"1"}
        heading={"Consultation & Initial Brief"}
        p1={`We will discuss what it is that you need your website to do and the brand image that you want to portray. `}
        p2={`It may be that you need to better educate your customer on your offering, improve the overall feel and authenticity of the website, to build trust, or generate more sales through better structure and call-to-actions.`}
        />

        <HowItWorks 
        image={"/design.png"}
        number={"2"}
        heading={"Wireframe & Design"}
        p1={`We will discuss what it is that you need your website to do and the brand image that you want to portray. `}
        p2={`It may be that you need to better educate your customer on your offering, improve the overall feel and authenticity of the website, to build trust, or generate more sales through better structure and call-to-actions.`}
        />

        <HowItWorks 
        image={"/build.png"}
        number={"3"}
        heading={"Build & Maintain"}
        p1={`We will discuss what it is that you need your website to do and the brand image that you want to portray.  `}
        p2={`It may be that you need to better educate your customer on your offering, improve the overall feel and authenticity of the website, to build trust, or generate more sales through better structure and call-to-actions.`}
        />

      </div>

      {/* Contact section */}

      <div className="min-h-screen bg-cobalt-blue flex flex-col xl:px-40 lg:px-35 md:px-30 px-20 py-12">
        <h2 className="text-[42px] sm:text-6xl md:text-7xl font-bold text-center mt-8 text-white">Get in touch 👋</h2>
        <div className="ml-auto mr-auto w-[350px] sm:w-[500px] flex justify-center text-sm sm:text-base">
          <form className="mt-8 sm:mt-16 w-[100%]">
            <label htmlFor="fullname">Full name:</label><br></br>
            <input className="mt-1 mb-4 h-[35px] w-[100%] text-black p-2 rounded-sm" type="text" id="fullname" name="fullname"></input><br></br>
            <label htmlFor="email">Email:</label><br></br>
            <input className="mt-1 mb-4 h-[35px] w-[100%] text-black p-2 rounded-sm" type="email" id="email" name="email"></input><br></br>
            <label htmlFor="phone">Phone:</label><br></br>
            <input className="mt-1 mb-8 h-[35px] w-[100%] text-black p-2 rounded-sm" type="tel" id="phone" name="phone"></input><br></br>
            <label htmlFor="message">Message:</label><br></br>
            <textarea name="message" className="mt-1 mb-4 w-[100%] min-h-[180px] text-black rounded-sm p-2"></textarea>
            <button className="block flex items-center justify-center gap-2 bg-diggle-green h-[60px] w-[100%] font-semibold text-base sm:text-xl rounded-sm"><BsFillSendFill /> Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
