'use client'

import PricingToggle from '@/src/components/prcing_components/PricingToggle';
import React, { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro'); // Default selected plan is 'pro'

  // Function to toggle between monthly and yearly plans
  const toggleMonthly = () => setIsYearly(false);
  const toggleYearly = () => setIsYearly(true);

  // Define plan pricing for monthly and yearly options
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
      monthly: '$40',
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

  const basicPlan = [true, true, true, false, false, false, false, false, false, false, false];
  const proPlan = [true, true, true, true, true, true, false, true, true, true, false];
  const enterprisePlan = [true, true, true, true, true, true, true, true, true, true, true];

  // Get features based on selected plan
  const getFeaturesForSelectedPlan = () => {
    switch (selectedPlan) {
      case 'basic':
        return basicPlan;
      case 'pro':
        return proPlan;
      case 'enterprise':
        return enterprisePlan;
      default:
        return [];
    }
  };

  const selectedPlanFeatures = getFeaturesForSelectedPlan();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Pricing Plans</h1>
      <p className="text-center text-gray-600 mb-12">
        Start building for free, then add a site plan to go live. Account plans unlock additional features.
      </p>

      {/* Monthly/Yearly Toggle */}
      <PricingToggle
        toggleMonthly={toggleMonthly}
        toggleYearly={toggleYearly}
        isYearly={isYearly}
      />

      {/* Plan Selection - Only visible in mobile */}
      <div className="block sm:hidden text-center mb-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setSelectedPlan('basic')}
            className={`px-4 py-2 rounded-full ${selectedPlan === 'basic' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          >
            Basic
          </button>
          <button
            onClick={() => setSelectedPlan('pro')}
            className={`px-4 py-2 rounded-full ${selectedPlan === 'pro' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          >
            Pro
          </button>
          <button
            onClick={() => setSelectedPlan('enterprise')}
            className={`px-4 py-2 rounded-full ${selectedPlan === 'enterprise' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
          >
            Enterprise
          </button>
        </div>

        {/* Pricing Information */}
        <div className="text-center mt-6">
          <h3 className="text-lg font-bold">
            {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
          </h3>
          <p className="text-2xl font-bold">
            {isYearly
              ? pricing[selectedPlan].yearly
              : pricing[selectedPlan].monthly}
          </p>
          <p className="text-sm text-gray-500">
            {selectedPlan === 'basic' ? '/Lifetime' : '/User / Month'}
          </p>
        </div>

        {/* Features for Selected Plan */}
        <div className="text-left px-4 mt-4">
          <h4 className="font-bold mb-2">Plan Includes:</h4>
          <ul className="list-disc ml-5">
            {features.map((feature, index) => (
              selectedPlanFeatures[index] && <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Choose Plan Button */}
        <div className="text-center mt-8">
          <button className="bg-black text-white px-8 py-2 rounded-full">
            Choose {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan
          </button>
        </div>
      </div>

      {/* Full Pricing Table - Only visible on larger screens */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="flex flex-col lg:flex-row">
              <th className="border px-4 py-4 text-left flex-1">
                <div className="flex flex-col items-start space-y-2">
                  <h3 className="text-lg font-bold">Compare plans</h3>
                  <span className="bg-white text-gray-700 border border-gray-400 rounded-full px-2 py-1 text-sm">40% Off</span>
                  <p className="text-sm text-gray-500">Choose your workspace plan according to your organisational plan</p>
                </div>
              </th>

              {/* Pricing for Basic Plan */}
              <th className="border px-4 py-4 flex-1">
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="font-bold text-lg">Basic</h3>
                  <p className="text-sm text-gray-500">Choose your workspace plan</p>
                  <span className="text-2xl font-bold">
                    {isYearly ? pricing.basic.yearly : pricing.basic.monthly}
                  </span>
                  <p className="text-sm text-gray-500">/Lifetime</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full">Choose This Plan</button>
                </div>
              </th>

              {/* Pricing for Pro Plan */}
              <th className="border px-4 py-4 flex-1 relative">
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="font-bold text-lg">Pro</h3>
                  <p className="text-sm text-gray-500">Choose your workspace plan</p>
                  <span className="text-2xl font-bold">
                    {isYearly ? pricing.pro.yearly : pricing.pro.monthly}
                  </span>
                  <p className="text-sm text-gray-500">/User / Month</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full">Choose This Plan</button>
                  <span className="absolute top-0 right-0 bg-gray-700 text-white px-2 py-1 text-xs font-bold rounded-full">Popular</span>
                </div>
              </th>

              {/* Pricing for Enterprise Plan */}
              <th className="border px-4 py-4 flex-1">
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="font-bold text-lg">Enterprise</h3>
                  <p className="text-sm text-gray-500">Choose your workspace plan</p>
                  <span className="text-2xl font-bold">
                    {isYearly ? pricing.enterprise.yearly : pricing.enterprise.monthly}
                  </span>
                  <p className="text-sm text-gray-500">/User / Month</p>
                  <button className="bg-black text-white px-4 py-2 rounded-full">Choose This Plan</button>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="flex flex-col lg:flex-row">
                <td className="border px-4 py-4 text-te3 text-left flex-1">{feature}</td>
                <td className="border px-4 py-4 text-center flex-1">{basicPlan[index] ? '✔' : '✘'}</td>
                <td className="border px-4 py-4 text-center flex-1">{proPlan[index] ? '✔' : '✘'}</td>
                <td className="border px-4 py-4 text-center flex-1">{enterprisePlan[index] ? '✔' : '✘'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
