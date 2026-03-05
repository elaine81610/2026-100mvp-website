import React, { useState } from 'react';
import { ExternalLink, FileText, CheckCircle, ArrowRight, HelpCircle, CreditCard, ChevronDown, ChevronUp } from 'lucide-react';
import { PageView } from '@/types';
import { FAQ_ITEMS } from '@/constants';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && <h3 className="text-mvp-gold tracking-[0.3em] text-xs font-bold uppercase mb-4 opacity-80">{subtitle}</h3>}
    <h2 className="text-3xl md:text-5xl font-serif text-white relative inline-block">
      {title}
    </h2>
    <div className="w-12 h-[1px] bg-mvp-gold/50 mx-auto mt-6"></div>
  </div>
);

const ApplyPage = ({ setPage }: { setPage: (p: PageView) => void }) => {
  const [step, setStep] = useState<'info' | 'payment' | 'form'>('info');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-mvp-black animate-fade-in">
      
      {/* Step 1: Info & Benefits */}
      {step === 'info' && (
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="參獎權益" subtitle="BENEFITS" />
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-8 bg-white/5 border border-white/5 rounded-xl hover:border-mvp-gold/30 transition-colors group">
              <div className="text-4xl font-serif text-mvp-gold mb-4 opacity-50 group-hover:opacity-100">01</div>
              <h3 className="text-xl font-bold text-white mb-3">榮耀加冕</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                獲獎者將受邀出席年度頒獎典禮，接受公開表揚，並獲得專屬獎座與證書，彰顯個人與企業的卓越成就。
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/5 rounded-xl hover:border-mvp-gold/30 transition-colors group">
              <div className="text-4xl font-serif text-mvp-gold mb-4 opacity-50 group-hover:opacity-100">02</div>
              <h3 className="text-xl font-bold text-white mb-3">媒體曝光</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                獲獎事蹟將刊登於《經理人月刊》專刊及數位平台，透過全方位的媒體報導，提升個人品牌與企業聲譽。
              </p>
            </div>
            <div className="p-8 bg-white/5 border border-white/5 rounded-xl hover:border-mvp-gold/30 transition-colors group">
              <div className="text-4xl font-serif text-mvp-gold mb-4 opacity-50 group-hover:opacity-100">03</div>
              <h3 className="text-xl font-bold text-white mb-3">社群連結</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                加入 MVP 經理人專屬社群，參與跨界交流活動，與歷屆得主建立深厚連結，拓展人脈與合作機會。
              </p>
            </div>
          </div>

          <SectionTitle title="報名須知" subtitle="INFORMATION" />
          
          <div className="max-w-4xl mx-auto bg-mvp-charcoal border border-white/5 rounded-2xl p-8 md:p-12 mb-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl font-bold text-white">準備資料</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="text-mvp-gold shrink-0 mt-1" size={18} />
                    <span>基本個人與公司資料</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="text-mvp-gold shrink-0 mt-1" size={18} />
                    <span>一句話績效亮點 (30字內)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="text-mvp-gold shrink-0 mt-1" size={18} />
                    <span>PDCA 核心事蹟 (Plan, Do, Check/Act)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <CheckCircle className="text-mvp-gold shrink-0 mt-1" size={18} />
                    <span>附件：在職證明、個人照、佐證資料</span>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-auto bg-white/5 p-8 rounded-xl text-center border border-white/10">
                <p className="text-gray-400 text-sm mb-2">報名費用</p>
                <div className="text-4xl font-serif text-mvp-gold mb-6">NT$ 6,000</div>
                <button 
                  onClick={() => setStep('payment')}
                  className="w-full bg-mvp-gold hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors tracking-widest shadow-glow-gold flex items-center justify-center gap-2"
                >
                  前往繳費 <ArrowRight size={18} />
                </button>
                <p className="text-xs text-gray-500 mt-4">繳費完成後即可填寫報名表</p>
                <button
                  onClick={() => setStep('form')}
                  className="text-xs text-gray-600 underline hover:text-mvp-gold mt-2 transition-colors"
                >
                  (模擬測試) 已繳費，直接填寫資料
                </button>
              </div>
            </div>
          </div>

          <SectionTitle title="常見問題" subtitle="FAQ" />
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-white">{item.q}</span>
                  {openFaq === idx ? <ChevronUp className="text-mvp-gold" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Payment */}
      {step === 'payment' && (
        <div className="max-w-2xl mx-auto px-6 text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-20 h-20 bg-mvp-gold/20 rounded-full flex items-center justify-center text-mvp-gold mx-auto mb-6">
              <CreditCard size={40} />
            </div>
            <h2 className="text-3xl font-serif text-white mb-4">繳費確認</h2>
            <p className="text-gray-400">請確認以下資訊並完成繳費。</p>
          </div>

          <div className="bg-mvp-charcoal border border-white/5 rounded-2xl p-8 mb-8 text-left">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
              <span className="text-gray-400">項目</span>
              <span className="text-white font-bold">2026 100MVP 經理人報名費</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">金額</span>
              <span className="text-2xl font-serif text-mvp-gold">NT$ 6,000</span>
            </div>
            <div className="bg-white/5 p-4 rounded text-sm text-gray-400 mt-6">
              <p className="mb-2">模擬付款流程：點擊下方按鈕將模擬付款成功。</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => setStep('info')}
              className="flex-1 border border-white/20 text-white py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              返回
            </button>
            <button 
              onClick={() => setStep('form')}
              className="flex-1 bg-mvp-gold text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-colors shadow-glow-gold"
            >
              確認付款
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Form (Original Form) */}
      {step === 'form' && (
        <div className="max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-green-500 bg-green-500/10 px-4 py-2 rounded-full mb-6 border border-green-500/20">
              <CheckCircle size={16} />
              <span className="text-sm font-bold">付款成功</span>
            </div>
            <h2 className="text-4xl font-serif text-white mb-4">填寫報名資料</h2>
            <p className="text-gray-400">請詳細填寫以下欄位，完成後將進入審核階段。</p>
          </div>

          <div className="bg-mvp-charcoal border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
             {/* ... (Existing Form Content) ... */}
             <div className="animate-fade-in space-y-12">
            
            {/* Section 1: Basic Info */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-mvp-gold font-bold">01</div>
                <h3 className="text-xl font-serif text-white">基本資料</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">姓名 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors" placeholder="請輸入姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">聯絡電話 <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors" placeholder="請輸入聯絡電話" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors" placeholder="請輸入 Email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">公司名稱 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors" placeholder="請輸入公司名稱" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">職稱 <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors" placeholder="請輸入職稱" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">報名類別 <span className="text-red-500">*</span></label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors">
                    <option value="">請選擇類別</option>
                    <option>永續經營</option>
                    <option>數位創新</option>
                    <option>產品服務</option>
                    <option>行銷業務</option>
                    <option>組織治理</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Performance */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-mvp-gold font-bold">02</div>
                <h3 className="text-xl font-serif text-white">績效亮點</h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">一句話績效 (30字內) <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors" placeholder="例如：導入 AI 客服，降低 40% 人力成本" />
                </div>
              </div>
            </div>

            {/* Section 3: PDCA */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-mvp-gold font-bold">03</div>
                <h3 className="text-xl font-serif text-white">PDCA 核心事蹟</h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs text-mvp-gold uppercase tracking-wider font-bold">Plan 策略規劃 (影響力) <span className="text-red-500">*</span></label>
                  <p className="text-xs text-gray-500 mb-2">請說明目標設定與資源規劃</p>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors resize-none" placeholder="請輸入 Plan 內容..."></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-mvp-gold uppercase tracking-wider font-bold">Do 執行過程 (執行力/創新力) <span className="text-red-500">*</span></label>
                  <p className="text-xs text-gray-500 mb-2">請說明具體執行過程與克服挑戰</p>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors resize-none" placeholder="請輸入 Do 內容..."></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-mvp-gold uppercase tracking-wider font-bold">Check/Act 具體成效 (績效力) <span className="text-red-500">*</span></label>
                  <p className="text-xs text-gray-500 mb-2">請說明量化數字、檢討與未來延伸</p>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mvp-gold transition-colors resize-none" placeholder="請輸入 Check/Act 內容..."></textarea>
                </div>
              </div>
            </div>

            {/* Section 4: File Upload */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-mvp-gold font-bold">04</div>
                <h3 className="text-xl font-serif text-white">附件上傳</h3>
              </div>

              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-mvp-gold/50 transition-colors cursor-pointer bg-white/5">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
                  <FileText size={24} />
                </div>
                <p className="text-white font-medium mb-2">點擊或拖曳檔案至此處</p>
                <p className="text-xs text-gray-500">支援 PDF, JPG, PNG (上限 10MB)</p>
                <p className="text-xs text-gray-500 mt-2">請上傳：在職證明、個人照、補充佐證資料</p>
              </div>
            </div>

            <div className="pt-6">
              <button type="button" className="w-full bg-mvp-gold hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition-colors tracking-widest shadow-glow-gold">
                確認送出申請
              </button>
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyPage;
