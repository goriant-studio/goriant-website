"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/constants';

interface faqdata {
    heading: string;
    subheading: string;
}

const Faq = () => {
    const { t } = useLanguage();

    const faqdata: faqdata[] = [
      {
        heading: t('faq.0.q'),
        subheading: t('faq.0.a')
      },
      {
        heading: t('faq.1.q'),
        subheading: t('faq.1.a')
      },
      {
        heading: t('faq.2.q'),
        subheading: t('faq.2.a')
      },
      {
        heading: t('faq.3.q'),
        subheading: t('faq.3.a')
      }
    ]

    return (
        <div className="my-20 px-6" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-white mb-3">Frequently Asked And Question</h3>
            <p className="text-center lg:text-lg font-normal text-gray-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> 
            been the industry standard dummy text ever since the 1500s,</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}
                    <div>
                        <div className="w-full px-4 pt-16">

                            {faqdata.map((items, i) => (
                                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-gray-800 py-8 px-6 mb-5" key={i}>
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full justify-between rounded-lg text-white sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                                    <span>{items.heading}</span>
                                                    <ChevronUpIcon
                                                        className={`${open ? 'rotate-180 transform' : ''
                                                            } h-5 w-5 text-purple-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-gray-300 font-normal">{items.subheading}</Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="mt-32">
                        <Image src={getAssetPath('/images/faq/faq.svg')} alt="faq-image" width={941} height={379} />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faq;
