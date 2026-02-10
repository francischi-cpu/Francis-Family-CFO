
import React, { useState, useEffect } from 'react';

const questions = [
  {
    q: "您家庭目前的資產配置中，非人民幣資產（美元/港幣等）佔比是多少？",
    options: [
      { text: "幾乎為 0% (主要在國內)", score: 0 },
      { text: "約 10% - 20%", score: 5 },
      { text: "超過 30% 或已有均衡配置", score: 10 }
    ],
    insight: "單一貨幣資產面臨匯率波動風險，建議構建多元貨幣蓄水池。"
  },
  {
    q: "如果家庭收入主力需暫停工作3年，現有的【流動現金】能否維持目前生活品質？",
    options: [
      { text: "很難，會非常焦慮", score: 0 },
      { text: "勉強可以，但需要縮減開支", score: 5 },
      { text: "完全沒問題，有充足現金流", score: 10 }
    ],
    insight: "現金流是家庭的血液。您需要建立'被動收入'系統以應對極端情況。"
  },
  {
    q: "您是否擁有直通海外（如日本、美國）頂級醫院的醫療資源或保險？",
    options: [
      { text: "沒有，主要靠國內社保", score: 0 },
      { text: "有買普通商業醫療險", score: 5 },
      { text: "有高端醫療險/全球就醫綠通", score: 10 }
    ],
    insight: "面對重疾，'有錢'不等於'有權'。海外精密醫療通道是生命的最後防線。"
  },
  {
    q: "針對 CRS 全球稅務透明化，您是否做過專門的資產隔離或身份規劃？",
    options: [
      { text: "不太了解 CRS", score: 0 },
      { text: "聽說過，但未做具體操作", score: 5 },
      { text: "已有信託或稅務身份規劃", score: 10 }
    ],
    insight: "資產'裸奔'極易引發稅務合規風險。EAM與保單架構是合規的避風港。"
  },
  {
    q: "關於財富傳承，是否已安排了指定受益人或家族信托？",
    options: [
      { text: "還沒考慮，順其自然", score: 0 },
      { text: "有買保險，但沒做信託", score: 5 },
      { text: "已有完善的遺囑或信託架構", score: 10 }
    ],
    insight: "傳承需要法律與金融工具的結合，避免身後紛爭。"
  }
];

const FYCModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [insights, setInsights] = useState<string[]>([]);

  useEffect(() => {
    const handleOpen = () => setIsVisible(true);
    window.addEventListener('openFYC', handleOpen);
    return () => window.removeEventListener('openFYC', handleOpen);
  }, []);

  const reset = () => {
    setStep('welcome');
    setCurrentIdx(0);
    setTotalScore(0);
    setInsights([]);
    setIsVisible(false);
  };

  const startQuiz = () => setStep('quiz');

  const handleSelect = (score: number, insight?: string) => {
    const nextScore = totalScore + score;
    setTotalScore(nextScore);
    if (insight && score < 10) setInsights(prev => [...prev, insight]);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStep('result');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/90 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative">
        <button onClick={reset} className="absolute top-4 right-4 text-slate-400 hover:text-navy-900 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="h-2 bg-slate-100">
          <div 
            className="h-full bg-gold-500 transition-all duration-500" 
            style={{ width: `${step === 'quiz' ? ((currentIdx + 1) / questions.length) * 100 : step === 'result' ? 100 : 0}%` }}
          />
        </div>

        <div className="p-8 md:p-10">
          {step === 'welcome' && (
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🩺</div>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">家庭財富免疫力體檢</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                作為您的 Family CFO，我將通過 5 個核心維度，快速診斷您家庭資產的抗風險能力。
              </p>
              <button 
                onClick={startQuiz}
                className="w-full py-4 bg-navy-900 text-white font-bold rounded-lg shadow-lg hover:bg-navy-800 transition"
              >
                開始診斷 (僅需 1 分鐘)
              </button>
            </div>
          )}

          {step === 'quiz' && (
            <div>
              <span className="text-xs font-bold text-gold-500 tracking-widest uppercase mb-2 block">問題 {currentIdx + 1}/5</span>
              <h3 className="text-xl font-bold text-navy-900 mb-6 min-h-[4rem]">{questions[currentIdx].q}</h3>
              <div className="space-y-3">
                {questions[currentIdx].options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSelect(opt.score, questions[currentIdx].insight)}
                    className="w-full text-left p-4 rounded border border-slate-200 hover:border-gold-400 hover:bg-gold-50 transition flex justify-between items-center group"
                  >
                    <span className="font-medium text-slate-700 group-hover:text-navy-900">{opt.text}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-gold-500">➜</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'result' && (
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <div className="absolute inset-0 border-8 border-slate-100 rounded-full"></div>
                <div className="z-10 text-center">
                  <span className="text-4xl font-bold text-navy-900 block">{(totalScore / 50) * 100}</span>
                  <span className="text-xs text-slate-500">健康分</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {totalScore >= 40 ? "您的家庭財富非常健康！🏆" : totalScore >= 25 ? "存在潛在風險，建議優化 ⚠️" : "資產處於高風險狀態 🚨"}
              </h3>
              <div className="text-sm text-slate-600 mb-6 bg-slate-50 p-4 rounded text-left border-l-4 border-gold-400">
                {insights.length > 0 ? (
                  <ul className="space-y-2">
                    {insights.slice(0, 2).map((ins, i) => <li key={i}>• {ins}</li>)}
                  </ul>
                ) : (
                  <p>您的資產架構非常穩健。作為優化，您可以考慮家族辦公室架構以實現更長遠的傳承。</p>
                )}
              </div>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/85262644926" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-green-600 text-white font-bold rounded shadow flex items-center justify-center gap-2"
                >
                  WhatsApp 深度解讀
                </a>
                <button onClick={reset} className="block w-full py-3 border border-slate-300 text-slate-500 rounded">
                  稍後再說
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FYCModal;
