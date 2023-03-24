import React from 'react';
import Title from '../atoms/Title';

export default function Header() {
  return (
    <div className="relative bg-gradient-to-b from-[#B1B2FF] to-white h-[70px]">
      <Title className="flex justify-center">
        <p className="mt-4 tracking-wider text-2xl font-bold">
          Employees Data
        </p>
      </Title>
    </div>
  );
}
