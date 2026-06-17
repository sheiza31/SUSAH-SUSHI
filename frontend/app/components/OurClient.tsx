import Image from "next/image"
const Ourclient = ()=>
{
    return (
        <>
        <section id = "ourclient" className="flex flex-col px-8 mt-8 lg:mt-32 lg:px-20">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl lg:text-[40px] font-bold text-center">Our Client</h1>
                <div className="border border-black w-25 lg:w-50 mx-auto"></div>
            </div>
            <div className="grid grid-cols-12 lg:flex lg:flex-row lg:justify-center lg:text-center text-center gap-8 lg:gap-32 mt-8">
                <div className="col-span-3 lg:col-span-3 md:col-span-3">
                    <Image width={150} height={150} src="/assets/partner1.svg" alt="partner1" />
                </div>
                <div className="col-span-3 lg:col-span-3 md:col-span-3">
                    <Image width={150} height={150} src="/assets/partner2.svg" alt="partner2" />
                </div>
                <div className="col-span-3 lg:col-span-3 md:col-span-3">
                    <Image width={150} height={150} src="/assets/partner3.svg" alt="partner3" />
                </div>
                <div className="col-span-3 lg:col-span-3 md:col-span-3">
                    <Image width={150} height={150} src="/assets/partner4.svg" alt="partner4" />
                </div>
            </div>
        </section>

        </>
    )
}

export default Ourclient