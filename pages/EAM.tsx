
import React from 'react';

const EAM: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="EAM Hero" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <div className="inline-block px-3 py-1 mb-6 border border-tech-blue text-tech-blue bg-blue-900/30 text-sm tracking-widest uppercase rounded-full">External Asset Management</div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            站在<span className="text-gold-400">買方立場</span><br />
            鏈接全球頂級私行
          </h1>
          <p className="text-xl font-light text-slate-300">
            告別單一銀行的銷售導向。通過 EAM 模式，我們為您聚合中金、華泰、LGT 等機構級投資能力。
          </p>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-navy-900">為什麼轉向 EAM 模式？</h2>
            <p className="text-slate-600">傳統私行模式下，RM 只銷售自家產品，利益往往與客戶衝突。EAM 代表您的利益，統一管理多個銀行帳戶，篩選全市場最優產品。</p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
              <div className="text-gold-600 font-bold mb-2">Francis EAM 買方模式</div>
              <div className="flex flex-col items-center gap-4 py-4">
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white border rounded text-[10px]">中金</span>
                    <span className="px-2 py-1 bg-white border rounded text-[10px]">LGT</span>
                    <span className="px-2 py-1 bg-white border rounded text-[10px]">摩根</span>
                 </div>
                 <div className="h-4 w-px bg-slate-300"></div>
                 <div className="px-4 py-2 bg-navy-900 text-gold-400 rounded-full font-bold text-sm">Francis (EAM)</div>
                 <div className="h-4 w-px bg-slate-300"></div>
                 <div className="px-6 py-3 bg-white border-2 border-gold-400 rounded-lg font-bold text-navy-900">您 (客戶)</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
             <div className="bg-white p-6 rounded-xl shadow border-l-4 border-red-600">
                <h4 className="font-bold text-lg mb-2">CICC 中金國際</h4>
                <p className="text-sm text-slate-500">中國頂級投行。適合偏好中資美元債及穩健配置的客戶。</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-600">
                <h4 className="font-bold text-lg mb-2">HTSC 華泰國際</h4>
                <p className="text-sm text-slate-500">科技賦能。適合交易活躍、對流動性有要求的客戶。</p>
             </div>
             <div className="bg-white p-6 rounded-xl shadow border-l-4 border-navy-800">
                <h4 className="font-bold text-lg mb-2">Julius Bär / LGT</h4>
                <p className="text-sm text-slate-500">百年歐系私行。安全與隱私的代名詞。</p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-serif font-bold mb-6">全天候資產配置</h2>
            <p className="text-slate-400 mb-8">不論是降息週期的債券佈局，還是抗通脹的另類資產，我們提供全光譜投資工具。</p>
            <a href="https://wa.me/85262644926" className="inline-block px-8 py-3 bg-tech-blue rounded font-bold">預約策略解讀</a>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-4">
             {[
               { t: '💰 現金管理', d: '貨幣基金、短期國債。' },
               { t: '📈 固定收益', d: '投資級債券，鎖定長期利率。' },
               { t: '🌍 權益資產', d: '捕捉全球增長紅利。' },
               { t: '🏗️ 結構化產品', d: 'FCN/ELN 收益增強工具。' }
             ].map(item => (
               <div key={item.t} className="p-4 bg-navy-800 border border-white/5 rounded">
                  <div className="text-gold-400 font-bold mb-1">{item.t}</div>
                  <p className="text-xs text-slate-500">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EAM;
