import Image from 'next/image'

export default function Home() {

  return (
    <main className="min-h-screen">
        <div className="relative w-screen h-screen max-w-full">
        <Image 
            src="/saddleworth_1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          <div className="absolute w-full h-full bg-gray-900 bg-opacity-[30%] flex flex-col justify-center px-8">
            <h1 className="text-8xl font-extrabold text-center text-white mb-12">Saddleworth <br></br> Web Design</h1>
            <h3 className="text-4xl text-center text-white max-w-[800px] mx-auto mb-12">Helping small businesses to grow sales through online presence</h3>
            <button className="rounded-full border-2 w-[400px] h-[60px] mx-auto text-2xl">Book a consultation</button>
          </div>
        </div>
    </main>
  )
}
