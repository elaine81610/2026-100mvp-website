import React, { useState, useEffect } from 'react';
import { Trophy, ArrowRight, Star, Leaf, Cpu, Box, TrendingUp, Users } from 'lucide-react';
import { DEADLINE_DATE, TIMELINE_EVENTS, CATEGORIES_DESC } from '@/constants';
import { PageView } from '@/types';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16 text-center" data-aos="fade-up">
    {subtitle && <h3 className="text-mvp-gold tracking-[0.3em] text-xs font-bold uppercase mb-4 opacity-80">{subtitle}</h3>}
    <h2 className="text-3xl md:text-5xl font-serif text-white relative inline-block">
      {title}
    </h2>
    <div className="w-12 h-[1px] bg-mvp-gold/50 mx-auto mt-6"></div>
  </div>
);

const HomePage = ({ setPage }: { setPage: (p: PageView) => void }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = DEADLINE_DATE.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft('已截止');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf': return <Leaf size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'Box': return <Box size={24} />;
      case 'TrendingUp': return <TrendingUp size={24} />;
      case 'Users': return <Users size={24} />;
      default: return <Star size={24} />;
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mvp-black">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-mvp-gold/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-mvp-red/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <div className="mb-8 inline-flex items-center gap-3 border border-white/10 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-mvp-gold rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-xs tracking-[0.2em] font-medium">ENTRIES OPEN UNTIL AUGUST 08</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight">
            The Power to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mvp-gold via-white to-mvp-gold">Change the World</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            經理人是改變世界最有力量的一群人。第 19 屆 100MVP 經理人徵件正式啟動，尋找在變動時代中，展現卓越領導力的 MVP。
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => setPage('apply')}
              className="group relative px-12 py-4 bg-white text-black hover:bg-mvp-gold transition-colors duration-500 font-medium tracking-[0.15em] text-sm overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                APPLY NOW <ArrowRight size={16} />
              </span>
            </button>
            <div className="text-left border-l border-white/20 pl-6">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-1">DEADLINE COUNTDOWN</p>
              <p className="text-xl font-mono text-mvp-gold">{timeLeft}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs text-gray-500 hover:text-mvp-gold border border-white/10 hover:border-mvp-gold px-4 py-2 rounded-full transition-all"
            >
              徵件時程
            </button>
            <button 
              onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs text-gray-500 hover:text-mvp-gold border border-white/10 hover:border-mvp-gold px-4 py-2 rounded-full transition-all"
            >
              徵件類別
            </button>
            <button 
              onClick={() => document.getElementById('jury')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs text-gray-500 hover:text-mvp-gold border border-white/10 hover:border-mvp-gold px-4 py-2 rounded-full transition-all"
            >
              評審陣容
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-32 bg-mvp-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="徵件時程" subtitle="TIMELINE" />
          
          <div className="relative mt-20">
            {/* Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
              {TIMELINE_EVENTS.map((event, idx) => (
                <div key={idx} className="relative z-10 group text-center md:text-left">
                  <div className={`w-3 h-3 rounded-full mx-auto md:mx-0 mb-6 transition-all duration-500 ${
                    event.status === 'current' 
                      ? 'bg-mvp-gold shadow-glow-gold scale-150' 
                      : event.status === 'past' ? 'bg-white/20' : 'bg-mvp-charcoal border border-white/20'
                  }`}></div>
                  
                  <div className="font-mono text-mvp-gold text-sm mb-2 opacity-80">{event.date}</div>
                  <h4 className={`text-lg font-serif mb-2 ${event.status === 'current' ? 'text-white' : 'text-gray-400'}`}>
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto md:mx-0">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-32 bg-mvp-charcoal relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="徵件類別" subtitle="CATEGORIES" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES_DESC.map((cat, idx) => (
              <div id={`category-${idx}`} key={idx} className="group relative bg-white/5 border border-white/5 p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 scroll-mt-32">
                <div className="mb-6 text-mvp-gold opacity-50 group-hover:opacity-100 transition-opacity">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{cat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-mvp-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jury Section */}
      <section id="jury" className="py-24 bg-mvp-black">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle title="評審陣容" subtitle="JURY" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-mvp-gold transition-colors">
                  <img src={`https://picsum.photos/200/200?random=${i+50}`} alt="Jury" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">專業評審 {i}</h4>
                <p className="text-xs text-mvp-gold uppercase tracking-widest mb-2">TITLE HERE</p>
                <p className="text-xs text-gray-500">知名企業董事長 / 學界權威代表</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
