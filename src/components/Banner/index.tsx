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
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                {t('banner.title')} <br /> {t('banner.subtitle')}
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center whitespace-pre-line'>
                                {t('banner.description')}
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <button className='game-button mr-4'>
                                    {t('banner.playNow')}
                                </button>
                                <button className='bg-transparent flex justify-center items-center text-white hover:text-gray-200 transition-colors duration-300' onClick={() => setOpen(true)}>
                                    <Image src={getAssetPath('/images/Banner/playbutton.svg')} alt="watch-gameplay" className='mr-3' width={47} height={47} />
                                    {t('banner.watchGameplay')}
                                </button>
                            </div>
                        </div>

                        <div className='col-span-5 mt-10 lg:mt-0'>
                            <Image src={getAssetPath('/images/banner/banner.png')} alt="banner-image" width={1000} height={805} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
