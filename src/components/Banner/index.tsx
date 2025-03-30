"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/constants';

const Banner = () => {
    const [isOpen, setOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <div className='bg-image relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="YOUR_VIDEO_ID" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                <img src={getAssetPath('/images/banner/tasty_twins_v2.png')} alt="title" width={600} height={185} className='pr-20' />
                                <br /> {t('banner.subtitle')}
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>
                                {t('banner.description')}
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                
                                <button className='game-button mr-4'>
                                    {t('banner.playNow')}
                                </button>

                                <button className='bg-transparent flex justify-center items-center text-white hover:text-gray-200 transition-colors duration-300' onClick={() => setOpen(true)}>
                                    <Image src={getAssetPath('/images/banner/playbutton.svg')} alt="watch-gameplay" className='mr-3 animate-bounce' width={47} height={47} />
                                    <span>{t('banner.watchGameplay')}</span>
                                </button>
                                
                            </div>
                        </div>

                        <div className='col-span-5 mt-10 lg:mt-0'>
                            <Image src={getAssetPath('/images/banner/matching_pair_banner_v1.png')} alt="game-preview" width={1000} height={805} className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
