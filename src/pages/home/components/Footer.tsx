import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    if (!termsOpen) return;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTermsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [termsOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-paper border-t border-ink pt-24 pb-12 px-6 md:px-12">
      <div className="grid grid-cols-12 gap-8 border-b border-paper/30 pb-20">
        {/* Slogan */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-end">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-[5.5rem] leading-[0.95] font-bold text-paper break-keep">
            Where Ideas <br />
            <span className="italic text-accent-primary">Collide</span> &amp; Grow.
          </h2>
          <p className="mt-8 font-sans text-sm md:text-base text-paper/70 max-w-md leading-relaxed">
            대학로의 창조적 에너지 속에서 당신의 비전을 현실로 바꾸는 공간.
            과도한 장식을 배제하고 본질에 집중합니다.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="col-span-12 md:col-span-4 font-mono text-xs uppercase tracking-widest flex flex-col gap-5 mt-12 md:mt-0 justify-end md:items-end">
          <button
            onClick={() => scrollTo('curation')}
            className="hover:text-accent-primary border-b border-transparent hover:border-accent-primary pb-1 w-max transition-colors text-left"
          >
            Explore Spaces →
          </button>
          <button
            onClick={() => scrollTo('location')}
            className="hover:text-accent-primary border-b border-transparent hover:border-accent-primary pb-1 w-max transition-colors text-left"
          >
            Location &amp; Access →
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-accent-primary border-b border-transparent hover:border-accent-primary pb-1 w-max transition-colors text-left"
          >
            FAQ &amp; Inquiries →
          </button>
          <a
            href="mailto:contact@worknshare.kr"
            className="hover:text-accent-primary border-b border-transparent hover:border-accent-primary pb-1 w-max transition-colors"
          >
            contact@worknshare.kr
          </a>
        </div>
      </div>

      {/* Credits & Legal */}
      <div className="grid grid-cols-12 gap-6 mt-10 font-sans text-xs text-paper/60 uppercase tracking-widest">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-1">
          <p className="font-bold text-paper/80">Work &amp; Share Inc.</p>
          <p>Daehak-ro, Jongno-gu, Seoul</p>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
          <button
            onClick={() => setTermsOpen(true)}
            className="hover:text-paper text-left w-max border-b border-paper/30 pb-0.5"
          >
            Terms of Service &amp; Privacy Policy
          </button>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right font-mono text-[11px] text-paper/50">
          <p>&copy; {new Date().getFullYear()} WORK &amp; SHARE. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      {/* Terms Modal */}
      {termsOpen &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setTermsOpen(false)}
            />

            <div className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-paper text-ink border border-ink p-8 md:p-12">
              <div className="flex items-center justify-between border-b border-ink pb-4 mb-6">
                <h3 className="font-serif text-2xl font-bold">
                  이용약관 및 개인정보 처리방침
                </h3>
                <button
                  onClick={() => setTermsOpen(false)}
                  aria-label="Close"
                  className="font-mono text-xs uppercase border border-ink px-3 py-1 hover:bg-ink hover:text-paper transition-colors"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="space-y-6 text-sm leading-relaxed text-ink/90 font-sans">
                <section className="border-b border-ink/20 pb-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent-primary mb-2 font-bold">
                    01 / 사전예약의 성격
                  </h4>
                  <p>
                    본 사이트를 통한 &quot;얼리버드 사전예약&quot;은 정식 계약이 아닌 입주 상담 신청입니다.
                    실제 이용 계약, 결제 및 구체적 수수료 정책은 정식 오픈 시점에 별도 안내됩니다.
                  </p>
                </section>

                <section className="border-b border-ink/20 pb-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent-primary mb-2 font-bold">
                    02 / 개인정보 수집 및 이용
                  </h4>
                  <p>사전예약 상담 배정 및 오픈 소식 안내를 위하여 최소한의 개인정보를 수집합니다.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 font-mono text-xs">
                    <li>수집 항목: 성명, 이메일 주소, 관심 공간 유형</li>
                    <li>보유 기간: 상담 배정 완료 시 또는 수집일로부터 1년 이내</li>
                  </ul>
                </section>

                <section className="pb-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent-primary mb-2 font-bold">
                    03 / 문의 및 접수
                  </h4>
                  <p>
                    개인정보 관련 권리 행사 및 일반 문의는 아래 메일로 접수해 주시기 바랍니다.
                    <br />
                    <span className="font-mono font-bold text-ink">contact@worknshare.kr</span>
                  </p>
                </section>
              </div>

              <div className="mt-8 pt-4 border-t border-ink flex justify-end">
                <button
                  onClick={() => setTermsOpen(false)}
                  className="font-mono text-xs uppercase bg-ink text-paper px-6 py-3 border border-ink hover:bg-accent-primary transition-colors"
                >
                  Confirm &amp; Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </footer>
  );
}