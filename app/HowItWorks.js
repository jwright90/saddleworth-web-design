import Image from "next/image"

export default function HowItWorks ({image, number, heading, p1, p2}) {

    return (
        <>
            <div className="relative h-screen">
                <Image 
                    src={`${image}`}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
                <div className="absolute h-screen bg-gray-900 bg-opacity-[50%] flex justify-between 2xl:px-60 xl:px-40 lg:px-30 px-20 items-center">
                    <div className="h-[100%] flex flex-col">
                    <div className="text-[600px] font-bold text-diggle-green h-[600px]">{`${number}`}</div>
                    <div className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-extrabold absolute top-[50%] 2xl:w-[500px] lg:w-[350px] w-[300px]">{`${heading}`}</div>
                    </div>
                    <div className="font-light xl:text-3xl lg:text-2xl max-w-[48%]">
                        {p1 && <p className="mb-8">{`${p1}`}</p>}
                        {p2 && <p>{`${p2}`}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}