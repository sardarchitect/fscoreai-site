"use client"
import { useEffect, useRef } from 'react';
import { useFormPopUpContext } from "@/src/context/formPopup";
import DemoForm from '../utilsComponents/DemoForm';

const BookDemoPopUp = () => {
  const [showPopup, setShowPopup] = useFormPopUpContext();


  return (
    <div
      onClick={() => setShowPopup(!showPopup)}
      className="bg-Neptune-50  text-white flex justify-center px-6 py-5 w-52 rounded-l-lg rounded-r-lg c1 hover:bg-Earth-50 cursor-pointer"
    >
      Book a Demo
      <DemoForm />
    </div>
  )
};

export default BookDemoPopUp;
