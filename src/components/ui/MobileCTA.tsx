"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 lg:hidden z-50">
      <Link
        href="tel:+15551234567"
        className="flex items-center justify-center gap-2 bg-[#ed8936] text-white py-3 rounded-lg font-semibold"
      >
        <Phone className="w-5 h-5" />
        Call Now - Free Estimate
      </Link>
    </div>
  );
}
