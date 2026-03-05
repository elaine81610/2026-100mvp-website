import React, { useState, useMemo } from 'react';
import { MOCK_MANAGERS, CATEGORIES_DESC } from '@/constants';
import { Manager, CategoryType } from '@/types';
import { Search, X, ExternalLink, ChevronRight } from 'lucide-react';

const HallOfFamePage = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null);

  // Extract unique years from data, sort descending
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(MOCK_MANAGERS.map(m => m.year))).sort((a, b) => b - a);
    return uniqueYears.filter(y => y < 2026); // Exclude current year candidates if any
  }, []);

  // Filter managers by year and search term
  const filteredManagers = useMemo(() => {
    return MOCK_MANAGERS.filter(manager => {
      const matchYear = manager.year === selectedYear;
      const matchSearch = 
        manager.name.includes(searchTerm) || 
        manager.company.includes(searchTerm) ||
        manager.title.includes(searchTerm);
      return matchYear && matchSearch;
    });
  }, [selectedYear, searchTerm]);

  // Group by category
  const managersByCategory = useMemo(() => {
    const grouped: Record<string, Manager[]> = {};
    CATEGORIES_DESC.forEach(cat => {
      grouped[cat.type] = filteredManagers.filter(m => m.category === cat.type);
    });
    return grouped;
  }, [filteredManagers]);

  const getCategoryTitle = (type: CategoryType) => {
    return CATEGORIES_DESC.find(c => c.type === type)?.title || type;
  };

  return (
    <div className="min-h-screen bg-mvp-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">歷屆得主</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            見證台灣經理人的榮耀時刻，探索各年度百大 MVP 經理人的卓越成就與創新思維。
          </p>
        </div>

        {/* Year Tabs & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-20 z-30 bg-mvp-black/95 backdrop-blur py-4 border-b border-white/10">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedYear === year
                    ? 'bg-mvp-gold text-black shadow-glow-gold'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {year} MVP
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="搜尋姓名、公司..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-mvp-gold transition-colors"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-16">
          {CATEGORIES_DESC.map(category => {
            const managers = managersByCategory[category.type];
            if (!managers || managers.length === 0) return null;

            return (
              <div key={category.type} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1 bg-mvp-gold rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  <span className="text-sm text-gray-500 uppercase tracking-wider hidden md:inline-block">
                    {category.desc}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {managers.map(manager => (
                    <div
                      key={manager.id}
                      onClick={() => setSelectedManager(manager)}
                      className="group bg-white/5 border border-white/10 p-5 rounded-xl cursor-pointer hover:bg-white/10 hover:border-mvp-gold/50 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-150"></div>
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-mvp-gold transition-colors">
                            {manager.name}
                          </h3>
                          {manager.image && (
                            <div className="w-2 h-2 rounded-full bg-mvp-gold/50"></div>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-sm text-gray-300 font-medium truncate">{manager.company}</p>
                          <p className="text-xs text-gray-500 truncate">{manager.title}</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                          <span>查看事蹟</span>
                          <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredManagers.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p>沒有找到符合條件的得主</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedManager && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedManager(null)}
          ></div>
          
          <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
            <button
              onClick={() => setSelectedManager(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left: Image or Placeholder */}
              <div className="w-full md:w-2/5 bg-mvp-charcoal relative min-h-[250px] md:min-h-full">
                {selectedManager.image ? (
                  <img 
                    src={selectedManager.image} 
                    alt={selectedManager.name} 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mvp-gold/20 to-transparent">
                    <span className="text-6xl font-serif font-bold text-white/10">MVP</span>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                  <span className="text-xs font-medium text-mvp-gold">
                    {getCategoryTitle(selectedManager.category)}
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-3/5 p-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedManager.name}</h2>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-400">
                    <span className="font-medium text-white">{selectedManager.company}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>{selectedManager.title}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-mvp-gold uppercase tracking-widest mb-3">得獎事蹟</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedManager.shortPerformance}
                    </p>
                  </div>

                  {selectedManager.articleUrl && (
                    <div className="pt-6 border-t border-white/10">
                      <a 
                        href={selectedManager.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-mvp-gold hover:text-white transition-colors group"
                      >
                        <span>閱讀經理人專訪報導</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallOfFamePage;
