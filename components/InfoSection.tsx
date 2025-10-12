"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface InfoSectionProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function InfoSection({ 
  icon, 
  title, 
  children,
  defaultOpen = false 
}: InfoSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-3xl mr-4">{icon}</span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-gray-400" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

