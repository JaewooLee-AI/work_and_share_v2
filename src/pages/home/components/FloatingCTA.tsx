import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const ctaEl = document.getElementById('cta');
    if (!ctaEl) return;

    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => setVisible((v) => (entry.isIntersecting ? false : window.scrollY > 600 || v)),
      { threshold: 0.1 }
    );
    observer.observe(ctaEl);

    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToCta = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (dismissed || !visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 animate-float-cta-in">
      <div className="flex items-center gap-2 rounded-2xl bg-background-50/95 backdrop-blur-xl border border-background-200/40 shadow-2xl shadow-black/50 p-2 pl-4">
        <div className="flex-1 min-w-0">
          <p className="text-foreground-950 text-xs font-semibold truncate">첫 달 50% 할인</p>
          <p className="text-foreground-500 text-[11px] truncate">얼리버드 사전 예약 중</p>
        </div>
        <button
          onClick={scrollToCta}
          className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-600 text-white text-xs font-semibold whitespace-nowrap transition-all animate-cta-pulse"
        >
          사전 예약
        </button>
        <button
          onClick={() => setDismissed(true)}
          aria-label="닫기"
          className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-foreground-500 hover:text-foreground-950 hover:bg-background-200/50 transition-colors"
        >
          <i className="ri-close-line text-lg" />
        </button>
      </div>
    </div>
  );
}
