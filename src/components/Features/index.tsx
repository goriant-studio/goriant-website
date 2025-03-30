import Image from "next/image";
import { getAssetPath } from '@/utils/constants';
import { useLanguage } from '@/contexts/LanguageContext';

interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const Features = () => {
    const { t } = useLanguage();

    const featuresdata: featuresdata[] = [
        {
            imgSrc: '/images/features/featureOne.svg',
            heading: t('features.items.0.title'),
            subheading: t('features.items.0.description'),
        },
        {
            imgSrc: '/images/features/featureTwo.svg',
            heading: t('features.items.1.title'),
            subheading: t('features.items.1.description'),
        },
        {
            imgSrc: '/images/features/featureThree.svg',
            heading: t('features.items.2.title'),
            subheading: t('features.items.2.description'),
        },
    ]

    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            
            {/* Column-1 */}
            <div>
                <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start text-purple-400">{t('features.title')}</h3>
                <h2 className="text-white text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">{t('features.subtitle')}</h2>
                <p className="lg:text-lg font-normal text-gray-300 text-center md:text-start">
                    {t('features.items.0.description')}
                </p>
            </div>
            {/* Column-2 */}
            <div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                    {featuresdata.map((items, i) => (
                        <div className="bg-gray-800 py-10 pr-12 pl-6 rounded-lg" key={i}>
                            <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                <Image src={getAssetPath(items.imgSrc)} alt={items.imgSrc} width={24} height={30} />
                            </div>
                            <h5 className="text-white text-lg font-medium mb-4">{items.heading}</h5>
                            <p className="text-gray-300 text-sm font-normal">{items.subheading}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
