import Image from 'next/image'

export default function Home() {

  return (
    <>
      {/* Landing Page */}

      <div className="min-h-screen">
          <div className="relative w-screen h-screen max-w-full">
          <Image 
              src="/saddleworth_1.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
            <div className="absolute w-full h-full bg-gray-900 bg-opacity-[35%] flex flex-col justify-center px-8">
              <h1 className="text-8xl font-extrabold text-center text-white mb-8">Saddleworth <br></br> Web Design</h1>
              <h3 className="text-4xl text-center text-white max-w-[800px] mx-auto mb-12 font-light">Helping small businesses to grow sales through online presence</h3>
              <button className="font-medium rounded-full border-2 w-[400px] h-[60px] mx-auto text-2xl bg-diggle-green shadow-black shadow-2xl">Get a free website</button>
              <div className="text-center mt-4 max-w-[600px] mx-auto text-sm font-light italic">
                If you like the result then we ask for a testimonial, <br></br> pay what you feel it's worth (as much or as little as you like)
              </div>
            </div>
          </div>
      </div>

      {/* YouTube Video & About Section */}

      <div className="min-h-screen w-screen bg-cobalt-blue flex flex-col lg:px-40 md:px-20 py-12">
        <div className="mb-[80px] bg-gray-300 w-[100%] h-[500px] rounded-lg text-gray-400 text-8xl text-center flex flex-col justify-center self-center">Youtube Video</div>
        <div className="flex justify-between xl:space-x-40 lg:space-x-20 md:space-x-12">
          <div className="flex flex-col">
            <div className="font-bold text-2xl mb-2">Copywriting</div>
            <div className="font-light">Our websites use advanced copywriting techniques to get customers to take action. We’ll help you to generate leads and convince people that your solution is right for them.</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-2xl mb-2">Latest Tech</div>
            <div className="font-light">We use the latest technology to build our websites, which enhances speed, and makes search engines like Google rank you higher. It also reduces bugs and requires less maintenance.</div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-2xl mb-2">Bespoke Design</div>
            <div className="font-light">Designs are produced from scratch. We do not use “off the shelf” templates to build our sites. You’ll get a unique website tailored explicitly to your needs.</div>
          </div>
        </div>

      </div>
    </>
  )
}
