import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color?: string;
}

export default function CategoryCard({ 
  title, 
  description, 
  icon, 
  href,
  color = "bg-primary-500"
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
        <div className={`${color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <span className="text-3xl">{icon}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm">
          {description}
        </p>
        
        <div className="mt-4 text-primary-600 font-medium text-sm flex items-center">
          Explorar
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

