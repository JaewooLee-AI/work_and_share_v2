import { useState } from 'react';
import Reveal from './Reveal';

const faqs = [
  {
    num: 'Q01',
    q: '얼리버드 사전예약은 어떻게 진행되나요?',
    a: '하단 사전예약 폼에 이름, 연락처, 관심 공간을 남겨주시면 담당 커뮤니티 매니저가 24시간 이내 연락을 드립니다. 사전예약자 전용 할인 혜택과 우선 현장 투어권이 배정됩니다.',
  },
  {
    num: 'Q02',
    q: '최소 계약 기간 및 할인 정책은 어떻게 되나요?',
    a: '프라이빗 오피스 및 독립 부스는 최소 1개월 단위 계약이 가능하며, 3개월/6개월 장기 계약 시 전용 할인이 적용됩니다. 미팅룸은 시간 단위 예약이 가능합니다.',
  },
  {
    num: 'Q03',
    q: '사업자 주소지 등록 및 법인 설립이 가능한가요?',
    a: '1인실 이상 전용 룸 멤버십 이용 시 사업자 주소지 등록과 우편물·택배 수령 서비스가 기본 제공됩니다. 법인 설립 등록 서류 지원도 포함됩니다.',
  },
  {
    num: 'Q04',
    q: '정확한 주소와 정식 오픈 일정은 언제 공개되나요?',
    a: '2026년 대학로 그랜드 오픈 예정이며, 계약 진행 및 정확한 상세 주소는 사전예약 등록 순서에 따라 커뮤니티 매니저가 직접 안내드립니다.',
  },
  {
    num: 'Q05',
    q: '사전 공간 투어(견학)가 가능한가요?',
    a: '정식 오픈 전까지는 1:1 온라인 및 전화 상담을 진행하며, 오픈 직전 사전예약자 한정 현장 프리뷰 투어 행사에 초청해 드립니다.',
  },
  {
    num: 'Q06',
    q: '라운지 이용 시간과 보안 시스템은 어떻게 유지되나요?',
    a: '회원은 스마트폰 app 및 암호화 출입 시스템을 통해 365일 24시간 언제든 자유롭게 출입 가능합니다.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-ink bg-paper py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-14 border-b border-ink pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold block mb-3">
            06 / FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Questions &amp; Answers
          </h2>
          <p className="font-sans text-ink/70 text-base mt-3 leading-relaxed">
            입주 절차, 계약 조건 및 시설 이용에 대해 자주 묻는 질문을 모았습니다.
          </p>
        </Reveal>

        <Reveal delay={100} className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.num}
                className="border border-ink bg-paper transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-6 hover:bg-ink/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-accent-primary font-bold">
                      {item.num}
                    </span>
                    <span className="font-serif text-lg font-bold text-ink">
                      {item.q}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-ink border border-ink px-2 py-0.5">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-ink/20 font-sans text-sm text-ink/80 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
