import Image from 'next/image'

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col justifty-center items-center">
        <div className="relative w-screen h-screen max-w-full rounded-lg shadow-2xl overflow-hidden">
        <Image 
            src="/saddleworth_1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 w-full h-full rounded-lg shadow-xl"
          />
          <div className="absolute inset-0 w-full h-full rounded-lg mix-blend-overlay flex flex-col justify-center">
            <h1 className="text-8xl font-extrabold text-center text-white">Saddleworth <br></br> Web Design</h1>
          </div>
        </div>
    </main>
  )
}
