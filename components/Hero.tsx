import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* product intro */}
      <div className="flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">
          Lorem ipsum dolo Dignissimos, mollitia.
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi fuga
          autem corrupti nulla dignissimos accusantium doloremque delectus
          reprehenderit ullam, quibusdam ratione necessitatibus et culpa
          molestias ipsa labore sit nam explicabo.
        </p>
      </div>

      {/* background */}
      <div className="hero-img">
        <Image
          src="/neuro_image.svg"
          alt="image"
          width={200}
          height={700}
          // sizes="100vw"
          style={{
            objectFit: 'cover'
          }}
          className="fixed w-screen left-0 top-0 h-full -z-50"
        />
      </div>

      {/* product demo */}
      <div className="">
      
      </div>
    </section>
  );
};

export default Hero;
