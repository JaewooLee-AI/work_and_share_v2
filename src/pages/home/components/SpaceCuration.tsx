import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Reveal from './Reveal';

interface Room {
  id: string;
  group: 'private' | 'shared';
  tagEn: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  price: string;
  period: string;
  tags: string[];
  features: string[];
  featured?: boolean;
}

const rooms: Room[] = [
  {
    id: 'solo',
    group: 'private',
    tagEn: '1-Person Room',
    title: '1인실',
    description: '완벽한 차단, 깊어지는 몰입',
    image: 'https://work-and-share.vercel.app/img/photo-013.png',
    icon: 'ri-door-lock-line',
    price: '₩420,000',
    period: '/ 월 (고정 전용 룸)',
    tags: ['24시간 전용', '사업자주소'],
    features: ['1인 독립 전용 룸 24시간', '사업자 주소 등록 가능', '무제한 음료 제공', '회의실 월 8시간 제공', '우편물 수령 서비스'],
    featured: true,
  },
  {
    id: 'solo-plus',
    group: 'private',
    tagEn: '1.5-Person Room',
    title: '1.5인실',
    description: '1인실보다 여유롭게, 나만의 속도로',
    image: '/room-1.5-person.jpg',
    icon: 'ri-door-line',
    price: '₩550,000',
    period: '/ 월 (고정 전용 룸)',
    tags: ['24시간 전용', '사업자주소'],
    features: ['1.5인 독립 전용 룸 24시간', '사업자 주소 등록 가능', '무제한 음료 제공', '회의실 월 10시간 제공', '우편물 수령 서비스'],
  },
  {
    id: 'duo',
    group: 'private',
    tagEn: '2-Person Room',
    title: '2인실',
    description: '둘이 함께, 두 배의 시너지',
    image: 'https://work-and-share.vercel.app/img/photo-015.png',
    icon: 'ri-door-open-line',
    price: '₩680,000',
    period: '/ 월 (2인 기준)',
    tags: ['24시간 전용', '사물함 2개'],
    features: ['2인 독립 전용 룸 24시간', '사업자 주소 등록 가능', '무제한 음료 제공', '회의실 월 12시간 제공', '전용 사물함 2개', '우편물·택배 수령'],
  },
  {
    id: 'trio',
    group: 'private',
    tagEn: '3-Person Room',
    title: '3인실',
    description: '소규모 팀을 위한 완벽한 독립 공간',
    image: 'https://work-and-share.vercel.app/img/photo-014.png',
    icon: 'ri-team-line',
    price: '₩890,000',
    period: '/ 월 (3인 기준)',
    tags: ['24시간 전용', '사물함 3개'],
    features: ['3인 독립 전용 룸 24시간', '법인 주소 등록 지원', '무제한 음료 제공', '회의실 월 20시간 제공', '전용 사물함 3개', '우편물·택배 수령'],
  },
  {
    id: 'working-room',
    group: 'shared',
    tagEn: 'Working Room',
    title: '워킹룸',
    description: '빠른 인터넷과 넓은 책상이 제공되는 고정 좌석 오픈 오피스',
    image: 'https://work-and-share.vercel.app/img/photo-001.png',
    icon: 'ri-computer-line',
    price: '₩190,000',
    period: '/ 월 (고정 좌석)',
    tags: ['고속 인터넷', '고정 좌석'],
    features: ['고정 좌석 오픈 데스크', '무제한 음료 제공', '고속 인터넷', '회의실 월 2시간 제공', '프린터 이용'],
  },
  {
    id: 'meeting-room',
    group: 'shared',
    tagEn: 'Meeting Room',
    title: '10-12인 미팅룸',
    description: '대규모 회의와 워크숍을 위한 넉넉한 공간',
    image: 'https://work-and-share.vercel.app/img/photo-005.png',
    icon: 'ri-presentation-line',
    price: '₩50,000',
    period: '/ 시간 (10-12인)',
    tags: ['4K 화상회의', '시간 단위'],
    features: ['10-12인 대형 테이블', '4K 스크린 & 화상회의 장비', '화이트보드 제공', '무제한 음료 제공', '시간 단위 예약'],
  },
  {
    id: 'lounge',
    group: 'shared',
    tagEn: 'Multi Lounge',
    title: '다용도 라운지',
    description: '휴식과 네트워킹이 공존하는 자유로운 공간',
    image: 'https://work-and-share.vercel.app/img/photo-007.png',
    icon: 'ri-sofa-line',
    price: '무료',
    period: '회원 전용 무제한 이용',
    tags: ['무제한 이용', '네트워킹'],
    features: ['라운지 자유 이용', '무제한 음료 제공', '네트워킹 이벤트 공간', '휴식 및 미팅 공간 겸용'],
  },
];

function ctaLabel(title: string) {
  return title === '3인실' || title === '10-12인 미팅룸' ? '문의하기' : '사전 예약하기';
}

export default function SpaceCuration() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selected]);

  const handleReserve = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    setSelected(null);
    const el = document.getElementById('cta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const active = selected !== null ? rooms[selected] : null;
  const privateRooms = rooms.map((room, i) => ({ room, i })).filter(({ room }) => room.group === 'private');
  const sharedRooms = rooms.map((room, i) => ({ room, i })).filter(({ room }) => room.group === 'shared');

  const renderCard = ({ room, i }: { room: Room; i: number }) => (
    <button
      key={room.id}
      onClick={() => setSelected(i)}
      className="group text-left rounded-2xl overflow-hidden bg-background-100 border border-background-200/30 hover:border-primary-500/40 hover:-translate-y-1 transition-all duration-300 shadow-none hover:shadow-xl hover:shadow-black/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          alt={room.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          src={room.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-[10px] border border-white/10">
          {room.tagEn}
        </span>

        {room.featured && (
          <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-accent-500 text-background-50 text-[10px] font-semibold uppercase tracking-wider shadow-lg">
            BEST
          </span>
        )}

        <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <i className="ri-zoom-in-line text-sm" />
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <i className={`${room.icon} text-primary-400 text-sm`} />
          <h3 className="font-heading text-sm font-semibold text-foreground-950">
            {room.title}
          </h3>
        </div>
        <p className="text-foreground-600 text-xs leading-relaxed mb-2.5 line-clamp-2">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {room.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400 text-[10px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between pt-3 border-t border-background-200/30">
          <div>
            <div className="font-heading text-lg font-bold text-foreground-950 tracking-tight leading-none">
              {room.price}
            </div>
            <div className="text-foreground-500 text-[10px] mt-1">{room.period}</div>
          </div>
          <span className="flex items-center gap-0.5 text-primary-400 text-[11px] font-medium">
            자세히
            <i className="ri-arrow-right-s-line text-sm" />
          </span>
        </div>
      </div>
    </button>
  );

  return (
    <section id="curation" className="relative z-10 bg-background-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mb-10">
          <span className="text-primary-500 text-xs font-mono font-semibold tracking-widest uppercase block mb-3">
            OUR SPACES
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-foreground-950">
            영감이 깃든<br />모든 공간
          </h2>
          <p className="text-foreground-600 text-sm font-normal max-w-md leading-relaxed break-keep mt-3">
            일하는 방식이 다양하듯, Work &amp; Share의 공간도 다양합니다. 사진 아래 요금까지 한눈에 확인하고, 카드를 눌러 자세히 살펴보세요.
          </p>
        </Reveal>

        {/* Private rooms */}
        <Reveal delay={100} className="flex items-center gap-3 mb-4">
          <h3 className="font-heading text-xs font-semibold text-foreground-500 uppercase tracking-wider whitespace-nowrap">
            전용 룸
          </h3>
          <span className="h-px flex-1 bg-background-200/40" />
        </Reveal>
        <Reveal delay={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {privateRooms.map(renderCard)}
        </Reveal>

        {/* Shared spaces */}
        <Reveal delay={150} className="flex items-center gap-3 mb-4">
          <h3 className="font-heading text-xs font-semibold text-foreground-500 uppercase tracking-wider whitespace-nowrap">
            공용 공간
          </h3>
          <span className="h-px flex-1 bg-background-200/40" />
        </Reveal>
        <Reveal delay={150} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sharedRooms.map(renderCard)}
        </Reveal>

        <p className="text-foreground-500 text-[11px] text-center mt-8">
          * 얼리버드 혜택은 정식 오픈 전 사전 예약자에 한합니다. 요금은 정식 오픈 시 변경될 수 있습니다.
        </p>
      </div>

      {/* Detail modal */}
      {active && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-modal-backdrop"
            onClick={() => setSelected(null)}
          />

          <div className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-background-100 border border-background-200/40 shadow-2xl animate-modal-panel">
            <button
              onClick={() => setSelected(null)}
              aria-label="닫기"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-colors"
            >
              <i className="ri-close-line text-lg" />
            </button>

            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                alt={active.title}
                className="w-full h-full object-cover object-top"
                src={active.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-100 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium text-[11px] border border-white/10">
                {active.tagEn}
              </span>
              {active.featured && (
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-accent-500 text-background-50 text-[10px] font-semibold uppercase tracking-wider shadow-lg">
                  BEST
                </span>
              )}
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <i className={`${active.icon} text-primary-400 text-base`} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground-950">
                  {active.title}
                </h3>
              </div>
              <p className="text-foreground-600 text-sm leading-relaxed mb-5">
                {active.description}
              </p>

              <div className="flex items-end justify-between mb-5 pb-5 border-b border-background-200/30">
                <div>
                  <div className="font-heading text-3xl font-bold text-foreground-950 tracking-tight">
                    {active.price}
                  </div>
                  <div className="text-foreground-500 text-xs mt-1">{active.period}</div>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground-700">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center text-primary-500 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleReserve}
                className="w-full py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-all"
              >
                {ctaLabel(active.title)}
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
