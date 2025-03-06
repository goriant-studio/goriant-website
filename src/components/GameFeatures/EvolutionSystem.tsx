import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/constants';

const EvolutionSystem = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          {t('evolution.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cánh chim */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="rounded-lg overflow-hidden mb-6 h-48">
              <img src={getAssetPath("/images/features/bird-wings.png")} alt={t('evolution.birdWings.title')} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('evolution.birdWings.title')}</h3>
            <p className="text-gray-300 mb-4">{t('evolution.birdWings.description')}</p>
            <div className="flex justify-between text-sm">
              <span className="text-green-400">{t('evolution.birdWings.pros')}</span>
              <span className="text-red-400">{t('evolution.birdWings.cons')}</span>
            </div>
          </div>
          
          {/* Cánh robot */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="rounded-lg overflow-hidden mb-6 h-48">
              <img src={getAssetPath("/images/features/robot-wings.png")} alt={t('evolution.robotWings.title')} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('evolution.robotWings.title')}</h3>
            <p className="text-gray-300 mb-4">{t('evolution.robotWings.description')}</p>
            <div className="flex justify-between text-sm">
              <span className="text-green-400">{t('evolution.robotWings.pros')}</span>
              <span className="text-red-400">{t('evolution.robotWings.cons')}</span>
            </div>
          </div>
          
          {/* Cánh phép thuật */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="rounded-lg overflow-hidden mb-6 h-48">
              <img src={getAssetPath("/images/features/magic-wings.png")} alt={t('evolution.magicWings.title')} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t('evolution.magicWings.title')}</h3>
            <p className="text-gray-300 mb-4">{t('evolution.magicWings.description')}</p>
            <div className="flex justify-between text-sm">
              <span className="text-green-400">{t('evolution.magicWings.pros')}</span>
              <span className="text-red-400">{t('evolution.magicWings.cons')}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-6">{t('evolution.combination')}</p>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg inline-block">
            <div className="flex items-center space-x-6">
              <img src={getAssetPath("/images/features/wing-combine-1.png")} alt={t('evolution.combine.alt1')} className="w-20 h-20 rounded-full object-cover" />
              <span className="text-2xl text-purple-500">+</span>
              <img src={getAssetPath("/images/features/wing-combine-2.png")} alt={t('evolution.combine.alt2')} className="w-20 h-20 rounded-full object-cover" />
              <span className="text-2xl text-purple-500">=</span>
              <img src={getAssetPath("/images/features/wing-special.png")} alt={t('evolution.combine.alt3')} className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSystem; 