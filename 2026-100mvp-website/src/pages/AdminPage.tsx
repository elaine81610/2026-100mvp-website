import React from 'react';
import { MOCK_MANAGERS } from '@/constants';

const AdminPage = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-mvp-black animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif text-white">後台管理系統</h2>
          <div className="text-gray-400 text-sm">目前顯示：2026 年度報名資料</div>
        </div>

        <div className="bg-mvp-charcoal border border-white/5 rounded-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">ID</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">姓名</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">公司/職稱</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">類別</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">繳費狀態</th>
                  <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {MOCK_MANAGERS.filter(m => m.year === 2026).map(manager => (
                  <tr key={manager.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-gray-500 font-mono">#{manager.id}</td>
                    <td className="p-4 text-white font-medium">{manager.name}</td>
                    <td className="p-4 text-gray-400">
                      <div className="text-white">{manager.company}</div>
                      <div className="text-xs">{manager.title}</div>
                    </td>
                    <td className="p-4 text-gray-400">
                      <span className="bg-white/10 px-2 py-1 rounded text-xs text-gray-300">{manager.category}</span>
                    </td>
                    <td className="p-4">
                      {manager.paid ? (
                        <span className="text-green-500 text-xs font-bold border border-green-500/30 bg-green-500/10 px-2 py-1 rounded">已繳費</span>
                      ) : (
                        <span className="text-red-500 text-xs font-bold border border-red-500/30 bg-red-500/10 px-2 py-1 rounded">未繳費</span>
                      )}
                    </td>
                    <td className="p-4">
                      <button className="text-mvp-gold hover:text-white text-sm mr-4 transition-colors">編輯</button>
                      <button className="text-gray-500 hover:text-red-500 text-sm transition-colors">刪除</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
