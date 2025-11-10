"use client";

import { useState, useEffect } from "react";
import { SideBarItem } from "./SideBarItem";

export default function SidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure client-side rendering before showing sidebar
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch

  return (
    <div className="flex ">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-300 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:w-72`}
      >
        {/* Header with close button (only mobile) */}
        <div className="flex items-center justify-between p-4 md:hidden">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Menu items */}
        <div className="p-2 space-y-2">
          <SideBarItem href="/dashboard" icon={<HomeIcon />} title="Home" />
          <SideBarItem href="/transfer" icon={<TransferIcon />} title="Transfer" />
          <SideBarItem href="/transactions" icon={<TransactionsIcon />} title="Transactions" />
          <SideBarItem href="/p2p" icon={<P2PTransferIcon />} title="P2P Transfer" />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1">
        {/* Toggle button only on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="m-4 rounded-lg text-xl md:hidden z-50 h-1 w-1"
        >
          ☰
        </button>
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 
        1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 
        1.125-1.125h2.25c.621 0 1.125.504 
        1.125 1.125V21h4.125c.621 0 1.125-.504 
        1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 
        7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 
        1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function P2PTransferIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24"
      strokeWidth={1.5} stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 
        0v11.25"
      />
    </svg>
  );
}
