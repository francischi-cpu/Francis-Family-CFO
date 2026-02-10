
import React from 'react';

const Medical: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover brightness-[0.4]" alt="Medical Hero" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide">
            以<span className="text-gold-400">諾貝爾獎級</span>的醫療科技<br />
            守護您家族的生命資產
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-slate-200">
            立足香港，直通日本。為高淨值家庭提供<br />
            【精密體檢 · 干細胞抗衰 · 重症轉診】全案服務
          </p>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
           <div className="bg-slate-50 p-8 rounded-2xl shadow-inner border border-slate-100">
              <h3 className="text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">📊 中日癌症 5 年生存率對比</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="font-bold text-medical-green">日本</span><span className="font-bold">66.2%</span></div>
                  <div className="w-full bg-slate-200 h-4 rounded-full"><div className="bg-medical-green h-4 rounded-full" style={{ width: '66.2%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span className="text-slate-500">中國</span><span className="text-slate-500">43.7%</span></div>
                  <div className="w-full bg-slate-200 h-4 rounded-full"><div className="bg-slate-400 h-4 rounded-full" style={{ width: '43.7%' }}></div></div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-6">數據來源：日本國立癌症研究中心 (2023)</p>
           </div>
           <div className="space-y-8">
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🏥</div>
                 <div>
                    <h4 className="text-lg font-bold text-navy-900">40+ 頂級醫療機構直連</h4>
                    <p className="text-slate-600 text-sm">直通東京大學附屬醫院、藤田醫科大學、德洲會等皇室御用級機構。</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🧬</div>
                 <div>
                    <h4 className="text-lg font-bold text-navy-900">諾貝爾獎級干細胞技術</h4>
                    <p className="text-slate-600 text-sm">提供符合日本《再生醫療安全法》監管的干細胞抗衰方案。</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-navy-900">精密體檢尊享套餐</h2>
          <p className="text-slate-600">一次排查 300 多種癌症風險</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
           {[
             { n: '東大醫院 · 亞洲尊享', p: '約 8.5w-9.1w RMB', t: '皇室級' },
             { n: '藤田醫科 · 先端體檢', p: '約 6.0w-6.8w RMB', t: '產學研' },
             { n: '德洲會 · 甄全篩查', p: '約 3.5w-4.5w RMB', t: '高性價比' }
           ].map(item => (
             <div key={item.n} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-medical-green">
                <div className="flex justify-between mb-4">
                   <h4 className="font-bold text-navy-900">{item.n}</h4>
                   <span className="bg-gold-100 text-gold-600 text-[10px] px-2 py-0.5 rounded font-bold uppercase">{item.t}</span>
                </div>
                <div className="text-medical-green font-bold text-xl mb-6">{item.p}</div>
                <ul className="text-xs text-slate-500 space-y-2 mb-8">
                   <li>✅ 全身 PET-CT 早期癌篩</li>
                   <li>✅ 腫瘤標誌物全項</li>
                   <li>✅ 1V1 醫療翻譯陪同</li>
                </ul>
                <button onClick={() => window.open('https://wa.me/85262644926')} className="w-full py-2 border border-medical-green text-medical-green rounded font-bold hover:bg-medical-green hover:text-white transition">預約諮詢</button>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};

export default Medical;
