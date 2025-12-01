// src/pages/Home.tsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16 text-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
          Homepage
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12">
          Welcome to the Homepage
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/login"
            className="bg-white text-purple-600 px-10 py-5 rounded-xl font-semibold text-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="bg-transparent border-4 border-white text-white px-10 py-5 rounded-xl font-semibold text-xl shadow-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            Sign up
          </Link>
        </div>

      </div>
    </div>
  );
}