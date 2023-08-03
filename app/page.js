import Image from 'next/image'

export default function Home() {

  return (
    <main className="min-h-screen bg-white">
      <div className="grid place-items-center h-screen w-screen relative
                      bg-no-repeat bg-cover bg-center bg-[url('/saddleworth_1.jpg')] 
                      bg-clip-text text-transparent"
      >
        <h1 className="text-[120px] font-bold text-center leading-[110px] mb-[50px] place-self-end justify-self-center">Saddleworth <br></br>Web Design</h1>
        <Image
          src="/saddleworth_1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Saddleworth Landscape Photoshot with Mcr in Background"
          className="opacity-20"
        />

        <h3 className="text-gray-600 text-[30px] w-[760px] leading-10 font-light text-center place-self-start justify-self-center">
          Helping small businesses to boost their sales through better websites
        </h3>
      
      </div>
    </main>
  )
}
