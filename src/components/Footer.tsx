import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">聯絡我們</h3>
            <div className="space-y-2 text-sm">
              <p>100 MVP 經理人徵選工作小組</p>
              <p>電話：02-8773-9808 #238 葉小姐</p>
              <p>信箱：mvp@bnext.com.tw</p>
              <p>服務時間：週一至週五 10:00-17:00</p>
            </div>
          </div>
        </div>

        {/* Past Reviews */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 items-center">
            <span className="text-white font-bold">歷屆回顧</span>
            {[2024, 2023, 2022, 2021, 2020].map(year => (
              <a key={year} href="#" className="text-sm hover:text-mvp-gold transition-colors">{year}</a>
            ))}
          </div>
        </div>

        {/* Group Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-white transition-colors">Bnext Media 數位時代</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">經理人 Manager Today</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Shopping Design</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Meet 創業小聚</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="hover:text-white transition-colors">Web3+</a>
          </div>
          <p>© 2026 Business Next Media Corp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
