"use client"
import Image from 'next/image';
import { getAssetPath } from '@/utils/constants';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/work/icon-one.svg',
        heading: 'Create Account',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/work/icon-two.svg',
        heading: 'Find your Credit',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },
    {
        imgSrc: '/images/work/icon-three.svg',
        heading: 'Exchange Currency',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
        hiddenpara: 'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-24'>
                    <h3 className='text-white text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-gray-300 md:text-lg font-normal leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry standard dummy text ever.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>
                    {workdata.map((items, i) => (
                        <div className='relative pt-12 p-8 bg-gray-800 rounded-xl' key={i}>
                            <div className='bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex justify-center items-center absolute p-4 w-16 h-16 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <Image src={getAssetPath(items.imgSrc)} alt={items.imgSrc} width={32} height={32} className="w-8 h-8" />
                            </div>
                            <div className="mt-4">
                                <h3 className='text-2xl text-white font-semibold text-center mt-4'>{items.heading}</h3>
                                <p className='text-base font-normal text-gray-300 text-center mt-2'>{items.subheading}</p>
                                <span className="text-base font-normal m-0 text-gray-300 text-center hidden group-hover:block mt-2">{items.hiddenpara}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work;
