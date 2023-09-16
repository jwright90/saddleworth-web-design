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
                <div className={
                    number%2==0 ? `flex-row-reverse absolute h-screen bg-gray-900 bg-opacity-[50%] flex justify-between 2xl:px-60 xl:px-40 lg:px-30 px-20 items-center` 
                                : `absolute h-screen bg-gray-900 bg-opacity-[50%] flex justify-between 2xl:px-60 xl:px-40 lg:px-30 px-20 items-center`}
                >
                    <div className={number%2==0 ? "h-[100%] flex flex-col w-[100%] items-end" : "h-[100%] flex flex-col w-[100%]"}>
                        <div className="lg:text-[600px] text-[400px] lg:mt-0 mt-[150px] font-bold text-diggle-green h-[600px]">{`${number}`}</div>
                        <div className="2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-extrabold absolute top-[50%] 2xl:w-[500px] lg:w-[350px] w-[300px]">{`${heading}`}</div>
                    </div>

                    <div className="font-light xl:text-3xl lg:text-2xl max-w-[48%] h-[100%] flex flex-col justify-center ">
                        {p1 && <p className="mb-8">{`${p1}`}</p>}
                        {p2 && <p>{`${p2}`}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}