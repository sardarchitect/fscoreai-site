'use client'

import { useThemeContext } from '@/context/theme';
import Head from 'next/head';
import Image from 'next/image';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const PricingPage: React.FC = () => {
    const [theme] = useThemeContext();
  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$19/month",
      features: [
        "Feature 1: ",
        "Feature 2: ",
        "Feature 3: ",
      ],
    },
    {
      name: "Enterprise",
      price: "$99/month",
      features: [
        "Feature 1: ",
        "Feature 2: ",
        "Feature 3: ",
       
      ],
    },
  ];

  return (
    <div className={`container mx-auto p-8 ${theme === 'dark' ? 'bg-theme-blue text-white' : 'bg-white text-black'} mx-auto  max-w-7xl items-center justify-between p-4 lg:px-8`}>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Pricing plans for our service." />
      </Head>
      
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Plan</h1>
      <p className="text-center mb-6 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsum dolores dolorem exercitationem ea dolor fugit, nemo fugiat et accusamus assumenda qui neque eaque! Placeat deserunt atque alias libero repellendus, rerum, impedit natus laboriosam sit blanditiis quod est voluptates ad numquam beatae! Culpa veniam assumenda a natus ut debitis. Voluptatibus.
      </p>
      
      <h2 className="text-2xl font-semibold text-center mb-4">Simple and Transparent Pricing</h2>
      <p className="text-center mb-8 text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta unde explicabo recusandae dolorem ipsam, esse voluptatum minus. Beatae nihil velit iure voluptatem dolores fugiat, tempora fuga laborum. Mollitia, aliquid vitae!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition">
              Get Started
            </button>
          </div>
        ))}
        <div className="hero-img">
        <Image
          src="/neuro_image.svg"
          alt="image"
          width={200}
          height={700}
          style={{
            objectFit: "cover",
          }}
          className="fixed w-screen left-0 top-0 h-full -z-50"
        />
      </div>
      </div>

    </div>
  );
};

export default PricingPage;
