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

  const spaceLinks = [
    { label: '워킹룸', target: 'curation' },
    { label: '1인실', target: 'curation' },
    { label: '1.5인실', target: 'curation' },
    { label: '2인실', target: 'curation' },
    { label: '3인실', target: 'curation' },
    { label: '10-12인 미팅룸', target: 'curation' },
    { label: '다용도 라운지', target: 'curation' },
  ];

  const infoLinks = [
    { label: '요금 안내', target: 'curation' },
    { label: '오시는 길', target: 'location' },
  ];

  return (
    <footer className="bg-background-100 py-14 border-t border-background-200/30 text-foreground-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3 text-left">
            <div className="flex items-center gap-2">
              <img
                alt=""
                aria-hidden="true"
                className="h-8 w-auto object-contain"
                src="/logo-mark.png"
              />
              <img
                alt="WORK&SHARE"
                className="h-7 w-auto object-contain"
                src="https://storage.helloreaddy.io/project_files/df01f9da-e54f-4f02-86fd-548ac2df6d4c/61eb2397-913d-4efa-afb9-9946d70a5f1b_compressed_unnamed.webp"
              />
            </div>
            <p className="text-foreground-600 font-normal leading-relaxed max-w-sm">
              대학로의 창조적 에너지 속에서<br />
              당신의 비전이 현실이 되는 공간.
            </p>
            <p className="text-foreground-500">
              &copy; 2026 Work &amp; Share. All rights reserved.
            </p>
          </div>

          {/* Spaces */}
          <div className="md:col-span-3 space-y-2 text-left">
            <h4 className="font-heading text-xs font-semibold text-foreground-950 uppercase tracking-wider mb-3">
              공간
            </h4>
            <ul className="space-y-2">
              {spaceLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-foreground-700 hover:text-foreground-950 transition-all hover:translate-x-0.5 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-4 space-y-2 text-left">
            <h4 className="font-heading text-xs font-semibold text-foreground-950 uppercase tracking-wider mb-3">
              정보
            </h4>
            <ul className="space-y-2">
              {infoLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className="text-foreground-700 hover:text-foreground-950 transition-all hover:translate-x-0.5 text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo('faq')}
                  className="text-foreground-700 hover:text-foreground-950 transition-all hover:translate-x-0.5 text-left"
                >
                  자주 묻는 질문
                </button>
              </li>
              <li>
                <button
                  onClick={() => setTermsOpen(true)}
                  className="text-foreground-700 hover:text-foreground-950 transition-all hover:translate-x-0.5 text-left"
                >
                  이용 약관
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-background-200/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-foreground-500">
          <span>서울특별시 종로구 대학로 · 혜화역 도보 5분</span>
          <span>문의: contact@worknshare.kr</span>
        </div>
      </div>

      {termsOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-modal-backdrop"
            onClick={() => setTermsOpen(false)}
          />

          <div className="relative z-10 w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-3xl bg-background-100 border border-background-200/40 shadow-2xl animate-modal-panel p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-semibold text-foreground-950">
                이용약관 및 개인정보 처리방침 (요약)
              </h3>
              <button
                onClick={() => setTermsOpen(false)}
                aria-label="닫기"
                className="w-9 h-9 rounded-full bg-background-200/40 hover:bg-background-200/70 flex items-center justify-center text-foreground-700 transition-colors flex-shrink-0"
              >
                <i className="ri-close-line text-lg" />
              </button>
            </div>

            <div className="space-y-5 text-sm text-foreground-600 leading-relaxed">
              <section>
                <h4 className="font-heading text-sm font-semibold text-foreground-950 mb-1.5">
                  1. 사전예약의 성격
                </h4>
                <p>
                  본 사이트를 통한 &quot;얼리버드 사전예약&quot;은 정식 계약이 아닌 상담 및 안내 신청입니다.
                  실제 이용 계약, 결제, 이용 약관은 Work &amp; Share 정식 오픈 시점에 별도로 체결됩니다.
                </p>
              </section>

              <section>
                <h4 className="font-heading text-sm font-semibold text-foreground-950 mb-1.5">
                  2. 개인정보 수집 및 이용 목적
                </h4>
                <p>사전예약 상담, 오픈 일정 및 이벤트 안내를 위해 아래 정보를 수집합니다.</p>
                <ul className="list-disc list-inside mt-1.5 space-y-0.5">
                  <li>수집 항목: 이름, 연락처, 관심 공간</li>
                  <li>보유 및 이용 기간: 상담 완료 또는 정식 오픈 후 최대 1년 이내 파기</li>
                </ul>
              </section>

              <section>
                <h4 className="font-heading text-sm font-semibold text-foreground-950 mb-1.5">
                  3. 동의 거부 권리
                </h4>
                <p>
                  개인정보 수집·이용에 대한 동의를 거부하실 수 있으며, 이 경우 사전예약 상담 진행이
                  제한될 수 있습니다.
                </p>
              </section>

              <section>
                <h4 className="font-heading text-sm font-semibold text-foreground-950 mb-1.5">
                  4. 문의처
                </h4>
                <p>
                  개인정보 및 이용 관련 문의는{' '}
                  <a href="mailto:contact@worknshare.kr" className="text-primary-400 hover:underline">
                    contact@worknshare.kr
                  </a>
                  로 연락 주시기 바랍니다.
                </p>
              </section>

              <p className="text-[11px] text-foreground-500 pt-2 border-t border-background-200/30">
                본 요약본은 정식 오픈 전 사전예약 상담을 위한 안내이며, 세부 이용약관은 정식 오픈 시
                갱신·고지됩니다.
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </footer>
  );
}