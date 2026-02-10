
import React from 'react';
import WealthPyramid from '../components/WealthPyramid';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Balanced 50/50 */}
      <header className="relative bg-navy-900 min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1486406141726-ded360332fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 text-white">
              <div className="inline-block px-3 py-1 mb-6 border border-gold-500 text-gold-400 text-xs tracking-[0.2em] uppercase rounded-full font-bold">
                Elite Family Office
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
                以<span className="text-gold-400">工程師的嚴謹</span><br />
                守護您家族的<span className="text-gold-400">傳世財富</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed">
                我是池望青 Francis，您的家庭 CFO。<br />
                以數據驅動決策，以邏輯構建架構，為中產及高淨值家庭提供從資產配置到家族傳承的全案管家服務。
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openFYC'))}
                  className="px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-black rounded shadow-xl hover:shadow-gold-500/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>🩺</span> 開啟 1 分鐘資產體檢
                </button>
                <a 
                  href="https://wa.me/85262644926"
                  target="_blank"
                  className="px-10 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/5 transition flex items-center justify-center"
                >
                  預約深度諮詢
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden bg-navy-800 border border-white/10">
                  <img src="https://picsum.photos/seed/cfo/1200/675" className="w-full h-full object-cover opacity-90" alt="Francis Intro Video" />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy-900/40 hover:bg-navy-900/20 transition-colors">
                    <button className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 text-3xl shadow-2xl transform transition hover:scale-110">
                      <span className="ml-1">▶</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points Section - Symmetrical Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6 tracking-tight">為什麼現代家庭需要一位 CFO？</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">
              在不確定的時代，單一的理財產品已無法支撐複雜的家庭需求。我們為您提供橫跨金融、法律、醫療的頂層設計。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 icon: '🚨',
                 title: '資產配置單一',
                 desc: '過度集中於房產或單一貨幣，缺乏應對全球化風險的「蓄水池」。',
                 solution: 'Francis 方案：多元化 EAM 資產管理架構。',
                 color: 'border-slate-200'
               },
               {
                 icon: '🧩',
                 title: '缺乏體系規劃',
                 desc: '買了很多保險和理財，卻在極端風險或傳承節點上存在致命「斷層」。',
                 solution: 'Francis 方案：全生命週期「財富金字塔」模型。',
                 color: 'border-gold-400'
               },
               {
                 icon: '🩺',
                 title: '生命資產空位',
                 desc: '擁有財富卻沒有優質的全球醫療資源對接，面對重疾時缺乏主動權。',
                 solution: 'Francis 方案：直通日本頂級醫療綠色通道。',
                 color: 'border-slate-200'
               }
             ].map((item, idx) => (
               <div key={idx} className={`p-10 bg-slate-50 rounded-2xl border-b-4 ${item.color} shadow-sm hover:shadow-md transition-all`}>
                 <div className="text-4xl mb-6">{item.icon}</div>
                 <h3 className="text-xl font-bold text-navy-900 mb-4">{item.title}</h3>
                 <p className="text-slate-600 text-sm mb-6 leading-relaxed">{item.desc}</p>
                 <div className="pt-6 border-t border-slate-200">
                    <p className="font-bold text-gold-600 text-sm italic">{item.solution}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Wealth Pyramid Section - Balanced 50/50 Split */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <WealthPyramid />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <span className="text-gold-600 font-bold tracking-widest text-sm uppercase mb-4 block">Methodology</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-8">
                財富管理的<span className="text-gold-500">結構化工程</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Francis 借鑒工程學「地基-框架-封頂」的邏輯，將家庭財富拆解為四個維度，確保在任何市場環境下都能保持穩態。
              </p>
              
              <div className="space-y-6">
                {[
                  { level: '頂層', title: '傳承與法稅', desc: '信託架構、稅務身份、意願傳遞', icon: '👑' },
                  { level: '中層', title: '全球增值', desc: 'EAM、VUL、海外私募基金', icon: '📈' },
                  { level: '底層', title: '風險對沖', desc: '重疾保險、應急現金流、高端醫療', icon: '🛡️' }
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-navy-900 text-gold-400 rounded-lg flex items-center justify-center text-xl shrink-0">
                      {row.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gold-100 text-gold-600 rounded uppercase">{row.level}</span>
                        <h4 className="font-bold text-navy-900">{row.title}</h4>
                      </div>
                      <p className="text-xs text-slate-500">{row.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Symmetrical 50/50 Split */}
      <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-gold-400 font-serif text-sm tracking-[0.3em] mb-4 uppercase font-bold">The Principal</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                池望青 Francis <br />
                <span className="text-slate-400 font-light">理工男的嚴密邏輯 x 全球化金融視野</span>
              </h3>
              <div className="space-y-6 text-slate-300 leading-relaxed mb-10">
                <p>
                  畢業於<b>早稻田大學</b>與<b>電子科技大學</b>，曾任職於 <b>Intel（英特爾）</b>負責複雜系統工程。這段經歷賦予了我對「架構」的極致追求。
                </p>
                <p>
                  身為<b>胤源世創集團（Nvision Legacy）高級總監</b>，我主張以工程師的思維，為客戶「排雷」並優化資產效率。我不只是在管理財富，更是在為您的家族構建一套可持續的生存系統。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['CFA 協會成員', 'MDRT/COT 頂尖會員', 'IA 持牌人 JJ6306'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gold-400 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: '累積服務家庭', val: '200+', unit: '個' },
                  { label: '跨境金融資歷', val: '10+', unit: '年' },
                  { label: '資產健康提升', val: '100', unit: '%' },
                  { label: '專業團隊支持', val: '50+', unit: '人' }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center group hover:bg-gold-500/10 transition-colors">
                    <div className="text-3xl md:text-4xl font-black text-gold-400 mb-2 font-serif">
                      {stat.val}<span className="text-lg ml-1">{stat.unit}</span>
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center gap-4">
                 <div className="text-3xl">🤝</div>
                 <div className="text-sm text-slate-300">
                   <b>嚴格合規與保密</b>：我們深知隱私對您的重要性，所有諮詢均受專業保密協議保護。
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
