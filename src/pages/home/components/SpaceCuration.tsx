import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PricePlan {
  months: number;
  price: string;
}

interface Room {
  id: string;
  group: 'private' | 'shared' | 'floor2';
  tagEn: string;
  title: string;
  description: string;
  image: string;
  price: string;
  period: string;
  plans?: PricePlan[];
  tags: string[];
  features: string[];
  featured?: boolean;
  eyebrow?: string;
}

const rooms: Room[] = [
  {
    id: 'solo',
    group: 'private',
    tagEn: '01 / PRIVATE STUDIO',
    title: '1인실 프라이빗 스튜디오',
    description: '방해받지 않는 완벽한 몰입을 위한 전용 공간. 노출 콘크리트와 월넛 우드의 조화.',
    image: '/img/photo-013.png',
    price: '₩300,000',
    period: '/ 월 (고정 전용 룸)',
    plans: [
      { months: 3, price: '₩350,000' },
      { months: 6, price: '₩300,000' },
    ],
    tags: ['24시간 전용', '사업자주소'],
    features: ['1인 독립 전용 룸 24시간 이용', '사업자 주소 등록 가능', '무제한 고급 커피 & 음료', '회의실 월 8시간 무료 제공', '우편물 수령 서비스'],
    featured: true,
  },
  {
    id: 'solo-plus',
    group: 'private',
    tagEn: '02 / STUDIO PLUS',
    title: '1.5인실 에디토리얼 스튜디오',
    description: '1인실보다 여유로운 스페이스. 개인 장비와 보관함을 넉넉하게 배정받는 몰입 공간.',
    image: '/room-1.5-person.jpg',
    price: '₩350,000',
    period: '/ 월 (고정 전용 룸)',
    plans: [
      { months: 3, price: '₩400,000' },
      { months: 6, price: '₩350,000' },
    ],
    tags: ['24시간 전용', '넓은 수납 공간'],
    features: ['1.5인 독립 전용 룸 24시간', '사업자 주소 등록 가능', '무제한 음료 서비스', '회의실 월 10시간 제공', '우편물 수령 서비스'],
  },
  {
    id: 'duo',
    group: 'private',
    tagEn: '03 / DUO STUDIO',
    title: '2인실 팀 스튜디오',
    description: '파트너와 함께 협업하며 시너지를 만들어 내는 소규모 데스크 오피스.',
    image: '/img/photo-015.png',
    price: '₩450,000',
    period: '/ 월 (2인 기준)',
    plans: [
      { months: 3, price: '₩500,000' },
      { months: 6, price: '₩450,000' },
    ],
    tags: ['24시간 전용', '사물함 2개'],
    features: ['2인 독립 전용 룸 24시간', '사업자 주소 등록 지원', '무제한 음료 제공', '회의실 월 12시간 제공', '전용 사물함 2개'],
  },
  {
    id: 'trio',
    group: 'private',
    tagEn: '04 / TRIO STUDIO',
    title: '3인실 이그제큐티브 스튜디오',
    description: '소규모 스타트업 및 창작 팀을 위한 독립적인 3인 프로젝트 룸.',
    image: '/img/photo-014.png',
    price: '₩600,000',
    period: '/ 월 (3인 기준)',
    plans: [
      { months: 3, price: '₩650,000' },
      { months: 6, price: '₩600,000' },
    ],
    tags: ['24시간 전용', '법인 주소 등록'],
    features: ['3인 독립 전용 룸 24시간', '법인 주소 등록 가능', '무제한 음료 서비스', '회의실 월 20시간 제공', '전용 사물함 3개'],
  },
  {
    id: 'glass-booth',
    group: 'floor2',
    tagEn: '05 / GLASS BOOTH',
    title: '2층 1인 유리부스',
    description: '독립된 통유리 도어로 시각적 개방감과 음향 차단을 동시에 확보한 1인 전용 부스.',
    image: '/img/photo-019.png',
    price: '₩220,000',
    period: '/ 월 (2층 전용 부스)',
    plans: [
      { months: 3, price: '₩250,000' },
      { months: 6, price: '₩220,000' },
    ],
    tags: ['2층 전용', '통유리 밀폐'],
    features: ['통유리 1인 밀폐 전용 부스 24시간', '사업자 주소 등록 지원', '무제한 음료 라운지 이용', '회의실 월 8시간 제공'],
  },
  {
    id: 'open-seat',
    group: 'floor2',
    tagEn: '06 / OPEN SEAT',
    title: '2층 도서관형 오픈 좌석',
    description: '자유롭게 좌석을 선택하며 라이브러리 분위기에서 정숙하게 몰입하는 비고정 데스크.',
    image: '/img/photo-020.png',
    price: '₩150,000',
    period: '/ 월 (2층 비고정석)',
    tags: ['2층 전용', '비고정석'],
    features: ['2층 도서관형 오픈 좌석 자유 이용', '고속 유무선 Wi-Fi', '무제한 음료 바 제공', '초고속 복합기 이용'],
  },
  {
    id: 'meeting-room',
    group: 'shared',
    tagEn: '07 / CONFERENCE',
    title: '10-12인 컨퍼런스 미팅룸',
    description: '4K 스크린과 화상회의 시스템이 갖춰진 전문 미팅 & 프레젠테이션 공간.',
    image: '/img/photo-005.png',
    price: '₩50,000',
    period: '/ 시간 (10-12인)',
    tags: ['4K 스크린', '시간 단위 예약'],
    features: ['10-12인 대형 대리석 테이블', '4K 화상회의 카메라 & 마이크', '대형 화이트보드 제공', '무제한 음료 바 이용'],
  },
  {
    id: 'lounge',
    group: 'shared',
    tagEn: '08 / MULTI LOUNGE',
    title: '커뮤니티 멀티 라운지',
    description: '휴식과 우연한 아이디어 교류가 이루어지는 에이스 호텔 스타일 커뮤니티 공간.',
    image: '/img/photo-007.png',
    price: 'MEMBERS ONLY',
    period: '멤버십 전용 무제한',
    tags: ['무제한 이용', '음료 바'],
    features: ['멤버십 회원 무제한 이용', '스페셜티 원두 커스텀 에스프레소', '인더스트리얼 인테리어 라운지', '네트워킹 파티 장소'],
  },
];

export default function SpaceCuration() {
  const [selected, setSelected] = useState<Room | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'private' | 'shared' | 'floor2'>('all');

  useEffect(() => {
    if (!selected) return;

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

  const filteredRooms = rooms.filter((r) => activeTab === 'all' || r.group === activeTab);

  const scrollToCTA = () => {
    setSelected(null);
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="curation" className="border-b border-ink bg-paper">
      {/* Chapter Header */}
      <div className="border-b border-ink px-6 md:px-12 py-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold block mb-3">
            02 / SPACES &amp; CURATION
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-ink">
            Our Spaces
          </h2>
          <p className="font-mono text-xs md:text-sm uppercase mt-4 text-accent-primary tracking-widest font-bold">
            Designed for deep focus and brutal creativity.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-widest font-bold">
          {[
            { id: 'all', label: 'All Spaces' },
            { id: 'private', label: 'Private Studio' },
            { id: 'floor2', label: '2F Booth & Open' },
            { id: 'shared', label: 'Shared & Lounge' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 border border-ink transition-colors ${
                activeTab === tab.id
                  ? 'bg-ink text-paper'
                  : 'bg-paper text-ink hover:bg-paperHover'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Editorial Asymmetric Block 01: Private Studio (8:4 Split) */}
      <div className="grid grid-cols-12 border-b border-ink">
        <div className="col-span-12 md:col-span-8 border-b md:border-b-0 md:border-r border-ink h-[45vh] md:h-[65vh] relative overflow-hidden bg-ink">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80"
            alt="Private Studio Office"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
            onClick={() => setSelected(rooms[0])}
          />
          <div className="absolute top-6 left-6 bg-paper px-4 py-2 border border-ink">
            <span className="font-mono text-xs text-ink uppercase tracking-widest font-bold">
              FEATURED / 01 PRIVATE STUDIO
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 p-8 md:p-12 flex flex-col justify-between bg-paper">
          <div>
            <span className="font-mono text-accent-primary text-xs uppercase border border-accent-primary px-3 py-1 mb-6 inline-block tracking-widest font-bold">
              01 / Private Studio
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
              Studio <br /> Offices
            </h3>
            <p className="mt-6 font-sans text-ink/80 leading-relaxed text-sm md:text-base break-keep">
              방해받지 않는 완벽한 몰입을 위한 프라이빗 오피스. 거친 질감의 노출 콘크리트 벽면과
              따뜻한 월넛 우드 데스크가 극적인 대조를 이루며 안정적인 비즈니스 기반을 지원합니다.
            </p>
          </div>
          <div className="mt-12 pt-6 border-t border-ink">
            <button
              onClick={() => setSelected(rooms[0])}
              className="text-left font-mono uppercase text-xs border-b-2 border-ink pb-2 hover:text-accent-primary hover:border-accent-primary transition-colors tracking-widest font-bold"
            >
              Explore Studio Specifications →
            </button>
          </div>
        </div>
      </div>

      {/* Featured Editorial Asymmetric Block 02: Communal Desks (5:7 Split - Alternating) */}
      <div className="grid grid-cols-12 border-b border-ink">
        <div className="col-span-12 md:col-span-5 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-ink order-2 md:order-1 bg-paper">
          <div>
            <span className="font-mono text-accent-secondary text-xs uppercase border border-accent-secondary px-3 py-1 mb-6 inline-block tracking-widest font-bold">
              02 / Communal Space
            </span>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink leading-tight">
              Communal <br /> Desks
            </h3>
            <p className="mt-6 font-sans text-ink/80 leading-relaxed text-sm md:text-base break-keep">
              우연한 마주침이 새로운 영감을 만들어냅니다. 원목 테이블과 인더스트리얼 조명이
              어우러진 라운지에서, 매일 자유롭게 자리를 선택하고 커뮤니티와 밀도 있게 교류하세요.
            </p>
          </div>
          <div className="mt-12 pt-6 border-t border-ink">
            <button
              onClick={() => setSelected(rooms[5])}
              className="text-left font-mono uppercase text-xs border-b-2 border-ink pb-2 hover:text-accent-secondary hover:border-accent-secondary transition-colors tracking-widest font-bold"
            >
              Join the Communal Workspace →
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 h-[45vh] md:h-[65vh] order-1 md:order-2 relative overflow-hidden bg-ink">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80"
            alt="Communal Desks"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
            onClick={() => setSelected(rooms[5])}
          />
          <div className="absolute bottom-6 left-6 bg-paper px-4 py-2 border border-ink z-10">
            <span className="font-mono text-xs text-ink uppercase tracking-widest font-bold">
              Fig 2. Communal Lounge
            </span>
          </div>
        </div>
      </div>

      {/* Grid of All Spaces */}
      <div className="px-6 md:px-12 py-16 bg-paper">
        <h3 className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold mb-8">
          Complete Space Index ({filteredRooms.length})
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-paper hover:bg-[#efece6] p-5 md:p-7 flex flex-col justify-between group hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer relative"
              onClick={() => setSelected(room)}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-ink mb-4 group-hover:-translate-y-1 group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-500">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-paper px-3 py-1 border border-ink/20 shadow-sm">
                    <span className="font-mono text-[10px] text-ink uppercase tracking-widest font-bold">
                      {room.tagEn}
                    </span>
                  </div>
                </div>

                <div className="bg-transparent group-hover:bg-white p-6 group-hover:-translate-y-2 group-hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)] border border-transparent group-hover:border-ink/10 transition-all duration-300 ease-out">
                  <h4 className="font-sans text-2xl font-bold text-ink mb-2 group-hover:text-accent-primary transition-colors">
                    {room.title}
                  </h4>
                  <p className="font-sans text-xs text-ink/75 leading-relaxed mb-4">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {room.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase border border-ink/20 px-2 py-0.5 text-ink/80 bg-paper"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 px-4 py-3 border-t border-ink/10 bg-paper group-hover:bg-white transition-all duration-300 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
                <div>
                  <span className="font-bold text-ink text-sm">{room.price}</span>
                  <span className="text-[10px] text-ink/60 block">{room.period}</span>
                </div>
                <span className="group-hover:text-accent-primary font-bold group-hover:underline transition-all">
                  EXPLORE DETAILS →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      {selected &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-paper text-ink border border-ink p-8 md:p-12">
              <div className="flex justify-between items-start border-b border-ink pb-6 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-accent-primary font-bold block mb-2">
                    {selected.tagEn}
                  </span>
                  <h3 className="font-sans text-3xl md:text-4xl font-bold text-ink">
                    {selected.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="font-mono text-xs uppercase border border-ink px-4 py-2 hover:bg-ink hover:text-paper transition-colors font-bold"
                >
                  Close [ESC]
                </button>
              </div>

              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-6 border border-ink overflow-hidden bg-ink h-64 md:h-auto">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-12 md:col-span-6 flex flex-col justify-between">
                  <div>
                    <p className="font-sans text-sm text-ink/80 leading-relaxed mb-6">
                      {selected.description}
                    </p>

                    <h4 className="font-mono text-xs uppercase tracking-widest text-accent-secondary font-bold mb-3 border-b border-ink/30 pb-1">
                      Included Amenities &amp; Services
                    </h4>
                    <ul className="space-y-2 font-sans text-xs text-ink/90 mb-6">
                      {selected.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="font-mono text-accent-primary font-bold">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-ink pt-4">
                    <div className="font-mono text-sm font-bold text-ink mb-1">
                      {selected.price} <span className="text-xs font-normal text-ink/70">{selected.period}</span>
                    </div>
                    <button
                      onClick={scrollToCTA}
                      className="w-full mt-4 font-mono text-xs uppercase bg-ink text-paper py-4 border border-ink hover:bg-accent-primary transition-colors font-bold tracking-widest text-center"
                    >
                      Book Tour for {selected.title}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
