"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Back to Home
          </Link>

          <button
            onClick={() => router.back()}
            className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12 text-gray-400">
          <p className="text-sm">Lost? Here are some helpful links:</p>
          <div className="flex gap-6 justify-center mt-4">
            <Link href="/#about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="/#projects" className="hover:text-purple-400 transition-colors">
              Projects
            </Link>
            <Link href="/#skills" className="hover:text-purple-400 transition-colors">
              Skills
            </Link>
            <Link href="/#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
