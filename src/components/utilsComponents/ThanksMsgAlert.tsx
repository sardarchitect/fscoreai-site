'use client'
import React from 'react';
import SubmissionAlert from './SubmissionAlert';
import { useAlertPopUpContext } from '@/src/context/alertPopup';

const ThanksMsgAlert = () => {
    const [showAlertPopup] = useAlertPopUpContext();
  
  return (
    <div className={`${showAlertPopup ? "" : "hidden"}`}>
      <div
        className={`fixed inset-0  flex justify-center top-16 z-50 `}
      >
        <div className="animate-fadeIn shadow-xl border h-fit w-fit rounded-full px-3 mt-4 backdrop-blur-lg ">
          <SubmissionAlert
            type="success"
            message="Thank you for submitting your form. We will get back to you shortly."
          />
        </div>
      </div>
    </div>
  );
};

export default ThanksMsgAlert;
