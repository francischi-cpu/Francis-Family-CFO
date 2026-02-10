
import React from 'react';

const WealthPyramid: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-10">
      <svg width="600" height="500" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#d97706', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g transform="translate(300, 20)">
          {/* Top Level */}
          <g className="cursor-pointer transition-all hover:opacity-90">
            <polygon points="0,0 -80,120 80,120" fill="url(#goldGradient)" stroke="white" strokeWidth="2" />
            <text x="0" y="60" textAnchor="middle" fill="white" fontSize="24">👑</text>
            <text x="0" y="90" textAnchor="middle" fill="white" fontFamily="serif" fontWeight="bold" fontSize="16">財富傳承 & 信託</text>
            <text x="0" y="108" textAnchor="middle" fill="white" fontSize="10" opacity="0.8">Legacy & Tax Planning</text>
          </g>
          {/* Middle Level */}
          <g transform="translate(0, 125)" className="cursor-pointer transition-all hover:scale-[1.02]">
            <polygon points="-83,0 -130,70 130,70 83,0" fill="#1e293b" stroke="#fbbf24" strokeWidth="1" />
            <text x="0" y="35" textAnchor="middle" fill="#fbbf24" fontWeight="bold" fontSize="14">全球資產配置 (EAM / VUL)</text>
            <text x="0" y="52" textAnchor="middle" fill="#94a3b8" fontSize="10">Global Growth</text>
          </g>
          {/* Base Level 1 */}
          <g transform="translate(0, 200)" className="cursor-pointer transition-all hover:scale-[1.02]">
            <polygon points="-133,0 -180,70 180,70 133,0" fill="#334155" stroke="white" strokeWidth="1" />
            <text x="0" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">子女教育 & 養老儲備</text>
            <text x="0" y="52" textAnchor="middle" fill="#cbd5e1" fontSize="10">Education & Pension</text>
          </g>
          {/* Foundation Level */}
          <g transform="translate(0, 275)" className="cursor-pointer transition-all hover:scale-[1.02]">
            <polygon points="-183,0 -240,85 240,85 183,0" fill="#0f172a" stroke="white" strokeWidth="1" />
            <rect x="-240" y="85" width="480" height="10" fill="#fbbf24" />
            <text x="0" y="35" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">風險對衝 & 現金流</text>
            <text x="0" y="55" textAnchor="middle" fill="#cbd5e1" fontSize="12">保險槓桿 · 醫療資源 · 應急金</text>
            <text x="-160" y="75" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">法律架構</text>
            <text x="160" y="75" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">稅務合規</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default WealthPyramid;
