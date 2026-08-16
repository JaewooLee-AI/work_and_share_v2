import { useState, useEffect, useCallback } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  }, []);

  const navLinks = [
    { label: '공간 / 요금', target: 'curation' },
    { label: '시설', target: 'amenities' },
    { label: '오시는 길', target: 'location' },
    { label: 'FAQ', target: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-50/90 backdrop-blur-xl border-b border-background-200/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group"
          >
            <img
              alt=""
              aria-hidden="true"
              className="h-8 w-auto object-contain group-hover:scale-105 transition-transform"
              src="/logo-mark.png"
            />
            <img
              alt="WORK&SHARE"
              className="h-7 w-auto object-contain group-hover:scale-105 transition-transform"
              src="https://storage.helloreaddy.io/project_files/df01f9da-e54f-4f02-86fd-548ac2df6d4c/61eb2397-913d-4efa-afb9-9946d70a5f1b_compressed_unnamed.webp"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-foreground-700">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="hover:text-foreground-950 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scrollTo('curation')}
              className="inline-flex items-center px-5 py-2 rounded-full border border-background-200/60 text-foreground-800 hover:text-foreground-950 hover:border-background-200 text-xs font-medium transition-all whitespace-nowrap"
            >
              공간 둘러보기
            </button>
            <button
              onClick={() => scrollTo('cta')}
              className="inline-flex items-center px-5 py-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-xs font-medium transition-all whitespace-nowrap"
            >
              얼리버드 사전 예약
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 rounded-lg text-foreground-700 hover:text-foreground-950"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col items-center justify-center gap-1">
                <span className={`block w-4 h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                <span className={`block w-4 h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background-50/95 backdrop-blur-xl border-t border-background-200/30 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="block w-full text-left text-sm font-medium text-foreground-700 hover:text-foreground-950 py-2"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('curation')}
              className="block w-full text-left text-sm font-medium text-foreground-700 hover:text-foreground-950 py-2"
            >
              공간 둘러보기
            </button>
            <button
              onClick={() => scrollTo('cta')}
              className="block w-full text-left text-sm font-medium text-primary-500 py-2"
            >
              얼리버드 사전 예약
            </button>
          </div>
        </div>
      )}
    </header>
  );
}