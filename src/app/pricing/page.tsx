'use client'
import PricingToggle from '@/src/components/prcing_components/PricingToggle';
import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro'); // Default selected plan is 'pro'

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

  const getFeaturesForSelectedPlan = () => {
    switch (selectedPlan) {
      case 'basic':
        return [true, true, true, false, false, false, false, false, false, false, false];
      case 'pro':
        return [true, true, true, true, true, true, false, true, true, true, false];
      case 'enterprise':
        return [true, true, true, true, true, true, true, true, true, true, true];
      default:
        return [];
    }
  };

  const selectedPlanFeatures = getFeaturesForSelectedPlan();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">FScore Pricing Plans</h1>
      <p className="text-center text-gray-600 mb-8">
        Start building for free, then add a site plan to go live. Account plans unlock additional features.
      </p>

      {/* Monthly/Yearly Toggle */}
      <PricingToggle
        toggleMonthly={toggleMonthly}
        toggleYearly={toggleYearly}
        isYearly={isYearly}
      />

      {/* Plan Selection for Mobile View */}
      <div className="flex flex-col space-y-4 mb-8 lg:hidden">
        {['basic', 'pro', 'enterprise'].map(plan => (
          <button
            key={plan}
            onClick={() => setSelectedPlan(plan)}
            className={`flex justify-between items-center p-4 rounded-lg border border-gray-300 ${selectedPlan === plan ? 'bg-gray-200' : 'bg-white'}`}
          >
            <span className="text-sm font-semibold">{plan.charAt(0).toUpperCase() + plan.slice(1)}</span>
            <span className="font-bold">{pricing[plan][isYearly ? 'yearly' : 'monthly']}</span>
            {plan === 'pro' && selectedPlan === 'pro' && <span className="bg-black text-white px-2 rounded-full text-xs ml-2">Popular</span>}
          </button>
        ))}
      </div>

      {/* Scrollable Features List */}
      <div className="mt-4 lg:hidden overflow-y-auto max-h-48">
        <h4 className="font-bold mb-2">Pro Plan Includes:</h4>
        <ul className="list-disc ml-5">
          {selectedPlanFeatures.map((isIncluded, index) => isIncluded && (
            <li key={index} className="text-sm">{features[index]}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-6 text-center lg:hidden">
        <button className="bg-black text-white px-8 py-2 rounded-full">
          Continue to subscription period for {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} - {isYearly ? pricing[selectedPlan].yearly : pricing[selectedPlan].monthly}
        </button>
      </div>

      {/* Full Pricing Table - Only visible on larger screens */}
      <div className="hidden lg:block mt-8">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-4 text-left">
                <div className="flex flex-col items-start space-y-2">
                  <h3 className="text-lg font-bold">Compare plans</h3>
                  <span className="bg-white text-gray-700 border border-gray-400 rounded-full px-2 py-1 text-sm">40% Off</span>
                  <p className="text-sm text-gray-500">Choose your workspace plan according to your organizational plan</p>
                </div>
              </th>
              {['basic', 'pro', 'enterprise'].map(plan => (
                <th key={plan} className="border px-4 py-4">
                  <div className="flex flex-col items-center space-y-2">
                    <h3 className="font-bold text-lg">{plan.charAt(0).toUpperCase() + plan.slice(1)}</h3>
                    <span className="text-2xl font-bold">
                      {pricing[plan][isYearly ? 'yearly' : 'monthly']}
                    </span>
                    <p className="text-sm text-gray-500">{plan === 'basic' ? '/Lifetime' : '/User / Month'}</p>
                    {plan === 'pro' && <span className="bg-gray-700 text-white px-2 py-1 text-xs font-bold rounded-full">Popular</span>}
                    <button className="bg-black text-white px-4 py-2 rounded-full">Choose This Plan</button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="border px-4 py-4 text-left">{feature}</td>
                {['basic', 'pro', 'enterprise'].map(plan => (
                  <td key={plan} className="border px-4 py-4 text-center">
                    {getFeaturesForSelectedPlan()[index] ? '✔' : '✘'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
