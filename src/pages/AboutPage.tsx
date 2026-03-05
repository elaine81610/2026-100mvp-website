import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-mvp-black animate-fade-in">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              關於 <br />
              <span className="text-mvp-gold">100 MVP 經理人</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed font-light">
              <p>
                自 2008 年起，《經理人月刊》每年舉辦「100 MVP 經理人」選拔，從各行各業中挖掘出 100 位在該年度展現卓越績效的專業經理人。
              </p>
              <p>
                MVP 代表的不僅是 Most Valuable Player，更是 Manager, Visionary, Professional。我們深信，經理人是企業的中流砥柱，更是推動社會進步的關鍵力量。
              </p>
              <p>
                透過表彰這些傑出的領導者，我們希望建立一個學習與交流的平台，讓台灣的管理智慧得以傳承，讓創新的火花得以延續。
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-mvp-gold/10 transform translate-x-4 translate-y-4 border border-mvp-gold/20"></div>
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="About 100 MVP" 
              className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-mvp-charcoal py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-mvp-gold tracking-[0.3em] text-sm font-bold uppercase mb-4">COMMUNITY</h3>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-16">100 MVP 社群</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
              <h4 className="text-2xl font-serif text-white mb-4">交流連結</h4>
              <p className="text-gray-400 text-sm">
                定期舉辦 MVP 聯誼會，促進跨產業、跨領域的深度交流，激盪管理新思維。
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
              <h4 className="text-2xl font-serif text-white mb-4">知識共享</h4>
              <p className="text-gray-400 text-sm">
                邀請歷屆 MVP 分享實戰經驗，透過論壇、工作坊等形式，傳承寶貴的管理心法。
              </p>
            </div>
            <div className="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
              <h4 className="text-2xl font-serif text-white mb-4">共創價值</h4>
              <p className="text-gray-400 text-sm">
                集結百位經理人的力量，推動社會公益與產業創新，共同創造更大的社會價值。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
