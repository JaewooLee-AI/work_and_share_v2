import { useState } from 'react';
import Reveal from './Reveal';

export default function CTASection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = (formData.get('phone_alt') as string || '').trim();
    if (honeypot) {
      setStatus('success');
      form.reset();
      return;
    }

    try {
      const res = await fetch('https://readdy.ai/api/form/d9t564p4ne17ei0sdqj0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      const text = await res.text();
      let parsed: any;
      try { parsed = JSON.parse(text); } catch { parsed = null; }
      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || text;
      const isSpam = typeof serverMsg === 'string' && serverMsg.includes('spam');

      if (res.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg((typeof serverMsg === 'string' ? serverMsg : '') || '오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  if (status === 'success') {
    return (
      <section id="cta" className="py-20 md:py-28 relative overflow-hidden bg-background-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line w-8 h-8 flex items-center justify-center" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold text-foreground-950 tracking-tight mb-4">
            신청이 완료되었습니다!
          </h2>
          <p className="text-foreground-600 text-base font-normal max-w-xl mx-auto leading-relaxed mb-8">
            빠르게 연락드려 사전 투어 일정을 안내해 드리겠습니다.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-secondary px-6 py-3 text-sm font-medium"
          >
            추가 신청하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden bg-background-50 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="relative rounded-3xl overflow-hidden border border-primary-500/20 shadow-2xl shadow-primary-500/10">
          <div className="absolute inset-0">
            <img
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              src="https://work-and-share.vercel.app/img/photo-007.png"
              style={{ objectPosition: '50% 55%' }}
            />
            <div className="absolute inset-0 bg-background-50/92" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/80 to-background-50/60" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-semibold mb-6">
              <i className="ri-fire-line text-sm" />
              정식 오픈 전 사전예약 한정 혜택
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground-950 tracking-tight leading-[1.1] mb-6">
              첫 달 50% 할인,
              <br />지금 사전 예약하세요
            </h2>

            <p className="text-foreground-600 text-sm sm:text-base font-normal max-w-md mx-auto leading-relaxed mb-10">
              Work &amp; Share의 얼리버드 멤버가 되어
              <br />
              대학로 최고의 프리미엄 공간을 가장 먼저 경험하세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <button
                onClick={() => {
                  const form = document.getElementById('reserve-form');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-9 py-4 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold transition-all whitespace-nowrap shadow-lg shadow-primary-500/30 flex items-center gap-2"
              >
                얼리버드 사전 예약
                <i className="ri-arrow-right-line text-base group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="tel:02-765-2702"
                className="px-7 py-4 rounded-full bg-background-100 hover:bg-background-200 border border-background-200/30 text-foreground-950 text-sm font-medium transition-all whitespace-nowrap"
              >
                전화 문의
              </a>
            </div>

            <p className="text-foreground-500 text-xs">
              약속 없이 간편하게 · 응답까지 24시간 이내
            </p>

            {/* Inline form */}
            <form
          id="reserve-form"
          onSubmit={handleSubmit}
          data-readdy-form
          className="mt-12 max-w-md mx-auto space-y-3 text-left"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="이름 *"
            className="w-full px-5 py-3 rounded-xl bg-background-100 border border-background-200/30 text-sm text-foreground-950 placeholder:text-foreground-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-all"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="연락처 *"
            className="w-full px-5 py-3 rounded-xl bg-background-100 border border-background-200/30 text-sm text-foreground-950 placeholder:text-foreground-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-all"
          />
          <select
            name="space_type"
            required
            className="w-full px-5 py-3 rounded-xl bg-background-100 border border-background-200/30 text-sm text-foreground-950 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30 transition-all appearance-none"
            defaultValue=""
          >
            <option value="" disabled>관심 공간 *</option>
            <option value="working-room">워킹룸</option>
            <option value="solo">1인실</option>
            <option value="solo-plus">1.5인실</option>
            <option value="duo">2인실</option>
            <option value="trio">3인실</option>
            <option value="meeting-room">10-12인 미팅룸</option>
            <option value="lounge">다용도 라운지</option>
          </select>
          <input
            type="text"
            name="phone_alt"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
            className="hp-field"
          />

          {status === 'error' && (
            <p className="text-red-400 text-xs">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-all"
          >
            사전 예약 신청하기
          </button>
        </form>

            <p className="text-foreground-500 text-[11px] mt-4">
              수집된 정보는 예약 확인 및 안내 목적으로만 사용됩니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}