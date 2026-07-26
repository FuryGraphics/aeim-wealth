import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0B1B2B] pt-20">
      <div className="container text-center">
        <div className="font-serif text-8xl font-bold text-[#C9A84C]">404</div>
        <h1 className="mt-4 font-serif text-2xl font-bold text-white">Page Not Found</h1>
        <p className="mt-4 text-white/60 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3.5 bg-[#C9A84C] text-[#0B1B2B] rounded-md font-semibold hover:bg-[#b8973f] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
