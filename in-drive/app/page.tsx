import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center">
              {/* GitHub Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/github-mark.svg"
                  alt="GitHub"
                  width={32}
                  height={32}
                />
              </div>
              
              {/* Search bar */}
              <div className="ml-4">
                <input
                  type="text"
                  className="w-72 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
                  placeholder="Search or jump to..."
                />
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:block ml-6">
                <div className="flex space-x-4">
                  <Link href="/pulls" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Pull requests
                  </Link>
                  <Link href="/issues" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Issues
                  </Link>
                  <Link href="/marketplace" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Marketplace
                  </Link>
                  <Link href="/explore" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Explore
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>

              {/* Profile dropdown placeholder */}
              <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Open user menu</span>
                <Image
                  className="h-8 w-8 rounded-full"
                  src="/avatar-placeholder.png"
                  alt="User avatar"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl">Home</h1>
          <Link href="/about">About</Link>
        </div>
      </main>
    </div>
  );
}


