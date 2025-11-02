'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // This will help us see if the component is mounting at all
    console.log('CustomersPage mounted');
    
    // Check if we're running in a browser with CSP
    const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (meta) {
      console.log('CSP found:', meta.getAttribute('content'));
    }
  }, []);

  return (
    <main className="p-4 bg-gray-100">
      <h1 className="text-2xl mb-4 text-black">Customers</h1>
      <p className="bg-white p-4 rounded shadow-sm text-black">Customers Page Content</p>
    </main>
  );
}