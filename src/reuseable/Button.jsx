import React from 'react';

const Button = ({children}) => {
    return (
        <button className="bg-[#ED5B4E] w-14 h-8 rounded-lg text-white font-semibold">
            {children}
        </button>
    );
};

export default Button;