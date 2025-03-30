import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAssetPath } from '@/utils/constants';

const EvolutionSystem = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('evolution.features.gameModes.title'),
      description: t('evolution.features.gameModes.description'),
      emoji: "🎮",
      subEmojis: ["🎯", "⏱️", "🧩"],
      pros: t('evolution.features.gameModes.pros'),
      cons: t('evolution.features.gameModes.cons')
    },
    {
      title: t('evolution.features.powerUps.title'),
      description: t('evolution.features.powerUps.description'),
      emoji: "⚡",
      subEmojis: ["🔍", "❄️", "🔄"],
      pros: t('evolution.features.powerUps.pros'),
      cons: t('evolution.features.powerUps.cons')
    },
    {
      title: t('evolution.features.collection.title'),
      description: t('evolution.features.collection.description'),
      emoji: "🏆",
      subEmojis: ["🍎", "🥭", "🥝"],
      pros: t('evolution.features.collection.pros'),
      cons: t('evolution.features.collection.cons')
    }
  ];

  const levels = [
    {
      emoji: "🌱",
      gradient: "from-green-400 to-green-600",
      ...{
        title: t('evolution.levels.beginner.title'),
        description: t('evolution.levels.beginner.description')
      }
    },
    {
      emoji: "🍊",
      gradient: "from-yellow-400 to-orange-600",
      ...{
        title: t('evolution.levels.intermediate.title'),
        description: t('evolution.levels.intermediate.description')
      }
    },
    {
      emoji: "🌟",
      gradient: "from-purple-400 to-purple-600",
      ...{
        title: t('evolution.levels.expert.title'),
        description: t('evolution.levels.expert.description')
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          {t('evolution.title')}
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          {t('evolution.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300 border border-white/10">
              <div className="rounded-lg overflow-hidden mb-6 h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4">
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-6xl mb-4 animate-bounce">{feature.emoji}</span>
                  <div className="flex gap-4">
                    {feature.subEmojis.map((emoji, i) => (
                      <span key={i} className="text-3xl animate-pulse">{emoji}</span>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="flex justify-between text-sm">
                <span className="text-green-400">✨ {feature.pros}</span>
                <span className="text-purple-400">💫 {feature.cons}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">{t('evolution.levels.title')}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {levels.map((level, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4 border border-white/10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${level.gradient} flex items-center justify-center text-2xl`}>
                  {level.emoji}
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold">{level.title}</h4>
                  <p className="text-gray-300 text-sm">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSystem; 