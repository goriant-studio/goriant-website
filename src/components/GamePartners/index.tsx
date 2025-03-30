"use client"
import { useLanguage } from "@/contexts/LanguageContext";
import { getAssetPath } from "@/utils/constants";
import React from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
    altText: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/companies/android.svg",
        altText: "Google Play"
    }
]

const GamePartners = () => {
    const { t } = useLanguage();
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className='text-center bg-[#041240]' id="platforms-section">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-12">{t('partners.title')}</h3>
                <div>
                    <Slider {...settings}>
                        {data.map((item, i) =>
                            <div key={i} className="p-4 transition-all duration-300">
                                <div className="
                                h-[120px] p-4 rounded-lg mx-2 shadow-sm flex items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 
                                bg-gradient-to-b from-sky-400 to-sky-200">
                                    <img src={getAssetPath(item.imgSrc)} alt={t(`partners.items.${i}.altText`)} className="max-h-[80px] w-auto" />
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default GamePartners;
