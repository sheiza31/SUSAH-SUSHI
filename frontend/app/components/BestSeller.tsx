import Image from "next/image"

const BestSeller = () => {
    return (
        <>
        <section id = "bestseller" className="flex flex-col px-8 lg:px-20 mt-8 lg:mt-32">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl lg:text-[40px] font-bold text-center">Best Seller</h1>
                <div className="border border-black w-25 lg:w-50 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-12 lg:grid-cols-12 md:grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 md:col-span-4 rounded-4xl">
             <Image className="w-full" width={1080} height={720} src="/assets/menu1.svg" alt="Best Seller" />
             <div className="flex flex-col mt-4 gap-4">
                <h1 className="text-[20px] lg:text-[24px] font-bold">Sushi Susah Special Role</h1>
                <h5 className="text-[16px] lg:text-[20px] font-bold">Rp.100.000</h5>
                <button className="bg-black cursor-pointer w-30 text-white px-4 py-2 ">Read More</button>
             </div>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-4 rounded-4xl">
             <Image className="w-full" width={1080} height={720} src="/assets/menu2.svg" alt="Best Seller" />
             <div className="flex flex-col mt-4 gap-4">
                <h1 className="text-[20px] lg:text-[24px] font-bold">Susah Salmon Sushi</h1>
                <h5 className="text-[16px] lg:text-[20px] font-bold">Rp.32.000</h5>
                <button className="bg-black cursor-pointer w-30 text-white px-4 py-2 ">Read More</button>
             </div>
            </div>
            <div className="col-span-12 lg:col-span-4 md:col-span-4 rounded-4xl">
             <Image className="w-full" width={1080} height={720} src="/assets/menu3.svg" alt="Best Seller" />
             <div className="flex flex-col mt-4 gap-4">
                <h1 className="text-[20px] lg:text-[24px] font-bold">Susah Tuna Sushi</h1>
                <h5 className="text-[16px] lg:text-[20px] font-bold">Rp.36.000</h5>
                <button className="bg-black cursor-pointer w-30 text-white px-4 py-2 ">Read More</button>
             </div>
            </div>
            </div>
        </section>
        </>
    )
}

export default BestSeller