"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* Mobile Sticky Call Button */}
      <div className="mobile-sticky-cta" role="complementary" aria-label="Call Toilet Fixers">
        <a href="tel:8338450906">
          <i className="ph-fill ph-phone-call"></i>
        </a>
      </div>
    </>
  );
}
