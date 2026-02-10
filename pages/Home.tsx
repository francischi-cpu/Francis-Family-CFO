
import React from 'react';
import WealthPyramid from '../components/WealthPyramid';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative bg-navy-900 min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406141726-ded360332fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-white z-10">
            <div className="inline-block px-3 py-1 mb-4 border border-gold-500 text-gold-400 text-sm tracking-widest uppercase rounded-full">Family Office Service</div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              以<span className="text-gold-400">工程師的嚴謹</span>，<br />
              構建您家族財富的<span className="text-gold-400">護城河</span>。
            </h1>
            <p className="text-xl text-slate-300 mb-8 font-light max-w-2xl">
              我是池望青 Francis，您的家庭 CFO。<br />
              立足香港，鏈接全球，為中產及高淨值家庭提供<br />
              <span className="text-white font-medium">【創富 · 守富 · 傳富 · 享富】</span>的全案管家服務。
            </p>
            <div className="flex flex-col sm:row gap-4">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('openFYC'))}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-bold rounded shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>🚀</span> 開啟 1 分鐘家庭財務體檢
              </button>
            </div>
          </div>
          <div className="md:w-2/5 mt-10 md:mt-0 relative z-10">
            <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden border-2 border-gold-500/50 bg-black">
               <img src="https://picsum.photos/seed/francis/800/450" className="w-full h-full object-cover opacity-80" alt="Video Placeholder" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 text-2xl shadow-xl">▶</div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">為什麼您需要一位“家庭 CFO”？</h2>
          <p className="text-lg text-slate-600">從單一產品推銷，升級為全生命週期的財富管家</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
           <div className="p-8 bg-slate-50 rounded-xl border-t-4 border-slate-300 shadow-sm">
             <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2"><span className="text-red-500">⚠️</span> 資產裸奔風險</h3>
             <p className="text-slate-600 text-sm mb-4">面對 CRS 全球徵稅與匯率波動，缺乏合規架構，財富面臨縮水。</p>
             <p className="font-bold text-gold-600 text-sm">Francis 方案：EAM + VUL 雙引擎架構。</p>
           </div>
           <div className="p-8 bg-slate-50 rounded-xl border-t-4 border-gold-400 shadow-lg transform md:-translate-y-4">
             <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2"><span className="text-gold-500">💎</span> 缺乏頂層設計</h3>
             <p className="text-slate-600 text-sm mb-4">傳統理財只看收益，忽略家庭全貌。買了保險卻不知是否覆蓋極端風險。</p>
             <p className="font-bold text-gold-600 text-sm">Francis 方案：獨家“財富金字塔”模型。</p>
           </div>
           <div className="p-8 bg-slate-50 rounded-xl border-t-4 border-slate-300 shadow-sm">
             <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2"><span className="text-emerald-500">🏥</span> 醫療資源匱乏</h3>
             <p className="text-slate-600 text-sm mb-4">擁有財富卻無法觸達全球醫療。重疾來襲，只能被動等待床位。</p>
             <p className="font-bold text-gold-600 text-sm">Francis 方案：直通日本德洲會/東大就醫綠道。</p>
           </div>
        </div>
      </section>

      {/* Wealth Pyramid Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">財富管理的<span className="text-gold-500">金字塔法則</span></h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Francis 堅持<b>“先安底，後登頂”</b>的工程學邏輯。我們通過四層架構，確保您的財富不僅能穿越週期，更能代代相傳。
            </p>
            <div className="space-y-4 text-navy-900 font-bold">
               <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-gold-500"></div> 頂層：傳承與法稅 (Trust & Tax)</div>
               <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-navy-700"></div> 中層：全球增值 (EAM / VUL)</div>
               <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-slate-400"></div> 底層：安全基石 (Insurance / Cash)</div>
            </div>
          </div>
          <div className="md:w-2/3">
            <WealthPyramid />
          </div>
        </div>
      </section>

      {/* About Francis */}
      <section className="py-24 bg-navy-800 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="md:w-1/2">
            <h2 className="text-gold-400 font-serif text-lg tracking-widest mb-2 uppercase">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">理工男的邏輯 <span className="text-slate-400">x</span> 金融家的視野</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              我曾是 <b>Intel 資深工程師</b>，習慣用嚴密的邏輯去拆解複雜問題。現在的我，將這種“工程師思維”帶入了財富管理領域。
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              作為 <b>胤源世創集團高級總監</b>，我背靠強大的全球生態。我不做單一產品的推銷員，我做您家庭全生命週期的 CFO。
            </p>
            <div className="flex flex-wrap gap-3">
              {['早稻田/電子科大雙碩士', 'CFA 協會會員', 'MDRT/COT 會員', 'IA 持牌人 JJ6306'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-navy-700 border border-white/10 rounded text-xs text-gold-400">{tag}</span>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-navy-700 p-8 rounded-lg text-center border border-white/5">
              <div className="text-4xl font-bold text-gold-400 mb-2">10+</div>
              <div className="text-xs text-slate-400">年跨界經驗</div>
            </div>
            <div className="bg-navy-700 p-8 rounded-lg text-center border border-white/5">
              <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
              <div className="text-xs text-slate-400">客戶好評率</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
