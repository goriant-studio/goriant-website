"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/constants';

const Faq = () => {
    const { t } = useLanguage();

    const faqItems = [
        {
            q: t('faq.items.0.q'),
            a: t('faq.items.0.a')
        },
        {
            q: t('faq.items.1.q'),
            a: t('faq.items.1.a')
        },
        {
            q: t('faq.items.2.q'),
            a: t('faq.items.2.a')
        },
        {
            q: t('faq.items.3.q'),
            a: t('faq.items.3.a')
        }
    ];

    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-white mb-3">{t('faq.title')}</h3>
            <p className="text-center lg:text-lg font-normal text-gray-300 mb-8">{t('faq.subtitle')}</p>

            <div className="grid lg:grid-cols-2">
                {/* Column-1 */}
                <div>
                    <div className="w-full px-4 pt-16">
                        {faqItems.map((item, i) => (
                            <div className="mx-auto w-full max-w-5xl rounded-2xl bg-gray-800 py-8 px-6 mb-5" key={i}>
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg text-white sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                <span>{item.q}</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-gray-300 font-normal">
                                                {item.a}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column-2 */}
                <div className="mt-32">
                    <Image src={getAssetPath('/images/faq/faq.png')} alt="faq-image" width={941} height={379} />
                </div>
            </div>
        </div>
    )
}

export default Faq;
