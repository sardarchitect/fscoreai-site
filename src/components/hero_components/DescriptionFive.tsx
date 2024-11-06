import { useState } from 'react';
import Image from 'next/image';
import faqs from './faqs';

interface FAQ {
    question: string;
    answer: string;
}

const FAQSection: React.FC = () => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const toggleFAQ = (index: number) => {
        setActiveIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    return (
        <section className="bg-gradient-to-br from-[#B6C4E1] via-[#CCD7E1] to-[#DCE5E2] h-full w-full py-20 px-6">
            <div className="container justify-center mt-24 mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
    <p className="he3 text-gray-800 mb-4">
      <span className="text-gray-600"> Frequently Asked</span> Questions
    </p>
    <p className="mb-8 t1 text-gray-600 w-full max-w-[657px]">
      These are the most commonly asked questions about Draftflow. Can’t find what you’re looking for?{' '}
      <strong>
        <a href="/contact_us" className="text-gray-800 underline">
          Contact Us Now!
        </a>
      </strong>
    </p>
  </div>

                <div className="flex flex-col lg:flex-row  items-start gap-20 justify-center">
                    <div className="p-6 rounded-xl bg-white/40 shadow-lg flex flex-col items-center w-full lg:w-1/3 relative">
                        <div className="flex flex-col items-start">
                            <div className="mb-4 items-start text-black flex">
                                <Image
                                    src="/home/24-7.svg"
                                    alt="24/7"
                                    width={327}
                                    height={360}
                                />
                            </div>
                            <div>
                                <p className="h3">Exceptional Customer Support</p>
                                <p className="mt-2 t4 text-gray-600">
                                We have covered most of your doubts but if you still have any questions we’re happy to help you 24/7
                                </p>
                            </div>
                            <div className="mt-4 w-full c1 text-center cursor-pointer py-5 p-14 bg-black text-white rounded-lg">
                                <a href="/contact_us" className="w-full block">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                        {faqs.map((faq: FAQ, index: number) => (
                            <div className="cursor-pointer" onClick={() => toggleFAQ(index)} key={index}>
                                <button
                                    className="flex justify-between items-center w-full text-left py-5 px-4 rounded-lg">
                                    <p className="b1 text-gray-800">
                                        {faq.question}
                                    </p>
                                    <span className="w-8 md:w-10 h-8 md:h-10 ml-10 p-3 bg-black text-white rounded-full flex items-center justify-center text-xl">
                                        {activeIndexes.includes(index) ? "–" : "+"}
                                    </span>
                                </button>
                                <div
                                    className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out ${
                                        activeIndexes.includes(index) ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="te2 px-4 pt-4 lg:w-[600px] sm:w-full pb-8 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </div>
                                <hr className="border-gray-30" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
