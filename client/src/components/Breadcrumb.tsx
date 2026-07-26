import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="container pt-6 pb-2" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-[#5A6A7A] flex-wrap">
        <li>
          <Link href="/" className="flex items-center gap-1 hover:text-[#C9A84C] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-[#5A6A7A]/50" />
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-[#C9A84C] transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-[#0B1B2B] font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
