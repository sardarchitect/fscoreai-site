import { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import faqs from './faqs';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    // Toggle the FAQ answer display
    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };



    return (
        <section className=" bg-gradient-to-br from-[#B6C4E1] via-[#CCD7E1] to-[#DCE5E2] w-full py-16 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center text-center">
                    {/* Title and Description */}
                    <h2 className="he3 text-gray-800 mb-4">
                        Frequently Asked <span className="text-gray-600">Questions</span>
                    </h2>
                    <p className="mb-8 t1 text-gray-600">
                        Draftflow uses a SaaS in pricing based on required features.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-8 justify-center">
                    {/* Left Side - Customer Support */}
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center w-full lg:w-1/3 relative">
                        <div className="flex flex-col items-start">
                            {/* SVG inside the div */}
                            <div className="mb-4 items-start text-black flex">
                                {/* Replace this with actual 24/7 SVG Image */}
                                <Image
                                    src="/247.svg" // Adjust to the path of your SVG
                                    alt="24/7"
                                    width={80}
                                    height={80}
                                />24/7
                            </div>
                            <p className="h3  text-gray-800">
                                Exceptional Customer Support
                            </p>
                            <p className="mt-2 t4 text-gray-600 ">
                                We have covered most of your doubts but if you still have any
                                questions we're happy to help you 24/7.
                            </p>
                            <div className="mt-4 w-full c1 text-center cursor-pointer py-3 bg-black text-white rounded-lg">
                                <a href="/contact_us" className="w-full block">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - FAQ */}
                    <div className="w-full lg:w-2/3">
                        {faqs.map((faq, index) => (
                            <>
                                <div key={index} className="mb-4">
                                    <button
                                        className="flex justify-between items-center w-full text-left p-4  rounded-lg "
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <p className="b1 text-gray-800">
                                            {faq.question}
                                        </p>
                                        <span className=" w-8 md:w-10 h-8 md:h-10 bg-black text-white rounded-full flex items-center justify-center text-xl">
                                            {activeIndex === index ? "–" : "+"}
                                        </span>
                                    </button>
                                    {activeIndex === index && (
                                        <div className="mt-2 te4 px-4 text-gray-600">{faq.answer}</div>
                                    )}
                                </div>
                                <hr className="mt-4  " />
                            </>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FAQSection;
