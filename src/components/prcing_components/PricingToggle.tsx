import React from 'react';

interface PricingToggleProps {
  toggleMonthly: () => void;
  toggleYearly: () => void;
  isYearly: boolean;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ toggleMonthly, toggleYearly, isYearly }) => {
  return (
    <div className="flex justify-center mb-8">
      <button
        className={`py-2 te3  px-6 ${!isYearly ? 'bg-black text-white' : 'bg-gray-200 text-black'} rounded-l-lg`}
        onClick={toggleMonthly}
      >
        Monthly
      </button>
      <button
        className={`py-2 te3 px-6 ${isYearly ? 'bg-black text-white' : 'bg-gray-200 text-black'} rounded-r-lg`}
        onClick={toggleYearly}
      >
        Yearly (Save 40%)
      </button>
    </div>
  );
};

export default PricingToggle;
