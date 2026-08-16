import { useState } from 'react';
import Reveal from './Reveal';

const faqs = [
  {
    q: '얼리버드 사전예약은 어떻게 진행되나요?',
    a: '하단 사전예약 폼에 이름, 연락처, 관심 공간을 남겨주시면 담당자가 영업일 기준 24시간 이내 연락드립니다. 정식 계약과 결제는 2026년 오픈 이후 순차 진행됩니다.',
  },
  {
    q: '최소 계약 기간이 있나요?',
    a: '1인실 · 1.5인실 · 2인실 · 3인실은 1개월 단위로 계약할 수 있으며, 3개월 이상 장기 이용 시 별도 할인이 적용됩니다. 워킹룸은 월 단위 고정 좌석, 10-12인 미팅룸은 시간 단위로 예약합니다.',
  },
  {
    q: '사업자 주소지로 등록할 수 있나요?',
    a: '1인실 이상 전용 룸을 이용하시면 사업자 주소 등록과 우편물·택배 수령 서비스를 제공합니다. 워킹룸 이용자의 주소 등록은 별도 문의 바랍니다.',
  },
  {
    q: '정확한 위치와 오픈일은 언제 공개되나요?',
    a: '2026년 대학로에 그랜드 오픈 예정이며, 정확한 건물 주소와 오픈 일정은 얼리버드 예약자에게 가장 먼저 안내드립니다.',
  },
  {
    q: '공간 투어(견학)가 가능한가요?',
    a: '정식 오픈 전까지는 온라인 상담을 우선 진행하고 있으며, 오픈이 가까워지면 사전예약자를 대상으로 현장 투어 일정을 순차 안내드립니다.',
  },
  {
    q: '반려동물과 함께 이용할 수 있나요?',
    a: '다른 회원분들의 쾌적한 업무 환경을 위해 공용 공간 내 반려동물 동반은 제한됩니다. 관련 정책은 정식 오픈 시 별도 안내 예정입니다.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 relative z-10 bg-background-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <span className="text-primary-500 text-xs font-mono font-semibold tracking-widest uppercase block mb-3">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground-950 tracking-tight">
            자주 묻는 질문
          </h2>
        </Reveal>

        <Reveal delay={100} className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-2xl bg-background-50 border border-background-200/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm sm:text-base font-semibold text-foreground-950">
                    {item.q}
                  </span>
                  <i
                    className={`ri-add-line text-primary-400 text-lg flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-foreground-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
