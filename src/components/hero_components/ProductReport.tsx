import Image from "next/image";

const ProductReport = () => {
  return (
    <section className="relative grid grid-cols-12 max-w-7xl mx-auto py-10 pb-32 items-center">
      {/* Background SVG/Image Placeholder */}
      <div className="absolute inset-0 opacity-10">
        {/* Placeholder for the floorplan image */}
        <Image
          src="/path-to-your-image.svg"
          alt="Background Diagram"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Text Content */}
      <div className="col-span-12 text-center relative z-10 px-4 py-16 lg:px-8">
        <p className="he2  text-gray-900">What is Draftflow?</p>
        <p className="mt-6 t1 text-gray-600 max-w-4xl mx-auto">
          Draftflow is a subscription-based software that provides real-time, context-specific assistance to architects and engineers during the production of drawings in Autodesk Revit.
        </p>
        <p className="mt-4 t1 text-gray-600 max-w-4xl mx-auto">
          It enforces graphical standards, flags inconsistencies, and highlights missing scope in construction drawings, allowing architects and engineers to deliver flawless documents with speed and precision.
        </p>
      </div>

      {/* Single Image Section */}
      <div className="col-span-12 flex justify-center relative z-10 mt-8">
        <div className="w-full max-w-md">
          <Image
            src="/path-to-bottom-image.svg"
            alt="Floor Plan Image"
            width={400}
            height={300}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductReport;
