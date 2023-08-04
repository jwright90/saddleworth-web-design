import Image from 'next/image'

export default function Home() {

  return (
    <main className="min-h-screen ">

        <div className="h-screen w-screen flex flex-column flex-wrap justify-center bg-no-repeat bg-cover bg-center bg-[url('/saddleworth_1.jpg')] 
                        bg-clip-text text-transparent "
        >
          <Image
            src="/saddleworth_1.jpg"
            layout="fill"
            objectFit="cover"
            alt="Saddleworth Landscape Photoshot with Mcr in Background"
            className="opacity-[25%] z-10 pointer-events-none"
          />

          <div className="flex flex-column flex-wrap justify-center content-end pb-12">
            <h1 className=" text-[120px] font-bold text-center leading-[110px] mb-[50px] basis-full place-self-end ">Saddleworth <br></br>Web Design</h1>

            <h3 className="text-white text-[2rem] max-w-[760px] leading-10 font-light text-center self-start ">
              Helping small businesses to boost their sales through better websites
            </h3>
          </div>

          <div className="basis-full z-20 flex justify-center grow">
            <button className="text-[1.4rem] font-semibold max-w-[450px] rounded-sm bg-diggle-green text-white py-5 self-start basis-full">Book Consultation</button>
          </div>
        </div>
    </main>
  )
}
