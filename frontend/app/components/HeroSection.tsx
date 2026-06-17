import Image from "next/image";

const HeroSection = () => {
    return (
        <>      
        <section className="mb-8">
            <Image className="w-full" width={1080} height={720} src="/assets/hero.svg" alt="Hero" />
        </section>
        </>
    )
}

export default HeroSection