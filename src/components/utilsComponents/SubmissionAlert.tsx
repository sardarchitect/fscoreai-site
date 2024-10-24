import React from 'react';

const SubmissionAlert = ({ type, message }: {type: string, message: string}) => {
  // Define alert color classes based on type
  let colorClass = '';
  if (type === 'success') {
    colorClass = 'bg-green-500';
  } else if (type === 'error') {
    colorClass = 'bg-red-500';
  } else if (type === 'warning') {
    colorClass = 'bg-yellow-500';
  } else {
    colorClass = 'bg-blue-500';
  }

  return (
    <div className='animate-pulse p-3 px-6 flex justify-center align-middle font-bold'>
    {/* <div className={`rounded-md p-4 ${colorClass} text-white`}> */}
      <p>{message}</p>
    {/* </div> */}
    </div>
  );
};

export default SubmissionAlert;
