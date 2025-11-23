import React from "react";
export default function Footer() {
  return (
    <footer className="py-6 border-t border-[#211c19] text-xs text-[#a89f93] text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <img src="/Discord_Fed_Logo.png" className="w-6 h-6 opacity-85" />
        <span className="tracking-[0.18em] uppercase text-[11px] text-[#d2c6b4]">
          The Federation
        </span>
      </div>
      <p>The Federation Gaming Community © {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}