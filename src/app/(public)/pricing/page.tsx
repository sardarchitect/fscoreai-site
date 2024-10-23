'use client';
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'pro' | 'enterprise'>('pro'); // Default selected plan is 'pro'

  const toggleMonthly = () => setIsYearly(false);
  const toggleYearly = () => setIsYearly(true);

  const pricing = {
    basic: {
      monthly: '$0',
      yearly: '$0',
    },
    pro: {
      monthly: '$25',
      yearly: '$240',
    },
    enterprise: {
      monthly: '$45',
      yearly: '$384',
    },
  };

  const features = [
    'Auto-Resolution of Errors',
    'Analytical Dashboards & Reports',
    'Includes essential features to get started',
    'More advanced features for increased productivity',
    'Real-Time Error Detection',
    'Customizable options to meet your specific needs',
    'Secure data storage',
    'Email Support',
    '24/7 customer support',
    'Analytics and reporting',
    'Customizable Checklists',
  ];

  // Define features for each plan
  const basicFeatures = [true, true, true, false, false, false, false, false, false, false, false];
  const proFeatures = [true, true, true, true, false, false, false, true, true, true, true];
  const enterpriseFeatures = [true, true, true, true, true, true, true, true, true, true, true];

  return (
    <div className="container mx-auto mb-20 px-4 py-8">
      <h1 className="h2 sm:he2 mt-16 text-center">Pricing Plans</h1>
      <p className="text-center te1 pt-8 text-gray-600 mb-8">
        Start building for free, then add a site plan to go live. Account plans unlock additional features.
      </p>

      {/* Monthly/Yearly Toggle */}
      <div className="flex justify-center  mb-8">
        <div className="inline-flex p-1 bg-gray-200 border-black border rounded-lg">
          <button
            onClick={toggleMonthly}
            className={`px-4 py-2 rounded-l-lg text-sm font-medium ${
              !isYearly ? 'bg-Charcoal-80 text-white' : 'text-gray-500'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={toggleYearly}
            className={`px-4 py-2 rounded-r-lg text-sm font-medium ${
              isYearly ? 'bg-Charcoal-80 text-white' : 'text-Charcoal-80'
            }`}
          >
            Yearly <span className="ml-1 text-xs text-Charcoal-40">Save 40%</span>
          </button>
        </div>
      </div>

      {/* Plan Selection for Mobile View (Hidden on md and larger) */}
      <div className="flex flex-col overflow-y-scroll space-y-4 mb-8 md:hidden">
        {['basic', 'pro', 'enterprise'].map((plan) => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan as 'basic' | 'pro' | 'enterprise')}
            className={`flex justify-between items-center p-4 rounded-lg border-2 ${
              selectedPlan === plan ? 'border-black bg-gray-100' : 'border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-center space-x-2">
              {/* Circle with Tick */}
              <span
                className={`flex items-center justify-center w-5 h-5  rounded-full ${
                  selectedPlan === plan ? 'border-black text-white bg-black' : 'border-gray-300 text-white'
                }`}
              >
                {selectedPlan === plan && <span>✓</span>}
              </span>
              {/* Plan name */}
              <span className="text-sm font-semibold">{plan.charAt(0).toUpperCase() + plan.slice(1)}</span>
            </div>
            <span className="font-bold">
              {pricing[plan as 'basic' | 'pro' | 'enterprise'][isYearly ? 'yearly' : 'monthly']}
            </span>

            {/* Display Popular Badge for Pro Plan */}
            {plan === 'pro' && (
              <span className="bg-gray-700 text-white px-2 py-1 text-xs font-bold rounded-full ml-2">
                Popular
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Scrollable Features List for Mobile (Hidden on md and larger) */}
      <div className="mt-4 md:hidden overflow-y-scroll max-h-48   shadow-Venus-50 shadow-inner bg-Charcoal-10 rounded-lg p-4">
        <h4 className="font-bold mb-2">{`${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan Includes:`}</h4>
        <ul className="list-disc ml-5">
          {selectedPlan === 'basic' &&
            basicFeatures.map(
              (isIncluded, index) => isIncluded && <><p key={index} className="text-sm py-2">✔{features[index]}</p><hr /></>
            )}
          {selectedPlan === 'pro' &&
            proFeatures.map(
              (isIncluded, index) => isIncluded && <><p key={index} className="text-sm py-2">✔{features[index]}</p><hr /></>
            )}
          {selectedPlan === 'enterprise' &&
            enterpriseFeatures.map(
              (isIncluded, index) => isIncluded && <><p key={index} className="text-sm py-2"> ✔ {features[index]}</p><hr/></>
            )}
        </ul>
      </div>

      {/* Call to Action: fixed button for mobile/tablet (Hidden on md and larger) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white c2 space-y-3 text-center p-4 shadow-2xl shadow-black md:hidden">Continue to subscription period for
        <button className="bg-black text-white mt-3 w-full px-4 py-2 te3 h-14 rounded-l-lg rounded-r-lg">
          Fscore {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} -{' '}
          {isYearly ? pricing[selectedPlan].yearly : pricing[selectedPlan].monthly}
        </button>
      </div>

      {/* Full Pricing Table - Visible on md and larger */}
      <div className="hidden md:block mt-8">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-4 text-left">
                <div className="flex flex-col items-start space-y-2">
                  <p className="text-lg flex te1">Compare plans
                  <span className="bg-white text-gray-700 border border-gray-400 rounded-full px-2 mx-3 py-1 text-sm">40% Off</span></p>
                  <p className="te4 text-gray-500">
                    Choose your workspace plan <br /> according to your organizational plan
                  </p>
                </div>
              </th>
              {['basic', 'pro', 'enterprise'].map((plan) => (
                <th key={plan} className="border px-4 py-4 relative">
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="font-bold text-lg">{plan.charAt(0).toUpperCase() + plan.slice(1)}</h3>
                    <span className="text-2xl font-bold">
                      {pricing[plan as 'basic' | 'pro' | 'enterprise'][isYearly ? 'yearly' : 'monthly']}
                    </span>
                    <p className="t4 text-gray-500">
                      {plan === 'basic' ? '/Lifetime' : '/User / Month'}
                    </p>
                    {plan === 'pro' && (
                      <span className="bg-gray-700 text-white px-2 py-1 text-xs font-bold rounded-full absolute top-0 right-0 mt-2 mr-2">
                        Popular
                      </span>
                    )}
                    <button className="bg-black text-white px-4 py-2 rounded-l-lg rounded-r-lg">
                      Choose This Plan
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="border px-4 py-4 te3 text-left">{feature}</td>
                <td className="border px-4 py-4 text-center">
                  {basicFeatures[index] ? '✔' : ''}
                </td>
                <td className="border px-4 py-4 text-center">
                  {proFeatures[index] ? '✔' : ''}
                </td>
                <td className="border px-4 py-4 text-center">
                  {enterpriseFeatures[index] ? '✔' : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
