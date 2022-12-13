import React from 'react';

interface InputProps {
  labelTitle: string;
  type: 'text' | 'password';
  onChange: (e: string) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col w-fit">
      <label>{props.labelTitle}</label>
      <input
        className="border rounded outline-none focus:border-neutral-500 bg-neutral-100"
        type={props.type}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}
