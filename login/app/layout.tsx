import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '../styles/globals.css';  // Import global styles (e.g., globals.css)
import { ReactNode } from 'react';
import Link from 'next/link';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

interface LayoutProps {
  children: ReactNode;  // This will represent the content of each page
};
export const metadata: Metadata = {
  title: "Login System",
  description: "A simple login system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
        >
        <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {children}  {/* The content of the current page will be rendered here */}
      </main>

      <footer className="bg-blue-600 text-white p-4 mt-4 text-center">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
      </body>
    </html>
  );
}
