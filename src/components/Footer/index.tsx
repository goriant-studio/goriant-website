"use client"
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/utils/constants";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string;
  href: string;
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Quick Links",
    link: ["🎮 My Games", "🛠 Development Blog", "📜 About Me", "❓ FAQ", "🔒 Privacy Policy"],
  },
];

const socialLinks: Social[] = [
  { imgsrc: "/images/footer/insta.svg", href: "https://instagram.com/" },
  { imgsrc: "/images/footer/dribble.svg", href: "https://dribble.com/" },
  { imgsrc: "/images/footer/twitter.svg", href: "https://twitter.com/" },
  { imgsrc: "/images/footer/youtube.svg", href: "https://youtube.com/" },
];

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'myGames', href: '/' },
    { key: 'devBlog', href: '/' },
    { key: 'aboutMe', href: '/' },
    { key: 'faq', href: '/' },
    { key: 'privacyPolicy', href: '/privacy-policy' },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#041240] to-[#0a0a2e]">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-16 py-8 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
        
          {/* COLUMN-1 */}
          <div className="col-span-6">
            <p className="text-white text-xl font-medium mb-9">
              {t('footer.title')}
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('footer.philosophy.title')}
              </h3>
              <p className="text-gray-300 text-sm font-normal leading-7 mb-8">
                {t('footer.philosophy.description')}
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="footer-icons hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="group relative col-span-2">
            <p className="text-white text-xl font-medium mb-9">
              {t('footer.quickLinks.title')}
            </p>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-5">
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm font-normal mb-6 hover:text-gray-100 transition-colors"
                  >
                    {t(`footer.quickLinks.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN-3 */}
          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">{t('footer.contact.title')}</h3>
            <h4 className="text-gray-300 text-sm font-normal mb-6 flex gap-2 hover:text-gray-100 transition-colors">
              <Image
                src={getAssetPath("/images/footer/email.svg")}
                alt="email-icon"
                width={20}
                height={20}
              />
              {t('footer.contact.email')}
            </h4>
            <h4 className="text-gray-300 text-sm font-normal mb-6 flex gap-2 hover:text-gray-100 transition-colors">
              <Image 
                src={getAssetPath('/images/footer/address.svg')} 
                alt="address-icon" 
                width={20} 
                height={20} 
              />
              {t('footer.contact.address')}
            </h4>
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="py-8 px-4 border-t border-gray-800">
        <h3 className="text-center text-gray-300">
          {t('footer.copyright')}
        </h3>
      </div>

    </div>
  );
};

export default Footer;
