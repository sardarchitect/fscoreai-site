import Image from "next/image";

const  ProductReport = () => {
  return (
    <section
    className="relative w-full h-screen flex items-center  justify-center text-center"
    style={{
      backgroundImage: `url(/home/graph-up.png), url(/home/BG.jpg)`,
      backgroundSize: "cover, cover",
      backgroundPosition: "center, ceter",
      backgroundRepeat: "no-repeat, no-repeat",
    }}
    >
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0  opacity-10 z-0"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 w-full h-full items-center">
        {/* Text Section */}
        <div className="col-span-12 text-center relative z-10 px-4 py-16 lg:px-8">
          <p className="h3 sm:he2 text-gray-900">
            <span className="text-[#666666]">What is</span> Draftflow?
          </p>
          <p className="mt-6 t1 text-gray-600 mx-auto max-w-3xl">
            Draftflow is a subscription-based software that provides real-time, context-specific assistance to architects and engineers during the production of drawings in Autodesk Revit.
          </p>
          <p className="mt-4 t1 text-gray-600 mx-auto max-w-3xl">
            It enforces graphical standards, flags inconsistencies, and highlights missing scope in construction drawings, allowing architects and engineers to deliver flawless documents with speed and precision.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-span-12 flex justify-center relative  ">
          <div className=" max-w-3xl sm:max-w-2xl">
            <Image
              src="/home/image.png"
              alt="Floor Plan Image"
              width={500}
              height={500}
              layout="responsive"
              objectFit="cover"
            />
          </div>
                      {/* Overlay images/icons positioned around the main image */}
                      <div className="absolute top-0 inset-y-0 left-72 transform -translate-y-7">
              <Image src="/home/1.png" alt="Icon 1" width={150} height={40} />
            </div>
            <div className="absolute top-0 inset-y-0 right-72 transform -translate-y-7">
              <Image src="/home/2.png" alt="Icon 1" width={150} height={40} />
            </div>
            <div className="absolute top-0 pt-36  inset-y-0 right-56  ">
              <Image src="/home/3.png" alt="Icon 1" width={150} height={40} />
            </div>
            <div className="absolute top-0 pt-36  inset-y-0 left-56  ">
              <Image src="/home/4.png" alt="Icon 1" width={150} height={40} />
            </div>
            <div className="absolute top-0 mt-20  inset-y-0 left-48  ">
              <Image src="/home/1.1.png" alt="Icon 1" width={150} height={40} />
            </div>
            <div className="absolute top-0 mt-48  inset-y-0 left-36  ">
              <Image src="/home/2.2.png" alt="Icon 1" width={50} height={40} />
            </div>
            <div className="absolute top-0 mt-60  inset-y-0 left-36  ">
              <Image src="/home/3.3.png" alt="Icon 1" width={150} height={40} />
            </div>
            <div className="absolute top-0 mt-6  inset-y-0 right-56  ">
              <Image src="/home/4.4.png" alt="Icon 1" width={150} height={40} />
            </div>
            <div className="absolute top-0 mt-40  inset-y-0 right-40  ">
              <Image src="/home/5.5.png" alt="Icon 1" width={80} height={40} />
            </div>
            <div className="absolute top-0 mt-60  inset-y-0 right-52  ">
              <Image src="/home/6.6.png" alt="Icon 1" width={120} height={40} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReport;
