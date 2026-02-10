
import React from 'react';

const Trust: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1628153075677-2da36b94c40b?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Trust Hero" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <div className="inline-block px-3 py-1 mb-6 border border-gold-400 text-gold-400 text-sm tracking-widest uppercase rounded-full">Family Trust & Legacy</div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            讓愛與財富<br /><span className="text-gold-400">源遠流長</span>
          </h1>
          <p className="text-xl font-light text-slate-300">
            從「保單信託」到「私人信託公司 (PTC)」，我們為您的家族構建堅不可摧的資產護城河。
          </p>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
           {[
             { i: '🔒', t: '資產隔離與保密', d: '信託資產獨立於個人債務，高度保密，無需公開遺囑認證。' },
             { i: '⚖️', t: '規避遺囑認證', d: '快速、私密地傳遞資產，避免資金凍結風險，確保家人生活無憂。' },
             { i: '🎮', t: '靈活控制權', d: '可設定精細分配條款（如創業金、婚嫁金），防止二代揮霍。' }
           ].map(item => (
             <div key={item.t} className="p-8 border border-slate-100 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300">
                <div className="text-4xl mb-6">{item.i}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{item.t}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">保單信託：傳承首選</h2>
             <p className="text-slate-600 mb-6">這是一種將「保險槓桿」與「信託契約」完美結合的工具。設立門檻低，功能極其強大。</p>
             <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-bold">✅ 防揮霍：按月發放收益</li>
                <li className="flex items-center gap-3 text-sm font-bold">✅ 防婚變：婚前財產精確隔離</li>
                <li className="flex items-center gap-3 text-sm font-bold">✅ 省心：無需子女具備管理巨款能力</li>
             </ul>
             <div className="mt-10">
                <a href="https://wa.me/85262644926" className="px-8 py-3 bg-navy-900 text-white rounded font-bold">預約架構師</a>
             </div>
          </div>
          <div className="md:w-1/2 bg-navy-900 p-8 rounded-2xl shadow-2xl text-white">
             <h3 className="text-xl font-bold mb-8 text-gold-400">進階解決方案</h3>
             <div className="space-y-8">
                <div className="border-l-2 border-gold-400 pl-6">
                   <h4 className="font-bold text-lg">全權代管信託</h4>
                   <p className="text-sm text-slate-400 mt-1">代管房產、股票、股權等多元資產，實現專業化管理與傳承。</p>
                </div>
                <div className="border-l-2 border-gold-400 pl-6">
                   <h4 className="font-bold text-lg">私人信託公司 (PTC)</h4>
                   <p className="text-sm text-slate-400 mt-1">家族辦公室頂配。家族成員進入董事會，保留核心資產控制權。</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trust;
