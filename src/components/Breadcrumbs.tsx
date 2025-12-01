import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link to="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
        <Home className="size-4" />
        <span>Beranda</span>
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="size-4" />
          {item.path ? (
            <Link to={item.path} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
