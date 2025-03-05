'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="ml-2 text-xl font-bold text-white">Cr Crypto</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="nav-link">
                  {t('nav.home')}
                </Link>
                <Link href="/exchange" className="nav-link">
                  {t('nav.exchange')}
                </Link>
                <Link href="/features" className="nav-link">
                  {t('nav.features')}
                </Link>
                <Link href="/faq" className="nav-link">
                  {t('nav.faq')}
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="game-button">
              {t('nav.connectWallet')}
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="nav-link block">
            {t('nav.home')}
          </Link>
          <Link href="/exchange" className="nav-link block">
            {t('nav.exchange')}
          </Link>
          <Link href="/features" className="nav-link block">
            {t('nav.features')}
          </Link>
          <Link href="/faq" className="nav-link block">
            {t('nav.faq')}
          </Link>
        </div>
        <div className="px-4 py-3">
          <button className="game-button w-full">
            {t('nav.connectWallet')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
