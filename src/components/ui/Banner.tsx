import Image from "next/image";
import banner1 from "../../asset/images/bannerImage1.jpeg";

export default function Banner() {
    return (
        <div className="relative">
            <div>
                <Image
                    src={banner1}
                    alt="Banner1"
                    className="w-full md:h-[300px] lg:h-[600px] brightness-95"
                />
            </div>
            <h1 className="absolute top-[18vh] left-[13vh] md:left-[40vh] lg:top-[50vh] lg:left-[20vw] ">
                <div className="text-4xl lg:text-8xl   flex flex-col justify-center items-center gap-y-8 border-0 ">
                    <h2 className="text-white primary-bg p-5 rounded-xl ">Share Your Recipes</h2>
                    <div className="flex justify-end">
                        <button className="btn primary-btn">Explore!</button>
                    </div>
                    {/* <h2>You Naver Wanna Miss The Match You Care</h2>
                <h2>Book Your Ticket Now...</h2> */}
                </div>
            </h1>
        </div>
    );
}
