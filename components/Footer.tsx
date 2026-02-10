
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-slate-500 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <h3 className="text-white font-serif font-bold text-2xl mb-6">Francis Family CFO</h3>
            <p className="max-w-sm text-slate-400 leading-relaxed mb-6">
              以工程師的嚴謹，構建您家族財富的護城河。立足香港，鏈接全球，提供創富、守富、傳富的全案服務。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">服務板塊</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#/asset" className="hover:text-gold-400 transition">全球特色資管 (EAM)</a></li>
              <li><a href="#/medical" className="hover:text-gold-400 transition">日本高端醫療</a></li>
              <li><a href="#/trust" className="hover:text-gold-400 transition">保單信託與傳承</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">聯繫我們</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-gold-400">📍</span> 香港 · 銅鑼灣
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gold-400">💬</span> WhatsApp: +852 6264 4926
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-center text-xs">
          <p>&copy; 2026 Francis Family CFO (池望青). 投資涉及風險，本文不構成投資建議。</p>
          <p className="mt-2">胤源世創集團顧問 | 嚴格遵守保密協議</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
