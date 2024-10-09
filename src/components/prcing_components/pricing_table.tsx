'use client'
import { useState } from 'react';

function PricingTable() {
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const plans = [
//     {
//       name: 'Basic',
//       price: 0,
//       features: [
//         { title: 'Auto-Resolution of Errors', value: '20 Pages' },
//         { title: 'Analytical Dashboards & Reports', value: '5 Pages' },
//         { title: 'Includes essential features to get started', value: true },
//         { title: 'More advanced features for increased productivity', value: true },
//         { title: 'Real-Time Error Detection', value: true },
//         { title: 'Customizable options to meet your specific needs', value: true },
//         { title: 'Secure data storage', value: true },
//         { title: 'Email Support', value: true },
//         { title: '24/7 customer support', value: true },
//         { title: 'Analytics and reporting', value: true },
//         { title: 'Customizable Checklists', value: true },
//       ],
//       buttonText: 'Choose This Plan',
//     },
//     {
//       name: 'Pro',
//       price: 25,
//       features: [
//         { title: 'Auto-Resolution of Errors', value: '600 Pages' },
//         { title: 'Analytical Dashboards & Reports', value: '50 Pages' },
//         { title: 'Includes essential features to get started', value: true },
//         { title: 'More advanced features for increased productivity', value: true },
//         { title: 'Real-Time Error Detection', value: true },
//         { title: 'Customizable options to meet your specific needs', value: true },
//         { title: 'Secure data storage', value: true },
//         { title: 'Email Support', value: true },
//         { title: '24/7 customer support', value: true },
//         { title: 'Analytics and reporting', value: true },
//         { title: 'Customizable Checklists', value: true },
//       ],
//       buttonText: 'Choose This Plan',
//     },
//     {
//       name: 'Enterprise',
//       price: 40,
//       features: [
//         { title: 'Auto-Resolution of Errors', value: 'Unlimited Pages' },
//         { title: 'Analytical Dashboards & Reports', value: 'Unlimited Pages' },
//         { title: 'Includes essential features to get started', value: true },
//         { title: 'More advanced features for increased productivity', value: true },
//         { title: 'Real-Time Error Detection', value: true },
//         { title: 'Customizable options to meet your specific needs', value: true },
//         { title: 'Secure data storage', value: true },
//         { title: 'Email Support', value: true },
//         { title: '24/7 customer support', value: true },
//         { title: 'Analytics and reporting', value: true },
//         { title: 'Customizable Checklists', value: true },
//       ],
//       buttonText: 'Choose This Plan',
//     },
//   ];

  return (

    <div className="w-[338px] h-14 left-[551px] top-[311px] absolute">
    <div className="w-[338px] h-14 left-0 top-0 absolute">
      <div className="w-[338px] h-14 left-0 top-0 absolute bg-white rounded-[9.24px] border border-[#171724]" />
    </div>
    <div className="w-[164px] h-12 left-[4px] top-[4px] absolute">
      <div className="w-[164px] h-12 left-0 top-0 absolute bg-[#171724] rounded-lg border border-white" />
      <div className="left-[53.98px] top-[14.20px] absolute text-center text-white text-sm font-semibold font-['Inter'] leading-[18px]">Monthly</div>
    </div>
    <div className="w-[164px] h-12 left-[170px] top-[4px] absolute">
      <div className="w-[164px] h-12 left-0 top-0 absolute bg-white rounded-lg" />
      <div className="left-[25.98px] top-[14.20px] absolute text-center"><span className="text-[#171724] text-sm font-semibold font-['Inter'] leading-[18px]">Yearly</span><span className="text-[#171724] text-sm font-semibold font-['Inter']"> </span><span className="text-[#4f4f4f] text-xs font-semibold font-['Inter'] leading-none">(Save 40%)</span></div>
    </div>
  </div>
  
        
  );
}

export default PricingTable;