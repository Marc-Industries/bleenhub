import React from 'react';

const BleenhubLogo = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="10" r="3" fill="#00D2B4" />
      <path 
        d="M20 13 C15 18, 10 23, 10 28 Q10 32, 14 32 L26 32 Q30 32, 30 28 C30 23, 25 18, 20 13 Z" 
        fill="#001a3d"
        stroke="#00D2B4"
        strokeWidth="1.5"
      />
      <path 
        d="M16 23 Q20 26, 24 23" 
        stroke="#00D2B4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default BleenhubLogo;