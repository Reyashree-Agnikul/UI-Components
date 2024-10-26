import React, { useState } from 'react';

interface TextInputProps {
  placeholder: string;
  type?: 'text' | 'password';
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, type = 'text', value, onChange }) => {
  const [isActive, setIsActive] = useState(false); // Define the isActive state

  return (
    <div className="relative mb-4">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(value !== '' ? true : false)} // Keep active if there is text
        className={`w-78 h-13 border-gray-300 p-3 transition-all duration-200 hover:border-green-500
          ${isActive || value ? 'border-green-600' : 'border-gray-700'} 
          hover:border-light-green-400 focus:border-green-600 focus:outline-green-700 
          rounded-sm`}
          style={{
            border: 'solid 2px gray',
          }}
        placeholder=" " // Provide a space to keep the placeholder space for the label
      />
      <label 
        className={`absolute left-6 top-2  transition-all duration-200 
          ${isActive || value ? 'text-green-700 text-xs bg-white px-2' : 'bg-white text-green-700'} 
          ${isActive || value ? 'transform -translate-y-4' : 'translate-y-0'}`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;



